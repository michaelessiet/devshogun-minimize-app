import * as React from 'react';

import { MichaelessietMinimizeAppViewProps } from './MichaelessietMinimizeApp.types';

export default function MichaelessietMinimizeAppView(props: MichaelessietMinimizeAppViewProps) {
  return (
    <div>
      <span>{props.name}</span>
    </div>
  );
}
