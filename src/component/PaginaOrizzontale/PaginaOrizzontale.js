/* eslint-disable no-undef */
/* eslint-disable react/prop-types */
import { useDispatch, useSelector } from 'react-redux';
import React, {  useEffect } from 'react';
import Grid from '@material-ui/core/Grid';
import { immo } from '../../store/slice/ImmoSlice';
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
import Paper from '@material-ui/core/Paper';
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
      const FirstColor= parsed.colorePrimario;
      const SecondColor =  parsed.coloreSecondario;
      const numeroTelefono = parsed.numero;
      const logoImg = parsed.logo;
      const api = (parsed.api);
      const qr = parsed.qrLink

      const heights = window.innerHeight;
      const width = window.innerWidth;

      const immobili = useSelector(immo);
      const immobiliFiltered = immobili.filter( x => x.old === false && x.publishOnDisplay === true );

      const slides = immobiliFiltered.map((immobile) =>
      {
        const immaginiFiltered = immobile.immagini.filter(x => x.old === false);
        const immaginiOrdinate = [...immaginiFiltered].sort((a, b) => a.posizione - b.posizione);
        const desc = immobile.descrizione.substring(0, 900);
        const arrayOfPhrases = immobile.descrizione.split(".");
        var descDef="";
        var numberOfPhrases=0;
        const threePhrases = arrayOfPhrases.map( (phrase) => 
          {
            const firstChar = phrase.substring(0,1);
            const firstIsNotNumber = isNaN(firstChar);
            console.log("dd", phrase, firstIsNotNumber, firstChar,numberOfPhrases)
            if(firstIsNotNumber && numberOfPhrases <= 3 || firstChar=="\n" && numberOfPhrases <= 3)
            {
              numberOfPhrases = numberOfPhrases+1;
         
              descDef = `${descDef}.${phrase}`;
            } else if(numberOfPhrases <= 3)
            {
              descDef = `${descDef}.${phrase}`;
            }
            return descDef;


          }
          )

   

        const indexOfSpace = desc.lastIndexOf(" ");
        const descEtc = desc.substring(0,indexOfSpace);
        const descModificata = immobile.descrizione.length > 900 ?  descEtc + "..." : immobile.descrizione;
      return(

          <div key={immobile.id} style={{ overflow: "hidden", position: "relative", height:`${heights}px`}}>
              <img style={{opacity:"0.5", position: "absolute", left: "0", top:"0", width:"100%", height:"1400px"}} alt="background" src={`https://${api}/img/backReal.jpeg`} />
              <div>
        <Grid
        container
        direction="row"

        justifyContent="center"
        alignItems="flex-start"
        style={{position:"relative"}}
      >
        <div style={{ marginRight:`${width/40}px`,marginTop:"4%",height:`${heights/1.5}px`, width:`${width/1.6}px`,borderRadius:"15px",
         backgroundImage:`url("https://${api}/img/immobili/${immaginiOrdinate[0]?.fileName}")`,position: "relative",  backgroundPosition: 'center',
         backgroundSize:"cover"}}>

     
         </div>
         <div  style={{ marginTop:"4%",height:`${heights/3.4}px`, width:`${width/4}px`,borderRadius:"15px",
         backgroundImage:`url("https://${api}/img/immobili/${immaginiOrdinate[1]?.fileName}")`,position: "relative",  backgroundPosition: 'center',
         backgroundSize:"cover"}}></div>
      

          <Grid
        container
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        style={{position: 'relative', marginLeft:"150px"}}
      >      
        <img style={{height:`${heights/18}px`}} alt="logo" src={`https://${api}/img/${logoImg}`} /> 
        <Typography style={{fontSize:`${heights/55}px`}}><LocalPhoneIcon style={{fontSize:`${heights/35}px`, marginBottom:"-10px"}} />{numeroTelefono}</Typography>
        <QRCode style={{height:`${width/15}px`, width:`${width/15}px`}} value={`${qr}?id=${immobile.id}&tipo=Display`} size={200} /> 
                  <Paper elevation={3} style={{ marginRight:"5%",marginTop:"-20%", width:"55%",height:`${heights/1.8}px`,  position: 'relative',borderRadius:"15px"}}>
                    <AppBar position="static" style={{height:"20px", backgroundColor: `#${FirstColor}`}}>
                      <Toolbar >
                      </Toolbar>                 
                    </AppBar>                                              
                        <div style={{padding:"40px"}}>                
                          <Typography variant="h2" align="left" style={{fontWeight:"500", margin:"25px", fontSize:`${heights/35}px`}}>
                            {immobile.titolo?.toUpperCase()}
                          </Typography>
                        <div style={{display:"flex", marginLeft:"0px"}} >
        <Chip
          avatar={<Avatar style={{backgroundColor:`#${SecondColor}`, height:"50px", width: "50px"}}><PlaceIcon style={{fontSize:`${heights/35}px`, color:"#FFFFFF"}} /></Avatar>}
          label={immobile.citta}
          clickable
          style={{backgroundColor: "#FFFFFF", fontSize:`${heights/55}px`, margin:"20px", height:"50px"}}
        />
      <Chip
        avatar={<Avatar style={{backgroundColor:`#${SecondColor}`, height:"50px", width: "50px"}}><HomeWorkIcon style={{fontSize:`${heights/40}px`, color:"#FFFFFF"}} /></Avatar>}
        label={immobile.tipologia?.nome}
        clickable
        style={{backgroundColor: "#FFFFFF", fontSize:`${heights/55}px`, margin:"20px", height:"50px"}}
      />
      <Chip
        avatar={<Avatar style={{backgroundColor:`#${SecondColor}`, height:"50px", width: "50px"}}><MeetingRoomIcon style={{fontSize:`${heights/35}px`, color:"#FFFFFF"}} /></Avatar>}
        label={`${immobile.locali?.numero} Locali`}
        clickable
        style={{backgroundColor: "#FFFFFF", fontSize:`${heights/55}px`, margin:"20px", height:"50px"}}
      />
      </div>
                        <Typography variant="subtitle1" align="left" style={{ margin:"25px",fontSize:`${heights/80}px`}}>
                            {descModificata}
                        </Typography>
                        <Typography variant="h1" align="left" style={{fontSize:`${heights/25}px`,fontWeight:"500", margin:"25px", position:"absolute", bottom:"30px", color:`#${SecondColor}`}}>
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
                  </Paper>
                  
          </Grid>

    </Grid>
    </div>
   
    </div>
      )})

      return(
        <Carousel
       navButtonsAlwaysInvisible
        animation="slide"
        indicators={false}
        duration={2000}
        interval={intervallo}
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
