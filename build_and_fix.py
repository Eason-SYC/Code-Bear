import subprocess
import os
import sys
import shutil

def run_command(command, cwd, error_message):
    """Runs a shell command and checks for errors."""
    try:
        result = subprocess.run(command, cwd=cwd, check=True, shell=True, capture_output=True, encoding='utf-8')
        print(f"Command '{command}' successful in {cwd}")
        print(result.stdout)
        return True
    except subprocess.CalledProcessError as e:
        print(f"Error: {error_message}")
        print(f"Command: {e.cmd}")
        print(f"Return Code: {e.returncode}")
        print(f"Stdout: {e.stdout}")
        print(f"Stderr: {e.stderr}")
        return False
    except FileNotFoundError:
        print(f"Error: Command '{command.split()[0]}' not found. Make sure it's installed and in your PATH.")
        return False

def fix_typescript_imports(file_path):
    """Removes 'import React from 'react';' from a given file."""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            lines = f.readlines()
        
        new_lines = [line for line in lines if "import React from 'react';" not in line]
        
        with open(file_path, 'w', encoding='utf-8') as f:
            f.writelines(new_lines)
        print(f"Fixed TypeScript import in {file_path}")
        return True
    except Exception as e:
        print(f"Error fixing TypeScript import in {file_path}: {e}")
        return False

def main():
    script_dir = os.path.dirname(os.path.abspath(__file__))
    root_dir = script_dir # The root of the git repository
    studio_website_path = os.path.join(script_dir, 'studio-website')
    dist_path = os.path.join(studio_website_path, 'dist')

    if not os.path.isdir(studio_website_path):
        print(f"Error: 'studio-website' directory not found at {studio_website_path}")
        sys.exit(1)

    print("Starting build automation script...")

    # Step 1: Install dependencies
    print("\n--- Installing dependencies ---")
    if not run_command("npm install", studio_website_path, "Failed to install npm dependencies."):
        sys.exit(1)

    # Step 2: Fix TypeScript errors
    print("\n--- Fixing TypeScript imports ---")
    files_to_fix = [
        os.path.join(studio_website_path, 'src', 'pages', 'Boards.tsx'),
        os.path.join(studio_website_path, 'src', 'pages', 'DevTools.tsx'),
        os.path.join(studio_website_path, 'src', 'pages', 'ProductProjects.tsx'),
        os.path.join(studio_website_path, 'src', 'pages', 'Support.tsx'),
    ]
    
    for file_path in files_to_fix:
        if not fix_typescript_imports(file_path):
            sys.exit(1)

    # Step 3: Build the project
    print("\n--- Building the project ---")
    if not run_command("npm run build", studio_website_path, "Failed to build the project."):
        sys.exit(1)

    # Step 4: Copy dist contents to root for manual GitHub upload
    print("\n--- Copying built files to root directory ---")
    try:
        # Clean up existing root files that would be replaced by dist content
        for item in os.listdir(root_dir):
            item_path = os.path.join(root_dir, item)
            if item == 'index.html' or item == 'vite.svg' or item == 'assets':
                if os.path.isfile(item_path):
                    os.remove(item_path)
                    print(f"Removed existing file: {item_path}")
                elif os.path.isdir(item_path):
                    shutil.rmtree(item_path)
                    print(f"Removed existing directory: {item_path}")
        
        # Copy contents of dist to root
        for item in os.listdir(dist_path):
            s = os.path.join(dist_path, item)
            d = os.path.join(root_dir, item)
            if os.path.isdir(s):
                shutil.copytree(s, d, dirs_exist_ok=True)
                print(f"Copied directory: {s} to {d}")
            else:
                shutil.copy2(s, d)
                print(f"Copied file: {s} to {d}")
        print("Successfully copied built files to the root directory.")
    except Exception as e:
        print(f"Error copying built files to root: {e}")
        sys.exit(1)

    print("\n--- Build and preparation completed successfully! ---")
    print("The latest built website files are now in the root directory.")
    print("You can now manually commit these changes and upload them to GitHub.")

if __name__ == "__main__":
    main()
