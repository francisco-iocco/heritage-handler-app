import { FaPencilAlt, FaTrashAlt } from "react-icons/fa";

export default function Result({ title, amount }) {
  return (
    <tr>
      <td>{title}</td>
      <td className="amount">${amount}</td>
      <td>
        <button className="edit"><FaPencilAlt /></button>
        <button className="delete"><FaTrashAlt /></button>
      </td>
    </tr>
  );
};