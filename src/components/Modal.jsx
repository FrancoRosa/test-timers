const Modal = ({ active, setActive, title, confirm, setAction }) => {
  return (
    <div className={`modal ${active && "is-active"}`}>
      <div className="modal-background"></div>
      <div className="modal-card">
        <header className="modal-card-head">
          <p className="modal-card-title">{title}</p>
        </header>

        <footer className="modal-card-foot is-flex-end">
          <button
            className="button is-success is-outlined"
            onClick={() => setAction()}
          >
            {confirm}
          </button>
          <button className="button" onClick={() => setActive(false)}>
            Cancel
          </button>
        </footer>
      </div>
    </div>
  );
};

export default Modal;
