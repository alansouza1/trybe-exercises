import React from 'react';
import './Form.css';

class Form extends React.Component {
  constructor() {
    super();

    this.handleChange = this.handleChange.bind(this);
    this.handleError = this.handleError.bind(this);
    this.handleBlur = this.handleBlur.bind(this);
    this.handleMouseEnter = this.handleMouseEnter.bind(this);

    this.state = {
      name: '',
      email: '',
      cpf: '',
      address: '',
      city: '',
      state: '',
      type: '',
      formWithErrors: false,
      resume: '',
      post: '',
      description: '',
      hasAlerted: false,
    }
  }

  handleMouseEnter() {
    const { hasAlerted } = this.state;

    if (!hasAlerted) {
      alert('Preencha com cuidado esta informação.');
      this.setState({ hasAlerted: true })
    }
  }

  handleBlur() {
    const { city } = this.state;
    const numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
    const startWithNumber = numbers.find((number) => number === city[0]);
    if (startWithNumber) {
      this.setState({
        city: '',
      }, () => this.handleError())
    }
  }

  handleError() {
    const { name, email, cpf, address, city, state, type, resume, post, description } = this.state;

    const errorCases = [
      (!name.length || name.length > 40),
      (!email.length || email.length > 50),
      (!cpf.length || cpf.length > 11),
      (!address.length || address.length > 200),
      (!city.length || city.length > 28),
      (!state.length),
      (!type.length),
      (!resume.length || resume.length > 1000),
      (!post.length || post.length > 40),
      (!description.length || description.length > 500),
    ];

    const isFormFull = errorCases.every((error) => error !== true);

    this.setState({
      formWithErrors: !isFormFull,
    });
  }

  handleChange({ target }) {
    const { name, type } = target;
    let value = type === 'checkbox' ? target.checked : target.value;
    if (name === 'email' && value.length > 0) {
      const numbersAndLetters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
      const hasNoSpecialCharacter = numbersAndLetters.find((character) => character === value[value.length - 1].toLowerCase());

      if (hasNoSpecialCharacter) {
        this.setState({
          [name]: name === 'name' ? value.toUpperCase() : value,
        }, () => this.handleError());
      }
    } else {
      this.setState({
        [name]: name === 'name' ? value.toUpperCase() : value,
      }, () => this.handleError());
    }
  }

  render() {
    const { name, email, cpf, address, city, state, resume, post, description } = this.state;

    return (
      <form>
        <fieldset className='form'>
          <legend>Preencha:</legend>
          <label htmlFor='name'>
            Nome:
            <input id='name' name='name' type='text' value={name} onChange={this.handleChange} />
          </label>
          <label htmlFor='email'>
            Email:
            <input id='email' name='email' type='text' value={email} onChange={this.handleChange} />
          </label>
          <label htmlFor='cpf'>
            CPF:
            <input id='cpf' name='cpf' type='text' value={cpf} onChange={this.handleChange} />
          </label>
          <label htmlFor='address'>
            Endereço:
            <input id='address' name='address' type='text' value={address} onChange={this.handleChange} />
          </label>
          <label htmlFor='city'>
            Cidade:
            <input id='city' name='city' type='text' value={city} onChange={this.handleChange} onBlur={this.handleBlur} />
          </label>
          <label htmlFor='state'>
            Estado:
            <select id='state' name='state' value={state} onChange={this.handleChange}>
              <option value='ac'>Acre</option>
              <option value='al'>Alagoas</option>
              <option value='ap'>Amapá</option>
              <option value='am'>Amazonas</option>
              <option value='ba'>Bahia</option>
              <option value='ce'>Ceará</option>
              <option value='df'>Distrito Federal</option>
              <option value='es'>Espírito Santo</option>
              <option value='go'>Goiás</option>
              <option value='ma'>Maranhão</option>
              <option value='mt'>Mato Grosso</option>
              <option value='ms'>Mato Grosso do Sul</option>
              <option value='mg'>Minas Gerais</option>
              <option value='pa'>Pará</option>
              <option value='pb'>Paraíba</option>
              <option value='pr'>Paraná</option>
              <option value='pe'>Pernambuco</option>
              <option value='pi'>Piauí</option>
              <option value='rj'>Rio de Janeiro</option>
              <option value='rn'>Rio Grande do Norte</option>
              <option value='rs'>Rio Grande do Sul</option>
              <option value='ro'>Rondônia</option>
              <option value='rr'>Roraima</option>
              <option value='sc'>Santa Catarina</option>
              <option value='sp'>São Paulo</option>
              <option value='se'>Sergipe</option>
              <option value='to'>Tocantins</option>
            </select>
          </label>
          <fieldset>
            <legend>Tipo</legend>
            <label htmlFor='house'>
              <input name='type' id='house' type='radio' value='house' onChange={this.handleChange} />
              Casa
            </label>
            <label htmlFor='ap'>
              <input name='type' id='ap' type='radio' value='ap' onChange={this.handleChange} />
              Apartamento
            </label>
          </fieldset>
        </fieldset>
        <fieldset className='form'>
          <legend>Último Emprego</legend>
          <label htmlFor='resume'>
            Resumo do currículo:
            <textarea name='resume' id='resume' value={resume} onChange={this.handleChange} />
          </label>
          <label htmlFor='post'>
            Cargo:
            <textarea name='post' id='post' value={post} onChange={this.handleChange} onMouseEnter={this.handleMouseEnter} />
          </label>
          <label htmlFor='description'>
            Descrição do cargo:
            <input type='text' name='description' id='description' value={description} onChange={this.handleChange} />
          </label>
        </fieldset>
      </form>
    );
  }
}

export default Form;
