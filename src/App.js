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
        
        
        <div className="purple__gradient absolute w-[600px] h-[500px] top-[-200px] left-[-100px] z-0" />
        <div className="blue__gradient absolute w-[300px] h-[300px] top-[400px] right-[-200px] z-0" />
      
    </div>
  );
}

export default App;
 