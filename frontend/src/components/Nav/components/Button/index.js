import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

export default function Button({ destination, children }) {
  const { pathname } = useLocation();

  const capitalize = (string) => string.charAt(1).toUpperCase() + string.slice(2);
  return (
    <div>
      <div className={pathname === destination ? "active" : undefined}>
        <Link to={destination}>{children}</Link>
      </div>
      {
        pathname === destination && <p>{capitalize(destination)}</p>
      }
    </div>
  );
}
