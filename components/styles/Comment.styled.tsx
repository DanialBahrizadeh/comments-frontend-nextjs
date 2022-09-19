import styled from "styled-components";
interface StyledCommentProps {
  reply: boolean;
}

/*  global variables   */

const gray = "hsl(211, 10%, 45%)";

/* Start styling */
export const StyledComment = styled.div<StyledCommentProps>`
  width: ${({ reply }) => (reply ? "calc(100%- 20px)" : "100%")};
  height: 14.5rem;
  display: flex;
  flex-direction: column;
  row-gap: 1rem;
  background-color: #fff;
  margin-left: ${({ reply }) => (reply ? "20px" : "0px")};
  padding-block: 1rem;
  padding-inline: 1rem;
  border-radius: 1rem;

  @media (min-width: 480px) {
    position: relative;
    padding-left: 10%;
    height: 10rem;
    width: ${({ reply }) => (reply ? "calc(100% - 40px)" : "100%")};
    margin-left: ${({ reply }) => (reply ? "40px" : "0px")};
  }
`;

/* Start Header */
export const CommentHeader = styled.header`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  column-gap: 1rem;
  height: 20%;
`;

export const ImageHolder = styled.span`
  width: 1.8rem;
  height: 1.8rem;
  display: flex;
  position: relative;
  * > {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
  }
`;

export const UserName = styled.h2`
  font-size: 1rem;
`;

export const You = styled.span`
  color: hsl(0, 0%, 100%);
  background-color: hsl(238, 40%, 52%);
  padding: 3px 8px;
  border-radius: 3px;
  font-size: 0.9rem;
  font-weight: 500;
`;

export const CreatedAt = styled.span`
  color: ${gray};
  white-space: nowrap;
`;

/* End Header */
/* Start Main */
export const CommentMain = styled.main`
  height: 55%;

  @media (min-width: 480px) {
    height: 80%;
  }
`;

export const Content = styled.p`
  color: ${gray};
  line-height: 150%;
  font-size: 0.9rem;

  @media (min-width: 480px) {
    font-size: 1rem;
  }
`;

export const RepliedTo = styled.span`
  color: hsl(238, 40%, 52%);
  font-weight: 500;
`;
/* End Main */
/* Start Footer */
export const CommentFooter = styled.footer`
  height: 25%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (min-width: 480px) {
    height: 100%;
    position: absolute;
    top: 1rem;
    right: 1rem;
    bottom: 1rem;
    left: 3%;
    align-items: flex-start;
  }
`;

export const ScoreContainer = styled.div`
  width: 25%;
  background-color: hsl(228, 33%, 97%);
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem;
  border-radius: 0.5rem;

  @media (min-width: 480px) {
    height: 60%;
    width: 5%;
    flex-direction: column;
  }
`;

export const Button = styled.button`
  background: transparent;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  * {
    color: hsl(239, 57%, 85%);
  }
`;

export const ScoreNumber = styled.span`
  color: hsl(238, 40%, 52%);
  font-weight: 500;
`;

export const ControlButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  column-gap: 0.5rem;
  cursor: pointer;
  font-family: inherit;
  background-color: transparent;
  border: none;
  font-size: inherit;

  /* @media (min-width: 480px) {
    position: absolute;
    right: 0;
    top: 0;
  } */
`;

export const PurpleText = styled.span`
  color: hsl(238, 40%, 52%);
  font-weight: 500;
`;

export const RedText = styled.span`
  color: hsl(358, 79%, 66%);
  font-weight: 500;
`;

export const ControlCommentButtons = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  column-gap: 1rem;

  @media (min-width: 480px) {
    column-gap: 0;
    column-gap: 1rem;
  }
`;
/* End Footer */

export const Dialog = styled.dialog`
  top: 50%;
  left: 50%;
  translate: -50% -50%;
  width: 90vw;
  height: 28vh;
  border: none;
  border-radius: 0.5rem;

  & > div {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    padding: 1rem 1.5rem;

    & > * {
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
  &::backdrop {
    background-color: rgb(0 0 0 / 0.2);
  }

  @media (min-width: 768px) {
    width: 50vw;
    height: 25vh;
  }
`;

export const DialogTitle = styled.h2`
  font-size: 1.1rem;
  font-weight: 500;
  height: 15%;
  color: hsl(212, 24%, 26%);

  @media (min-width: 768px) {
    font-size: 1.5rem;
  }
`;

export const DialogContent = styled.p`
  height: 60%;
  line-height: 150%;
  color: hsl(211, 10%, 45%);

  @media (min-width: 768px) {
    font-size: 1.1rem;
    height: 50%;
  }
`;

export const DialogButtonHolder = styled.div`
  width: 100%;
  height: 25%;
  column-gap: 1rem;

  button {
    text-transform: uppercase;
    width: 50%;
    height: 100%;
    border: none;
    color: hsl(0, 0%, 100%);
    border-radius: 0.5rem;
    font-family: inherit;
    font-weight: 500;
    font-size: 1rem;
    cursor: pointer;
  }

  @media (min-width: 768px) {
    height: 20%;
  }
`;

export const DialogCancel = styled.button`
  background-color: hsl(211, 10%, 45%);
`;

export const DialogDelete = styled.button`
  background-color: hsl(358, 79%, 66%);
`;
