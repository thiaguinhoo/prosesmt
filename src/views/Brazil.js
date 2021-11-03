import { useState, useEffect } from 'react';
import Select from '../components/Select';
import AllStates from '../components/AllStates';
import State from '../components/State';
import axios from 'axios';

// Brasil componente de visualização
const Brazil = () => {
  // Armazena todos os estados
  const [ allStates, setAllStates ] = useState([]);
  // Armazena o estado selecionado
  const [ activeState, setActiveState ] = useState(null);

  // Busca todos os estados na montagem do componente
  useEffect(() => {
    const fetch = async () => {
      const response = await axios
        .get('https://covid19-brazil-api.now.sh/api/report/v1');
      const json = response.data;
      // Seta a variavel allStates
      setAllStates(json.data);
    };
    fetch();
  }, []);
  
  return (
    <div>
      { /*
        Select componente pra selecionar um ou todos estados
      */ }
      <Select
        states={ allStates }
        setActiveState={ setActiveState }
      />
      
      { /* Se não tem estado selecionado renderize todos */}
      { !activeState && <AllStates states={ allStates } /> }

      { /* Se tem estado selecionado renderize ele */ }
      { activeState && (
        <div className="mt-4">
          <State state={ activeState } />
        </div>
      ) }
    </div>
  );
  
}

export default Brazil;
