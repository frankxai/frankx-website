#!/bin/bash

echo ""
echo "╔══════════════════════════════════════════════════════════╗"
echo "║                                                          ║"
echo "║     🚀 Starting FrankX Brand Dashboard 🚀               ║"
echo "║                                                          ║"
echo "╚══════════════════════════════════════════════════════════╝"
echo ""

# Check if Node.js is installed
if ! command -v node &> /dev/null; then
    echo "❌ Node.js not found. Please install Node.js from https://nodejs.org"
    echo ""
    echo "Alternative: Run with Python"
    echo "python3 -m http.server 8000"
    exit 1
fi

echo "✅ Node.js found!"
echo "🚀 Starting server..."
echo ""

# Start the server
node server.js