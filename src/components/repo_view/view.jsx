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
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";
import Paper from "@material-ui/core/Paper";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Box from "@material-ui/core/Box";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Backspace from "@material-ui/icons/ArrowBack";
import Swal from "sweetalert2";
import { useHistory,Link } from 'react-router-dom'
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
    console.log("0000000000********",users)
    const classes = useStyles();
  var Userlist =[]
     //let [Userlist, setUserlist] = useState([]);
     for (var i = 0; i < users; i++) {
       console.log(i,"hhehheh")
       Userlist.push(i);
    }
    // let [deleted, setDeletedUser] = useState([])
    // const Customers = () => {
    //   fetch("http://localhost:8080/api/v1/banking/get_user")
    //     .then((response) => response.json())
    //     .then((response) => console.log( "we go" , setUserlist(response)));
    // };
  
    // useEffect(() => {
    //   Customers();
    // }, []);
  
   
    
  
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
              {/* <MenuIcon />   <Button size="medium" className={classes.margin}>
          Medium
        </Button>*/}
            </IconButton>
            <Typography variant="h7" className={classes.title}>
              <Link to='/'><Backspace style={{fontSize:35,color:'white'}}/></Link>
            </Typography>
           <center>
           <Typography
            style={{
              textAlign: "center",
              // paddingTop: "9%",
              fontWeight: "bold",
              color: "white",
              fontSize: 28,
             // paddingRight:'550px'
            }}
            color="textSecondary"
            gutterBottom
          >
            Repositories and Organization List
          </Typography>
           </center>
          </Toolbar>
        </AppBar>
        <br />
        <div style={{ width: 1000, margin: "auto" }}>
         

        
          <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="customized table">
              <TableHead>
             
                  <TableRow>
                    <StyledTableCell align="center">UserName</StyledTableCell>
                    <StyledTableCell align="center">Last Name</StyledTableCell>
                    <StyledTableCell align="center">Email</StyledTableCell>
                    <StyledTableCell align="center">Phone</StyledTableCell>
                    <StyledTableCell align="center">Balance</StyledTableCell>
                    <StyledTableCell align="center">Date</StyledTableCell>
                    <StyledTableCell align="center">Action</StyledTableCell>
                  </TableRow>
            
              </TableHead>
              
              <TableBody>
              
              {Userlist.map((data) => (
                <StyledTableRow>
                
                
                  <StyledTableCell align="center">{data.firstname} </StyledTableCell>
                  <StyledTableCell align="center"> {data.lastname}</StyledTableCell>
                  <StyledTableCell align="center"> {data.email}</StyledTableCell>
                  <StyledTableCell align="center"> {data.phone}</StyledTableCell>
                  <StyledTableCell align="center"> ₦ {data.Balance}</StyledTableCell>
                  <StyledTableCell align="center"> {data.date}</StyledTableCell>
                 
  
                    
                </StyledTableRow>
               ))} 
              </TableBody>
            </Table>
          </TableContainer>
        

          
        </div>
      </div>
    );
  }
  