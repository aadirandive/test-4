#!/bin/bash

# Set your Personal Access Token as an environment variable


# Step 1: Go to the specific folder
cd /var/lib/jenkins/workspace/test

# Step 2: Git pull using Personal Access Token (PAT)
#git pull https://$GITHUB_PAT@github.com/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/https://github.com/skeletos-it/kairavistudios.git
git config --global credential.helper '!f() { echo username=\$1; echo password=$GIT_TOKEN; }; f'

git pull

# Step 3: Install Node.js dependencies
npm i

# Step 4: Build the project
npm run build

# Step 5: Restart the application with PM2 (assuming PM2 is already installed)
pm2 restart 0

# Step 6: Verify PM2 status for process with ID 1
pm2 status 0 | grep "online" && echo "Application with PM2 ID 1 is online" || echo "Application with PM2 ID 1 is not online"
