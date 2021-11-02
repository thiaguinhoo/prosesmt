const Form = (props) => {
  
  function handleChange (event) {
    
  }

  function handleSubmit (event) {
    event.preventDefault()
  }
  
  return (
    <div className="">
      <form onSubmit={ handleSubmit }>
        <div className="mb-3">
          <input
            type="text"
            placeholder="Estado"
            className="form-control"
          />
        </div>
        <div className="mb-3">
          <input
            type="number"
            placeholder="Número de casos"
            className="form-control"
          />
        </div>
        <div className="mb-3">
          <input
            type="number"
            placeholder="Casos Confirmados"
            className="form-control"
          />
        </div>
        <div className="mb-3">
          <input
            type="number"
            placeholder="Mortes"
            className="form-control"
          />
        </div>
        <div className="mb-3">
          <input
            type="number"
            placeholder="Recuperados"
            className="form-control"
          />
        </div>
        <div className="mb-3">
          <input
            type="date"
            className="form-control"
          />
        </div>
        <div className="">
          <button
            className="btn btn-success w-100"
            type="submit"
          >
            Send
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;
