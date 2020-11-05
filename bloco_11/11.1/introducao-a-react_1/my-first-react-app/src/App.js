import './App.css';

const commitments = [
  'Estudar', 
  'Trabalhar', 
  'Cozinhar', 
  'Lavar louça', 
  'Limpar a casa'
];

const task = (value) => {
  return (
    value.map(commitment => <li>{commitment}</li>)
  );
}

function App() {
  return (
    task(commitments)
  );
}

export default App;
