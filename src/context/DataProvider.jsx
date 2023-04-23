import React from 'react'

// CreateContext
import { createContext, useState } from 'react'
// initialize createContext
export const DataContext = createContext();


const DataProvider = ({ children }) => {

    const [html, setHtml] = useState('');
    const [css, setCss] = useState('')
    const [javascript, setJavascript] = useState('')

    return (
        // DataContext provider to value props
        <DataContext.Provider
            // the value is exportable 
            value={{
                html,
                setHtml,
                css,
                setCss,
                javascript,
                setJavascript
            }}
        // if you use this value state one of those component we use in which component wrapp the Context
        >
            {children}
        </DataContext.Provider>
    )
}

export default DataProvider
