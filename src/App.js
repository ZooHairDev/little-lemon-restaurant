import './App.css';
import Header from './Header';
import Nav from './Nav';
import Main from './Main';
import Footer from './Footer';

function App() {
  return (
    <>
    <head>
      <title>Little Lemon Restaurant</title>
      <meta name="description" content="Little Lemon Restaurant."/>
      <meta name="og:title" content="Little Lemon Restaurant." />
      <meta name="og:description" content="Mediteraenian restaurant for families." />
      <meta name="og:image" content="Login.svg" />
    </head>
    <Header />
    <Nav />
    <Main>Homepage</Main>
    <Footer />
    </>
  );
}

export default App;
