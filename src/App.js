
import './App.css';
import About from './components/about/About';
import Counter from './components/counter-and-progressbar/Counter';
import CreatorToConsumer from './components/creator-to-consumer/CreatorToConsumer';
import Header from './layout/Header';

function App() {
  return (
    <> <Header />
      <Counter />
      <About />
      <CreatorToConsumer />
    </>


  );
}

export default App;
