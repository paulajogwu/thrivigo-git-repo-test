import React, { useState,useEffect } from "react";
import { makeStyles,withStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import CssBaseline from "@material-ui/core/CssBaseline";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import Grid from '@material-ui/core/Grid'
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import ListItem from "@material-ui/core/ListItem";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Container from "@material-ui/core/Container";
import ListItemText from "@material-ui/core/ListItemText";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Divider from "@material-ui/core/Divider";
import Avatar from '@material-ui/core/Avatar';
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Backspace from "@material-ui/icons/ArrowBack";
import Swal from "sweetalert2";
import {Link } from 'react-router-dom'
import {useDispatch,useSelector} from 'react-redux'
import {createSelector} from 'reselect'
import {makeSelectUsers } from '../git_search/selector'

const stateSelector = createSelector(makeSelectUsers, (users)=>({
    users
    }))


    
const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
    table: {
      minWidth: 700,
    },
  }));
  const StyledTableCell = withStyles((theme) => ({
    head: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    body: {
      fontSize: 14,
    },
  }))(TableCell);
  
  const StyledTableRow = withStyles((theme) => ({
    root: {
      "&:nth-of-type(odd)": {
        backgroundColor: theme.palette.action.hover,
      },
    },
  }))(TableRow);
  
  
  export default function ViewApp() {
    const {users} = useSelector(stateSelector);
    console.log("0000000000********",users.avatar_url)
    const classes = useStyles();

 
   
    
  
    return (
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              edge="start"
              className={classes.menuButton}
              color="inherit"
              aria-label="menu"
            >
      
            </IconButton>
            <Typography variant="h7" className={classes.title}>
              <Link to='/'><Backspace style={{fontSize:35,color:'white'}}/></Link>
            </Typography>
           <center>
          
           </center>
          </Toolbar>
        </AppBar>
        <br />
        <div style={{ width: 1000, margin: "auto" }}>
        <Typography
            style={{
              textAlign: "center",
              // paddingTop: "9%",
              fontWeight: "bold",
              color: "blue",
              fontSize: 28,
             // paddingRight:'550px'
            }}
            color="textSecondary"
            gutterBottom
          >
            User Repositories information
          </Typography>

        <List className={classes.root}>
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          
          <img 
      src={users.avatar_url}
      alt="new"
      />
        
          
        </ListItemAvatar>
        
       
      </ListItem>

<ListItem>

<ListItemText> 
          UserName: {users.login}
        </ListItemText>
        <Divider/>
</ListItem>
  
  <ListItem>
  <ListItemText> 
Name: {users.name}
        </ListItemText>
        <Divider/>
  </ListItem>
  
  <ListItem>
  <ListItemText> 
          Biography: {users.bio}
        </ListItemText>
  </ListItem>

  <ListItem>
  <ListItemText> 
          Location: {users.location}
        </ListItemText>
        <Divider/>
  </ListItem>

  <ListItem>
  <ListItemText> 
  No public of repos: {users.public_repos}
        </ListItemText>
        <Divider/>
  </ListItem>
    </List>
        
        

          
        </div>
      </div>
    );
  }
  