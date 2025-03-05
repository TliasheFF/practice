import { useCallback, useState } from "react";
import { ChildComp } from "./child-comp";
import "./parent-comp.css";

export function ParentComp() {
  const [count, setCount] = useState(0);

  const handleClick = useCallback(() => {
    setCount((prevState) => prevState + 1);
  }, [setCount]);

  console.log("Parent re-rendered!");

  return (
    <div className="parent-comp">
      <div className="count">{count}</div>
      <ChildComp onClick={handleClick} />
    </div>
  );
}
