import { withIncrement } from "./with-increment";
import "./user-account.css";
import { UserAccount } from "./user-account";

export function UserAccountWithIncrement() {
  const UserAccountWithSmallIncrement = withIncrement(10, UserAccount);
  const UserAccountWithBigIncrement = withIncrement(1000, UserAccount);

  return (
    <div className="user-account-wrapper">
      <UserAccountWithSmallIncrement />
      <UserAccountWithBigIncrement />
    </div>
  );
}
