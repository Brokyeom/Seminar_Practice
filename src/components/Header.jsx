import styled from "styled-components";

export const Header = ({ title, subTitle }) => {
  <StHeaderWrapper>
    <h1>{title}</h1>
    <h2>{subTitle}</h2>
  </StHeaderWrapper>;
};

const StHeaderWrapper = styled.header`
  display: flex;
  flex-direction: column;
  gap: 8px;

  & > h1 {
    color: black;

    font-size: 20px;
    font-weight: 700;
  }
`;
