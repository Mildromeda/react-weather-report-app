import React from 'react';

class Titles extends React.Component{
  render(){
    return(

        <div>
            <h1 className="title-container__title">Weather Report</h1>
            <p className="title-container__subtitle">Find out temperature, humidity and more</p>
            </div>

    );
  }
}

export default Titles

/* Stateless functional component

import React from 'react';

const Titles=()=>{
    return(
        <div>
            <h1>Weather Finder</h1>
            <p>Find out temperature, conditions and more</p>
            </div>

    );
}

export default Titles

*/
