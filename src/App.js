import './App.scss';
import Customers from './components/customers/customers';
import Features from './components/features/features';
import Header from './components/header/header';
import PlanAndManage from './components/PlanAndManage/PlanAndManage';
import Slider from './components/slider/slider';
import Stats from './components/stats/stats';

const App = (props) => {
  return (
    <div className="app">
      <Header />
      <main className="main">
        <Slider />
        <Customers />
        <PlanAndManage />
        <Features />
        <Stats />
      </main>
    </div>
  );
};

export default App;
