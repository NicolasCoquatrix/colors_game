import './App.css';
import { useState } from 'react';
import ColoredSquare from './ColoredSquare.jsx';
import ChoiceButton from './ChoiceButton.jsx';
import ResultText from './ResultText.jsx';
import Score from './Score.jsx';

function generateRandomColor() {
  let n = (Math.random() * 0xfffff * 1000000).toString(16);
  return '#' + n.slice(0, 6);
}

function getRandomIndex(min=0, max=2) {
  return Math.floor(Math.random() * (max + 1 - min) + min);
}

export default function App() {
  const [scoreWon, setScoreWon] = useState(0);
  const [scoreLost, setScoreLost] = useState(0);
  const [scoreTotal, setScoreTotal] = useState(0);
  const [colorSquare, setColorSquare] = useState('#28A745');
  const [colors, setColors] = useState(['#DC3545','#28A745','#FFC107']);
  const [buttonsColors, setButtonsColors] = useState(['#EFEFEF','#EFEFEF','#EFEFEF']);
  const [victory, setVictory] = useState(null);

  const handleClick = (color, colorIndex) => {
    const victory = color === colorSquare;

    const newButtonsColors = buttonsColors.slice();
    newButtonsColors[colorIndex] = color;
    setButtonsColors(newButtonsColors);

    if (victory) {
      setScoreWon(scoreWon + 1);
      setScoreTotal(scoreTotal + 1);

      setButtonsColors(['#EFEFEF', '#EFEFEF', '#EFEFEF']);

      const newColor = generateRandomColor();
      setColorSquare(newColor);

      const newColors = [
        generateRandomColor(),
        generateRandomColor(),
        generateRandomColor(),
      ]
      newColors[getRandomIndex()] = newColor;
      setColors(newColors);
    } else {
      setScoreLost(scoreLost + 1);
      setScoreTotal(scoreTotal - 1);
    }

    setVictory(victory);
  }

  return (
    <>
      <h1 style={{color: colorSquare}}>Colors Game</h1>
      <Score scoreWon={scoreWon} scoreLost={scoreLost} scoreTotal={scoreTotal} />

      <ColoredSquare color={colorSquare} />

      <div>
        <ChoiceButton 
          color={colors[0]}
          buttonColor={buttonsColors[0]}
          onClick={() => handleClick(colors[0], 0)}
        />

        <ChoiceButton 
          color={colors[1]}
          buttonColor={buttonsColors[1]}
          onClick={() => handleClick(colors[1], 1)}
        />

        <ChoiceButton 
          color={colors[2]}
          buttonColor={buttonsColors[2]}
          onClick={() => handleClick(colors[2], 2)}
        />
      </div>

        <ResultText victory={victory} />
    </>
  )
}
