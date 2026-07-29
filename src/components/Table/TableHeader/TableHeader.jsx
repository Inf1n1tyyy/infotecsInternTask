export const TableHeader = ({ onSort }) => {
  return (
    <thead>
      <tr>
        <th onClick={() => onSort("lastName")}>Фамилия</th>

        <th onClick={() => onSort("firstName")}>Имя</th>

        <th onClick={() => onSort("maidenName")}>Отчество</th>

        <th onClick={() => onSort("age")}>Возраст</th>

        <th onClick={() => onSort("gender")}>Пол</th>

        <th onClick={() => onSort("phone")}>Телефон</th>

        <th>Почта</th>

        <th>Страна</th>

        <th>Город</th>
      </tr>
    </thead>
  );
};
