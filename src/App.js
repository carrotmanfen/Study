import './App.css';
import {Navbar,Discover,Feature,Analytic,GetApp,Sell,Testimonials,Ready,Footer} from "./components";

function App() {
  return (
    <div className='overflow-hidden bg-primary w-full'>
       
        <Navbar/>
        <Discover/>
        <Feature/>
        <Analytic/>
        <GetApp/>
        <Sell/>
        <Testimonials/>
        <Ready/>
        <Footer/>
        
    </div>
  );
}

export default App;
 