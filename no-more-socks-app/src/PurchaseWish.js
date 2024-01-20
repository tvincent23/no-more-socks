import { Link } from "react-router-dom";

export default function PurchaseWish() {
  return (
    <>
      <Link to="/mum"><button className="font-bold py-3 bg-red-500 rounded-md px-4 text-stone-50">Purchase a Wish</button></Link>
    </>
  );
}
