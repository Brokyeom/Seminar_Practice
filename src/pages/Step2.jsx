import { Button } from "../components/Button";

const Step2 = () => {
  const onClickButton = () => {
    alert("button A");
  };

  return <Button text="buttonA" onClick={onClickButton} />;
};

export default Step2;
