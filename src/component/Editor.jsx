
import { useState } from 'react';
import { Box, styled } from '@mui/material'
import React from 'react'
import CloseFullscreenIcon from '@mui/icons-material/CloseFullscreen';

import { Controlled as ControlledEditor } from 'react-codemirror2'
import 'codemirror/lib/codemirror.css'
import 'codemirror/theme/material.css'
import 'codemirror/mode/xml/xml'
import 'codemirror/mode/javascript/javascript'
import 'codemirror/mode/css/css'

import '../App.css'

const Container = styled(Box)`
flex-grow:1;
flex-basis:0;
display:flex;
flex-direction:column;
padding:0 5px 3px
`

const Heading = styled(Box)`
    background: #1d1e22;
    display: flex;
    padding:9px 12px;
`;
const Header = styled(Box)`
    display:flex;
    background: #060606;
    color: #AAAEBC;
    justify-content:space-between;
    font-weight:700;
`;

// we get props in code.jsx 
const Editor = ({ heading, icons, color, value, onChange }) => {

    // toogle button for expand and wrap
    const [open, setOpen] = useState('true')

    const handleChange = (editor, data, value) => {
        onChange(value);
    }

    return (
        <Container className='Ediotr' style={open ? null : { flexGrow: 0 }}>
            {/* Editor header box */}
            <Header>
                <Heading>
                    {/* first box for icon and text */}
                    <Box
                        component="span"
                        style={{
                            background: color,
                            color: 'black',
                            height: 20,
                            width: 20,
                            display: 'flex',
                            alignItems: 'center',
                            placeContent: 'center',
                            borderRadius: 5,
                            marginRight: 5,
                            // paddingBottom: 2
                        }}
                    >{icons}</Box>
                    {heading}
                </Heading>
                <CloseFullscreenIcon
                    // material ui is passing osome props in back
                    fontSize='small'
                    style={{ alignSelf: 'center', cursor: 'pointer' }}
                    onClick={() => setOpen(prevState => !prevState)}
                />
            </Header>
            <ControlledEditor
                className='controlled-editor'
                value={value}
                onBeforeChange={handleChange}
                options={{
                    mode: 'xml',
                    theme: 'material',
                    lineNumbers: true
                }}
            />
        </Container>
    )
}

export default Editor
