import React from 'react';
import { useState } from 'react';

// Third Parties
import styled from 'styled-components';

// Components
import { ColorPicker, colorPickerHeightInRem } from './color-picker.component';
import { ColoringPage } from './coloring-page.component';

// Configurations
import { Color, colors } from './colors';

export const App = () => {
  const [currentColor, setCurrentColor] = useState<Color>(
    colors[colors.length - 1]
  );

  return (
    <Container>
      <ColoringPageStyled currentColorCode={currentColor.code} />
      <ColorPicker onChooseColor={(color) => setCurrentColor(color)} />
    </Container>
  );
};

const Container = styled.div`
  height: calc(100vh - ${colorPickerHeightInRem}rem);
  text-align: center;
`;

const ColoringPageStyled = styled(ColoringPage)`
  width: auto;
  height: 100%;
`;
