import { assets as OnboardingAssets } from "./onboarding";
import { assets as WelcomeAssets } from "../Welcome";

export * from "./onboarding";
export * from "../Welcome";
export const assets = [...OnboardingAssets, ...WelcomeAssets];
