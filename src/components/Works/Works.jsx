import React from 'react';
import { Link,Outlet } from 'react-router-dom';

function Works(props) {
  return (
    <div>
      <h1>Nos works</h1>
      <nav>
        <Link to="/works/marketing">Marketing </Link>
        <Link to="/works/dev">Devloppement</Link>
      </nav>
      <Outlet></Outlet>
    </div>
  );
}

export default Works;