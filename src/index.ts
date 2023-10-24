// Import the native module. On web, it will be resolved to MichaelessietMinimizeApp.web.ts
// and on native platforms to MichaelessietMinimizeApp.ts
import { Platform } from "expo-modules-core";

import {
  ChangeEventPayload,
  MichaelessietMinimizeAppViewProps,
} from "./MichaelessietMinimizeApp.types";
import MichaelessietMinimizeAppModule from "./MichaelessietMinimizeAppModule";
import MichaelessietMinimizeAppView from "./MichaelessietMinimizeAppView";

export function minimize() {
  return MichaelessietMinimizeAppModule.minimize();
}

export function goBack() {
  if (Platform.OS === "ios") {
    console.warn("This is not possible on iOS due to Apple security policies.");
  } else {
    return MichaelessietMinimizeAppModule.goBack();
  }
}

export function exit() {
  return MichaelessietMinimizeAppModule.exit();
}

export {
  MichaelessietMinimizeAppView,
  MichaelessietMinimizeAppViewProps,
  ChangeEventPayload,
};
