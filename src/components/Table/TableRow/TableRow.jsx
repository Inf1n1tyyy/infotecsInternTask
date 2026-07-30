export const TableRow = ({ user, onClick }) => {
  return (
    <tr onClick={() => onClick(user)} style={{ cursor: "pointer" }}>
      <td>{user.lastName}</td>

      <td>{user.firstName}</td>

      <td>{user.maidenName}</td>

      <td>{user.age}</td>

      <td>{user.gender}</td>

      <td>{user.phone}</td>

      <td>{user.email}</td>

      <td>{user.address.country}</td>

      <td>{user.address.city}</td>
    </tr>
  );
};

// export const TableRow = ({ user, onClick, widths }) => {
//   return (
//     <tr onClick={() => onClick(user)} style={{ cursor: "pointer" }}>
//       <td style={{ width: widths.lastName }}>{user.lastName}</td>

//       <td style={{ width: widths.firstName }}>{user.firstName}</td>

//       <td style={{ width: widths.maidenName }}>{user.maidenName}</td>

//       <td style={{ width: widths.age }}>{user.age}</td>

//       <td style={{ width: widths.gender }}>{user.gender}</td>

//       <td style={{ width: widths.phone }}>{user.phone}</td>

//       <td style={{ width: widths.email }}>{user.email}</td>

//       <td style={{ width: widths.country }}>{user.address.country}</td>

//       <td style={{ width: widths.city }}>{user.address.city}</td>
//     </tr>
//   );
// };
