import React, { useState, useEffect, Component } from 'react';
import axios from 'axios';
import './App.scss';
import Accordion from './component/accordion.jsx'

/* Usando AXIOS para fazer requisição da API */
function App() {
  const [urlName, setUrlName] = useState("https://rickandmortyapi.com/api/character/?name=") 
  const [urlStatus, setUrlStatus] = useState("https://rickandmortyapi.com/api/character/?status=")
  const [urlSpecies, setUrlSpecies] = useState("https://rickandmortyapi.com/api/character/?species=")
  const [info, setInfo] = useState({})
  const [results, setResults] = useState([])
  const [search, setSearch] = useState("") 
 
  

/* Axios get para filtrar por Nome */
  useEffect(() => {
    axios.get(`${urlName}${search}`)
      .then((result) => {
        
        setInfo(result.data.info)
        setResults(result.data.results)
      })
      .catch((error) => {
        console.log(error)
      })
  }, [search])


/* Axios get para filtrar por Status */
  useEffect(() => {
    axios.get(`${urlStatus}${search}`)
      .then((result) => {
        
        setInfo(result.data.info)
        setResults(result.data.results)
      })
      .catch((error) => {
        console.log(error)
      })
  }, [search])

/* Axios get para filtrar por Specie */
  useEffect(() => {
    axios.get(`${urlSpecies}${search}`)
      .then((result) => {
        
        setInfo(result.data.info)
        setResults(result.data.results)
      })
      .catch((error) => {
        console.log(error)
      })
  }, [search])

  useEffect(() => {
  }, [urlStatus, info, results, search, urlSpecies, urlName])




  return (
    <>
          <div class="form__group field">
              <label for="name" class="form__label">Procurar por nome, status ou espécie.</label><input type="input" class="form__field" placeholder="Name" onChange={(sear)=> {
           setSearch(sear.target.value)
          }}
           value={search}
           type="text"/>
          </div>
          
      <main>
      
         <section className="characters">
          
            {results.map((result, index)=> (
            
            <Accordion key={index}result={result} /> 
              
            ))}
          </section>
       </main>

     </>
    
    
  );
}

export default App;




