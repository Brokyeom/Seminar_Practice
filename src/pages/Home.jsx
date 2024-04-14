import styled from "styled-components";
import { Button } from "../components/Button";
import { Header } from "../components/Header";

export const Home = () => {
  return (
    <StMain>
      <Header
        title="안녕하세요 여러분!!"
        subTitle="이번 미미나로 컴포넌트 추상화 함 부셔봅시다."
      />
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
