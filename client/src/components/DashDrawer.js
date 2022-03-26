import * as React from 'react';
import Drawer from '@mui/material/Drawer';
import AppBar from '@mui/material/AppBar';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import { makeStyles } from '@mui/material';

const drawerWidth = 240
const useStyles = makeStyles({
        page: {
            background: "blue",
            width: '100%'
        },
        drawer: {
            width: drawerWidth
        }
})

export default function DashDrawer({props}) {
    const classes = useStyles()
    return (
        <div>
            <Drawer
                className = {classes.drawer}
                variant = "permanent"
                anchor ="left"
            >
            <div>
                  <Typography variant="5">
                      Ninjia Notes
                  </Typography>  
            </div>
            </Drawer>

            <div className={classes.page}>
                { props}
            </div>
       </div>
    )
}

