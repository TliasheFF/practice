import { useState } from "react";
import { UserAccount } from "./user-account";

export function withIncrement(incrementAmount: number) {
  return () => {
    const [balance, setBalance] = useState<number>(0);

    const handleIncreaseBalance = () => {
      setBalance((prevBalance) => prevBalance + incrementAmount);
    };

    return <UserAccount balance={balance} increaseBalance={handleIncreaseBalance} />;
  };
}
