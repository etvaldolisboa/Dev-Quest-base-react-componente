import './App.css';
import TextFormatter from './component/ediction/textFormatter.js';

function App() {
  return (
    <div className="App">
      <header className="App-header">

        <TextFormatter>
          esse eh um texto exemplo para ser renderizado em roxo claro com o componente Reacte TextFormatter.
        </TextFormatter>
      </header>
    </div>
  );
}

export default App;
