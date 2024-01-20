import { useEffect, useRef } from "react";

export default function CatFriends() {
  const firstCatRef = useRef(null);
  const secondCatRef = useRef(null);
  const thirdCatRef = useRef(null);
  const divRef = useRef(null);

  useEffect(() => {
    console.log("useEffect girdi", divRef);
  }, []);

  function handleScrollToFirstCat() {
    firstCatRef.current.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
      inline: "center",
    });
  }

  function handleScrollToSecondCat() {
    secondCatRef.current.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
      inline: "center",
    });
  }

  function handleScrollToThirdCat() {
    thirdCatRef.current.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
      inline: "center",
    });
  }

  return (
    <>
      <div ref={divRef} className="pointer-watch-block-cats">
        <nav>
          <button onClick={handleScrollToFirstCat}>Tom</button>
          <button onClick={handleScrollToSecondCat}>Maru</button>
          <button onClick={handleScrollToThirdCat}>Jellylorum</button>
        </nav>
        <div className="cat-div">
          <img
            src="https://placekitten.com/g/200/200"
            alt="Tom"
            ref={firstCatRef}
          />

          <img
            src="https://placekitten.com/g/300/200"
            alt="Maru"
            ref={secondCatRef}
          />

          <img
            src="https://placekitten.com/g/250/200"
            alt="Jellylorum"
            ref={thirdCatRef}
          />
        </div>
      </div>
    </>
  );
}
