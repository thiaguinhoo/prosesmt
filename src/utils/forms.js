// Insere a classe pra estilo
export const insertClass = (ref, success=true) => {
  if (success) {
    ref.classList.remove('is-invalid')
    ref.classList.add('is-valid')
  } else {
    ref.classList.remove('is-valid');
    ref.classList.add('is-invalid');
  }
};

// Valida um unico campo
export const validate = (ref) => {
  if (ref.value) {
    insertClass(ref)
    return true;
  } else {
    insertClass(ref, false);
    return false;
  }
};

// Valida se todos os campos do formulário foram preenchidos
export const validateForm = (fields) => {
  return fields
    .map(ref => validate(ref)).every(v => v);
};
