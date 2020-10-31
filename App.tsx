import * as React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { ThemeProvider } from "@shopify/restyle";

import { Onboarding } from "./src/Onboarding";
import { LoadAssets, theme } from "./src/components";
import { Welcome } from "./src/Welcome";

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
        <AuthenticationNavigator />
      </LoadAssets>
    </ThemeProvider>
  );
}
