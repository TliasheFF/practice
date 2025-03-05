import { createButton } from "./create-button";
import "./buttons-factory.css";

export function ButtonsFactory() {
  const handleClick = () => {
    console.log("Click!");
  };

  const PrimaryButton = createButton("primary-btn");
  const SecondaryButton = createButton("secondary-btn");
  const DangerButton = createButton("danger-btn");

  return (
    <div className="buttons-container">
      <PrimaryButton onClick={handleClick}>PrimaryButton</PrimaryButton>
      <SecondaryButton onClick={handleClick}>SecondaryButton</SecondaryButton>
      <DangerButton onClick={handleClick}>DangerButton</DangerButton>
    </div>
  );
}
