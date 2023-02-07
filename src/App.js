
import { Route, Routes } from 'react-router-dom';
import Header from "./components/header";
import Footer from "./components/footer";
import ScrollToTop from "./components/scroll";

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
import Cleaning from "./pages/cleaning";
import Helper from "./pages/helper";
import Loader from "./pages/loader";
import Cleaner from "./pages/cleaner";
import Valet from "./pages/valet";
import Guard from "./pages/guard";
import Promoter from "./pages/promoter";
import Promomodel from "./pages/promomodel";
import Promohostess from "./pages/promohostess";
import Cloakroom from "./pages/cloakroom";
import Waiter from "./pages/waiter";
import Barman from "./pages/barman";
import Cashier from "./pages/cashier";
import ListPage from "./pages/listPage";

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
        <Route path='/cleaning' element={<Cleaning/>}/>
				<Route path='/helper' element={<Helper/>}/>
				<Route path='/loader' element={<Loader/>}/>
				<Route path='/cleaner' element={<Cleaner/>}/>
				<Route path='/valet' element={<Valet/>}/>
				<Route path='/guard' element={<Guard/>}/>
				<Route path='/promoter' element={<Promoter/>}/>
				<Route path='/promomodel' element={<Promomodel/>}/>
				<Route path='/promohostess' element={<Promohostess/>}/>
				<Route path='/cloakroom' element={<Cloakroom/>}/>
				<Route path='/waiter' element={<Waiter/>}/>
				<Route path='/barman' element={<Barman/>}/>
				<Route path='/cashier' element={<Cashier/>}/>
        <Route path='/listPage' element={<ListPage/>}/>

      </Routes>
    </main>
)

const App = () => {
  return (
      <div className="wrapper">
        <Header />
        <MainRout />
        <Footer />
				<ScrollToTop />
      </div>

  );

}




export default App;


