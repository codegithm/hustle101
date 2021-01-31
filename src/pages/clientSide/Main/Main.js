import {React, useState} from 'react';
import { Container, makeStyles, Grid, Box } from '@material-ui/core';
import { Home, HomeOutlined, Person,PersonOutline, Search, SearchOutlined, Timer,TimerOutlined } from "@material-ui/icons"
import { green } from '@material-ui/core/colors';
import Profile from '../../../components/ProfileClient/Profile';
import HomeClient from '../../../components/HomeClient/Home';
import Active from '../../../components/ActiveClient/Active';
import SearchComponent from '../../../components/Search/Search'
const useStyles = makeStyles((theme)=>({
    container: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column"
    },
    img: {
        marginTop: "10px",
        marginBottom: "10px",
        
    },
    items: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "25%",
    },
    grid: {
        width: "100%",
    },
    lines: {
        borderSytle: "solid",
        height: "3px",
        width:"100%",
    },
    position : {
        position: "fixed",
        top: "20px",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center"
    }
}))

const Main = () =>{
    const classes = useStyles()
    const [iconColor,setIconColo] = useState("home");

    const home = () =>{
        setIconColo("home")
    }
    const profile = () =>{
        setIconColo("profile")
    }
    const search = () =>{
        setIconColo("search")
    }
    const clock = () =>{
        setIconColo("clock")
    }

    return(
        <Container className ={classes.container}>
            <div className={classes.position}>
            <svg className={classes.img} width="313" height="46" viewBox="0 0 313 46" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M70.6089 34H64.0171V20.2891H51.1631V34H44.5713V2.00781H51.1631V14.9717H64.0171V2.00781H70.6089V34ZM100.602 2.00781V23.0796C100.602 26.5806 99.5029 29.3491 97.3057 31.3853C95.123 33.4214 92.1348 34.4395 88.3408 34.4395C84.6055 34.4395 81.6392 33.4507 79.4419 31.4731C77.2446 29.4956 76.124 26.7783 76.0801 23.3213V2.00781H82.6719V23.1235C82.6719 25.2183 83.1699 26.749 84.166 27.7158C85.1768 28.668 86.5684 29.144 88.3408 29.144C92.0469 29.144 93.9292 27.1958 93.9878 23.2993V2.00781H100.602ZM122.596 25.6064C122.596 24.3613 122.157 23.4092 121.278 22.75C120.399 22.0762 118.817 21.373 116.532 20.6406C114.247 19.8936 112.438 19.1611 111.104 18.4434C107.472 16.4805 105.655 13.8364 105.655 10.5112C105.655 8.78271 106.139 7.24463 107.105 5.89697C108.087 4.53467 109.486 3.47266 111.302 2.71094C113.133 1.94922 115.184 1.56836 117.455 1.56836C119.74 1.56836 121.776 1.98584 123.563 2.8208C125.35 3.64111 126.734 4.80566 127.716 6.31445C128.712 7.82324 129.21 9.53711 129.21 11.4561H122.618C122.618 9.99121 122.157 8.85596 121.234 8.05029C120.311 7.22998 119.015 6.81982 117.345 6.81982C115.733 6.81982 114.481 7.16406 113.587 7.85254C112.694 8.52637 112.247 9.41992 112.247 10.5332C112.247 11.5732 112.767 12.4448 113.807 13.1479C114.862 13.8511 116.407 14.5103 118.443 15.1255C122.193 16.2534 124.925 17.6523 126.639 19.3223C128.353 20.9922 129.21 23.0723 129.21 25.5625C129.21 28.3311 128.163 30.5063 126.068 32.0884C123.973 33.6558 121.153 34.4395 117.608 34.4395C115.147 34.4395 112.906 33.9927 110.885 33.0991C108.863 32.1909 107.318 30.9531 106.249 29.3857C105.194 27.8184 104.667 26.002 104.667 23.9365H111.28C111.28 27.4668 113.39 29.2319 117.608 29.2319C119.176 29.2319 120.399 28.917 121.278 28.2871C122.157 27.6426 122.596 26.749 122.596 25.6064ZM157.774 7.34717H147.975V34H141.383V7.34717H131.715V2.00781H157.774V7.34717ZM168.146 28.7046H182.142V34H161.554V2.00781H168.146V28.7046ZM205.191 20.1353H192.535V28.7046H207.389V34H185.943V2.00781H207.345V7.34717H192.535V14.9717H205.191V20.1353ZM226 34H219.649V9.52246L212.069 11.8735V6.70996L225.318 1.96387H226V34ZM263.045 34H256.695V9.52246L249.115 11.8735V6.70996L262.364 1.96387H263.045V34Z" fill="#189A2E"/>
                <path d="M264.05 39.5191L256.261 31.0149C255.91 30.6311 255.42 30.4049 254.897 30.3819L253.565 30.3233C255.947 27.5384 257.447 23.9697 257.621 20.0234C258.034 10.6357 250.761 2.69446 241.371 2.28138C231.982 1.86831 224.039 9.14017 223.626 18.5279C223.213 27.9156 230.487 35.8568 239.876 36.2699C243.823 36.4436 247.51 35.2633 250.494 33.1352L250.435 34.4669C250.412 34.9898 250.595 35.4972 250.946 35.881L258.735 44.3853C259.469 45.1871 260.712 45.2417 261.505 44.5072L263.92 42.2967C264.722 41.5625 264.776 40.3206 264.05 39.5191ZM240.164 29.7337C234.386 29.4795 229.909 24.6001 230.164 18.8155C230.418 13.0391 235.298 8.56311 241.084 8.81764C246.861 9.07182 251.338 13.9512 251.083 19.7358C250.829 25.5122 245.949 29.9882 240.164 29.7337Z" fill="#325340"/>
            </svg>
            <Grid container 
             direction="row"
             justify="center"
             alignItems="stretch"
             className={classes.grid}>
                 <Grid className={classes.items} item xs={3}>
                     <Box onClick={home}>
                        {
                           iconColor === "home" ? <Home color="secondary"/> : <HomeOutlined />  
                        }
                     </Box>
                 </Grid>
                 <Grid className={classes.items} item xs={3}>
                     <Box onClick={profile}>
                         {
                             iconColor === "profile" ? <Person color="secondary" /> : <PersonOutline />
                         }
                     </Box>
                     </Grid>
                 <Grid className={classes.items} item xs={3}>
                    <Box onClick={search}>
                        {
                            iconColor === "search" ? <Search color="secondary" /> : <SearchOutlined />
                        }
                    </Box>
                 </Grid>
                 <Grid className={classes.items} item xs={3}>
                    <Box onClick={clock}>
                        {
                            iconColor === "clock" ? <Timer color="secondary" /> : <TimerOutlined />
                        }
                    </Box>
                 </Grid>
            </Grid>

            <Grid
                container
                direction="row"
                alignItems="center"
                justify="center"
                className={classes.grid}
                style={{top:160, zIndex:2}}>
                    <Grid xs={3}>
                        <Box 
                        bgcolor={iconColor === "home" ? green[500] : green[50]}  
                        className={classes.lines} ></Box>
                    </Grid>
                    <Grid xs={3}>
                        <Box bgcolor={iconColor === "profile" ? green[500] : green[50]}  
                        className={classes.lines}></Box>
                    </Grid>
                    <Grid xs={3}>
                        <Box bgcolor={iconColor === "search" ? green[500] : green[50]}  className={classes.lines}></Box>
                    </Grid>
                    <Grid xs={3}>
                        <Box bgcolor={iconColor === "clock" ? green[500] : green[50]}  className={classes.lines}></Box>
                    </Grid>

            </Grid>
            </div>
                {
                    iconColor === "home" ? <HomeClient /> : ""
                }
                {
                    iconColor === "profile" ? <Profile name="Ntando Xakaza" number="0814106872" email="xakazantando@gmail.comm" /> : ""
                }
                {
                    iconColor === "clock" ? <Active 
                    name="Frontend dev"
                    title="Native"
                    price="R1500"
                    time="2days"
                    status="pending"/> : ""
                }
                {
                    iconColor === "search" ? <SearchComponent /> : ""
                }
        </Container>
    )
}

export default Main