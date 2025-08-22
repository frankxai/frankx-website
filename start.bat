@echo off
echo.
echo ╔══════════════════════════════════════════════════════════╗
echo ║                                                          ║
echo ║     🚀 Starting FrankX Brand Dashboard 🚀               ║
echo ║                                                          ║
echo ╚══════════════════════════════════════════════════════════╝
echo.

REM Check if Node.js is installed
node --version >nul 2>&1
if %errorlevel% neq 0 (
    echo ❌ Node.js not found. Please install Node.js from https://nodejs.org
    echo.
    echo Alternative: Run with Python
    echo python -m http.server 8000
    pause
    exit /b 1
)

echo ✅ Node.js found!
echo 🚀 Starting server...
echo.

REM Start the server
node server.js

pause