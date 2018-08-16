import React from 'react';

class Weather extends React.Component{
  render(){
    return(

        <div className="weather__info">
         {
             this.props.city && this.props.country && <p className="weather__key">Location:
             <span className="weather__value"> {this.props.city},{this.props.country}</span>
             </p>
             }
            {
                this.props.temperature && <p className="weather__key">Temperature:
                <span className="weather__value"> {this.props.temperature}</span>
                </p>
                }
            {
                this.props.humidity && <p className="weather__key">Humidity:
                <span className="weather__value"> {this.props.humidity}</span>
                </p>
                }
           {
               this.props.description && <p className="weather__key">Conditions:
               <span className="weather__value"> {this.props.description}</span>
               </p>
               }
           {
               this.props.error && <p className="weather__error">{this.props.error}</p>
               }
        </div>

    );
  }
}

export default Weather

/* It can also be written as stateless functional component like this:

import React from 'react';

const Weather=(props)=>{
    return(

        <div>
         {props.city && props.country && <p>Location:{props.city},{props.country}</p>}
            {props.temperature && <p>Temperature:{props.temperature}</p>}
            {props.humidity && <p>Humidity:{props.humidity}</p>}
           {props.description && <p>Conditions:{props.description}</p>}
           {props.error && <p>{props.error}</p>}
        </div>

    );
  }

export default Weather

this.props.city etc is not used because we didn't use the class keyword. Also don't forget to pass props argument in arrow function
*/

/*
Before CSS

<div>
         {this.props.city && this.props.country && <p>Location:{this.props.city},{this.props.country}</p>}
            {this.props.temperature && <p>Temperature:{this.props.temperature}</p>}
            {this.props.humidity && <p>Humidity:{this.props.humidity}</p>}
           {this.props.description && <p>Conditions:{this.props.description}</p>}
           {this.props.error && <p>{this.props.error}</p>}
        </div>
*/
