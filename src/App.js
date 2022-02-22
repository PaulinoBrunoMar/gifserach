import React from "react";
import Header from "./components/header";
import Render from "./components/body";
import GlobalStyle from "./styles/global";

function App() {
  const GIPHY_API =
    "https://api.giphy.com/v1/gifs/search?api_key=IHbLnt1oSOTtZEs5Ep7SzQ1kM29baRrh&q=";

  const [gifs, setGifs] = React.useState([]);

  const searchGif = async (dataSearch) => {
    // eslint-disable-next-line no-restricted-globals
    event.preventDefault();
    try {
      const result = await fetch(GIPHY_API + dataSearch);
      const resultData = await result.json();
      setGifs(resultData.data);
    } catch (e) {
      alert(e);
    }
  };

  return (
    <div>
      <GlobalStyle />
      <Header onDataUser={searchGif} />
      <Render quest={gifs} />
    </div>
  );
}

export default App;
