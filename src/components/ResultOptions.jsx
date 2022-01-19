import { useStoreActions } from "easy-peasy";
import { useEffect, useState } from "react";

const ResultOptions = ({ handleNegative, handlePositive, handleInvalid, handleMismatch }) => {
  const setMessage = useStoreActions((action) => action.setMessage);
  const [selection, setSelection] = useState(null);
  const [counter, setCounter] = useState(3);
  const [time, setTime] = useState();
  const [keyFlag, setKeyFlag] = useState();
  const [selectKey, setSelectKey] = useState();
  let previousKey = null;
  let counterVar = 3;

  const isCommand = (key) => {
    const commands =  /^[A|B|C]$/;
    return commands.test(key);
  }

  useEffect(() => {
    const buttonHandler = (e) => {
      const key = e.key;

      if (isCommand(key)) {
        console.log("selection:", selection);
        console.log("pressed:", key);
        setSelectKey(key);
        setKeyFlag(Date.now())
        if (previousKey === null) {
            previousKey = key;
            setSelection(key);
            setMessage("Press again to confirm:");
            console.log("First selection:", key);
        } 
      }
      if (key === "F5") e.preventDefault();
    };

    document.addEventListener("keydown", buttonHandler);

    const tic = setInterval(() => {
      setTime(Date.now())
    }, 1000);

    return () => {
      document.removeEventListener("keydown", buttonHandler);
      clearInterval(tic)
    };

    // eslint-disable-next-line
  }, []);

  useEffect(()=>{
    if (selection !== null) {
      setCounter(counter - 1);
      counterVar=counter-1
    }
    else {
      setCounter(3);
      counterVar=3;
    }
    console.log("counter:", counterVar)
  }, [time])

  useEffect(()=>{
    console.log("triggered: key:", selectKey,"prev:" , previousKey)
    if (counter <= 0 && isCommand(selectKey)) {
      console.log("stage:", selectKey, selection)
      if (selectKey === "A" && selection === "A") handleNegative();
      if (selectKey === "B" && selection === "B") handlePositive();
      if (selectKey === "C" && selection === "C") handleInvalid();
      if (selectKey !== selection) handleMismatch();
      console.log("Second selection:", selectKey, selection, "counter", counterVar);
      previousKey = null;
    }
  },[keyFlag])

  return (
    <div className="field is-grouped mt-4">
      {(selection === "A" || selection === null) && (
        <button
          onClick={handleNegative}
          className="button is-large is-outlined is-success"
          disabled={selection !== null && counter > 0}
        >
          Not detected
        </button>
      )}
      {(selection === "B" || selection === null) && (
        <button
          onClick={handlePositive}
          className="button is-large ml-4 is-outlined is-danger"
          disabled={selection !== null && counter > 0}
        >
          Detected
        </button>
      )}
      {(selection === "C" || selection === null) && (
        <button
          onClick={handleInvalid}
          className="button is-large ml-4 is-outlined is-warning"
          disabled={selection !== null && counter > 0}
        >
          Incomplete
        </button>
      )}
    </div>
  );
};
export default ResultOptions;
