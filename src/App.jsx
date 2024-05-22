import { Router } from "./components/common/router";
import { Button as MDSButton } from "@sopt-makers/ui";

function App() {
  return (
    <>
      <Router />
      <div style={{ padding: "10px" }} />
      <MDSButton size="md" theme="blue" rounded="md">
        다음으로 넘어가기
      </MDSButton>
    </>
  );
}

export default App;
