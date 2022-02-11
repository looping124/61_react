import {Routes,Route} from 'react-router-dom'
import Home from './components/Home/Home';
import Works from './components/Works/Works';
import Profile from './components/Profile/Profile';
import Navbar from './components/Navbar/Navbar';
import Marketing from './components/Works/Marrketing/marketing';
import Dev from './components/Works/Dev/Dev';
import Books from './components/Books/Books';
import Book from './components/Books/Book';
import React, { createContext,useState,useCallback } from 'react';
import About from './components/About/About';
import Platon from './components/Works/Platon/Platon';
import Sedal from './components/Works/Sedal/Sedal';
import Solane from './components/Works/Solane/Solane';

  const THEMES = {
    dark: {
      background: '#000',
      color: '#FFF',
      border: 'solid 1px #FFF'
    },
    light: {
      background: '#FFF',
      color: '#000',
      border: 'solid 1px #000'
    }
  }

  const ThemeContext = createContext()

function App() {
  const [theme,setTheme] = useState('light');
  const toggleTheme = useCallback(function () {
    setTheme(theme => theme ==='light' ? 'dark' : 'light')
  })
  const currentTheme = theme === 'light' ? THEMES.light : THEMES.dark
  return (
    <div className="App">
      <ThemeContext.Provider value={currentTheme}>
        <Navbar toggleTheme={toggleTheme}/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/works' element={<Works/>}>
            <Route path='/works/marketing' element={<Marketing/>}/>
            <Route path='/works/dev' element={<Dev/>}/>
            <Route path='/works/platon' element={<Platon/>}/>
            <Route path='/works/solane' element={<Solane/>}/>
            <Route path='/works/sedal' element={<Sedal/>}/>
          </Route>
          <Route path='/profile/:id' element={<Profile/>}/>
          <Route path='/books' element={<Books/>}></Route>
          <Route path='/books/:bookSlug' element={<Book test="test"/>}/>   
        </Routes>
      </ThemeContext.Provider>
    </div>
  );
}

export default App;
export {ThemeContext};