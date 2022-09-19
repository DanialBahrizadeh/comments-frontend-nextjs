import type { GetServerSideProps } from "next";
import type { User } from "../model/User";
import type { CommentType } from "../model/Comment";
import type { FormEvent, FunctionComponent } from "react";
import { Fragment, useState } from "react";
import Comment from "../components/Comment";
import {
  StyledHome,
  CommentContainer,
  ReplydComments,
  CommentTextArea,
  Form,
  SendButton,
} from "../components/styles/Home.styled";
import Image from "next/image";
import img from "../public/images/avatars/image-juliusomo.png";
import { nanoid } from "nanoid";
import axios from "axios";

interface HomeProps {
  comments: CommentType[];
  user: User;
}

const Home: FunctionComponent<HomeProps> = ({ comments, user }) => {
  const [value, setValue] = useState("");
  const [replyingTo, setReplyingTo] = useState("");
  const [commentsState, setCommentsState] = useState(comments);
  const commentElements = commentsState.map((comment) => {
    const { replies } = comment;
    if (!replies || Number(replies.length) <= 0)
      return (
        <Comment
          key={comment.id}
          user={user}
          comment={comment}
          setReplyingTo={setReplyingTo}
        />
      );

    const repliesElements: React.ReactNode = replies.map((reply) => (
      <Comment
        key={reply.id}
        comment={reply}
        user={user}
        reply={true}
        setReplyingTo={setReplyingTo}
      />
    ));

    return (
      <Fragment key={comment.id}>
        <Comment comment={comment} user={user} setReplyingTo={setReplyingTo} />
        <ReplydComments>{repliesElements}</ReplydComments>
      </Fragment>
    );
  });

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const URL = process.env.NEXT_PUBLIC_DB_URL;
    if (!value) return;
    if (!user) return;
    if (!URL) return;
    const comment: CommentType = {
      id: nanoid(),
      content: value,
      createdAt: "1 seconds ago",
      score: 0,
      user,
      replies: [],
    };
    if (replyingTo) {
      comment.replyingTo = replyingTo;
    }
    console.log(comment);

    const response = await axios.post(`${URL}/comments`, comment);
    console.log(response);
    setCommentsState((prevComments) => [...prevComments, comment]);
    setValue("");
    setReplyingTo("");
  };
  return (
    <StyledHome>
      <CommentContainer>{commentElements}</CommentContainer>
      <Form onSubmit={handleSubmit}>
        <CommentTextArea
          placeholder={
            replyingTo ? `reply to ${replyingTo}` : "Add a comment..."
          }
          value={value}
          onChange={({ target: { value } }) => setValue(value)}
        ></CommentTextArea>
        <div>
          <Image src={img} alt="user image" width="25px" height="25px" />
          <SendButton>Send</SendButton>
        </div>
      </Form>
    </StyledHome>
  );
};
export default Home;

export const getServerSideProps: GetServerSideProps = async () => {
  const URL = process.env.NEXT_PUBLIC_DB_URL;
  const CommentsResponse = await fetch(`${URL}/comments`);
  const comments = await CommentsResponse.json();

  const userResponse = await fetch(`${URL}/currentuser`);
  const user = await userResponse.json();
  return {
    props: {
      comments,
      user,
    },
  };
};
