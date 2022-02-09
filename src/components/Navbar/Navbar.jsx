import React ,{useContext}from 'react';
import { Link } from 'react-router-dom';
import { ThemeContext, } from '../../App';

function ThemedButton ({children}){
  const value = useContext(ThemeContext)
      return <button style={value}>{children}</button>
}

function Navbar() {
  return (
      <nav>
        <Link to="">Acceuil </Link>
        <Link to="/works">Works</Link>
        <Link to="/Books/">Books</Link>
        <input type="text" />
        <ThemedButton>Inscription</ThemedButton>
      </nav>
  );
}

export default Navbar;