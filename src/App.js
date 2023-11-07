import './App.css';                                      //npm install react-router-dom@6 //index.js e BrowserRouter o import edip App.js i kapsa // 
import {Routes,Route} from 'react-router-dom'           //router react de bir kütüphane, yönlendirmeleri sağlayan
import Home from './Components/Home';                   //path de sadece / yazarsa 3000 portunda demek
//import AboutUs from './Components/AboutUs';           //LazyLoad a dönüştürmek için normal import edilmedi
import NavBar from './Components/NavBar';
import Missons from './Components/Missons';
import WrongPath from './Components/WrongPath';
import History from './Components/History';
import Company from './Components/Company';
import Team from './Components/Team';
import Members from './Components/Members';
import MemberDetail from './Components/MemberDetail';
import React from 'react';
const LazyAboutUs=React.lazy(()=>import('./Components/AboutUs'));    //Çok komplike bir data çekileceğinde Route işlemi Lazy olursa performans iyileşir

function App() {
  return (
    <div className="App">
      <NavBar/>  {                                            /* NavBar her zaman gözükeceği için ve routerden bağımsız olduğu için burada */}
      <Routes>
        <Route path='/' element={<Home/>} />        
        <Route path='/aboutUs' element={<React.Suspense><LazyAboutUs/></React.Suspense>} />
        <Route path='/mission' element={ <Missons/> } />     {/* Home sayfasındaki buttonun yönlendirmesi de olsa burdaki router a eklemelisin  */}
        <Route path='/history' element={<History/>}>
          <Route path='company' element={<Company/>} />
          <Route path='team' element={<Team/>} />            {/* Route ları içe içe ekletiken sonra History de Outlet i import edip satıra eklemek lazım, burada da / eklenmez! */}
        </Route>
        <Route path='members' element={<Members/>}/>                  {/* url ye members ekleyince Members componentine gider ama => */}
        <Route path='members/:memberID' element={<MemberDetail/>} />  {/* urlye members ekledikten sonra /xxx bir şeyler ekleyince MemberDetail e gider,,,, MemberDetail de bu parametreyi kullanmak istersem MemberDetailde useParam hook unu eklerim */}
        <Route path='/*' element={<WrongPath/>} />
      </Routes>
    </div>
  );
}

export default App;

/*Routes, Link ve Navigate React Router kütüphanesi içindeki üç farklı bileşendir.
 Routes: Uygulamanızdaki rotaları tanımlamak için kullanılır. Routes bileşeni içinde Route bileşenleri yer alır ve her
 biri bir URL yolunu temsil eder. Örneğin: /home, /about veya /products.
   Link: URL'leri değiştirmek için kullanılır. Yani, bir Link bileşeni tıklanırsa, ilgili URL yoluna yönlendirilirsiniz.
 Örneğin: <Link to="/home">Home</Link>.
   Navigate: Programatik olarak URL'leri değiştirmek için kullanılır. Yani, bir Navigate bileşeni kullanarak,
 JavaScript kodu içinde belirli bir URL yoluna yönlendirebilirsiniz. Örneğin: <Navigate to="/home" />.

Kısacası, Routes, uygulamanızdaki rotaları tanımlamak için kullanılırken, Link URL'leri değiştirmek için 
kullanılır ve Navigate programatik olarak URL'leri değiştirmek için kullanılır. */
