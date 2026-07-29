import "./UserModal.css";

export const UserModal = ({ user, onClose }) => {
  if (!user) {
    return null;
  }
  return (
    <div
      className="modal__overlay"
      onClick={(e) => {
        if (e.target === e.currentTarget) {
          onClose();
        }
      }}
    >
      <div className="modal">
        <button className="modal__btn" onClick={onClose}>
          X
        </button>
        <div>
          <img src={user.image} alt={user.firstName + ` image`} />
        </div>

        <h2>
          {user.lastName} {user.firstName} {user.maidenName}
        </h2>
        <p>
          <span>Возраст:</span> {user.age}
        </p>
        <p>
          <span>Телефон:</span> {user.phone}
        </p>
        <p>
          <span>Почта:</span> {user.email}
        </p>
        <p>
          <span>Страна:</span> {user.address.country}
        </p>
        <p>
          <span>Штат:</span> {user.address.state}
        </p>
        <p>
          <span>Код Штата:</span> {user.address.stateCode}
        </p>
        <p>
          <span>Город:</span> {user.address.city}
        </p>
        <p>
          <span>Адрес:</span> {user.address.address}
        </p>
        <p>
          <span>Почтовый индекс:</span> {user.address.postalCode}
        </p>
        <p>
          <span>Рост:</span> {user.height}
        </p>
        <p>
          <span>Вес:</span> {user.weight}
        </p>
      </div>
    </div>
  );
};
