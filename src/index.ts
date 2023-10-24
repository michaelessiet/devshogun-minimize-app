// Import the native module. On web, it will be resolved to MichaelessietMinimizeApp.web.ts
// and on native platforms to MichaelessietMinimizeApp.ts
import MichaelessietMinimizeAppModule from "./MichaelessietMinimizeAppModule"
import MichaelessietMinimizeAppView from "./MichaelessietMinimizeAppView"
import {
	ChangeEventPayload,
	MichaelessietMinimizeAppViewProps,
} from "./MichaelessietMinimizeApp.types"

export function minimize() {
  return MichaelessietMinimizeAppModule.minimize()
}

export function goBack() {
  return MichaelessietMinimizeAppModule.goBack()
}

export function exit() {
  return MichaelessietMinimizeAppModule.exit()
}

export {
	MichaelessietMinimizeAppView,
	MichaelessietMinimizeAppViewProps,
	ChangeEventPayload,
}
