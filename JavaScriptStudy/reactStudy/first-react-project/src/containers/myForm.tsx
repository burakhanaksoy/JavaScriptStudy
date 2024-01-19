import { useState, useEffect, FormEvent } from "react";

const MyForm = () => {
  const [personInfo, setPersonInfo] = useState({ name: "", city: "" });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const ResetButton = () => {
    return <button onClick={handleReset}>Reset</button>;
  };

  const handleReset = () => {
    setIsSubmitted(false);
    setPersonInfo({
      name: "",
      city: "",
    });
    const form = document.getElementsByClassName("user-form");
    form[0].reset();
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  const handleBtnChange = (e: FormEvent<HTMLFormElement>) => {
    setPersonInfo({
      ...personInfo,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <>
      <form
        className="user-form"
        onSubmit={(e) => {
          handleSubmit(e);
        }}
        style={{
          display: "table",
        }}
      >
        <div style={{ display: "table-row", justifyContent: "space-evenly" }}>
          <label htmlFor="name" style={{ display: "table-cell" }}>
            Name:{" "}
          </label>
          <input onChange={handleBtnChange} name="name" type="text" required />
        </div>
        <div style={{ display: "table-row", justifyContent: "space-evenly" }}>
          <label htmlFor="city" style={{ display: "table-cell" }}>
            City:{" "}
          </label>
          <input onChange={handleBtnChange} name="city" type="text" required />
        </div>
        <div style={{ display: "table-row" }}>
          <button type="submit" style={{ display: "table-cell" }}>
            Submit
          </button>
          <ResetButton />
        </div>
      </form>
      {isSubmitted ? (
        <p>
          {personInfo.name} {personInfo.city}
        </p>
      ) : null}
    </>
  );
};

export default MyForm;
