import { PolymophicComponent } from "../components/PolymophicComponent";

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
