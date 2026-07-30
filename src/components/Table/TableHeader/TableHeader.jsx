import "./TableHeader.css";

export const TableHeader = ({ onSort, widths, onResizeStart }) => {
  return (
    <thead>
      <tr>
        <th
          onClick={() => onSort("lastName")}
          style={{ width: widths.lastName }}
        >
          Фамилия
          <div
            className="column__resizer"
            onMouseDown={(e) => onResizeStart(e, "lastName")}
          />
        </th>

        <th
          onClick={() => onSort("firstName")}
          style={{ width: widths.firstName }}
        >
          Имя
          <div
            className="column__resizer"
            onMouseDown={(e) => onResizeStart(e, "firstName")}
          />
        </th>

        <th
          onClick={() => onSort("maidenName")}
          style={{ width: widths.maidenName }}
        >
          Отчество
          <div
            className="column__resizer"
            onMouseDown={(e) => onResizeStart(e, "maidenName")}
          />
        </th>

        <th onClick={() => onSort("age")} style={{ width: widths.age }}>
          Возраст
          <div
            className="column__resizer"
            onMouseDown={(e) => onResizeStart(e, "age")}
          />
        </th>

        <th onClick={() => onSort("gender")} style={{ width: widths.gender }}>
          Пол
          <div
            className="column__resizer"
            onMouseDown={(e) => onResizeStart(e, "gender")}
          />
        </th>

        <th onClick={() => onSort("phone")} style={{ width: widths.phone }}>
          Телефон
          <div
            className="column__resizer"
            onMouseDown={(e) => onResizeStart(e, "phone")}
          />
        </th>

        <th style={{ width: widths.email }}>
          Почта
          <div
            className="column__resizer"
            onMouseDown={(e) => onResizeStart(e, "email")}
          />
        </th>

        <th style={{ width: widths.country }}>
          Страна
          <div
            className="column__resizer"
            onMouseDown={(e) => onResizeStart(e, "country")}
          />
        </th>

        <th style={{ width: widths.city }}>
          Город
          <div
            className="column__resizer"
            onMouseDown={(e) => onResizeStart(e, "city")}
          />
        </th>
      </tr>
    </thead>
  );
};
