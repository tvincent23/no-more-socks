// import { data } from "../no-more-socks-backend/index.js";
import { useState, useEffect } from "react";

export default function TylerPage() {
  const [data, setData] = useState();

  useEffect(() => {
    async function fetchData() {
      const response = await fetch("http://localhost:8080/receiver");
      const data = await response.json();
      console.log(data);
      setData(data);
    }
    fetchData();
  }, []);

  return (
    <>
      <div className="flex">
        <h2>Hi Tyler!</h2>
        <ul>
          {listData.map((item, index) => (
            <li key={index}>{item.name}</li>
          ))}
          {/* <ul>{tylerList}</ul> */}
        </ul>
      </div>
    </>
  );
}
