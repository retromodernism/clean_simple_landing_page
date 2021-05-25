import './App.scss';
import Header from './components/header/header';
import Slider from './components/slider/slider';

const App = (props) => {
  return (
    <div className="app">
      <Header />
      <main className="main">
        <Slider />
      </main>
    </div>
  );
};

export default App;
