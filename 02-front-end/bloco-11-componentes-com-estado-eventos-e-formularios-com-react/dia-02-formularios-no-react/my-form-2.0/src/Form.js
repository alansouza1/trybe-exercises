import React from 'react';
import './Form.css';

class Form extends React.Component {
  constructor() {
    super();

    this.handleChange = this.handleChange.bind(this);
    this.handleError = this.handleError.bind(this);
    this.handleBlur = this.handleBlur.bind(this);
    this.handleMouseEnter = this.handleMouseEnter.bind(this);
    this.showData = this.showData.bind(this);
    this.clearAll = this.clearAll.bind(this);

    this.state = {
      name: '',
      email: '',
      cpf: '',
      address: '',
      city: '',
      state: '',
      type: '',
      formWithErrors: true,
      resume: '',
      post: '',
      description: '',
      hasAlerted: false,
      data: '',
    }
  }

  clearAll() {
    this.setState({
      name: '',
      email: '',
      cpf: '',
      address: '',
      city: '',
      state: '',
      type: '',
      formWithErrors: true,
      resume: '',
      post: '',
      description: '',
      data: '',
    })
  }

  showData() {
    const { name, email, cpf, address, city, state, type, formWithErrors, resume, post, description } = this.state;
    if (!formWithErrors) {
      this.setState({
        data: (
          <div>
            <p>Nome: {name}</p>
            <p>Email: {email}</p>
            <p>CPF: {cpf}</p>
            <p>Endereço: {address}</p>
            <p>Cidade: {city}</p>
            <p>Estado: {state}</p>
            <p>Tipo: {type}</p>
            <p>Resumo do currículo: {resume}</p>
            <p>Cargo: {post}</p>
            <p>Descrição do cargo: {description}</p>
          </div>
        ),
      })
    } else {
      this.setState({
        data: (<span>Preencha todos os campos!</span>),
      })
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
    if (name === 'address' && value.length > 0) {
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
    const { name, email, cpf, address, city, state, resume, post, description, data } = this.state;

    return (
      <div>
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
                <option value='Acre'>Acre</option>
                <option value='Alagoas'>Alagoas</option>
                <option value='Amapá'>Amapá</option>
                <option value='Amazonas'>Amazonas</option>
                <option value='Bahia'>Bahia</option>
                <option value='Ceará'>Ceará</option>
                <option value='Distrito Federal'>Distrito Federal</option>
                <option value='Espírito Santo'>Espírito Santo</option>
                <option value='Goiás'>Goiás</option>
                <option value='Maranhão'>Maranhão</option>
                <option value='Mato Grosso'>Mato Grosso</option>
                <option value='Mato Grosso do Sul'>Mato Grosso do Sul</option>
                <option value='Minas Gerais'>Minas Gerais</option>
                <option value='Pará'>Pará</option>
                <option value='Paraíba'>Paraíba</option>
                <option value='Paraná'>Paraná</option>
                <option value='Pernambuco'>Pernambuco</option>
                <option value='Piauí'>Piauí</option>
                <option value='Rio de Janeiro'>Rio de Janeiro</option>
                <option value='Rio Grande do Norte'>Rio Grande do Norte</option>
                <option value='Rio Grande do Sul'>Rio Grande do Sul</option>
                <option value='Rondônia'>Rondônia</option>
                <option value='Roraima'>Roraima</option>
                <option value='Santa Catarina'>Santa Catarina</option>
                <option value='São Paulo'>São Paulo</option>
                <option value='Sergipe'>Sergipe</option>
                <option value='Tocantins'>Tocantins</option>
              </select>
            </label>
            <fieldset>
              <legend>Tipo</legend>
              <label htmlFor='house'>
                <input name='type' id='house' type='radio' value='Casa' onChange={this.handleChange} />
                Casa
              </label>
              <label htmlFor='ap'>
                <input name='type' id='ap' type='radio' value='Apartamento' onChange={this.handleChange} />
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
        <button onClick={ this.showData }>Mostrar Dados</button>
        <button onClick={ this.clearAll }>Limpar</button>
        <br/>
        { data }
      </div>
    );
  }
}

export default Form;
