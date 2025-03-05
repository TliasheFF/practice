import { createButton } from "../buttons-factory/create-button";
import "./user-account.css";

export interface UserAccountProps {
  balance: number;
  increaseBalance(): void;
}

export function UserAccount(props: UserAccountProps) {
  const { balance, increaseBalance } = props;
  const Button = createButton("secondary-btn");

  return (
    <div className="user-account">
      <Button onClick={increaseBalance}>Увеличить баланс</Button>
      <div>Баланс: ${balance}</div>
    </div>
  );
}
