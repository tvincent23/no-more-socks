import listData from "../data.json";
import Styles from "./Tyler.css";

export default function TylerPage() {
  const dataArray = listData.map((item, index) => (
    <article class="list" key={index}>
      {item.gift}
    </article>
  ));

  console.log(listData);
  return (
    <>
      <div>
        <h2>Hi Tyler!</h2>
      </div>

      <section className="mainContainer">
        <div className="giftsContainer">
          <ul>{dataArray}</ul>
        </div>

        {/* <form>
          {/* <label htmlFor="giftName">Gift</label> */}
        {/* <input type="text" id="giftName" placeholder="GiftName" /> */}
        {/* </form>  */}

        <form action="/submit" method="post">
          <label for="giftName">Gift</label>
          <input
            type="text"
            id="giftName"
            name="giftName"
            placeholder="Gift Name..."
          />

          <label for="giftDetails">Add Details</label>
          <input
            type="text"
            id="giftDetails"
            name="giftName"
            placeholder="Add description/links..."
          />
          <button class="addGiftBtn" type="submit">
            Add Gift
          </button>
        </form>
      </section>
    </>
  );
}
