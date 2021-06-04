import './App.scss';
import Blog from './components/blog/blog';
import Customers from './components/customers/customers';
import Faq from './components/faq/faq';
import Features from './components/features/features';
import Footer from './components/footer/footer';
import GetStarted from './components/getStarted/getStarted';
import Header from './components/header/header';
import NewsLetter from './components/newsLetter/newsLetter';
import PlanAndManage from './components/PlanAndManage/PlanAndManage';
import Quotes from './components/quotes/quotes';
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
        <Blog />
        <Quotes />
        <Faq />
        <GetStarted />
        <NewsLetter />
        <Footer />
      </main>
    </div>
  );
};

export default App;
