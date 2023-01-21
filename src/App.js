import { Route, Routes } from 'react-router-dom';
import Main from "./pages/main";
import About from "./pages/about";
import Header from "./components/header";
import Footer from "./components/footer";


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
