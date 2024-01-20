import MakeWish from "./MakeWish.js";
import PurchaseWish from "./PurchaseWish.js";
import Landing from "./landing.js";
import TylerPage from "./pages/TylerPage.js";

export default function App() {
  return (
    <>
      <div className="App">
        <div className="flex justify-center">
          <header>
            <h1 className="text-3xl font-bold underline">No More Socks</h1>
            <Landing />
            <MakeWish />
            <PurchaseWish />
          </header>
        </div>
      </div>
    </>
  );
}
