import { useRef, FC } from "react";
import CommentInput from "./CommentInput";

const Post: FC = () => {
  const commentInputRef = useRef<HTMLInputElement | null>(null);

  return (
    <div className="post-box">
      <CommentInput ref={commentInputRef} />
    </div>
  );
};

export default Post;
