# Node.js & Project Installation Procedures

## Windows (PowerShell)
```powershell
# 1. Install Node.js
winget install OpenJS.NodeJS.LTS
# or download installer from https://nodejs.org

# 2. Install Git
winget install Git.Git
# or download installer from https://git-scm.com/download/win

# 3. Verify installations
node --version
git --version
npm --version

# 4. Create project directory
cd ~
mkdir projects
cd projects

# 5. Clone and setup project
git clone https://github.com/pragmatismo-io/pragmatismo.com.br
cd pragmatismo.com.br
npm install
npm run dev
```

## macOS (Terminal)
```bash
# 1. Install Homebrew (if not installed)
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"

# 2. Install Node.js
brew install node

# 3. Install Git
brew install git

# 4. Verify installations
node --version
git --version
npm --version

# 5. Create project directory
cd ~
mkdir projects
cd projects

# 6. Clone and setup project
git clone https://github.com/pragmatismo-io/pragmatismo.com.br
cd pragmatismo.com.br
npm install
npm run dev
```

## Linux (Shell)
```bash
# Ubuntu/Debian
# 1. Install Node.js
sudo apt update
curl -fsSL https://deb.nodesource.com/setup_lts.x | sudo -E bash -
sudo apt install -y nodejs

# 2. Install Git
sudo apt install git

# 3. Verify installations
node --version
git --version
npm --version

# 4. Create project directory
cd ~
mkdir projects
cd projects

# 5. Clone and setup project
git clone https://github.com/pragmatismo-io/pragmatismo.com.br
cd pragmatismo.com.br
npm install
npm run dev

# For other Linux distributions:
# Fedora/RHEL:
# sudo dnf install nodejs git
# Arch:
# sudo pacman -S nodejs npm git
```

## Common Issues & Solutions
```bash
# If npm install fails:
npm cache clean --force
rm -rf node_modules
npm install

# If port 3000 is in use:
# Windows PowerShell:
netstat -ano | findstr :3000
taskkill /PID <PID> /F

# Mac/Linux:
lsof -i :3000
kill -9 <PID>
```
