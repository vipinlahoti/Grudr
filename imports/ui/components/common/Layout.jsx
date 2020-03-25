import React from 'react';

const Layout = ({children}) =>
  <div className="wrapper" id="wrapper">
    <Grudr.components.Header/>
    
    {children}

    <Grudr.components.Footer/>        
  </div>;

module.exports = Layout;
