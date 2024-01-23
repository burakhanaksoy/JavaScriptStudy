import { useState } from "react";
import ProfileCard from "./profileCards";

const Cards = () => {
  const userInfos = [
    {
      id: 1,
      name: "Burakhan",
      job: "Software Developer",
      imageSrc: "./src/assets/burakhan.jpeg",
    },
    {
      id: 2,
      name: "David",
      job: "Football Player",
      imageSrc: "./src/assets/beckham.jpeg",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div style={{ display: "flex", gap: "20px", justifyContent: "center" }}>
      {userInfos.map((userInfo) => (
        <ProfileCard
          key={userInfo.id}
          userInfo={userInfo}
          index={userInfo.id}
          activeIndex={activeIndex}
          onShow={() => setActiveIndex(userInfo.id)}
          onHide={() => setActiveIndex(0)}
        />
      ))}
    </div>
  );
};

export default Cards;
