import React from 'react'

import StationsCard from './StationsCard'

export default function StationsList ({ stations }) {

    return  (
        <div className="album py-5"  style={{backgroundColor: '#e8e8e8'}}>
            <div className="container">
                <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
                    {
                        stations.map(( station, index ) => (
                            station.status === "active" 
                            ? <StationsCard key={index} station={station}/>
                            : ""
                        ))
                    }
                </div>
            </div>
        </div>
    )
}