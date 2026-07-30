import { useState } from "react";
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
  const [columnWidths, setColumnWidths] = useState({
    lastName: 117,
    firstName: 108,
    maidenName: 108,
    age: 93,
    gender: 73,
    phone: 199,
    email: 399,
    country: 142,
    city: 133,
  });

  const handleResizeStart = (e, column) => {
    e.stopPropagation();

    const startX = e.clientX;
    const startWidth = columnWidths[column];

    const handleMouseMove = (e) => {
      const delta = e.clientX - startX;

      setColumnWidths((prev) => ({
        ...prev,
        [column]: Math.max(50, startWidth + delta),
      }));
    };

    const handleMouseUp = () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseup", handleMouseUp);
  };

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
          <TableHeader
            onSort={onSort}
            widths={columnWidths}
            onResizeStart={handleResizeStart}
          />

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
