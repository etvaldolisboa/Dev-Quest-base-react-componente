import './App.css';
import TextEdiction from './component/ediction/text_ediction.js';

function App() {
  return (
    <div className="App">
      <header className="App-header">

        <TextEdiction>
          esse eh um texto exemplo para ser renderizado apenas a primeira linha em vermelho e restante do texto em roxo claro.
        </TextEdiction>
      </header>
    </div>
  );
}

export default App;
