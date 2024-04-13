import styled from "styled-components";
import { Button } from "../components/Button";

export const Home = () => {
  return (
    <StMain>
      <Button text="Click!" />
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
