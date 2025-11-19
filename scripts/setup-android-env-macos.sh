#!/usr/bin/env bash
# scripts/setup-android-env-macos.sh
# Usage (macOS terminal):
#   cd /path/to/banjo-hootson-react-native
#   source ./scripts/setup-android-env-macos.sh

echo "Configuring Android environment for this shell session..."

# If there is a .env file next to this script, use it for JAVA_HOME/ANDROID_HOME
ENV_FILE="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)/.env"
if [ -f "$ENV_FILE" ]; then
	# Simple .env loader (KEY=VALUE lines)
	while IFS='=' read -r key value; do
		case "$key" in
			''|'#'*) continue ;;
		esac
		key_trimmed="$(echo "$key" | xargs)"
		value_trimmed="$(echo "$value" | xargs)"
		if [ "$key_trimmed" = "JAVA_HOME" ]; then
			export JAVA_HOME="$value_trimmed"
		fi
		if [ "$key_trimmed" = "ANDROID_HOME" ]; then
			export ANDROID_HOME="$value_trimmed"
		fi
	done < "$ENV_FILE"
fi

# Fallbacks if not set via .env
if [ -z "$JAVA_HOME" ]; then
	export JAVA_HOME="/Applications/Android Studio.app/Contents/jbr/Contents/Home"
fi
if [ -z "$ANDROID_HOME" ]; then
	export ANDROID_HOME="$HOME/Library/Android/sdk"
fi

export PATH="$JAVA_HOME/bin:$ANDROID_HOME/platform-tools:$ANDROID_HOME/emulator:$PATH"

echo "JAVA_HOME=$JAVA_HOME"
echo "ANDROID_HOME=$ANDROID_HOME"

echo
echo "Checking tools..."
java -version || echo "java not found"
adb version || echo "adb not found"
emulator -list-avds || echo "emulator not found"

echo
echo "Android environment configured for this shell session."