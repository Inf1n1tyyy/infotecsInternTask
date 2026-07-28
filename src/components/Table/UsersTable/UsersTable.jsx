import { TableHeader } from "../TableHeader/TableHeader";
import { TableRow } from "../TableRow/TableRow";

import "./UsersTable.css";

export const UsersTable = ({ users, sort, onSort }) => {
  return (
    <>
      <h1>Информация о пользователях</h1>

      <table>
        <TableHeader sort={sort} onSort={onSort} />

        <tbody>
          {users.map((user) => (
            <TableRow key={user.id} user={user} />
          ))}
        </tbody>
      </table>
    </>
  );
};
