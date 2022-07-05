import React, { useCallback, useEffect } from 'react'

const Samplecovid = () => {
    const covidapi=useCallback(async ()=>{
        try{
        const covidcall=await fetch("https://api.covidtracking.com/v1/us/daily.json")
        const replycovid=await covidcall.json()
        console.log(replycovid)
        return replycovid[0]
    }
        catch(e)  {
    console.log("errro",e,"helping")

        }
      },[])
      useEffect(()=>{
        // covidapi();
      },[])
  return (
      <>
<h1>Live data Coming throgh the api</h1>
<h2>Corona teacker as title</h2>
<div className="cards">
    <label>hospitalized</label>
    <p>Hello Good morniong</p>
</div>
<div className="cards">
    <label>death</label>
    <p>Hello Good morniong</p>
</div>
<div className="cards">
    <label>pending</label>
    <p>Hello Good morniong</p>
</div>
<div className="cards">
    <label>recovered</label>
    <p>Hello Good morniong</p>
</div>
<div className="cards">
    <label>Testedpeople</label>
    <p>Hello Good morniong</p>
</div>
      </>
  )
}

export default Samplecovid