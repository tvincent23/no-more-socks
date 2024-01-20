export default function Item(prop) {
  return (
    <div>
      <h2>{prop.name}</h2>
      <h3>{prop.gift}</h3>
      <h4>{prop.id}</h4>
      <h5>{prop.comments}</h5>
    </div>
  )
}