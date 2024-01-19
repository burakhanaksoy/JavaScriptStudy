import { useState, useEffect } from "react";
import "./App.css";
import PointerWatcher from "./containers/pointerWatcher";
import CatFriends from "./containers/catFriends";
import MyForm from "./containers/myForm";
import MyArticle from "./containers/article";

const colorList: string[] = [
  "#bf5656",
  "#28360b",
  "#0c37a3",
  "#620ca3",
  "#b21745",
];
const originalColor: string = "#242424";

const changeBackgroundColor = function (backgroundColor: string) {
  const root = document.documentElement;
  root.style.backgroundColor = backgroundColor;
};

export default function App() {
  const [buttonPressed, setButtonPressed] = useState(false);
  const [resetPressed, setResetPressed] = useState(false);
  const [pressCount, setPressCount] = useState(0);
  const [currentColor, setCurrentColor] = useState(originalColor);

  useEffect(() => {
    changeBackgroundColor(currentColor);
  }, [currentColor]);

  const ResetColorButton: React.FC = function () {
    return (
      <button
        onClick={() => {
          setButtonPressed(false);
          setResetPressed(true);
          setPressCount(0);
          setCurrentColor(originalColor);
        }}
      >
        Reset Color
      </button>
    );
  };

  function ColorChangeButton() {
    return (
      <button
        onClick={() => {
          setButtonPressed(true);
          setResetPressed(false);
          setCurrentColor(colorList[pressCount]);
          setPressCount((pressCount + 1) % colorList.length);
        }}
      >
        {buttonPressed && !resetPressed
          ? "Current color is " + `${currentColor}`
          : "Change Background Color"}
      </button>
    );
  }

  return (
    <div className="button-container">
      <ColorChangeButton />
      <ResetColorButton />
      <PointerWatcher />
      <CatFriends />
      <MyForm />
      <MyArticle />
    </div>
  );
}
