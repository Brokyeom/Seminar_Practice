import { PolymophicComponent } from "../components/PolymophicComponent";
import styled from "styled-components";

const Step4 = () => {
  return (
    <section style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
      <PolymophicComponent text="이건 button 태그!" />
      <PolymophicComponent
        as="a"
        text="이건 a 태그!"
        href="https://makers.sopt.org"
      />
    </section>
  );
};

export default Step4;

// const StPolymophicComponent = styled(PolymophicComponent)`
//   background-color: #346ffa;
//   color: #ffffff;
//   padding: 12px 20px;
//   border: none;
//   border-radius: 10px;

//   cursor: pointer;
// `;
