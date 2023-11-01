#!/bin/bash

# Default port
PORT=8081

# Check if port 8081 is in use, and if so, use port 8082
if lsof -Pi :8081 -sTCP:LISTEN -t >/dev/null ; then
    PORT=8082
fi

echo "Using port $PORT"

# List available devices
echo "Available devices:"
xcrun simctl list devices

DEFAULT_SIMULATOR_NAME="iPhone 15 Pro Max"

# Ask the user to enter the device they want to use
read -p "Enter the device you want to use (default: $DEFAULT_SIMULATOR_NAME): " SIMULATOR_NAME

# If the user didn't enter anything, use the default simulator name
if [ -z "$SIMULATOR_NAME" ]; then
  SIMULATOR_NAME="$DEFAULT_SIMULATOR_NAME"
fi

echo "Using simulator: $SIMULATOR_NAME"

# Open the iOS simulator
xcrun simctl boot "$SIMULATOR_NAME" || echo "Failed to launch simulator"

# Wait for a few seconds to ensure that the simulator has started
sleep 5

# Navigate to your project directory
#cd $PROJECT_PATH

# Start the React Native development server on the specified port
npx react-native start --port $PORT &

# Wait for a few seconds to ensure that the development server has started
sleep 5

# Run your React Native app on the simulator, specifying the port
REACT_NATIVE_PACKAGER_HOSTNAME="127.0.0.1:$PORT" npx react-native run-ios --simulator="$SIMULATOR_NAME"
