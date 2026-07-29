import { TableFilter } from "../TableFilter/TableFilter";
import { Loader } from "../../Loader/Loader";
import { TableHeader } from "../TableHeader/TableHeader";
import { TableRow } from "../TableRow/TableRow";

import "./UsersTable.css";

export const UsersTable = ({
  users,
  isLoading,
  isFilterLoading,
  sort,
  onSort,
  filter,
  onFilterChange,
  onReset,
  onUserClick,
}) => {
  return (
    <>
      <h1>Информация о пользователях</h1>
      <TableFilter
        filter={filter}
        onFilterChange={onFilterChange}
        onReset={onReset}
      />

      {isLoading || isFilterLoading ? (
        <div style={{ display: "flex", justifyContent: "center" }}>
          <Loader />
        </div>
      ) : (
        <table>
          <TableHeader sort={sort} onSort={onSort} />

          <tbody>
            {users.map((user) => (
              <TableRow key={user.id} user={user} onClick={onUserClick} />
            ))}
          </tbody>
        </table>
      )}
    </>
  );
};
