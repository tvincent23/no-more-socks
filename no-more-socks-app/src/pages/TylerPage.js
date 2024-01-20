import listData from "../data.json";
import Styles from "./Tyler.css";

export default function TylerPage() {
  const dataArray = listData.map((item, index) => (
    <li key={index}>{item.gift}</li>
  ));

  console.log(listData);
  return (
    <>
      <div>
        <div>
          <h2>Hi Tyler!</h2>
        </div>
        <div class="list">
          <ul>{dataArray}</ul>
        </div>

        {/* <ul>
          {listData.map((item, index) => (
            <li key={index}>
              {item.gift} {item.comments}
            </li>
          ))}
        </ul> */}
      </div>
    </>
  );
}
