import { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import Error from './Error';

const OtherCountry = (props) => {
  
  const inputRef = useRef(null);
  const [ country, setCountry ] = useState(null);
  const [ error, setError ] = useState(false);
  
  async function handleClick (event) {
 
    const { value } = inputRef.current;
    if (!value) return;
    const url = `https://covid19-brazil-api.now.sh/api/report/v1/${value.toLowerCase()}`;
    const response = await axios.get(url);
    const json = response.data;
    
    function isEmpty(obj) {
      return Object.keys(obj).length === 0;
    }   
    if (isEmpty(json.data)) {
      setError(true);
    } else {
      setError(false);
      setCountry(json.data);
    }
  }
  
  useEffect(() => {
    inputRef.current.focus();
  }, []);
  
  return (
    <div className="">
      <div className="">
        <input
          type="text"
          ref={ inputRef }
          placeholder="País"
          className="form-control"
        />
      </div>
      <div className=" mt-3">
        <button className="btn btn-success w-100" onClick={ handleClick }>Search</button>
      </div>
      { !error && country && (
        <div className="card text-center mx-auto mt-3" style={{ width: '18rem' }}>
        <div className="card-header">
          <h4>{ country.country }</h4>
        </div>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">
              { country.confirmed } <span className="text-warning">
                CASOS
              </span>
          </li>
          <li className="list-group-item">
            { country.deaths } <span className="text-danger">
              MORTES
            </span>
          </li>
        </ul>
      </div>
      ) }
      { error && <Error message="Desculpe, esse país não possui dados." /> }
    </div>
  );
}


export default OtherCountry;
