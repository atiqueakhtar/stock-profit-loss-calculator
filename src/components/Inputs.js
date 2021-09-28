export default function Inputs() {
  return (
    <div>
      <label htmlFor="initial-price">Initial Price</label>
      <input id="initial-price" type="number" placeholder="Price.." />
      <label htmlFor="quantity">Quantity</label>
      <input id="quantity" type="number" placeholder="Quantities.." />
      <label htmlFor="current-price">Current Price</label>
      <input id="current-price" type="number" placeholder="Price.." />
    </div>
  );
}
