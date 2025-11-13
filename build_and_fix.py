import subprocess
import os
import sys

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
    studio_website_path = os.path.join(script_dir, 'studio-website')

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

    print("\n--- Build process completed successfully! ---")
    print("You can now manually upload the 'studio-website/dist' folder to GitHub.")

if __name__ == "__main__":
    main()
