import React from 'react';
import { Link,Outlet } from 'react-router-dom';

function Services(props) {
  return (
    <div>
      <h1>Nos services</h1>
      <nav>
        <Link to="/services/marketing">Marketing </Link>
        <Link to="/services/dev">Devloppement</Link>
      </nav>
      <Outlet></Outlet>
    </div>
  );
}

export default Services;