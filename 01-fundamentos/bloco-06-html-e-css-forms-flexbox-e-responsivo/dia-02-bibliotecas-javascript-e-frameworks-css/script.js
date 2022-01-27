import JustValidate from './node_modules/just-validate/dist/just-validate.es.js';

var picker = new Pikaday({ field: document.getElementById('datepicker') });

const validation = new JustValidate('#form');

validation
  .addField('#user-name', [
    {
      rule: 'minLength',
      value: 10,
      errorMessage: 'O nome deve conter no mínimo 10 caractéres!',
    },
    {
      rule: 'maxLength',
      value: 40,
      errorMessage: 'O nome deve conter no máximo 40 caractéres!',
    },
    {
      rule: 'required',
      errorMessage: 'Digite seu nome!',
    },
  ])
  .addField('#user-email', [
    {
      rule: 'minLength',
      value: 10,
      errorMessage: 'O email deve conter no mínimo 10 caractéres!',
    },
    {
      rule: 'maxLength',
      value: 50,
      errorMessage: 'O email deve conter no máximo 50 caractéres!',
    },
    {
      rule: 'email',
      errorMessage: 'Email inválido!'
    },
    {
      rule: 'required',
      errorMessage: 'Digite seu email!',
    },
  ])
  .addField('#answer', [
    {
      rule: 'maxLength',
      value: 500,
      errorMessage: 'A resposta deve conter no máximo 500 caractéres!',
    },
    {
      rule: 'required',
      errorMessage: 'Digite uma resposta!'
    }
  ])
  .addField('#checkbox', [
    {
      rule: 'required',
      errorMessage: 'Marque a autorização de imagens!',
    }
  ])
  .onFail(function () {
    alert('Dados Inválidos');
  })
  .onSuccess(function () {
    alert('Dados enviados com sucesso! Obrigado por participar do concurso TrybeTrip.');
  });