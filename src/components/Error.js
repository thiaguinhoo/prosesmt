import PropTypes from 'prop-types';

// Renderiza um mensagem de erro
const Error = ({ message }) => {
  return (
    <h3 className="mt-3 text-center text-danger">{ message }</h3>
  )
};

Error.propTypes = {
  message: PropTypes.string.isRequired
};

export default Error;
