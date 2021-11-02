const Select = (props) => {
  
  const { states } = props;
  
  function handleChange (event) {
    const actual = states.find(
      state => state.uf === event.target.value
    );
    props.setActiveState(actual);
  }
  
  return (
    <select
      className="form-select"
      onChange={ handleChange }
    >
      <option>Todos os estados</option>
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

export default Select;
