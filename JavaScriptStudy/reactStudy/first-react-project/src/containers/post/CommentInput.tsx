import { react, forwardRef, useState } from "react";

const CommentInput = ({}, ref: HTMLInputElement) => {
  const onButtonClicked = () => {
    ref.current.focus();
  };

  return (
    <>
      <input type="text" ref={ref} />
      <button type="submit" onClick={onButtonClicked}>
        Focus!
      </button>
    </>
  );
};

export default forwardRef(CommentInput);
