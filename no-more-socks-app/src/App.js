import MakeWish from "./MakeWish.js";
import PurchaseWish from "./PurchaseWish.js";
import Landing from "./landing.js";
import TylerPage from "./pages/TylerPage.js";

export default function App() {

  return (
    <>
      <div className="App">
        
          <header>
            <h1 className="font-bold ">No More Socks</h1>
            <Landing />
          
          <div className="btnContainer">
            <MakeWish />
            <PurchaseWish />
          </div>
           
          </header>
     
      </div>
    </>
  );
}
