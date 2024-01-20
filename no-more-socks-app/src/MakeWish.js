import { Link } from "react-router-dom";

export default function MakeWish({ to, TylerPage }) {
  return (
    <>
      <Link to={to}>
        <button>{TylerPage}</button>
      </Link>
    </>
  );
}
