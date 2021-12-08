const ResultOptions = ({ handleNegative, handlePositive, handleInvalid }) => {
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
