import logo from './logo.svg';
import './App.css';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';

function App() {
  return (
    <div className="App">
      <body className="App-body">
        <div className="App-logo">
          <img src="http://localhost:3000/Logo.png"></img>
        </div>
            <div className="question-panel">
                <iframe className="twitch-iframe" title='twitch' src="https://player.twitch.tv/?channel=musiciscode&parent=localhost" frameborder="0" allowfullscreen="true" scrolling="no" height="378" width="620"></iframe>
                <div className="question-number">Question 1</div>
                <div className="question">What is the symbol for the EOS Blockchain?</div>
                <div className="answers">
                  <Grid container p={5} rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                    <Grid item xs={12} md={6}>
                    <Button variant="outlined" class="answer-button">Chestahedron</Button>
                    </Grid>
                    <Grid item xs={12} md={6}>
                    <Button variant="outlined" class="answer-button">Chestahedron</Button>
                    </Grid>
                    <Grid item xs={12} md={6}>
                      <Button variant="outlined" class="answer-button">Chestahedron</Button>
                    </Grid>
                    <Grid item xs={12} md={6}>
                    <Button variant="outlined" class="answer-button">Chestahedron</Button>
                    </Grid>
                  </Grid>
                </div>
            </div>
       
      </body>
    </div>
  );
}

export default App;
