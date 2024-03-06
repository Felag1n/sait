import Header from "./components/Header/Header";
import { Routes, Route, Outlet } from 'react-router-dom'
import HomePage from './pages/HomePage'
import Footer from "./components/Footer/Footer";
import Charts from "./pages/Charts";
import Suport from "./pages/Suport";
import FAQ from "./pages/FAQ";
import Uslugi from "./pages/Uslugi";
import Contacts from "./pages/contacts";
import Izbranoe from "./pages/Izbranoe";
function App() {
  return(
    <Routes>
      <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="/charts" element={<Charts />} />
          <Route path="/suport" element={<Suport />}/>
          <Route path="/FAQ" element={<FAQ />}/>
          <Route path="/Uslugi" element={<Uslugi />}/>
          <Route path="/contacts" element={<Contacts />}/>
          <Route path="/Izbranoe" element={<Izbranoe />}/>           {/* <Route path="about" element={<About />} /> */}
          {/* <Route path="dashboard" element={<Dashboard />} /> */}
          {/* <Route path="*" element={<NoMatch />} /> */}
          </Route>
    </Routes>
    
  );
  
}

function Layout() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer/>
    </>
  )
}

export default App