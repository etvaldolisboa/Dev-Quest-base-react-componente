import './App.css';
import TextFormatter from './component/textFormated/textFormatter.js';
import Button from './component/button/button.js';

function App() {
  return (
    <div className="App">
      <header className="App-header">

        <TextFormatter>
          esse eh um texto exemplo para ser renderizado em roxo claro com o componente Reacte TextFormatter.
        </TextFormatter>

        <Button label='Click-me' />
          
      </header>
    </div>
  );
}

export default App;

// console.log(Button);