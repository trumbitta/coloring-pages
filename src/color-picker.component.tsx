import { FC } from "react";

interface ColorPickerProps {
  onChooseColor: (color: string) => void;
}

export const ColorPicker: FC<ColorPickerProps> = ({ onChooseColor }) => {
  const colors = [
    "white",
    "gold",
    "teal",
    "maroon",
    "tomato",
    "rebeccapurple",
    "lime",
    "deeppink"
  ];

  return (
    <article>
      <ul>
        {colors.map((color) => (
          <li key={color} onClick={() => onChooseColor(color)}>
            {color}
          </li>
        ))}
      </ul>
    </article>
  );
};
