import './App.css';

const Task = (value) => {
  return (
    <li>{value}</li>
  );
};

const compromissos = ['Acordar', 'Escovar os dentes', 'Tomar café', 'Ir estudar'];

function App() {
  return (
    compromissos.map(tarefa => Task(tarefa))
  );
}

export default App;
