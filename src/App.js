import "./styles.css";
import Header from "./components/Header";
import Inputs from "./components/Inputs";
import Button from "./components/Button";
import Result from "./components/Result";
import { useState } from "react";
export default function App() {
  const [result, setResult] = useState("");
  return (
    <div className="App">
      <Header />
      <Inputs />
      <Button setResult={setResult} />
      <Result result={result} />
    </div>
  );
}
