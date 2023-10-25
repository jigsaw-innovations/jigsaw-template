#!/bin/bash

# Path to your Android SDK tools if not already exported
export ANDROID_HOME=$HOME/Library/Android/sdk

# Shutdown all iOS simulators
echo "Shutting down all iOS simulators..."
xcrun simctl shutdown all

# Shutdown all Android emulators
echo "Shutting down all Android emulators..."
$ANDROID_HOME/emulator/emulator -list-avds | while read -r emulator; do
  $ANDROID_HOME/platform-tools/adb -s "$emulator" emu kill
done

# Kill any process using ports 8081 or 8082
# Kill any process using port 8081
echo "Killing any processes using port 8081..."
for pid in $(lsof -i :8081 -t); do
  kill -9 $pid
done

# Kill any process using port 8082
echo "Killing any processes using port 8082..."
for pid in $(lsof -i :8082 -t); do
  kill -9 $pid
done

echo "All simulators shut down, and relevant processes killed."
