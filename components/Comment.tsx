import axios from "axios";
import Image from "next/image";
import { FunctionComponent, useEffect, useRef, useState } from "react";
import { CommentType } from "../model/Comment";
import { User } from "../model/User";
import { MinusIcon, PlusIcon, ReplyIcon, DeleteIcon, EditIcon } from "./Icons";
import {
  Button,
  CommentFooter,
  CommentHeader,
  CommentMain,
  Content,
  ControlButton,
  ControlCommentButtons,
  CreatedAt,
  Dialog,
  DialogButtonHolder,
  DialogCancel,
  DialogContent,
  DialogDelete,
  DialogTitle,
  ImageHolder,
  PurpleText,
  RedText,
  RepliedTo,
  ScoreContainer,
  ScoreNumber,
  StyledComment,
  UserName,
  You,
} from "./styles/Comment.styled";

interface CommentProps {
  comment: CommentType;
  user: User;
  setReplyingTo: React.Dispatch<React.SetStateAction<string>>;
  reply?: boolean;
}

const Comment: FunctionComponent<CommentProps> = ({
  comment,
  user,
  setReplyingTo,
  reply = false,
}) => {
  const [score, setScore] = useState(comment.score);
  const [isDeleted, setIsDeleted] = useState(false);
  const dialog = useRef<HTMLDialogElement>(null);

  // functoins
  const addOne = () => {
    setScore((prevScore) => prevScore + 1);
  };

  const removeOne = () => {
    setScore((prevScore) => prevScore - 1);
  };

  const deleteComment = () => {
    dialog.current?.showModal();
  };

  const editComment = () => {
    console.log("edited");
  };

  const cancelDeleting = () => {
    dialog.current?.close();
  };

  const confirmDeleting = () => {
    setIsDeleted(true);
    dialog.current?.close();
  };

  // end functoins
  useEffect(() => {
    const fn = async () => {
      const URL = process.env.NEXT_PUBLIC_DB_URL;
      if (!comment.replyingTo) {
        const data = await axios.put(`${URL}/comments/${comment.id}`, {
          ...comment,
          score,
        });
        console.log(data);
      }
    };
    if (score !== comment.score) {
      fn();
    }
  }, [comment, score]);

  if (isDeleted) return <></>;

  return (
    <StyledComment reply={reply}>
      <CommentHeader>
        <ImageHolder>
          <Image
            src={comment.user.image.webp.slice(1)}
            alt={comment.user.username}
            width="28.8px"
            height="28.8px"
          />
        </ImageHolder>
        <UserName>{comment.user.username}</UserName>
        {comment.user.username === user.username && <You>you</You>}
        <CreatedAt>{comment.createdAt}</CreatedAt>
      </CommentHeader>

      <CommentMain>
        <Content>
          {(reply || comment.replyingTo) && (
            <RepliedTo>@{comment.replyingTo} </RepliedTo>
          )}
          {comment.content}
        </Content>
      </CommentMain>

      <CommentFooter>
        <ScoreContainer>
          <Button onClick={addOne}>
            <PlusIcon />
          </Button>
          <ScoreNumber>{score}</ScoreNumber>
          <Button onClick={removeOne}>
            <MinusIcon />
          </Button>
        </ScoreContainer>
        {comment.user.username === user.username ? (
          <ControlCommentButtons>
            <ControlButton onClick={deleteComment}>
              <DeleteIcon />
              <RedText>Delete</RedText>
            </ControlButton>

            <ControlButton onClick={editComment}>
              <EditIcon />
              <PurpleText>Edit</PurpleText>
            </ControlButton>
          </ControlCommentButtons>
        ) : (
          <ControlButton onClick={() => setReplyingTo(comment.user.username)}>
            <ReplyIcon />
            <PurpleText>Reply</PurpleText>
          </ControlButton>
        )}
      </CommentFooter>
      <Dialog ref={dialog}>
        <div>
          <DialogTitle>Delete comment</DialogTitle>
          <DialogContent>
            Are you sure you want to delete this comment? this will remove the
            comment and can&apos;t be undone.
          </DialogContent>
          <DialogButtonHolder>
            <DialogCancel onClick={cancelDeleting}>No, Cancel</DialogCancel>
            <DialogDelete onClick={confirmDeleting}>Yes, Delete</DialogDelete>
          </DialogButtonHolder>
        </div>
      </Dialog>
    </StyledComment>
  );
};

export default Comment;
