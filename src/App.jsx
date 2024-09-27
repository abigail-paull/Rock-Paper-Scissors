import { useState } from "react";
import "./App.css";
import Intro from "./Intro";
import ScoreBoard from "./ScoreBoard";

import Game from "./Game";
import AwaitingResult from "./AwaitingResult";

function App() {

  const [start, setgamestart] = useState(false);
  
  if (start) {
    return (
      <>
      <ScoreBoard  />
      <Game  />
      </>
    ); 

    } 
  
    return (
    
    <main>
      <Intro start={setgamestart} />
      <AwaitingResult/>
    </main>
    );
    }
    
    export default App;
    
    
    
    
    
    
    
    
    
    
    
    
  
    
    
  
   
  

  
  

    
  
    
