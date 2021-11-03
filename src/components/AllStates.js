import PropTypes from 'prop-types';

import State from './State';

// Componente que renderiza todos os estados
const AllStates = ({ states }) => {
  return (
    <div className="mt-3 row">
      { /*
        Percorre todos os estados e 
        cria um componente State pra cada um
      */ }
      { states.map(state => (
        <div key={ state.uf } className="col-lg-4 col-md-6 col-sm-12 my-3">
          <State state={ state } />
        </div>
      )) }
    </div>
  );
};

AllStates.propTypes = {
  states: PropTypes.array.isRequired
};

export default AllStates;