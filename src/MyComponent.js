import { useState } from "react";
//import { Fragment } from "react";

const Compo = () => {
  const [counter, setCounter] = useState(0);
  const onCounter = () => {
    setCounter((counter) => counter + 1);
  };
  const reset = () => setCounter(0);
  return (
    <>
      <h3>Total Click : {counter}</h3>
      <button onClick={onCounter}>Click me</button>
      <button onClick={reset}>Reset</button>
    </>
  );
};

export default Compo;
