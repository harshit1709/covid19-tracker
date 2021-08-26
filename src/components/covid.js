import React, {useEffect, useState} from 'react'
import "./covid.css"

const Covid = () => {
    const [data, setData] = useState([]);

    const getCovidData = async () =>{
        try{
            const res = await fetch('https://data.covid19india.org/data.json');
            const actualData = await res.json();
            console.log(actualData.statewise[0]);
            setData(actualData.statewise[0]);
        }catch(err){
            console.log(err);
        }
    }
    useEffect(() => {
       getCovidData();
    }, [])
    return (
        <>
            <div className="heading">
            <h1 className="icon">🔴 LIVE</h1>
            <h2>COVID-19 CORONAVIRUS TRACKER</h2>
            </div>
            <section className="container">
                <div className="card c1">
                    <p className="cardName">OUR <span>COUNTRY</span></p>
                    <p className="cardTotal cardSmall india">INDIA</p>
                </div>

                <div className="card c2">
                    <p className="cardName">TOTAL <span>RECOVERED</span></p>
                    <p className="cardTotal cardSmall">{data.recovered}</p>
                </div>

                <div className="card c3">
                    <p className="cardName">TOTAL <span>CONFIRMED</span></p>
                    <p className="cardTotal cardSmall">{data.confirmed}</p>
                </div>

                <div className="card c4">
                    <p className="cardName">TOTAL <span>DEATHS</span></p>
                    <p className="cardTotal cardSmall">{data.deaths}</p>
                </div>

                <div className="card c5">
                    <p className="cardName">TOTAL <span>ACTIVE</span></p>
                    <p className="cardTotal cardSmall">{data.active}</p>
                </div>

                <div className="card c6">
                    <p className="cardName">LAST <span>UPDATED</span></p>
                    <p className="cardTotal cardSmall">{data.lastupdatedtime}</p>
                </div>
            </section>

        </>
    )
}

export default Covid
