import React, { useState, useEffect, useContext } from 'react'
import StationsService from '../services/StationsService'
import RentContext from "../context/RentContext"

const Context = React.createContext({})

export function StationsContextProvider ({children}) {
    const [stations, setStations] = useState([])
    const {rent} = useContext(RentContext)

    useEffect(function () {
        StationsService.getAllStations() 
        .then( ({data}) => {
            setStations(data)
        })
    }, [setStations, rent])

    return  <Context.Provider value = {{stations, setStations}}>
                {children}
            </Context.Provider>
}

export default Context