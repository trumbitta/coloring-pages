import { useState } from "react";

// Components
import { ColorPicker } from "./color-picker.component";
import { Test } from "./test.component";

export const App = () => {
  const [currentColor, setCurrentColor] = useState("white");

  return (
    <>
      <ColorPicker onChooseColor={(color) => setCurrentColor(color)} />

      <Test currentColor={currentColor} />
    </>
  );
};
