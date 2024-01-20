import listData from "../data.json";

export default function TylerPage() {
  //   const tylerList = listData.map((item, index) => <li key={index}>{item}</li>);
  console.log(listData);
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
