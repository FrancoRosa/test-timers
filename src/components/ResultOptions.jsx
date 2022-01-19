import { useStoreActions } from "easy-peasy";
import { useEffect, useState } from "react";

const ResultOptions = ({ handleNegative, handlePositive, handleInvalid }) => {
  const setMessage = useStoreActions((action) => action.setMessage);
  const [selection, setSelection] = useState(null);
  const [counter, setCounter] = useState(3);
  let previousKey = null;
  let previousCount = 3;

  useEffect(() => {
    const buttonHandler = (e) => {
      const key = e.key;
      const numbers = /\d/;
      const isCommand = key.length === 1 && !numbers.test(key);

      if (isCommand) {
        console.log("selection:", selection);
        if (previousKey === null) {
          if (key === "A" || key === "B" || key === "C") {
            previousKey = key;
            setSelection(key);
            setMessage("Press again to confirm:");
            console.log("First selection:", key);
          }
        } else {
          if (key === "A" && previousKey === "A") handleNegative();
          if (key === "B" && previousKey === "B") handlePositive();
          if (key === "C" && previousKey === "C") handleInvalid();
          console.log("Second selection:", key, selection);
          previousKey = null;
          setSelection(null);
        }
      }
      if (key === "F5") e.preventDefault();
    };

    document.addEventListener("keydown", buttonHandler);

    const tic = setInterval(() => {
      if (previousKey === "A" || previousKey === "B" || previousKey === "C"){
        setCounter(previousCount)
        previousCount = previousCount -1
        if (counter > 0) console.log(counter)
      } else {
        setCounter(3)
        previousCount=3
      }
    }, 1000);

    return () => {
      document.removeEventListener("keydown", buttonHandler);
      clearInterval(tic)
    };

    // eslint-disable-next-line
  }, []);

  return (
    <div className="field is-grouped mt-4">
      {(selection === "A" || selection === null) && (
        <button
          onClick={handleNegative}
          className="button is-large is-outlined is-success"
        >
          Not detected
        </button>
      )}
      {(selection === "B" || selection === null) && (
        <button
          onClick={handlePositive}
          className="button is-large ml-4 is-outlined is-danger"
        >
          Detected
        </button>
      )}
      {(selection === "C" || selection === null) && (
        <button
          onClick={handleInvalid}
          className="button is-large ml-4 is-outlined is-warning"
        >
          Incomplete
        </button>
      )}
    </div>
  );
};
export default ResultOptions;
