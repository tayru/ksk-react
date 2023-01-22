import { Route, Routes } from 'react-router-dom';
import Header from "./components/header";
import Footer from "./components/footer";

import Main from "./pages/main";
import About from "./pages/about";
import Contacts from "./pages/contacts";
import Logistics from "./pages/logistics";
import Parking from "./pages/parking";
import Photo from "./pages/photo";
import Portfolio from "./pages/portfolio";
import Promo from "./pages/promo";
import Sanitation from "./pages/sanitation";
import Security from "./pages/security";
import Services from "./pages/services";
import Trust from "./pages/trust";



const MainRout = () => (
    <main>
      <Routes>
        <Route exact path='/' element={<Main />}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contacts' element={<Contacts/>}/>
        <Route path='/parking' element={<Parking/>}/>
        <Route path='/logistics' element={<Logistics/>}/>
        <Route path='/photo' element={<Photo/>}/>
        <Route path='/portfolio' element={<Portfolio/>}/>
        <Route path='/promo' element={<Promo/>}/>
        <Route path='/sanitation' element={<Sanitation/>}/>
        <Route path='/security' element={<Security/>}/>
        <Route path='/trust' element={<Trust/>}/>
        <Route path='/services' element={<Services/>}/>

      </Routes>
    </main>
)

const App = () => {
  return (
      <div className="wrapper">
        <Header />
        <MainRout />
        <Footer />
      </div>
  );

}

export default App;
