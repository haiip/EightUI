import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { Routes } from "../components/Navigation";
import { assets as OnboardingAssets, Onboarding } from "../Onboarding";
import { assets as WelcomeAssets, Welcome } from "../Welcome";

export * from "../Onboarding";
export * from "../Welcome";
export const assets = [...OnboardingAssets, ...WelcomeAssets];

const AuthenticationStack = createStackNavigator<Routes>();
export const AuthenticationNavigator = () => {
  return (
    <AuthenticationStack.Navigator headerMode="none">
      <AuthenticationStack.Screen name="Onboarding" component={Onboarding} />
      <AuthenticationStack.Screen name="Welcome" component={Welcome} />
    </AuthenticationStack.Navigator>
  );
};
