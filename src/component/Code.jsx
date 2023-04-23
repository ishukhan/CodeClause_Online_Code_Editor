import { useContext } from 'react';
import React from 'react'
import Editor from "./Editor";

import { Box, styled } from '@mui/material'
import { DataContext } from '../context/DataProvider';

const Container = styled(Box)`
display:flex;
flex-direction:row;
background:#060606
`
const Code = () => {

    const { html, setHtml, css, setCss, javascript, setJavascript } = useContext(DataContext);

    return (
        <Container>
            <Editor
                heading='HTML'
                icons='/'
                color="#ff3c41"
                value={html}
                onChange={setHtml}
            />
            <Editor
                heading='CSS'
                icons='*'
                color="#0ebeff"
                value={css}
                onChange={setCss}
            />
            <Editor
                heading='JS'
                icons='()'
                color="#fcd000"
                value={javascript}
                onChange={setJavascript}
            />
        </Container>
    )
}

export default Code;