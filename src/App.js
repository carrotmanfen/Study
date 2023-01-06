import './App.css';
import {Navbar,Discover,Feature,Analytic,GetApp,Sell,Testimonials,Ready,Footer} from "./components";

function App() {
  return (
    <div>

        <div className='flex'>
            <div className='overflow-hidden bg-primary w-full '>
            
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
        </div>
        
        
        <div className="blue__gradient absolute w-[500px] h-[400px] top-[-300px] left-[-100px] z-0" />
      
    </div>
  );
}

export default App;
 