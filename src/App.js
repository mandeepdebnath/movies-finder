import { useState } from "react";
import { Container } from "./Styles/Container.styled";
import { ScaleLoader } from "react-spinners";
import { css } from "@emotion/react";
import Navbar from "./components/Navbar";
import Searchbar from "./components/Searchbar";
import Movies from "./components/Movies";
import Info from "./components/Info";
import Footer from "./components/Footer.jsx";

function App() {
  const [query, setQuery] = useState("");

  const [movies, setMovies] = useState([]);
  const [loader, setLoader] = useState(false);

  //function to search movies
  const searchMovies = async (e) => {
    e.preventDefault();

    const url = `https://api.themoviedb.org/3/search/movie?api_key=2f360eb30448d78dbb608462d1a7202d&language=en-US&query=${query}&include_adult=true`;

    //using try-catch to cath any typo error

    try {
      setLoader(true);
      const res = await fetch(url);
      const data = await res.json();
      setMovies(data.results);
      setLoader(false);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="App">
      <Navbar />
      <Container>
        <Info />
        <Searchbar function={searchMovies} query={query} setQuery={setQuery} />
        {loader ? <ScaleLoader css={loaderstyle} /> : <Movies data={movies} />}
      </Container>
      <Footer />
    </div>
  );
}

export default App;

const loaderstyle = css`
  display: flex;
  justify-content: center;
  margin: 100px auto;

  opacity: 0.4;
`;
