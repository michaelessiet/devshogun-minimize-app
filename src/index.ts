import { NativeModulesProxy, EventEmitter, Subscription } from 'expo-modules-core';

// Import the native module. On web, it will be resolved to MichaelessietMinimizeApp.web.ts
// and on native platforms to MichaelessietMinimizeApp.ts
import MichaelessietMinimizeAppModule from './MichaelessietMinimizeAppModule';
import MichaelessietMinimizeAppView from './MichaelessietMinimizeAppView';
import { ChangeEventPayload, MichaelessietMinimizeAppViewProps } from './MichaelessietMinimizeApp.types';

// Get the native constant value.
export const PI = MichaelessietMinimizeAppModule.PI;

export function hello(): string {
  return MichaelessietMinimizeAppModule.hello();
}

export async function setValueAsync(value: string) {
  return await MichaelessietMinimizeAppModule.setValueAsync(value);
}

const emitter = new EventEmitter(MichaelessietMinimizeAppModule ?? NativeModulesProxy.MichaelessietMinimizeApp);

export function addChangeListener(listener: (event: ChangeEventPayload) => void): Subscription {
  return emitter.addListener<ChangeEventPayload>('onChange', listener);
}

export { MichaelessietMinimizeAppView, MichaelessietMinimizeAppViewProps, ChangeEventPayload };
