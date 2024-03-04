import './App.css';
import Footer from './Footer/Footer';
import Header from './Header/Header';
import Landing from './Landing/Landing';
import background from './assets/background_image.jpg'
const App = () => {
    return (
        <div className="app"> 
            {/* Header */}
            <Header/>
            <img  id='backgroundImage' src={background} />
            
            {/* Landing Page */}
            <Landing/>

            {/* Footer */}
            <Footer/>
        </div>
    )
};

export default App;
