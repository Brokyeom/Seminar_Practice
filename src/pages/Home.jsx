import styled from "styled-components";

export const Home = () => {
  return (
    <StMain>
      <StButton>STEP 1</StButton>
      <StButton>STEP 2</StButton>
      <StButton>STEP 3</StButton>      
    </StMain>
  );
};

const StMain = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-item: center;
  gap: 1rem;
`;

const StButton = styled.button`
  color: white;
  background-color: tomato;

  width: 20rem;

  font-size: 2rem;

  padding: 1rem 0.5rem 1rem 0.5rem;

  border: none;
  border-radius:1.6rem;

  cursor : pointer;
`;
