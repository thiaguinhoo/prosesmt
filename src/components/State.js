const State = (props) => {

  const { state } = props;
  
  return (
    <div className="card text-center mx-auto" style={{ width: '18rem' }}>
      <div className="card-header">
        <h5>{ state.state.toUpperCase() }</h5>
      </div>
      <ul className="list-group list-group-flush">
        <li
          className="list-group-item"
        >
          { state.cases } <span className="text-warning">
            CASOS
          </span>
        </li>
        <li
          className="list-group-item"
        >
          { state.deaths } <span className="text-danger">
            MORTES
          </span>
        </li>
        <li
          className="list-group-item"
        >
          { state.suspects } <span className="text-info">
            SUSPEITAS
          </span>
        </li>
      </ul>
    </div>
  );
  
};

export default State;
