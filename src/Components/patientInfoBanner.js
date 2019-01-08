import React from 'react';
import propTypes from 'react';


class patientInfoBanner extends React.Component {
    constructor(props) {
    super(props);
    this.state = {};
    }
    render () {
    return (
    <div id="" className ="b-patientinfo">
        <div className ="b-patientinfo-top">
            <div className ="b-patientinfo-top__leftContent">
                <div className ="b-patientinfo-top__dropdown">
                dropdown
                </div>
                <div className ="b-patientinfo-top__patientName">
                micheal
                </div>
            </div>
            <div className ="b-patientinfo-top__rightContent">
                <div className ="b-patientinfo-top__logo">CarePro
                </div>
            </div>
        </div>
        <div className ="b-patientinfo-bottom">
            <div className="b-patientinfo-bottom__leftContent">
                <div className="b-patientinfo-bottom__location">
                Miami Gardens
                </div>
                <div className="b-patientinfo-bottom__drName">
                Selected Doc.
                </div>
                <div className="b-patientinfo-bottom__dropdown">
                    dropdown
                </div>
            </div>
            <div className="b-patientinfo-bottom__rightContent">
                <div className="b-patientinfo-bottom__date-time">
                    date/time
                </div>
            </div>
        </div>
    </div>
    );
    }    
   }
   
   patientInfoBanner.displayName = "patientInfoBanner";
   
   patientInfoBanner.propTypes = {
   };


export default patientInfoBanner;
