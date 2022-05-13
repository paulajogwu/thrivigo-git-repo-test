import React, { useState, useEffect } from 'react'
import Avatar from '@material-ui/core/Avatar'
import Button from '@material-ui/core/Button'
import CssBaseline from '@material-ui/core/CssBaseline'
import TextField from '@material-ui/core/TextField'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import CircularProgress from '@material-ui/core/CircularProgress'
import Link from '@material-ui/core/Link'
import Grid from '@material-ui/core/Grid'
import Box from '@material-ui/core/Box'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'
import Container from '@material-ui/core/Container'
import { useDispatch, useSelector } from 'react-redux'
import { createSelector } from 'reselect'
import { makeSelectUsers } from '../git_search/selector'
import { setUsers } from '../git_search/action'
import Swal from 'sweetalert2'
import { Spin, Alert } from 'antd';
import { useNavigate  } from 'react-router-dom'
import { red } from '@material-ui/core/colors'
import { LoadingOutlined } from '@ant-design/icons';

const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />;
 

const stateSelector = createSelector(makeSelectUsers, (users) => ({
  users,
}))
const actionDispatch = (dispatch) => ({
  setUser: (users) => dispatch(setUsers(users)),
})


const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '100%',
    margin: 'auto',
  },
  avatar: {
    // margin: theme.spacing(1),
    // backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
    width:'50%'
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}))

export default function Load(props) {
  let [name, setRepo] = useState('')

  let [searchError, setSearchError] = useState({})
 

  const { users } = useSelector(stateSelector)
  //console.log(users,"good")
  const { setUser } = actionDispatch(useDispatch())



  const GetRepo = () => {
    let timerInterval

    const isValid = validate()
    if (isValid) {
    
      Swal.fire({
        title: 'Loading!',
        timer: 3000,
        timerProgressBar: true,
        didOpen: () => {
          Swal.showLoading()
          const b = Swal.getHtmlContainer().querySelector('b')
          timerInterval = setInterval(() => {
            b.textContent = Swal.getTimerLeft()
          }, 100)
        },
        willClose: () => {
          clearInterval(timerInterval)
        }
      }).then((result) => {
        /* Read more about handling dismissals below */
        if (result.dismiss === Swal.DismissReason.timer) {
          

          var reposName = name;
          var nameURL = reposName.replace(/-/g, "/");
          fetch("https://api.github.com/users/" +nameURL)
          .then(result => result.json())
            .then((data) => {
              if(data.message=="Not Found"){ 
                Swal.fire({
                  icon: 'error',
                  title: `No Record Found`,
                  position: 'center',
                  showConfirmButton: false,
                  timer: 3000,
                  width: 350,
                  background: 'white',
                  iconColor: 'red',
                })
              }
              else{
            


                setUser(data)
               
                Redirects()
              }
            });

        }
      })


  }};

  const validate = () => {
    const searchError = {}
   

    let isvalid = true

    if (name == 0) {
      searchError.searchV = 'Repo is Required'
      isvalid = false
    } 

    setSearchError(searchError)
  

    return isvalid
  }
  const navigate = useNavigate();
  const Redirects = () => {
    navigate("/view");
    
  }
  const classes = useStyles()

  return (
    <div className="container">
      <br/>   <br/>   <br/>   <br/>   <br/>   <br/>
    <div className="cards">
      <Container component="main" maxWidth="xl" style={{ width: '100%' }}>
        <CssBaseline />

        <Grid container style={{ height: '450px', alignContent:'center' }}>
          <Grid item xs={5} style={{ width: '100%' }}>
            <div style={{ width: '100%' }}>
              <img src="thrive-agric-logo.svg" width="100% " />
            </div>
          </Grid>
          <Grid style={{ backgroundColor: 'black', width: '10px' }}></Grid>
          <Grid item xs={5} style={{ width: '100%'}}>
            <div className={classes.paper}>
              <img src="thrive-agric-logo.svg" width="30% " />
              <br/> 
              <div style={{marginLeft:100}}>
             
                <TextField
                  variant="outlined"
                  margin="normal"
                  //required
                  fullWidth
                  //id="email"
                  label="Enter Username"
                  name="email"
                  autoComplete="email"
                  autoFocus
                  onChange={(e) => setRepo(e.target.value)}
                />
                {Object.keys(searchError).map((key) => {
                  return <div style={{ color: 'red' }}>{searchError[key]}</div>
                })}
           
             
  <br/>  <br/>
                <Button
                  //type="Submit"
                  fullWidth
                  variant="contained"
                
                  className={classes.submit}
                  onClick={() => {
                    GetRepo()
                  }}
                  style={{backgroundColor:'green', width:'50%', color:'white', marginLeft:75}}
                >
                    {/* className="submit" */}
                  Search
                </Button>
               
              </div>
            </div>
          </Grid>
        </Grid>
     
      </Container>
    </div>
    </div>
  )
}




