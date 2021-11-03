import { useRef } from 'react';
import { validateForm } from '../utils/forms';

// Form componente de visualização
const Form = () => {
  // Refs dos inputs
  // Poderia ter usado também metodos change nos input's
  const inputStateRef = useRef(null);
  const inputCasesRef = useRef(null);
  const inputConfirmedRef = useRef(null);
  const inputDeathsRef = useRef(null);
  const inputRecoveryRef = useRef(null);
  const inputDateRef = useRef(null);

  // Manipula o evento de envio do formulário
  function handleSubmit (event) {
    // Previne o comportamento padrão do form
    event.preventDefault()
    const state = inputStateRef.current;
    const cases = inputCasesRef.current;
    const confirmed = inputConfirmedRef.current;
    const deaths = inputDeathsRef.current;
    const recovery = inputRecoveryRef.current;
    const date = inputDateRef.current;
      
    const fields = [
      state, cases, confirmed, deaths, recovery, date
    ];

    // Valida o form e retorna os valores
    if (validateForm(fields)) {
      console.log({
        estado: state.value,
        casos: cases.value,
        confirmados: confirmed.value,
        mortes: deaths.value,
        recuperados: recovery.value,
        data: date.value 
      });
    }
    
  }
  
  return (
    <div className="">
      <form
        onSubmit={ handleSubmit }
      >
        <div className="mb-3">
          <input
            type="text"
            placeholder="Estado"
            className="form-control"
            ref={ inputStateRef }
          />
        </div>
        <div className="mb-3">
          <input
            type="number"
            placeholder="Número de casos"
            className="form-control"
            ref={ inputCasesRef }
          />
        </div>
        <div className="mb-3">
          <input
            type="number"
            placeholder="Casos Confirmados"
            className="form-control"
            ref={ inputConfirmedRef }
          />
        </div>
        <div className="mb-3">
          <input
            type="number"
            placeholder="Mortes"
            className="form-control"
            ref={ inputDeathsRef }
          />
        </div>
        <div className="mb-3">
          <input
            type="number"
            placeholder="Recuperados"
            className="form-control"
            ref={ inputRecoveryRef }
          />
        </div>
        <div className="mb-3">
          <input
            type="date"
            className="form-control"
            ref={ inputDateRef }
          />
        </div>
        <div className="">
          <button
            className="btn btn-success w-100"
            type="submit"
          >
            Send
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;
