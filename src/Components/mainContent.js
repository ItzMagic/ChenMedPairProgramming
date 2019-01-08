import React from 'react';
import propTypes from 'react';


class mainContent extends React.Component {
    constructor(props) {
    super(props);
    this.state = {};
    }
    render () {
    return (
    <div className="b-main-content"id="">
      <div className="b-left-column">
         <div className="b-left-column__header">
         <div className="b-left-column__title">PRE</div>
         <div>13</div>
         </div>
      </div>
      <div className="b-center-column">
         <div className="b-center-column__header">
            <div className="b-center-column__title">In Session</div>
            <div>5</div>
         </div>
      </div>
      <div className="b-right-column">
         <div className="b-right-column__header">
         <div className="b-right-column__title">Post</div>
         <div>3</div>
         </div>
      </div>

    
    </div>
    );
    }    
   }
   
   mainContent.displayName = "mainContent";
   
   mainContent.propTypes = {
   };
   




export default mainContent;
