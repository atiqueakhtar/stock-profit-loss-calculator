export default function (props) {
  let clickHandler = () => {
    let initialPrice = document.querySelector("#initial-price").value;
    let quantity = document.querySelector("#quantity").value;
    let currentPrice = document.querySelector("#current-price").value;

    let profit = currentPrice * quantity - initialPrice * quantity;
    if (profit > 0) {
      let profitPercent = (profit / (initialPrice * quantity)) * 100;
      document.querySelector("#result").classList.remove("result-loss");
      document.querySelector("#result").classList.add("result-profit");
      props.setResult(
        `Yayy! The profit is ${profit} and percent is ${profitPercent}%`
      );
    } else if (profit < 0) {
      let lossPercent = -(profit / (initialPrice * quantity)) * 100;
      document.querySelector("#result").classList.remove("result-profit");
      document.querySelector("#result").classList.add("result-loss");
      props.setResult(
        `Ohh! The loss is ${-profit} and percent is ${lossPercent}%`
      );
    } else {
      props.setResult(`Ahh! It's neither a profit nor a loss`);
    }
  };
  return <button onClick={clickHandler}>Check</button>;
}
