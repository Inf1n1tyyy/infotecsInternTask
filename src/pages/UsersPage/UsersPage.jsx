import { useState, useEffect } from "react";
import UserService from "../../api/UserService";
import { UsersTable } from "../../components/Table/UsersTable/UsersTable";
import { useFetching } from "../../hooks/useFetching";
import { Loader } from "../../components/Loader/Loader";

export const UsersPage = () => {
  const [users, setUsers] = useState([]);
  const [fetchUsers, isLoading, error] = useFetching(async (params) => {
    const data = await UserService.getAll(params);
    setUsers(data.users);
  });
  const [sort, setSort] = useState({
    sortBy: null,
    order: "none",
  });
  const orders = ["none", "asc", "desc"];
  const getNextOrder = (currentOrder) => {
    const currentIndex = orders.indexOf(currentOrder);
    const nextIndex = (currentIndex + 1) % orders.length;

    return orders[nextIndex];
  };

  const handleSort = (field) => {
    setSort((prev) => {
      if (prev.sortBy !== field) {
        return {
          sortBy: field,
          order: "asc",
        };
      }

      const nextOrder = getNextOrder(prev.order);

      if (nextOrder === "none") {
        return {
          sortBy: null,
          order: "none",
        };
      } else {
        return {
          sortBy: field,
          order: nextOrder,
        };
      }
    });
  };

  useEffect(() => {
    const params =
      sort.order === "none"
        ? {}
        : {
            sortBy: sort.sortBy,
            order: sort.order,
          };

    fetchUsers(params);
  }, [sort]);

  return (
    <>
      {error && <span>{error.message}</span>}
      {isLoading && <Loader />}
      <UsersTable users={users} sort={sort} onSort={handleSort} />
    </>
  );
};
