import styled from "styled-components";

export const Button = ({ text }) => {
  return <StButton>{text}</StButton>;
};

const StButton = styled.button`
  background-color: #346ffa;
  color: #ffffff;
  padding: 12px 20px;
  border: none;
  border-radius: 10px;

  cursor: pointer;
`;
