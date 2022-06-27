import React from 'react'
import "./style.css";
import totalIcon from "../../assets/icons/totalMini.svg";
import vacIcon from "../../assets/icons/vaccine.svg";
import deathIcon from "../../assets/icons/death.svg";
import newCasesIcon from "../../assets/icons/newCases.svg";
import activeCasesIcon from "../../assets/icons/activeCases.svg";

const Countries = ({item}) => {
  return (
    <div className='wrapper'>
        <div className='country__box'>
            <p className='country__name'>{item.country}</p>
            <div className='country__total-case'>
                <img className='country__flag' src={item?.countryInfo.flag} alt="" />
                <div className='total__case-container'>
                    <p className='total__case-heading'>Total Cases</p> 
                    <div className='total__case-info'>  
                        <img className='total__case-icon' src={totalIcon} alt="" /> 
                        <p className='total__case-desc'>{item?.cases?.toLocaleString()}</p>                       
                    </div>                   
                </div>                
            </div>  

            <div className='all__cases'>
                <div className='vaccinations'>
                    <img src={vacIcon} alt="" /> 
                    <div className='vaccinations__info'>
                        <p className='vaccinations__info-text'>Total Vaccinations</p> 
                        <p className='vaccinations__info-number'>{item?.recovered?.toLocaleString()}</p>                       
                    </div>                   
                </div>                
                <div className='vaccinations'>
                    <img src={activeCasesIcon} alt="" /> 
                    <div className='vaccinations__info'>
                        <p className='vaccinations__info-text'>Active Cases</p> 
                        <p className='vaccinations__info-number'>{item?.active?.toLocaleString()}</p>                       
                    </div>                   
                </div>                
                <div className='vaccinations'>
                    <img src={newCasesIcon} alt="" /> 
                    <div className='vaccinations__info'>
                        <p className='vaccinations__info-text'>New Cases</p> 
                        <p className='vaccinations__info-number'>{item?.todayCases?.toLocaleString()}</p>                       
                    </div>                   
                </div>                
                <div className='vaccinations'>
                    <img src={deathIcon} alt="" /> 
                    <div className='vaccinations__info'>
                        <p className='vaccinations__info-text'>Total Deaths</p> 
                        <p className='vaccinations__info-number'>{item?.deaths?.toLocaleString()}</p>                       
                    </div>                   
                </div>                
            </div>      
        </div>
    </div>
  )
}

export default Countries;