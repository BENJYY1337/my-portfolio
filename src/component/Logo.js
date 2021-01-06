import React from 'react'
import logo from '../img/bpLogo.png'

import MuiLink from '@material-ui/core/Link'

export default function Logo() {

    return (
    <>
        <MuiLink href="/Home"><img src={logo} height="130px" alt="Logo website" /></MuiLink>
    </>
    )
}