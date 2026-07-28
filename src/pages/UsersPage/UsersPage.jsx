import { useState, useEffect } from "react";
import UserService from "../../api/UserService";
import { UsersTable } from "../../components/Table/UsersTable/UsersTable";
import { useFetching } from "../../hooks/useFetching";
import { Loader } from "../../components/Loader/Loader";
import { UserModal } from "../../components/Modal/UserModal";

export const UsersPage = () => {
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);

  const [fetchUsers, isLoading, error] = useFetching(async (params) => {
    const data = await UserService.getUsers(params);
    setUsers(data.users);
  });

  const [fetchFilteredUsers, isFilterLoading, filterError] = useFetching(
    async (key, value) => {
      const data = await UserService.filter(key, value);
      setUsers(data.users);
    },
  );

  const [sort, setSort] = useState({
    sortBy: null,
    order: "none",
  });

  const [filter, setFilter] = useState({
    key: "",
    value: "",
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

  const handleFilterUsers = (key, value) => {
    setFilter({
      key,
      value,
    });

    fetchFilteredUsers(key, value);
  };

  const handleResetFilter = () => {
    setFilter({
      key: "",
      value: "",
    });

    fetchUsers({});
  };

  useEffect(() => {
    if (filter.key && filter.value) {
      fetchFilteredUsers(filter.key, filter.value);
    } else {
      const params =
        sort.order === "none"
          ? {}
          : {
              sortBy: sort.sortBy,
              order: sort.order,
            };

      fetchUsers(params);
    }
  }, [sort, filter]);

  const handleUserClick = (user) => {
    setSelectedUser(user);
  };

  return (
    <>
      {error && <span>{error.message}</span>}
      {isLoading && <Loader />}

      <UsersTable
        users={users}
        sort={sort}
        onSort={handleSort}
        filter={filter}
        onFilterChange={handleFilterUsers}
        onReset={handleResetFilter}
        onUserClick={handleUserClick}
      />

      <UserModal user={selectedUser} onClose={() => setSelectedUser(null)} />
    </>
  );
};
