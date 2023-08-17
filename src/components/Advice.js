import { useEffect, useState } from "react";
import Styles from "./Advice.module.css";

function Advice() {
  const [advice, setAdvice] = useState("");

  // Fetch advice from adviceslip api
  const generateAdvice = async () => {
    try {
      await fetch("https://api.adviceslip.com/advice")
        .then((res) => {
          if (res.ok) {
            return res.json();
          } else {
            console.log("Not successful");
          }
        })
        .then((data) => {
          setAdvice(data.slip.advice);
        });
    } catch (e) {
      console.error("Error fetching api data", e);
    }
  };

  // Generate advice onload
  useEffect(() => {
    generateAdvice();
  }, []);

  return (
    <div className={Styles.wrapper}>
      <h1 className={Styles.title}>Advice Generator</h1>
      <p className={Styles.quote}>"{advice}"</p>
      <button className={Styles.btn} onClick={generateAdvice}>
        Generate advice
      </button>
    </div>
  );
}

export default Advice;
