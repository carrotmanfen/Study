import './App.css';
import styles from './style.js';
import {Navbar, Hero, Stats, Business, Billing, CardDeal, Testimonials, Client, CTA, Footer} from './components';

function App() {
    return (
        <div className="bg-primary w-full overflow-hidden">
            <nav className={`${styles.paddingX} ${styles.flexCenter}`}>
                <div className={`${styles.boxWidth}`}>
                    <Navbar/>
                </div>
            </nav>
            <main>
                <div className={`bg-primary ${styles.flexStart}`}>
                    <div className={`${styles.boxWidth}`}>
                        <Hero/>
                    </div>
                </div>
                
                <div className={`bg-primary ${styles.flexStart} ${styles.paddingX}`}>
                    <div className={`${styles.boxWidth}`}>
                        <Stats/>
                        <Business/>
                        <Billing/>
                        <CardDeal/>
                        <Testimonials/>
                        <Client/>
                        <CTA/>
                        <Footer/>
                    </div>
                </div>
            </main>
        </div>
    );
}

export default App;
