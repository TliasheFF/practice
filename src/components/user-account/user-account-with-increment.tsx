import { withIncrement } from "./with-increment";
import "./user-account.css";

export function UserAccountWithIncrement() {
  const UserAccountWithSmallIncrement = withIncrement(10);
  const UserAccountWithBigIncrement = withIncrement(1000);

  return (
    <div className="user-account-wrapper">
      <UserAccountWithSmallIncrement />
      <UserAccountWithBigIncrement />
    </div>
  );
}
