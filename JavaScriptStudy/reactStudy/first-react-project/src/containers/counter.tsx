import { useState, useEffect } from "react";

export default function CounterButton() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("Use effect girdi.");

    return () => {
      console.log("Cikti");
    };
  }, []);

  return (
    <>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Counter : {count}
      </button>
    </>
  );
}
