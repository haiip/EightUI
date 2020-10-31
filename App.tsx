import * as React from "react";
import { ThemeProvider } from "@shopify/restyle";
import { SafeAreaProvider } from "react-native-safe-area-context";

import { LoadAssets, theme } from "./src/components";

import {
  assets as AuthenticationAssets,
  AuthenticationNavigator,
} from "./src/Authentication";

const assets = [...AuthenticationAssets];

const fonts = {
  "SFProText-Bold": require("./assets/fonts/SF-Pro-Text-Bold.otf"),
  "SFProText-Semibold": require("./assets/fonts/SF-Pro-Text-Semibold.otf"),
  "SFProText-Regular": require("./assets/fonts/SF-Pro-Text-Regular.otf"),
  "SFProText-Medium": require("./assets/fonts/SF-Pro-Text-Medium.ttf"),
};

export default function App() {
  return (
    <ThemeProvider {...{ theme, assets }}>
      <LoadAssets {...{ fonts }}>
        <SafeAreaProvider>
          <AuthenticationNavigator />
        </SafeAreaProvider>
      </LoadAssets>
    </ThemeProvider>
  );
}
