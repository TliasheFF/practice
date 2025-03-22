import { useState } from "react";

export function withIncrement(incrementAmount: number, Component: JSX.ElementType) {
  return () => {
    const [balance, setBalance] = useState<number>(0);

    const handleIncreaseBalance = () => {
      setBalance((prevBalance) => prevBalance + incrementAmount);
    };

    return <Component balance={balance} increaseBalance={handleIncreaseBalance} />;
  };
}
