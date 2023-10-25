#!/bin/bash

# Name of the Emulator
DEFAULT_EMULATOR_NAME="Pixel_7_Pro_API_33_1"

# Path to your Android SDK tools
ANDROID_SDK_PATH="$HOME/Library/Android/sdk"

# Path to your React Native project
PROJECT_PATH=""

# List available Android simulators
echo "Available Emulators:"
$ANDROID_SDK_PATH/emulator/emulator -list-avds

# Ask the user to choose an Emulator
read -p "Please choose an emulator (default = $DEFAULT_EMULATOR_NAME): " EMULATOR_NAME

# If no emulator is entered, use the default
if [ -z "$EMULATOR_NAME" ]; then
  EMULATOR_NAME="$DEFAULT_EMULATOR_NAME"
fi

echo "Using emulator: $EMULATOR_NAME"

# Start the Emulator
$ANDROID_SDK_PATH/emulator/emulator -avd $EMULATOR_NAME &

# Wait for the emulator to finish booting
$ANDROID_SDK_PATH/platform-tools/adb wait-for-device shell 'while [[ -z $(getprop sys.boot_completed) ]]; do sleep 1; done;'

# Navigate to your project directory
#cd $PROJECT_PATH

# Default port
PORT=8081

# Check if port 8081 is in use, and if so, use port 8082
if lsof -Pi :8081 -sTCP:LISTEN -t >/dev/null ; then
    PORT=8082
fi

echo "Starting the React Native development server on port $PORT"

# Start the React Native development server on the selected port
npx react-native start --port $PORT &

# Wait for a few seconds to ensure that the development server has started
sleep 5

# Run your React Native app
REACT_NATIVE_PACKAGER_HOSTNAME="127.0.0.1:$PORT"
npx react-native run-android
