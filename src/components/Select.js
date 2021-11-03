import PropTypes from 'prop-types';

// Componente para selecionar um ou todos estados
const Select = ({ states, setActiveState }) => {
  
  function handleChange (event) {
    // Busca qual estado esta atualmente selecionado
    const actual = states.find(
      state => state.uf === event.target.value
    );
    // Seta o estado selecionado
    setActiveState(actual);
  }
  
  return (
    <select
      className="form-select"
      onChange={ handleChange }
    >
      <option>Todos os estados</option>
      { /*
        percorre todos os estados e cria um option pra cada um
      */ }
      { states.map(state => (
        <option
          key={ state.uf }
          value={ state.uf }
        >
          { state.state }
        </option>
      )) }
    </select>
  );
  
};

Select.propTypes = {
  states: PropTypes.array.isRequired,
  setActiveState: PropTypes.func.isRequired
};

export default Select;
