import "../App.css";
import { useState, useEffect } from "react";

export default function App() {
  const [inputText, setInputText] = useState(0);
  const [dropdownType, setDropdownType] = useState("isPrime");
  const [isTrue, setIsTrue] = useState(false);

  function handleKeyUp(event) {
    if (event.keyCode === 13) {
      let convertTextToNumber = Number(event.target.value);

      if (convertTextToNumber) {
        let tempNumber;
        if (convertTextToNumber < 0) {
          tempNumber = 1;
        } else {
          tempNumber = Math.round(convertTextToNumber);
        }
        setInputText(tempNumber.toString());
      }
    }
  }

  function IsPrimeNumber(number) {
    let n, i, flag = true;
    n = parseInt(number);
    for (i = 2; i <= n - 1; i++)
      if (n % i === 0) {
        flag = false;
        break;
      }

    if (flag === true) {
      return true;
    } else {
      return false;
    }
  }

  function IsFibonacciNumber(number) {
    if (number === "0" || number === "1") {
      return false;
    }

    let numberToChar = Array.from(number);
    for (let i=0; i<(numberToChar.length)/2 ;i++) {
        if (numberToChar[i] !== numberToChar[numberToChar.length-i-1]) {
            return false
        }
    }
    return true;
  }

  function checkedCondition(inputText, dropdownType) {
    if (!inputText && !dropdownType) {
      setIsTrue(false);
    } else if (
      (dropdownType === "isPrime" && IsPrimeNumber(inputText)) ||
      (dropdownType === "isFibonacci" && IsFibonacciNumber(inputText))
    ) {
      setIsTrue(true);
    } else {
      setIsTrue(false);
    }
  }

  useEffect(() => {
    checkedCondition(inputText, dropdownType);
  }, [inputText, dropdownType]);

  return (
    <div className="container">
        <div className="left">
            <input type="text" onKeyUp={handleKeyUp} />
        </div>
        <div className="middle">
            <select
            id="dropdown-type"
            onChange={(event) => setDropdownType(event.target.value)}
            value={dropdownType}
            >
            <option value="isPrime">isPrime</option>
            <option value="isFibonacci">isFibonacci</option>
            </select>
        </div>
        <div className="right">{isTrue ? "True" : "False"}</div>
    </div>
  );
}
