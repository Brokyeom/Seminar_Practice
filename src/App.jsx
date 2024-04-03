import styled from "styled-components";

function App() {
  return (
    <StMain>
      <StButton>Hello Web!</StButton>
    </StMain>
  );
}

export default App;

const StMain = styled.main`
  display: flex;
  justify-content: center;
  align-item: center;
`;

const StButton = styled.button`
  color: white;
  background-color: tomato;

  font-size: 2rem;

  padding: 1rem 0.5rem 1rem 0.5rem;

  border: none;
`;
