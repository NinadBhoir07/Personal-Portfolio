import React,{useState, useEffect} from "react";
import './App.css';
import COLOR_ARRAY from "./color";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter } from '@fortawesome/free-brands-svg-icons'



const quoteDBUrl = "https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json"
function App() {

  const[quotes, setQuote] = useState("The purpose of our lives is to be happy.");
  const[author, setAuthor] = useState("Dalai Lama");
  const[randomNumber, setRandomNumber] = useState(0);
  const[quotesArray, setQuotesArray] = useState(null);
  const[randomColor, setRandomColor]=useState("#FF6633");

  const fetchQuotes = async (url) => {
    const response = await fetch(url)
    const parsedJSON = await response.json()
    setQuotesArray(parsedJSON.quotes);
  }

  useEffect(() => {
    fetchQuotes(quoteDBUrl);
    },[quoteDBUrl])

    const generateRandomQuote = () =>{
      let randomInteger = Math.floor(quotesArray.length * Math.random());
      setRandomNumber(randomInteger);
      setRandomColor(COLOR_ARRAY[randomInteger])
      setQuote(quotesArray[randomInteger].quote);
      setAuthor(quotesArray[randomInteger].author);
    }
  

  return (
    <div className="App">
      <header className="App-header" style={{backgroundColor: randomColor}}>
      <section id="quote-box" className="container">
        <div>
        <article id="text">"{quotes}"</article>
        <article id="author">-{author}</article>
        </div>
        <div id="buttons">
        |<a id="tweet-quote" href="twitter.com/intent/tweet">
          <FontAwesomeIcon icon ={faTwitter}/>
        </a>
        <button id="new-quote" onClick={() => generateRandomQuote()} style={{backgroundColor:randomColor, color:"#110101"}}>New Quote</button>
        </div>
      </section>
      </header>
    </div>
  );
}

export default App;
