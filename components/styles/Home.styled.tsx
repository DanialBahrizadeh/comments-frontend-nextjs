import styled from "styled-components";

export const StyledHome = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  row-gap: 1rem;
  height: 100%;
`;

export const ReplydComments = styled.div`
  width: 95%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  row-gap: 1rem;
  border-left: 2px solid hsl(223, 19%, 93%);
  margin-left: 5%;
`;

export const CommentContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  row-gap: 1rem;
`;

export const Form = styled.form`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  width: 100%;
  height: 22vh;
  row-gap: 1rem;
  background-color: hsl(0, 0%, 100%);
  padding: 0.8rem;
  div {
    width: 100%;
    height: 35%;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  position: sticky;
  bottom: 0;
  @media (min-width: 480px) {
    height: 11vh;
    align-items: flex-start;
    padding-left: 4rem;
    div {
      width: calc(100% - 2.5rem);
      position: absolute;
      padding-top: 1rem;
      left: 1rem;
      span:first-child {
        width: 35px !important;
        height: 35px !important;
      }
    }
  }
`;

export const CommentTextArea = styled.textarea`
  resize: none;
  outline: none;
  width: 100%;
  height: 65%;
  border-radius: 0.5rem;
  border: 1px solid hsl(223, 19%, 93%);
  padding: 0.8rem 1rem;
  font-size: 0.9rem;
  letter-spacing: normal;
  font-family: inherit;

  @media (min-width: 480px) {
    width: 80%;
    min-height: 95%;
  }
`;

export const SendButton = styled.button`
  background-color: hsl(238, 40%, 52%);
  border: none;
  font-size: 1.2rem;
  font-weight: 500;
  font-family: inherit;
  padding: 0.8rem 1.8rem;
  border-radius: 0.5rem;
  color: hsl(0, 0%, 100%);
  text-transform: uppercase;
  cursor: pointer;

  @media (min-width: 480px) {
    font-size: 1rem;
  }
`;
