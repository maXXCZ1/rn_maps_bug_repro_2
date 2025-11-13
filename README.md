This is a new [**React Native**](https://reactnative.dev) project, bootstrapped using [`@react-native-community/cli`](https://github.com/react-native-community/cli).

## Step 1: 
Clone repo.
run Yarn/npm install in root directory

## Step 2: 
Icnlude **maps api key** into your ```./Android/app/src/main/AndroidManifest```

`` <meta-data
      android:name="com.google.android.geo.API_KEY"
      android:value="::::: HERE :::::"``

## Step 3:
Clean android build
start project

On map screen, there are 10 markers represented by react-native-vector-icons. 
Tap on navigate to new stack screen.
In new screen tap on remove some markers and return button. Some of markers will be removed, but also replaced by default mapmarkers.

Then you can reset markers on mapscreen, so they will overlap.

Tap on navigate to new stack screen again.
Once you visit another screen with buttons **AGAIN** and press only return to map screen. Default map marker placeholders will **disappear** and only marker icons will be visible!
