import "./App.css";
import QuoteCard from "./components/QuoteCard";
import axios from "axios";
import React from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";

function App() {
  const [newQuote, setNewQuote] = React.useState({
    quote:
      "By chilling my loins I increase the chances of impregnating my wife.",
    character: "Apu Nahasapeemapetilon",
    image:
      "https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FApuNahasapeemapetilon.png?1497567511629",
    characterDirection: "Left",
  });

  const getNewQuote = () => {
    axios
      .get("https://simpsons-quotes-api.herokuapp.com/quotes")

      .then((response) => response.data)

      .then((data) => {
        console.log(data);

        setNewQuote(data[0]);
      });
  };

  return (
    <div className="App">
      <Button onClick={getNewQuote}>Simpson family quote</Button>
      <br></br>
      <br></br>
      <br></br>

      <QuoteCard
        key={newQuote.index}
        image={newQuote.image}
        character={newQuote.character}
        quote={newQuote.quote}
      />
    </div>
  );
}

export default App;
