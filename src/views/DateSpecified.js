import { useState, useRef, useEffect } from 'react';
import axios from 'axios';

import AllStates from '../components/AllStates';
import Error from '../components/Error';

import { validateForm } from '../utils/forms';

// DateSpecified componente de visualização
const DateSpecified = () => {
  // Armazena o valor da data
  // e pra ser usada como gatilho no hook do useEffect
  const [ date, setDate ] = useState(null);
  // Armazena os estados
  const [ states, setStates ] = useState([]);
  // Variável pra salvar caso ocorra um erro
  const [ error, setError ] = useState(false);
  // Referência para o input que irá armazenar a data
  const inputDateRef = useRef(null);
  
  useEffect(() => {
    const fetch = async () => {
      if (!date) return;
      // Remove '-' pra usar na busca na API
      const dateNormalized = date.replaceAll('-', '');
      const response = await axios
        .get(`https://covid19-brazil-api.now.sh/api/report/v1/brazil/${ dateNormalized }`);
      const json = response.data
      // Seta os estados
      setStates(json.data)
      // Se retorna um array com 1 item ou mais remove o erro
      // Se o mesmo estivesse setado, caso contrário seto o erro
      if (json.data.length > 0) {
        setError(false);
      } else {
        setError(true);
      }
    }
    fetch();
  }, [date]);
  
  function handleClick (event) {
    // Se o campo data não estiver preenchido
    // Retorno sem fazer nada, caso contrário seto a data
    if (validateForm([inputDateRef.current])) {
      setDate(inputDateRef.current.value);
    }
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
