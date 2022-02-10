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
    const commands =  /^[#|$|%]$/;
    return commands.test(key);
  }

  useEffect(() => {
    const buttonHandler = (e) => {
      const key = e.key;

      if (isCommand(key)) {
        setSelectKey(key);
        setKeyFlag(Date.now())
        if (previousKey === null) {
          // eslint-disable-next-line
            previousKey = key;
            setSelection(key);
            setMessage("Press again to confirm:");
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
      // eslint-disable-next-line
      counterVar=counter-1
    }
    else {
      setCounter(3);
      // eslint-disable-next-line
      counterVar=3;
    }
  }, [time])

  useEffect(()=>{
    if (counter <= 0 && isCommand(selectKey)) {
      if (selectKey === "#" && selection === "#") handleNegative();
      if (selectKey === "$" && selection === "$") handlePositive();
      if (selectKey === "%" && selection === "%") handleInvalid();
      if (selectKey !== selection) handleMismatch();
    }
    // eslint-disable-next-line
  },[keyFlag])

  return (
    <div className="field is-grouped mt-4">
      {(selection === "#" || selection === null) && (
        <button
          // onClick={handleNegative}
          className="button is-large is-outlined is-success"
          disabled={selection !== null && counter > 0}
        >
          Not detected
        </button>
      )}
      {(selection === "$" || selection === null) && (
        <button
          // onClick={handlePositive}
          className="button is-large ml-4 is-outlined is-danger"
          disabled={selection !== null && counter > 0}
        >
          Detected
        </button>
      )}
      {(selection === "%" || selection === null) && (
        <button
          // onClick={handleInvalid}
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
