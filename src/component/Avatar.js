import React from 'react'
import avatar from '../img/avatar.png'
import { makeStyles } from '@material-ui/core/styles'

import MuiLink from '@material-ui/core/Link'
import Box from '@material-ui/core/Box'

const useStyles = makeStyles((theme) => ({

    background: {

    },

}));

export default function Avatar() {

    const classes = useStyles()

    return (

    <Box className={classes.background}>
        <MuiLink href="/Home"><img src={avatar} height="250px" alt="avatar website" /></MuiLink>
    </Box>

    )
}