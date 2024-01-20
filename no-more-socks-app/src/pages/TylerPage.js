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
      <div>PLEASE</div>
      <div></div>
    </>
  );
}
