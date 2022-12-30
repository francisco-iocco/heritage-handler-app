import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

export default function Button({ destination, children }) {
  const { pathname } = useLocation();

  return (
    <li className={pathname === destination ? "active" : undefined}>
      <Link to={destination}>
        {children}
      </Link>
    </li>
  );
}