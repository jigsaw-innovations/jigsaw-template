# Fastlane Configuration for CD Workflows

This document outlines the necessary Fastlane files for setting up Continuous Deployment (CD) workflows for both Android and iOS projects.

## Table of Contents

- [Android Configuration](#android-configuration)
    - [Fastfile](#fastfile-android)
    - [Appfile](#appfile-android)
    - [Supplyfile](#supplyfile)
- [iOS Configuration](#ios-configuration)
    - [Fastfile](#fastfile-ios)
    - [Appfile](#appfile-ios)
    - [Deliverfile](#deliverfile)
- [Fastlane Additional Configurations](#fastlane-additional-configurations)
    - [Matchfile](#matchfile)
    - [Precheckfile](#precheckfile)

## Android Configuration

For a CD workflow with Fastlane for Android, the following files are essential:

### Fastfile (Android)

This is the main configuration file for Fastlane. It contains the lanes (series of actions) that define your automation process. For Android, this file might have lanes for:

- Building your APK or AAB
- Running tests
- Deploying to the Google Play Store using `supply`

### Appfile (Android)

This file provides global configuration that's used across different lanes in your `Fastfile`. For Android, it often specifies:

- The package name of the app
- Path to a JSON key for Google Play Store authentication

### Supplyfile

This file is specific to Android and is used by the `supply` action to manage deployment to the Google Play Store. It contains configurations specific to `supply`, such as:

- Track
- Metadata path
- Screenshots path

## iOS Configuration

For a CD workflow with Fastlane for iOS, the following files are needed:

### Fastfile (iOS)

Similar to Android, the `Fastfile` contains the lanes defining your automation process for iOS. This might include lanes for:

- Incrementing build numbers
- Building your app
- Running tests
- Snapshotting UI tests
- Deploying to the App Store or TestFlight using `deliver` and `pilot`

### Appfile (iOS)

For iOS, this file typically contains:

- The app's bundle identifier
- The Apple ID used for App Store Connect

### Deliverfile (Optional)

For customizing the deployment behavior to the App Store.

## Fastlane Additional Configurations

Fastlane provides various tools to automate the development and deployment process. Two of these tools are `match` and `precheck`, each with their configuration files: `Matchfile` and `Precheckfile`.

### Matchfile

Fastlane's `match` tool streamlines the management of certificates and provisioning profiles for iOS. It offers a centralized approach to handle these assets via a Git repository. This ensures a consistent set of certificates and profiles across the team.

**Key Configurations in Matchfile**:
- **git_url**: Git repository URL storing the certificates and provisioning profiles.
- **app_identifier**: App's bundle identifier(s).
- **username**: Apple ID email.
- **type**: Profile type (`development`, `appstore`, `adhoc`, or `enterprise`).

```ruby
git_url("https://github.com/yourusername/certificates-repo.git")
app_identifier("com.example.myapp")
username("apple_id@example.com")
type("development")
```
### Precheckfile

`precheck` checks app metadata against Apple's App Store Review Guidelines, potentially pinpointing issues that might lead to app rejection.

**Key Configurations in Precheckfile**:
- **app_identifier**: App's bundle identifier.
- **username**: Apple ID email.
- **default_rule_level**: Severity level of checks (`warn` or `error`).

```ruby
app_identifier("com.example.myapp")
username("apple_id@example.com")
default_rule_level("warn")
```
Both Matchfile and Precheckfile are usually placed in the fastlane directory of the project, accompanying other Fastlane configuration files.
