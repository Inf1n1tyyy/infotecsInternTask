export const TableHeader = ({ onSort }) => {
  return (
    <thead>
      <tr>
        <th onClick={() => onSort("lastName")} style={{ cursor: "pointer" }}>
          Фамилия
        </th>

        <th onClick={() => onSort("firstName")} style={{ cursor: "pointer" }}>
          Имя
        </th>

        <th onClick={() => onSort("maidenName")} style={{ cursor: "pointer" }}>
          Отчество
        </th>

        <th onClick={() => onSort("age")} style={{ cursor: "pointer" }}>
          Возраст
        </th>

        <th onClick={() => onSort("gender")} style={{ cursor: "pointer" }}>
          Пол
        </th>

        <th onClick={() => onSort("phone")} style={{ cursor: "pointer" }}>
          Телефон
        </th>

        <th>Почта</th>

        <th>Страна</th>

        <th>Город</th>
      </tr>
    </thead>
  );
};
