import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      
      <header className="App-header">
        <div className="App-logo">
          <img src="http://localhost:3000/Logo.png"></img>
        </div>

       <div className="question-panel">

            <iframe title='twitch' src="https://player.twitch.tv/?channel=musiciscode&parent=localhost" frameborder="0" allowfullscreen="true" scrolling="no" height="378" width="620"></iframe>
            <div className="question-number">Question 1</div>
            <div className="question">What is the symbol for the EOS Blockchain?</div>
            <div className="answers"></div>

        </div>
      </header>
    </div>
  );
}

export default App;
