import { HashRouter, Route, Link, Routes, useLocation, Outlet, useParams } from 'react-router-dom';
import Main from "./pages/main";
import About from "./pages/about";

import Header from "./components/header";
import Footer from "./components/footer";



const Home = () => (
    <div>
      <h1>Приветствуем на сайте ИУ5</h1>
    </div>
)

const MainRout = () => (
    <main>
      <Routes>
        <Route exact path='/' element={<Main />}/>
        <Route path='/about' element={<About/>}/>
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
