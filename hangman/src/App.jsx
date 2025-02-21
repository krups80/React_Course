import clsx from "clsx";
import { useState } from "react";
import Confetti from 'react-confetti';
import { languages } from "./components/language";
import { chooseRandomWord, getFarewellText } from "./components/util";

function App() {
  const [currentWord, setCurrentWord] = useState(() => chooseRandomWord());
  const letterString = "abcdefghijklmnopqrstuvwxyz";
  const [guessLetter, setGuessLetter] = useState([]);

  const wrongGuessCount = guessLetter.filter(
    (letter) => !currentWord.includes(letter)
  ).length;

  const isGameLost = wrongGuessCount >= languages.length - 1;
  const isGameWon = currentWord
    .split("")
    .every((letter) => guessLetter.includes(letter));
  const isGameOver = isGameWon || isGameLost;

  const wordElements = currentWord.split("").map((letter, index) => {
    const lostWords = isGameLost && !guessLetter.includes(letter) ? "wrong" : null
    return (
      <span className={lostWords} key={index}>
        {(guessLetter.includes(letter) || isGameLost) && letter.toUpperCase()}
      </span>
    );
  });

  const keyboardElements = letterString.split("").map((keys) => {
    const isGuessed = guessLetter.includes(keys);
    const isCorrect = isGuessed && currentWord.includes(keys);
    const isWrong = isGuessed && !currentWord.includes(keys);
    const classValue = clsx({
      right: isCorrect,
      wrong: isWrong,
    });
    return (
      <button
        className={classValue}
        key={keys}
        disabled={isGameOver}
        aria-disabled={guessLetter.includes(keys)}
        aria-label={`Letter ${keys}`}
        onClick={() => addGuessLetters(keys)}
      >
        {keys.toUpperCase()}
      </button>
    );
  });

  const languageElements = languages.map((lang, index) => {
    const styles = {
      backgroundColor: lang.backgroundColor,
      color: lang.color,
    };
    const removedClass = clsx("chip", {
      lost: index < wrongGuessCount,
    });
    return (
      <span className={removedClass} style={styles} key={lang.name}>
        {lang.name}
      </span>
    );
  });

  function addGuessLetters(letter) {
    setGuessLetter((prevLetters) =>
      prevLetters.includes(letter) ? prevLetters : [...prevLetters, letter]
    );
  }

  const correctLetter = currentWord.includes(
    guessLetter[guessLetter.length - 1]
  );

  const htmlClass = clsx(
    "gameStatus",
    isGameLost && "lost",
    isGameWon && "won",
    { lostLanguage: !correctLetter && guessLetter.length >= 1 && !isGameLost }
  );

  function renderGameStatus() {
    if (!isGameOver) {
      if (guessLetter.length === 0 || correctLetter) {
        return null;
      }
      return <h3>{getFarewellText(languages[wrongGuessCount - 1].name)}</h3>;
    }
    if (isGameWon) {
      return (
        <>
          <h3>You win</h3>
          <p>Well done! 🎉</p>
        </>
      );
    }
    if (isGameLost) {
      return (
        <>
          <h3>Game over!</h3>
          <p>You lose! Better start learning Assembly 😭</p>
        </>
      );
    }
  }

  function newGame() {
    setCurrentWord(chooseRandomWord());
    setGuessLetter([]);
  }

  return (
    <main>
      {isGameWon && <Confetti numberOfPieces={500} height={window.innerHeight}/>}
      <header>
        <h2 className="heading">Assembly: Endgame</h2>
        <p className="instructions">
          Guess the word in under 8 attempts to keep the programming world safe
          from Assembly!
        </p>
      </header>

      <section className={htmlClass} aria-live="polite" role="status">
        {renderGameStatus()}
      </section>

      <section className="languages-container">{languageElements}</section>

      <section className="currentWord">{wordElements}</section>

      <section className="sr-only" aria-live="polite" role="status">
        <p>
          Current word:{" "}
          {currentWord
            .split("")
            .map((letter) =>
              guessLetter.includes(letter) ? letter + "." : "blank."
            )
            .join(" ")}
        </p>
      </section>

      <section className="keyboard">{keyboardElements}</section>

      {isGameOver && (
        <button className="newGame" onClick={newGame}>
          New Game
        </button>
      )}
    </main>
  );
}

export default App;
