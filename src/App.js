import Row from "./components/Row"
import Banner from "./components/Banner"
import NavBar from "./components/NavBar"
import requests from "./requests"
import "./App.css"
import Footer from "./components/Footer"

function App() {
  return (
    <div className="app">

      <NavBar />

      <Banner />

      <Row title="Netflix Originals" isLarge fetchUrl={requests.fetchNetflixOriginals} />
      <Row title="Trending Now" fetchUrl={requests.fetchTrending} />
      <Row title="Top Rated" fetchUrl={requests.fetchTopRated} />
      <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />
      <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
      <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
      <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} />
      <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries} />

      <Footer />
    </div>
  );
}

export default App;
