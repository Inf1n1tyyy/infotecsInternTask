export const UserModal = ({ user, onClose }) => {
  if (!user) {
    return null;
  }
  return (
    <div>
      <button onClick={onClose}>Закрыть</button>
      <img src={user.image} alt={user.firstName + ` image`} />
      <h1>
        {user.lastName} {user.firstName} {user.maidenName}
      </h1>
      <h2>Возраст: {user.age}</h2>
      <p>Телефон: {user.phone}</p>
      <p>Адрес: {user.address.address}</p>
      <p>Город: {user.address.city}</p>
      <p>Штат: {user.address.state}</p>
      <p>Код Штата: {user.address.stateCode}</p>
      <p>Почтовый индекс: {user.address.postalCode}</p>
      <p>Страна: {user.address.country}</p>
      <p>Рост: {user.height}</p>
      <p>Вес: {user.weight}</p>
      <p>Телефон: {user.phone}</p>
      <p>Почта: {user.email}</p>
    </div>
  );
};
