import React, { useEffect, useState } from 'react'
import "./Home.css";
import Global from '../components/Global';
import totalIcon from "../assets/icons/total.svg";
import vacIcon from "../assets/icons/vaccinations.svg";
import newCasesIcon from "../assets/icons/newCases.svg";
import activeCasesIcon from "../assets/icons/activeCases.svg";
import Countries from '../components/Counties';


const Home = () => {

  const [totalCases, setTotalCases] = useState({});
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    fetch(`https://disease.sh/v3/covid-19/all`)
    .then(resonse => resonse.json())
    .then(data => setTotalCases(data))

  }, [])

  useEffect(() => {
    fetch(`https://disease.sh/v3/covid-19/countries`)  
    .then(response => response.json())
    .then(data => setCountries(data))
  }, [])

  return (
    <div className='home'>
      <div className='home__global'>
        <Global heading='Total Cases' icon={totalIcon} cases={totalCases.cases} time={totalCases.updated}/>
        <Global heading='Total Vaccinations' icon={vacIcon} cases={totalCases.recovered} time={totalCases.updated}/>
        <Global heading='New Cases' icon={newCasesIcon} cases={totalCases.todayCases} time={totalCases.updated}/>
        <Global heading='Active Cases' icon={activeCasesIcon} cases={totalCases.active} time={totalCases.updated}/>
      </div>
        

        <div className='home__countries'>
          {countries.map((item, index) => <Countries item={item} key={index} />) }
        </div>
    </div>
  )
}

export default Home