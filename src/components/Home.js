import React from 'react';

const Home = () =>{
  return(
    <div className="HomeStyle">
      <h1>LOCATION & HOURS</h1>
      <address>
        1067 N San Antonio Rd, Los Altos, CA 94022
      </address>
      <div>
        <a href="tel:+1-650-948-2696">Phone: (650) 948-2696</a>
        <p>Fax: (650) 948-0121 </p>
      </div>
      <div>
        <p>Sunday – Thursday – 11:30am – 9:30pm</p>
        <p>Friday 11:30am – 10pm</p>
        <p>Saturday 12pm (noon) – 10pm</p>
      </div>
    </div>
  ) 
}

export default Home;