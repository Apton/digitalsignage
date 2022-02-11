/* eslint-disable no-undef */
/* eslint-disable react/prop-types */
import { useDispatch, useSelector } from 'react-redux';
import React, {  useEffect } from 'react';
import Grid from '@material-ui/core/Grid';
import { immo } from '../../store/slice/ImmoSlice';
import { Card } from '@material-ui/core';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import Chip from '@material-ui/core/Chip';
import PlaceIcon from '@material-ui/icons/Place';
import HomeWorkIcon from '@material-ui/icons/HomeWork';
import MeetingRoomIcon from '@material-ui/icons/MeetingRoom';
import NumberFormat from 'react-number-format';
import LocalPhoneIcon from '@material-ui/icons/LocalPhone';
import Carousel from 'react-material-ui-carousel';
import QRCode from 'qrcode.react';



const PaginaOrizzontale = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch({ type: 'INIT' });
      }, []);
      const queryString = require('query-string');
      // eslint-disable-next-line no-restricted-globals
      const parsed = queryString.parse(location.search);
      const intervallo = Number (parsed.time);
      const api = (parsed.api);
      const FirstColor= parsed.colorePrimario;
      const SecondColor =  parsed.coloreSecondario;
      const numeroTelefono = parsed.numero;
      const logoImg = parsed.logo;
      const qr = parsed.qrLink
   
      const heights = window.innerHeight;
      const width = window.innerWidth;

      const immobili = useSelector(immo);
      const immobiliFiltered = immobili.filter( x => x.old === false && x.publishOnDisplay === true );

      const slides = immobiliFiltered.map((immobile, index) =>
      {
        const immaginiFiltered = immobile.immagini.filter(x => x.old === false);
        const immaginiOrdinate = [...immaginiFiltered].sort((a, b) => a.posizione - b.posizione);
        const desc = immobile.descrizione.substring(0, 800);
        const indexOfSpace = desc.lastIndexOf(" ");
        const descEtc = desc.substring(0,indexOfSpace);
        const descModificata = immobile.descrizione.length > 800 ?  descEtc + "..." : immobile.descrizione;

        const element = immaginiOrdinate.map((immagine, index) => {
       if(index >0 && index <3){
return(
          <Grid
          key={immagine.id}
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
        style={{position: 'relative'}}
      >

<div style={{marginLeft:`${width/50}px`,marginTop:`${width/50}px`,height:`${width/3}px`, width:`${width/3}px`, borderRadius:"15px",
         backgroundImage:`url("https://${api}/img/immobili/${immagine.fileName}")`,position: "relative",  backgroundPosition: 'center',
         backgroundSize:"cover"}}></div>
      
         

        </Grid>);
       }
        })

        
      return(

          <div style={{ overflow: "hidden", position: "relative", height:`${heights}px`}}>
              <img style={{opacity:"0.2", position: "absolute", left: "0", top:"0", width:"100%", height:`${heights}px`}} alt="background" src={`https://${api}/img/backReal.jpeg`} />
              <div>
        <Grid
        container
        direction="row"

        justifyContent="center"
        alignItems="flex-start"
        style={{position:"relative"}}
      >

<div style={{height:`${heights/3}px`, width:`${width}px`, borderRadius:"15px",
         backgroundImage:`url("https://${api}/img/immobili/${immaginiOrdinate[0]?.fileName}")`,position: "relative",  backgroundPosition: 'center',
         backgroundSize:"cover"}}></div>
      

          <Grid
        container
        direction="row"
        justifyContent="space-evenly"
        alignItems="flex-start"
        style={{position: 'relative'}}
      >
        
<div>
     {element}
   <QRCode style={{height:`${width/5}px`, width:`${width/5}px`, marginTop:`${heights/40}px`}} value={`${qr}?id=${immobile.id}&tipo=Display`} size={200} /> 

       </div> 

                  <Card style={{ height:`${heights/1.8}px`, width:"60%",  position: 'relative', margin:"20px",  borderRadius:"15px"}}>
                    <AppBar position="static" style={{height:"20px", backgroundColor: `#${FirstColor}`}}>
                    <Toolbar >
                        </Toolbar>
                   
                        </AppBar>
           
                        <div style={{padding:"40px"}}>
                  
                        <Typography variant="h2" align="left" style={{fontWeight:"500", margin:"25px", fontSize:`${heights/60}px`}}>
                          {immobile.titolo?.toUpperCase()}
                        </Typography>
                        <div style={{display:"flex", marginLeft:"0px"}} >
                        <Chip
        avatar={<Avatar style={{backgroundColor:`#${SecondColor}`, height:`${heights/50}px`, width: `${heights/50}px`}}><PlaceIcon style={{fontSize:`${heights/80}px`, color:"#FFFFFF"}} /></Avatar>}
        label={immobile.citta}
        clickable
        style={{backgroundColor: "#FFFFFF", fontSize:`${heights/100}px`, margin:`${heights/100}px`, height:`${heights/100}px`}}
      />
      <Chip
        avatar={<Avatar style={{backgroundColor:`#${SecondColor}`, height:`${heights/50}px`, width: `${heights/50}px`}}><HomeWorkIcon style={{fontSize:`${heights/80}px`, color:"#FFFFFF"}} /></Avatar>}
        label={immobile.tipologia?.nome}
        clickable
        style={{backgroundColor: "#FFFFFF", fontSize:`${heights/100}px`, margin:`${heights/100}px`, height:`${heights/100}px`}}
      />
     
      </div>
      <Grid
        container
        direction="row"

        justifyContent="flex-start"
        alignItems="flex-start"
        style={{position:"relative"}}
      >
      <Chip
        avatar={<Avatar style={{backgroundColor:`#${SecondColor}`, height:`${heights/50}px`, width: `${heights/50}px`}}><MeetingRoomIcon style={{fontSize:`${heights/80}px`, color:"#FFFFFF"}} /></Avatar>}
        label={`${immobile.locali?.numero} Locali`}
        clickable
        style={{backgroundColor: "#FFFFFF", fontSize:`${heights/100}px`, margin:`${heights/100}px`, height:`${heights/100}px`}}
      />
      </Grid>
                        <Typography variant="subtitle1" align="left" style={{ margin:"25px", fontSize:`${heights/100}px`}}>
                            {descModificata}
                        </Typography>
                        <Typography variant="h1" align="left" style={{fontSize:`${heights/40}px`,fontWeight:"500", margin:"25px", position:"absolute", bottom:"30px", color:`#${SecondColor}`}}>
{immobile.pigione?.toString() === "0" ? "SU RICHIESTA" :
                        <NumberFormat
                          value={`${immobile.pigione?.toString()?.toUpperCase()}`}
                          className="foo"
                          displayType="text"
                          thousandSeparator
                          renderText={(value, props) => <div {...props}>{value} CHF</div>}
                        />}
                          
                        </Typography>
                        </div>
                  </Card>
                  <img style={{height:`${heights/30}px`, marginTop:`${heights/30}px`,marginLeft:"20px"}} alt="image" src={`https://${api}/img/${logoImg}`} />
   
   <Typography style={{marginTop:`${heights/30}px`, fontSize:`${heights/60}px`, marginLeft:"40px"}}><LocalPhoneIcon style={{fontSize:`${heights/50}px`, marginBottom:"-10px"}} />{numeroTelefono}</Typography>
                  
          </Grid>

    </Grid>
    </div>
   
    </div>
      )})

      return(
        <Carousel
       navButtonsAlwaysInvisible
        animation="slide"
        interval={intervallo}
        indicators={false}
        duration={5000}
        navButtonsProps={{
          padding: '0px',
          '@media (min-width:600px)': {
            padding: '12px',
          },
        }}
      >
        {slides}
      </Carousel>
      )
};

export default PaginaOrizzontale;
