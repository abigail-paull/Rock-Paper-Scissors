import { useState } from "react";
import "./App.css";
import Intro from "./Intro";
import ScoreBoard from "./ScoreBoard";
import Game from "./Game";
import AwaitingResult from "./AwaitingResult";


function App() {
  const [start, setgamestart] = useState(false);
  const [playerScore, setPlayerScore] = useState(0);
  const [computerScore, setComputerScore] = useState(0);
  const [result, setResult] = useState(""); // "You Win", "You Lose", or "It's a Draw"
  const [playerChoice, setPlayerChoice] = useState("");
  const [computerChoice, setComputerChoice] = useState("");

  const choices = ["rock", "paper", "scissors"]; // Game choices

  // Function to start a round
  const playRound = (playerPick) => {
    const computerPick = choices[Math.floor(Math.random() * choices.length)];
    setPlayerChoice(playerPick);
    setComputerChoice(computerPick);

    if (playerPick === computerPick) {
      setResult("It's  a  Draw");
    } else if (
      (playerPick === "rock" && computerPick === "scissors") ||
      (playerPick === "scissors" && computerPick === "paper") ||
      (playerPick === "paper" && computerPick === "rock")
    ) {
      setResult("You Win");
      setPlayerScore((prev) => prev + 1);
    } else {
      setResult("You Lose");
      setComputerScore((prev) => prev + 1);
    }
  };

  const playAgain = () => {
    setResult(""); // Reset the result
    setPlayerChoice("");
    setComputerChoice("");
  };

  if (start) {
    return (
      <>
       <ScoreBoard playerScore={playerScore} computerScore={computerScore} />
       
       {result ? (
        <AwaitingResult
          result={result}
          playAgain={playAgain}
          playerChoice={playerChoice}
          computerChoice={computerChoice}
        />
      ) : (
        <main className="game-options">
          <h2 className="choices">Pick  Your  Choice:</h2>
          <button onClick={() => playRound("rock")} className="k">Rock</button>
          <button onClick={() => playRound("paper")}>Paper</button>
          <button onClick={() => playRound("scissors")}>Scissors</button>
        </main>
      )}
   
      <Game/>
      </>
    
    ); 
    
    } 

  return (
    <>
      
        
          
        
      
    
     

      <Intro start={setgamestart}/>
      
    </>
    
  );
}

export default App;





















//    if (start) {
//      return (
//        <>
//        <ScoreBoard  />
//        <Game />
    
       
//        </>
     
//      ); 
     
//      } 
   
//      return (
        
    
        
     

    
      
//      <main>
//        <Intro start={setgamestart} />
     
//      </main>
    
    
    
//      );
//      }
       
    
           
       
      


     
//      export default App;
     
     
     
     
     
     
     
     
     
     
     
     
   
     
     
        
        
        
        
  

  
  
    
       
  

  
  
  
   
  
