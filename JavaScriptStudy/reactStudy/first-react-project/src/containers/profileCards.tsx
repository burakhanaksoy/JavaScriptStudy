import { FC } from "react";

type UserInfoProps = {
  userInfo: {
    id: number;
    name: string;
    job: string;
    imageSrc: string;
  };
  index: number;
  activeIndex: number;
  onShow: React.MouseEventHandler<HTMLButtonElement> | undefined;
  onHide: React.MouseEventHandler<HTMLButtonElement> | undefined;
};

const ProfileCard: FC<UserInfoProps> = ({
  userInfo,
  index,
  activeIndex,
  onShow,
  onHide,
}) => (
  <>
    {activeIndex === index ? (
      <div>
        <div>
          <img
            width="140px"
            height="100px"
            src={userInfo?.imageSrc}
            style={{ borderRadius: "20%", objectFit: "cover" }}
          />
        </div>
        <div>
          <p>{userInfo.name}</p>
          <p>{userInfo.job}</p>
        </div>
        <button onClick={onHide}> Hide </button>
      </div>
    ) : (
      <button onClick={onShow}> Show </button>
    )}
  </>
);

export default ProfileCard;
