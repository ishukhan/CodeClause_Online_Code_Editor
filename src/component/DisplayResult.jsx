import React from 'react'
import { useContext, useState, useEffect } from 'react'

import { Box, styled } from '@mui/material'
import { DataContext } from '../context/DataProvider'

const Container = styled(Box)`
height:41vh;
`


const DisplayResult = () => {

    const [src, setSrc] = useState('')

    const { html, css, javascript } = useContext(DataContext);

    const srcCode = `
    
        <html>
            <body>${html}</body>
            <style>${css}</style>
            <script>${javascript}</script>
        </html>
    `

    useEffect(() => {
        const timeOut = setTimeout(() => {
            setSrc(srcCode)
        }, 1000);

        return () => clearTimeout(timeOut)
    }, [html, css, javascript])



    return (
        <Container>
            <iframe
                srcDoc={src}
                title='OutPut'
                sandbox='allow-scripts'
                frameBorder={0}
                width="100%"
                height="100%"
            />
        </Container>
    )
}

export default DisplayResult
