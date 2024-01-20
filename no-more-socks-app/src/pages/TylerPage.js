// import { data } from "../no-more-socks-backend/index.js";
import { useState, useEffect } from "react";

export default function TylerPage() {
  //   const tylerList = listData.map((item, index) => <li key={index}>{item}</li>);
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
