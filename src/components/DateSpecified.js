import { useState, useRef, useEffect } from 'react';
import axios from 'axios';

import AllStates from './AllStates';
import Error from './Error';

const DateSpecified = (props) => {
  
  const [ date, setDate ] = useState(null);
  const [ states, setStates ] = useState([]);
  const [ error, setError ] = useState(false);
  const inputDateRef = useRef(null);
  
  useEffect(() => {
    const fetch = async () => {
      if (!date) return;
      const dateNormalized = date.replaceAll('-', '');
      const response = await axios
        .get(`https://covid19-brazil-api.now.sh/api/report/v1/brazil/${ dateNormalized }`);
      const json = response.data
      setStates(json.data)
      if (json.data.length > 0) {
        setError(false);
      } else {
        setError(true);
      }
    }
    fetch();
  }, [date]);
  
  function handleClick (event) {
    if (!inputDateRef.current.value) return
    setDate(inputDateRef.current.value);
  }
  
  return (
    <div className="">
      <div className="mb-3">
        <input 
          className="form-control"
          type="date"
          ref={ inputDateRef }
        />
      </div>
      <div className="d-grid">
        <button
          className="btn btn-primary"
          onClick={ handleClick }
        >
          Search
        </button>
      </div>
      { error && <Error message="Não existem dados para essa data em específico." /> }
      { states.length > 0 && <AllStates states={ states } /> }
    </div>
  );
};

export default DateSpecified;
