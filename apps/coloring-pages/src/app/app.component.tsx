import React from 'react';
import { useState } from 'react';

// Components
import { ColorPicker } from './color-picker.component';
import { Test } from './test.component';

// Configurations
import { Color, colors } from './colors';

export const App = () => {
  const [currentColor, setCurrentColor] = useState<Color>(
    colors[colors.length - 1]
  );

  return (
    <>
      <Test currentColorCode={currentColor.code} />
      <ColorPicker onChooseColor={(color) => setCurrentColor(color)} />
    </>
  );
};
