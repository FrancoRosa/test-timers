import { useEffect } from "react";

const ResultOptions = ({ handleNegative, handlePositive, handleInvalid }) => {
  useEffect(()=>{
    const buttonHandler = (e) => {
      const key = e.key
      const numbers = /\d/
      if (key.length === 1 && !numbers.test(key)) {
        if (key === 'A') handleNegative();
        if (key === 'B') handlePositive();
        if (key === 'C') handleInvalid();
      }
      if (key === "F5") e.preventDefault();
    };

    document.addEventListener("keydown", buttonHandler);
    
    return () => {
      document.removeEventListener("keydown", buttonHandler);
    }

// eslint-disable-next-line
  },[])

  return (
    <div className="field is-grouped mt-4">
      <button
        onClick={handleNegative}
        className="button is-large is-outlined is-success"
      >
        Negative
      </button>
      <button
        onClick={handlePositive}
        className="button is-large ml-4 is-outlined is-danger"
      >
        Positive
      </button>
      <button
        onClick={handleInvalid}
        className="button is-large ml-4 is-outlined is-warning"
      >
        Invalid
      </button>
    </div>
  );
};
export default ResultOptions;
