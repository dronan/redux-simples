import logo from './logo.svg';
import './App.css';
import Card from './components/Card';

function App() {
  return (
    <div className="App">
      <h1>Exercício React-Redux (Simples)</h1>
        <div className='linha'>
          <Card title="Card 1" red>oi</Card>
          <Card title="Card 2" green>oi</Card>
          <Card title="Card 3" blue>oi</Card>
          <Card title="Card 4" purple>oi</Card>
        </div>
        <div className='linha'>
          <Card title="Card 2">
            oi
          </Card>
        </div>
    </div>
  );
}

export default App;
