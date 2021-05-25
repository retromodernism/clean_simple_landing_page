import './App.scss';
import Customers from './components/customers/customers';
import Header from './components/header/header';
import Slider from './components/slider/slider';

const App = (props) => {
  return (
    <div className="app">
      <Header />
      <main className="main">
        <Slider />
        <Customers />
      </main>
    </div>
  );
};

export default App;
