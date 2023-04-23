import React from 'react'
import { AppBar, Toolbar, styled } from "@mui/material"

const Container = styled(AppBar)`
    background: #060606;
    height:9vh;
    position: static;
`;

const Header = () => {

    const logo = "https://i.ibb.co/0MpZCD8/Seek-Png-com-pen-icon-png-9322813.png"

    return (
        <Container >
            <Toolbar>
                <img src={logo} alt="logo" style={{ width: 38 }} />
                <h1>CodePen</h1>
            </Toolbar>
        </Container>
    )
}

export default Header;