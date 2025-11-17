import os
import subprocess
import shutil
import sys

def main():
    """
    This script automates the build and deployment process for the studio-website project.
    It performs the following steps:
    1. Defines all necessary paths based on the script's location.
    2. Changes the working directory to 'studio-website'.
    3. Runs 'npm install' to ensure all dependencies are present.
    4. Runs 'npm run build' to compile the project.
    5. If the build is successful, it copies the contents of the 'dist' folder
       to the project root directory, overwriting existing files.
    """
    try:
        # --- 1. Define Paths ---
        # The project root is the directory where the script is located.
        project_root = os.path.dirname(os.path.abspath(__file__))
        studio_website_path = os.path.join(project_root, 'studio-website')
        dist_path = os.path.join(studio_website_path, 'dist')

        print("--- Starting Automation Script ---")
        print(f"Project Root: {project_root}")
        print(f"Website Source: {studio_website_path}")
        print("-" * 30)

        # --- 2. Install Dependencies ---
        print("Step 1/3: Installing dependencies (npm install)...")
        # Using shell=True is often necessary for npm on Windows
        install_process = subprocess.run('npm install', cwd=studio_website_path, shell=True, check=True, capture_output=True, text=True)
        print(install_process.stdout)
        print("Dependencies are up to date.")
        print("-" * 30)

        # --- 3. Build Project ---
        print("Step 2/3: Building the project (npm run build)...")
        build_process = subprocess.run('npm run build', cwd=studio_website_path, shell=True, check=True, capture_output=True, text=True)
        print(build_process.stdout)
        print("Project built successfully.")
        print("-" * 30)

        # --- 4. Copy Files to Root ---
        print(f"Step 3/3: Copying files from '{dist_path}' to '{project_root}'...")
        if not os.path.exists(dist_path):
            raise FileNotFoundError(f"Build output directory not found: {dist_path}")

        for item in os.listdir(dist_path):
            source_item = os.path.join(dist_path, item)
            dest_item = os.path.join(project_root, item)

            # If the destination is a directory, remove it before copying the new one.
            if os.path.isdir(dest_item):
                shutil.rmtree(dest_item)
            # If the destination is a file, it will be overwritten by the copy.
            
            if os.path.isdir(source_item):
                shutil.copytree(source_item, dest_item)
            else:
                shutil.copy2(source_item, dest_item)
        
        print("Files copied successfully.")
        print("-" * 30)
        print("--- Automation Script Finished Successfully! ---")

    except FileNotFoundError as e:
        print(f"\n[ERROR] A required file or directory was not found: {e}", file=sys.stderr)
        sys.exit(1)
    except subprocess.CalledProcessError as e:
        print("\n[ERROR] A command failed to execute.", file=sys.stderr)
        print(f"Command: '{e.cmd}'", file=sys.stderr)
        print(f"Return Code: {e.returncode}", file=sys.stderr)
        print(f"Output:\n{e.stdout}", file=sys.stderr)
        print(f"Error Output:\n{e.stderr}", file=sys.stderr)
        sys.exit(1)
    except Exception as e:
        print(f"\n[ERROR] An unexpected error occurred: {e}", file=sys.stderr)
        sys.exit(1)

if __name__ == '__main__':
    main()
