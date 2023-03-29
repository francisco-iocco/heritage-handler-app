import { useEffect, useState } from "react";
import StyledPresentation from "./styles";

const initialWords = [
  "Efficient",
  "Productive",
  "Useful",
  "Practical",
  "Awesome",
  "Helpful",
  "Amazing",
  "Unique",
  "Magnificient",
  "Free"
];

export default function Presentation({ showModal }) {
  const [words, setWords] = useState(initialWords.slice(0, 2));

  useEffect(() => {
    setInterval(() => {
      if(!showModal) {
        const newWords = [];
        while(newWords.length < 2) {
          const newWord = initialWords[(Math.random() * 9).toFixed(0)];
          if(newWords.includes(newWord)) continue;
          newWords.push(newWord);
        }
        setWords(newWords);
      }
    }, 20000);
  }, []);
  
  return (
    <StyledPresentation showModal={showModal}>
      <div className="title-container">
        <header>
          <svg viewBox="0 0 100 100" className="strokes">
            <line
              stroke="white"
              x1="50"
              y1="5"
              x2="50"
              y2="25"
              strokeWidth="0.5"
            />
            <line
              stroke="white"
              x1="50"
              y1="75"
              x2="50"
              y2="95"
              strokeWidth="0.5"
            />
          </svg>
          <h1>
            <span>Heritage</span> 
            <span>Handler</span> 
            <span>App</span>
          </h1>
          <span>{words[0]}</span>
          <span>{words[1]}</span>
        </header>
      </div>
      <div className="summary-container">
        <p>Make notes, keep a record about your activity, be aware of how you are spending your money!</p>
      </div>
    </StyledPresentation>
  );
}
