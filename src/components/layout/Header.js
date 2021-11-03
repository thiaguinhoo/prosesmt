import { Link } from 'react-router-dom';

// Header da página renderiza os botões
// que são encapsulados pelo componente Link pra fazer
// a transição entre as views
const Header = () => {
  
  return (
    <div className="mb-3 row">
      <div className="col-lg-3 col-md-6 col-sm-12 mb-3">
        <Link to="/">
          <button
            type="button"
            className="btn btn-outline-success w-100"
          >
            Brasil
          </button>
        </Link>
      </div>
      <div className="col-lg-3 col-md-6 col-sm-12 mb-3">
        <Link to="/date">
          <button
            type="button"
            className="btn btn-outline-danger w-100"
          >
            Data específica
          </button>
        </Link>
      </div>
      <div className="col-lg-3 col-md-6 col-sm-12 mb-3">
        <Link to="/other-countrys">
          <button
            type="button"
            className="btn btn-outline-warning w-100"
          >
            Outros países
          </button>
        </Link>
      </div>
      <div className="col-lg-3 col-md-6 col-sm-12 mb-3">
        <Link to="/form">
          <button
            type="button"
            className="btn btn-outline-primary w-100"
          >
            Inserir dados
          </button>
        </Link>
      </div>
    </div>
  );
  
};


export default Header;
