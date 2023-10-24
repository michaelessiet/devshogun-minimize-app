import { requireNativeViewManager } from 'expo-modules-core';
import * as React from 'react';

import { MichaelessietMinimizeAppViewProps } from './MichaelessietMinimizeApp.types';

const NativeView: React.ComponentType<MichaelessietMinimizeAppViewProps> =
  requireNativeViewManager('MichaelessietMinimizeApp');

export default function MichaelessietMinimizeAppView(props: MichaelessietMinimizeAppViewProps) {
  return <NativeView {...props} />;
}
