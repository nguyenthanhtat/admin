import logo from './logo.svg';
import Blank from './page/Blank';
import Dashboard from './page/Dashboard';
import MainLayout from './layout/MainLayout'
import './scss/App.scss'
import {BrowserRouter,Routes,Route} from 'react-router-dom';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<MainLayout/>}>
            <Route index element={<Dashboard/>}/>
            <Route path='orders' element ={<Blank />}/>
            <Route path='products' element ={<Blank/>}/>
            <Route path='customers' element ={<Blank/>}/>
            <Route path='settings' element ={<Blank/>}/>
            <Route path='stats' element ={<Blank/>}/>
            <Route path='settings' element ={<Blank/>}/>

        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
