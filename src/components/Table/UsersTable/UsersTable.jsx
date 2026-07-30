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
  onSort,
  onFilterChange,
  onReset,
  onUserClick,
}) => {
  const defaultColumnWidths = {
    lastName: 117,
    firstName: 108,
    maidenName: 108,
    age: 93,
    gender: 73,
    phone: 199,
    email: 399,
    country: 142,
    city: 133,
  };

  const [columnWidths, setColumnWidths] = useState(defaultColumnWidths);

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

  const handleResetColumnWidths = () => {
    setColumnWidths(defaultColumnWidths);
  };

  return (
    <>
      <h1>Информация о пользователях</h1>
      <TableFilter
        onFilterChange={onFilterChange}
        onReset={onReset}
        onResetColumnWidths={handleResetColumnWidths}
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
