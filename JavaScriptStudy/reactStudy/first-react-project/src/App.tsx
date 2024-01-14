import { useState, useEffect } from "react";
import "./App.css";

const colorList: string[] = [
  "#bf5656",
  "#28360b",
  "#0c37a3",
  "#620ca3",
  "#b21745",
];
const originalColor: string = "#242424";
let isButtonPressed: boolean = false;
let isResetPressed: boolean = false;
let pressCount: number = 0;

const changeBackgroundColor = function (backgroundColor: string) {
  const root = document.documentElement;
  root.style.backgroundColor = backgroundColor;
};

export default function App() {
  const [currentColor, setCurrentColor] = useState(originalColor);
  useEffect(() => {
    changeBackgroundColor(currentColor);
  }, [currentColor]);

  const ResetColorButton: React.FC = function () {
    return (
      <button
        onClick={() => {
          isButtonPressed = false;
          isResetPressed = true;
          pressCount = 0;
          setCurrentColor(originalColor);
        }}
      >
        Reset Color
      </button>
    );
  };

  function MyButton() {
    return (
      <button
        onClick={() => {
          isButtonPressed = true;
          isResetPressed = false;
          setCurrentColor(colorList[pressCount]);
          pressCount = (pressCount + 1) % colorList.length;
        }}
      >
        {isButtonPressed && !isResetPressed
          ? "Current color is " + `${currentColor}`
          : "Change Background Color"}
      </button>
    );
  }

  return (
    <div className="button-container">
      <MyButton />
      <ResetColorButton />
    </div>
  );
}
