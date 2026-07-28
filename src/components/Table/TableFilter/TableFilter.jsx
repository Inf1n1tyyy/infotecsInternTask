import { useState } from "react";
export const TableFilter = ({ onFilterChange, onReset }) => {
  const [filters, setFilters] = useState({
    lastName: "",
    firstName: "",
    maidenName: "",
    age: "",
    gender: "",
    phone: "",
  });
  const [error, setError] = useState("");
  const handleChange = (e) => {
    setFilters((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = () => {
    const filledFields = Object.entries(filters).filter(
      ([_, value]) => value.trim() !== "",
    );

    if (filledFields.length === 0) {
      setError("Введите значение в поле для фильтрации");
      return;
    }

    if (filledFields.length > 1) {
      setError("Можно фильтровать только по одному полю.");
      return;
    }

    const [key, value] = filledFields[0];

    onFilterChange(key, value);
  };

  const handleReset = () => {
    setFilters({
      lastName: "",
      firstName: "",
      maidenName: "",
      age: "",
      gender: "",
      phone: "",
    });

    onReset();
  };
  return (
    <div style={{ height: "100px" }}>
      <input
        name="lastName"
        value={filters.lastName}
        onChange={handleChange}
        placeholder="Фамилия"
      />

      <input
        name="firstName"
        value={filters.firstName}
        onChange={handleChange}
        placeholder="Имя"
      />

      <input
        name="maidenName"
        value={filters.maidenName}
        onChange={handleChange}
        placeholder="Отчество"
      />

      <input
        name="age"
        value={filters.age}
        onChange={handleChange}
        placeholder="Возраст"
        type="number"
      />

      <select name="gender" value={filters.gender} onChange={handleChange}>
        <option disabled value="">
          Пол
        </option>
        <option value="male">Мужчина</option>
        <option value="female">Женщина</option>
      </select>

      <input
        name="phone"
        value={filters.phone}
        onChange={handleChange}
        placeholder="Телефон"
      />
      <button onClick={handleSubmit}>Отфильтровать</button>
      <button onClick={handleReset}>Сбросить</button>
      {error && <span>{error}</span>}
    </div>
  );
};
