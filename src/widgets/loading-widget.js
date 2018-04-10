import React from 'react';
import './loading-widget.css'
export const  LoadingWidget =(props) => {
 
    return (
      <div className="loader-container">
        <div className="loader">
          <div className="rect1"></div>
          <div className="rect2"></div>
          <div className="rect3"></div>
          <div className="rect4"></div>
          <div className="rect5"></div>
          <div className="label">{props.label +"..."}</div>
        </div>
      </div>
    );
  
}
