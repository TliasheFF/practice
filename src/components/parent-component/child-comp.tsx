import { memo } from "react";
import { createButton } from "../buttons-factory/create-button";

interface ChildCompProps {
  onClick(): void;
}

export const ChildComp = memo(({ onClick }: ChildCompProps) => {
  console.log("Child re-rendered!");

  const Button = createButton("primary-btn");

  return <Button onClick={onClick}>Обновить счетчик</Button>;
});
