import React ,{useContext}from 'react';
import { Link } from 'react-router-dom';
import { ThemeContext, } from '../../App';

function ThemedButton ({children}){
  const value = useContext(ThemeContext)
      return <button style={value}>{children}</button>

}

function Navbar({toggleTheme}) {
  return (
      <nav>
        <Link to="">Acceuil </Link>
        <Link to="/about">About</Link>
        <Link to="/works">Works</Link>
        <Link to="/Books/">Books</Link>
        <input type="text" />
        <ThemedButton>Inscription</ThemedButton>
        <button onClick={toggleTheme}>Jour/nuit</button>
      </nav>
  );
}

export default Navbar;