import { useState, useEffect } from 'react';
import Select from './Select';
import AllStates from './AllStates';
import State from './State';
import axios from 'axios';

const Brazil = (props) => {
  
  const [ allStates, setAllStates ] = useState([]);
  const [ activeState, setActiveState ] = useState(null);

  useEffect(() => {
    const fetch = async () => {
      const response = await axios
        .get('https://covid19-brazil-api.now.sh/api/report/v1');
      const json = response.data;
      setAllStates(json.data);
    };
    fetch();
  }, []);
  
  return (
    <div>
      <Select
        states={ allStates }
        setActiveState={ setActiveState }
      />
      { !activeState && <AllStates states={ allStates } /> }
      { activeState && (
        <div className="mt-4">
          <State state={ activeState } />
        </div>
      ) }
    </div>
  );
  
}

export default Brazil;
