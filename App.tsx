import * as React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { ThemeProvider } from "@shopify/restyle";

import { Onboarding } from "./src/Onboarding";

const fonts = {
  "SFProText-Bold": require("./assets/fonts/SF-Pro-Text-Bold.otf"),
  "SFProText-Semibold": require("./assets/fonts/SF-Pro-Text-Semibold.otf"),
  "SFProText-Regular": require("./assets/fonts/SF-Pro-Text-Regular.otf"),
};

import { LoadAssets, theme } from "./src/components";
import { Welcome } from "./src/Welcome";

const AuthenticationStack = createStackNavigator();
const AuthenticationNavigator = () => {
  return (
    <AuthenticationStack.Navigator headerMode="none">
      <AuthenticationStack.Screen name="Onboarding" component={Onboarding} />
      <AuthenticationStack.Screen name="Welcome" component={Welcome} />
    </AuthenticationStack.Navigator>
  );
};

export default function App() {
  return (
    <ThemeProvider {...{ theme }}>
      <LoadAssets {...{ fonts }}>
        <AuthenticationNavigator />
      </LoadAssets>
    </ThemeProvider>
  );
}
