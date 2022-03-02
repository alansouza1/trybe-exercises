import './App.css';

const Task = (value) => {
  return (
    <li key={value}>{value}</li>
  );
};

const compromissos = ['Acordar', 'Escovar os dentes', 'Tomar café', 'Ir estudar'];

function App() {
  return (
    <ul>{compromissos.map(tarefa => Task(tarefa))}</ul>
  );
}

export default App;
