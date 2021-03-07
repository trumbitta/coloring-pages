import React from 'react';
import { useState } from 'react';

// Third Parties
import styled from 'styled-components';

// Components
import { ColorPicker, colorPickerHeightInRem } from './color-picker.component';
import { Test } from './test.component';

// Configurations
import { Color, colors } from './colors';

export const App = () => {
  const [currentColor, setCurrentColor] = useState<Color>(
    colors[colors.length - 1]
  );

  return (
    <Container>
      <Image currentColorCode={currentColor.code} />
      <ColorPicker onChooseColor={(color) => setCurrentColor(color)} />
    </Container>
  );
};

const Container = styled.div`
  height: calc(100vh - ${colorPickerHeightInRem}rem);
  text-align: center;
`;

const Image = styled(Test)`
  width: auto;
  height: 100%;
`;
