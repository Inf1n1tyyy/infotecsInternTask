import { useState, useEffect } from "react";
import UserService from "../../api/UserService";
import { UsersTable } from "../../components/Table/UsersTable/UsersTable";
import { useFetching } from "../../hooks/useFetching";
import { Loader } from "../../components/Loader/Loader";
import { UserModal } from "../../components/Modal/UserModal";
import { getNextOrder } from "../../utils/order";
import { Pagination } from "../../components/Pagination/Pagination";
import { getPageCount, getSkip } from "../../utils/pages";

export const UsersPage = () => {
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  const [totalUsers, setTotalUsers] = useState(0);

  const [fetchUsers, isLoading, error] = useFetching(async (params) => {
    const data = await UserService.getUsers(params);
    setUsers(data.users);
    setTotalUsers(data.total);
  });

  const [fetchFilteredUsers, isFilterLoading, filterError] = useFetching(
    async (key, value, params) => {
      const data = await UserService.filter(key, value, params);
      setUsers(data.users);
      setTotalUsers(data.total);
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

  const [page, setPage] = useState(1);
  const [limit] = useState(20);

  const skip = getSkip(page, limit);
  const totalPages = getPageCount(totalUsers, limit);

  const handleSort = (field) => {
    setPage(1);
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
    setFilter({ key, value });
    setPage(1);
  };

  const handleResetFilter = () => {
    setFilter({ key: "", value: "" });
    fetchUsers({});
    setPage(1);
  };

  const handleUserClick = (user) => {
    setSelectedUser(user);
  };

  useEffect(() => {
    if (filter.key && filter.value) {
      fetchFilteredUsers(filter.key, filter.value, { limit, skip });
    } else {
      const params = {
        limit,
        skip,
      };

      if (sort.order !== "none") {
        params.sortBy = sort.sortBy;
        params.order = sort.order;
      }
      fetchUsers(params);
    }
  }, [sort, filter, page]);

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
      <Pagination page={page} totalPages={totalPages} onPageChange={setPage} />

      <UserModal user={selectedUser} onClose={() => setSelectedUser(null)} />
    </>
  );
};
