import Amount from "./MyComponent";
import { useState } from "react";

const App = () => {
  const [flip, setFlip] = useState(true);
  const flipset = () => {
    setFlip((current) => !current);
  };

  return (
    <>
      {flip === true ? <h1>리액트 입니다</h1> : <h1>리액트가 아닙니다</h1>}
      <button onClick={flipset}>Fliper</button>
      <Amount />
    </>
  );
};

export default App;
