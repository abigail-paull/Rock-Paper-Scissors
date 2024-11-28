import React from "react";
import rock from "./assets/fist-svgrepo-com.svg";
import paper from "./assets/hand-svgrepo-com.svg";
import scissors from "./assets/two-fingers-svgrepo-com.svg";

const AwaitingResult = ({ result, playAgain, playerChoice, computerChoice }) => {

  const images = {
    rock: rock,
    paper: paper,
    scissors: scissors,
  };
  const capitalize = (choice)=>
    choice.charAt(0).toUpperCase()+choice.slice(1);
  

  return (
    <>
    <main className="selection_container">
      <section>
        <h2>You Picked</h2>
        <p className="cap_1">{capitalize(playerChoice)}</p>
        <div className={`option ${playerChoice} selection`}>
          <img src={images[playerChoice]} alt={playerChoice}  />
        </div>
      </section>
          
         
          
            
          
          
      <section>
        <h1>{result}</h1>
        <button onClick={playAgain} className="btn">Play Again</button>
      </section>
      <section>
        <h2>Computer Picked </h2>
        <p className="cap_2">{capitalize(computerChoice)}</p>
        <div className={`option ${computerChoice}  selection`}>
          <img src={images[computerChoice]} alt={computerChoice} />
          <p>{capitalize(computerChoice)}</p>
        </div>
      </section>
    </main>
    
         
           
    </>    
  );
};

export default AwaitingResult;







