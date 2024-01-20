import { useState, useEffect } from "react";

export default function MumPage() {

  const [data, setData] = useState();

  useEffect(() => {
    async function fetchData() {
      const response = await fetch("http://localhost:8080/giver");
      const data = await response.json();
      console.log(data);
      setData(data);
    }

    fetchData();
  }, []);

  return (
    <>
      <div className="flex">
        <h2>Hi Mum!</h2>
        <ul>
          {data?.map((item, index) => (
            <li key={index}>{item.name}</li>
          ))}
          {/* <ul>{tylerList}</ul> */}
        </ul>
      </div>
    </>
  )
}
