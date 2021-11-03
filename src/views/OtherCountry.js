import { useState, useEffect, useRef } from 'react';
import axios from 'axios';

import Error from '../components/Error';

import { validateForm } from '../utils/forms';

const OtherCountry = () => {
  // Ref que aponta para o input de texto
  // que armazena o valor do estado
  const inputRef = useRef(null);
  // Armazena o país em si
  const [ country, setCountry ] = useState(null);
  // Caso ocorra em erro seta essa variavel
  const [ error, setError ] = useState(false);
  
  async function handleClick (event) {
    // Se o formulário não for válido retorno sem fazer nada
    if (!validateForm([inputRef.current])) {
      return;
    }
    // Pego o campo value do input
    const { value } = inputRef.current;
    // Retorna caso não esteja prenchido o dado
    if (!value) return;
    const url = `https://covid19-brazil-api.now.sh/api/report/v1/${value.toLowerCase()}`;
    const response = await axios.get(url);
    const json = response.data;
    
    // Verifica se o objeto está vazio
    function isEmpty(obj) {
      return Object.keys(obj).length === 0;
    }

    // Se estiver vazio seto o erro
    // Caso contrário seto o país
    if (isEmpty(json.data)) {
      setError(true);
    } else {
      setError(false);
      setCountry(json.data);
    }
  }
  
  // Dou foco ao componente na sua montagem
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
        <button
          className="btn btn-success w-100"
          onClick={ handleClick }
        >
          Search
        </button>
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
