import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link,  } from 'react-router-dom';
import { ArrowForward,GitHub, LinkedIn, LocationOn, } from '@mui/icons-material';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import {
  AppBar,
  Toolbar,
  Grid,
  IconButton,
  Typography,
  Card,
  Tab,
  Tabs,
  CardContent,
  Drawer,
  List,
  ListItem,
  ListItemText,
} from '@mui/material';
import { styled, createTheme, ThemeProvider, keyframes } from '@mui/material/styles';
import style from 'styled-components';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import MenuIcon from '@mui/icons-material/Menu';
import ContactMeSection from '../profile-content/contact-me-section';
import { Box } from '@mui/system';


const PREFIX = 'MenuSection';

const classes = {
  root: `${PREFIX}-root`,
  appBar: `${PREFIX}-appBar`,
  tabContent: `${PREFIX}-tabContent`,
  section: `${PREFIX}-section`,
  toolbar: `${PREFIX}-toolbar`,
  tab: `${PREFIX}-tab`,
  iconButton: `${PREFIX}-iconButton`,
  aboutMeTitle: `${PREFIX}-aboutMeTitle`,
  aboutMeContent: `${PREFIX}-aboutMeContent`,
  aboutMeCard: `${PREFIX}-aboutMeCard`,
  aboutMeCardNew: `${PREFIX}-aboutMeCardNew`,
  educationCard: `${PREFIX}-educationCard`,
  contactCard: `${PREFIX}-contactCard`,
  contactForm: `${PREFIX}-contactForm`,
  textField: `${PREFIX}-textField`,
  submitButton: `${PREFIX}-submitButton`,
  profileImage: `${PREFIX}-profileImage`,
  menuButton: `${PREFIX}-menuButton`,
  drawerPaper: `${PREFIX}-drawerPaper`,
};

const theme = createTheme({
  typography: {
    h5: {
      color: 'white',
      fontSize: '3rem',
      fontFamily: '"Montserrat", san-serif',
      textAlign: 'center',
      '@media (max-width:600px)': {
        fontSize: '2rem',
      },
    },
    tagContactMe:{
        fontFamily: '"Montserrat", san-serif',
        marginRight:'',
        marginLeft:'',
        color: 'white',
        fontSize: '2rem',
        textAlign: 'justify',
        '@media (max-width:600px)': {
          fontSize: '1.5rem',
        },
      },
    body1: {
      fontFamily: '"Montserrat", san-serif',
      marginRight:'',
      marginLeft:'',
      color: 'white',
      fontSize: '1.5rem',
      textAlign: 'justify',
      '@media (max-width:600px)': {
        fontSize: '1rem',
      },
    },
  },
});

const Root = styled('div')(({ theme }) => ({
  [`&.${classes.root}`]: {
    
  },
  [`& .${classes.appBar}`]: {
    backgroundColor: 'black',
    color: 'red',
    zIndex: theme.zIndex.drawer + 1,
  },
  [`& .${classes.tabContent}`]: {
    padding: theme.spacing(3),
    marginTop: theme.spacing(8),
  },
  [`& .${classes.section}`]: {
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'justify',
    padding: theme.spacing(3),
    boxSizing: 'border-box',
    width: '100%',
  },
  [`& .${classes.toolbar}`]: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  [`& .${classes.tab}`]: {
    textTransform: 'none !important',
    color: 'white',
    borderRadius: '35px 35px 35px 35px',
    overflow: 'hidden',
    '& .MuiTab-label': {
      textTransform: 'none !important',
      fontFamily: 'inherit !important',
    },
    '&:hover': {
      backgroundColor: 'white',
      color: 'black',
      transition: 'background-color 0.3s ease',
    },
    '&:hover .MuiTab-label': {
      color: 'white',
    },
    '&:focus': {
      outline: 'none',
      boxShadow: 'none',
    },
  },
  [`& .${classes.tabsIndicator}`]: {
    display: 'none',
  },
  [`& .${classes.iconButton}`]: {
    color: 'white',
    fontSize: '32px',
  },
  [`& .${classes.aboutMeTitle}`]: {
    fontSize: '2rem', // Ajusta el tamaño del título
    '@media (max-width:600px)': {
      fontSize: '1.5rem',
     
    },
  },
  [`& .${classes.aboutMeContent}`]: {
    maxWidth: '800px', // Ajusta el ancho del contenedor del texto
    textAlign: 'center',
    
    
  },
  [`& .${classes.aboutMeCard}`]: {
    backgroundColor: 'rgba(192,192,192,0.3)', // Color blanco semi-transparente
    backdropFilter: 'blur(10px)', // Efecto de desenfoque
    borderRadius: '35px',
    marginTop:'50px',
    padding: theme.spacing(3),
    maxWidth: '800px',
    margin: '0 auto',
    textAlign: 'justify',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    
    
  },
  [`& .${classes.educationCard}`]: {
    
    backgroundColor: 'rgba(192,192,192,0.3)',
    backdropFilter: 'blur(10px)',
    borderRadius: '35px',
    color:'white',
    padding: theme.spacing(2),
    width: '90%',
    margin: theme.spacing(2),
    textAlign: 'center',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    transition: 'transform 0.3s',
    '&:hover': {
      transform: 'scale(1.05)',
    },
  },
  [`& .${classes.aboutMeCardNew}`]: {
    
    backgroundColor: 'rgba(192,192,192,0.3)',
    backdropFilter: 'blur(10px)',
    borderRadius: '35px',
    color:'white',
    padding: theme.spacing(2),
    maxWidth: '1300px',
    margin: theme.spacing(2),
    textAlign: 'center',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    transition: 'transform 0.3s',
    '&:hover': {
      transform: 'scale(1.05)',
    },
  },
  educationImage: {
    width: '100px',
    height: '100px',
    marginBottom: theme.spacing(2),
    objectFit: 'cover',
    borderRadius: '10px',
  },
  [`& .${classes.contactCard}`]: {
    backgroundColor: 'rgba(255, 255, 255, 0.1)', // Color blanco semi-transparente
    backdropFilter: 'blur(10px)', // Efecto de desenfoque
    borderRadius: '15px',
    padding: theme.spacing(3),
    maxWidth: '500px',
    margin: '0 auto',
    textAlign: 'justify',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  },
  [`& .${classes.contactForm}`]: {
    display: 'flex',
    marginTop: '35px',
    flexDirection: 'column',
    alignItems: 'center', // Centra el formulario
    gap: theme.spacing(2),
  },
  [`& .${classes.textField}`]: {
    backgroundColor: 'white',
    borderRadius: '5px',
    '& .MuiInputBase-input': {
      padding: theme.spacing(1),
    },
  },
  [`& .${classes.submitButton}`]: {
    textTransform: 'none',
    backgroundColor: 'black',
    color: 'white',
    width: '150px', // Ancho del botón
    '&:hover': {
      backgroundColor: 'white',
      color: 'black',
      transition: 'background-color 0.3s ease',
    },
  },
  [`& .${classes.profileImage}`]: {
    borderRadius: '50%',
    width: '190px',
    height: '190px',
    objectFit: 'cover',
    marginBottom: theme.spacing(2),
  },
  [`& .${classes.cardWorkHistoryNew}`]: {
    width: '300px',
    height: '200px',
    margin: '20px',
    position: 'relative',
    transition: 'transform 0.3s',
    overflow: 'hidden',
    cursor: 'pointer',
    borderRadius: '8px',
    border: '1px solid #ccc',
  },
   [`& .${classes.cardImage}`]:{
    width: '100%',
    height: '100%',
    transition: 'opacity 0.3s',
    position: 'absolute',
    top: 0,
    left: 0,
    zIndex: 1,
  },
  [`& .${classes.profileImage}`] : {
    width: '200px', // Ajusta el tamaño según sea necesario
    height: '200px', // Ajusta el tamaño según sea necesario
    borderRadius: '50%',
    animation: `${glow} 2s infinite linear`,
    marginBottom:'70px',
    overflow: 'hidden', // Asegura que la sombra no se salga del contenedor
  },
  [`& .${classes.cardText}`]:{
    width: '100%',
    height: '100%',
    transition: 'opacity 0.3s',
    position: 'absolute',
    top: 0,
    left: 0,
    zIndex: 2,
    background: 'rgba(0, 0, 0, 0.7)',
    color: 'white',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    opacity: 0,
  },
  [`& .${classes.cardHoveredText}`]:{
    opacity: 1,
  },
  [`& .${classes.menuButton}`]: {
    color: 'white',
    marginRight: theme.spacing(2),
    '@media (min-width: 600px)': {
      display: 'none',
    },
  },
  [`& .${classes.drawerPaper}`]: {
    width: '250px',
  },

}));

const LineSeparator = style.div`
  width: 60%; /* Ajusta esto según sea necesario */
  height: 2px;
  background: linear-gradient(to right, transparent, lightgray 25%, lightgray 75%, transparent);
  margin: 20px auto; /* Centra horizontalmente */
`;

const SeparatorContainer = style.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin: 20px 0; /* Espacio vertical alrededor del separador */
`;


const BackgroundContainerFirst = styled('div')(() => ({
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  background: `
    linear-gradient(to bottom, rgba(0, 0, 0, 0) 60%, rgba(0, 0, 0, 0.9) 100%),
    url('/images/FondoPage.png') no-repeat center center
  `,
  backgroundSize: 'cover',
  zIndex: -1,
}));

const BackgroundContainer = styled('div')(() => ({
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  background: `linear-gradient(0deg, rgba(10,64,53,1) 43%, rgba(0,0,0,1) 82%); no-repeat center center`,
  backgroundSize: 'cover',
  zIndex: -1,
}));

const BackgroundContainerSecond = styled('div')(() => ({
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  background: `linear-gradient(0deg, rgba(0,0,0,1) 43%, rgba(10,64,53,1) 82%); no-repeat center center`,
  backgroundSize: 'cover',
  zIndex: -1,
}));


const FullScreenSection = styled('section')(() => ({
  minHeight: '100vh',
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  textAlign: 'center',
  position: 'relative',
}));

const aboutMeData = [
 
  {
    title: 'Ed Jasser Lopez Guardado',
    description: ' I am a web developer, enthusiastic about learning new technologies and languages, passionate about problem solving, perfectionist, dedicated and patient. Day by day I work for a better version of myself and face every challenge that comes my way. I am a firm believer that small details make a difference.',
    image: '/images/profile picture.jpeg'
  },
]

const workData = [
 
  {
    title: 'INFORMATIC TEACHER (CECATI)',
    description: 'In my time as an instructor I had the opportunity to teach a variety of fundamental topics in computing, including systems, hardware, and software. My goal was to provide actionable understanding and also allow them to develop their project creation and problem-solving skills',
    image: '/images/cecati.png',
    dateWork:'2018 - 2019'
  },
  
  {
    title: 'WEB DEVELOPMENT (FREELANCER) - LOCAL LAUNDRY',
    description: 'In this professional stage I dedicated myself to carrying out projects independently that would help me understand and reinforce my knowledge in the field of web development, creating a landing page for a local business, on this occasion it was a simple development implementing a frontend stack, CSS, HTML and JS.',
    image: '/images/laundrylogo.jpg',
    dateWork:'2019 - 2020'
  },
  {
    title: 'HIDROSOLUCIONES COLIMA (FREELANCER)',
    description: 'At this stage of my professional development, my main responsibilities were to develop, maintain and update local client websites. The stack used for this work was HTML, CSS, BOOTSTRAP, WORDPRESS and JS. In this case the development was for a company from Colima called Hidrosoluciones Colima',
    image: '/images/hidrosoluciones.jpg',
    dateWork:'2019 - 2020'
  },
  {
    title: 'WEB DEVELOPMENT (FREELANCER) - NISSAN DAOSA GDL',
    description: 'I continued with autonomous development but taking it to the next level, achieving larger projects with new challenges. Using the same stack for build more robust applications, collaborating with a team to whom I reported progress. I started using more advanced resources, such as catalogs, data packages, and consuming client APIs, which was crucial to strengthening my skills.',
    image: '/images/nissanlogo.jpg',
    dateWork:'2021 - 2022'
  },
  {
    title: 'ASST SYSTEM ENGINEER - TATA CONSULTANCY SERVICES',
    description: 'I focused on supporting Java applications. My responsibilities included reviewing, reporting, and implementing solutions for basic defects in digital Java projects. It was during this time that I began working with agile methodologies and task management tools such as Notion and Jira.',
    image: '/images/tatalogo2.jpg',
    dateWork:'2022 - 2023'
  },
  {
    title: 'REACT DEVELOPER - METLIFE',
    description: 'During this phase, my responsibilities included: - Developing complete components and services using TypeScript, React.js, MUI, as well as other packages and libraries. - Implementing solutions and improvements to the code of existing services and components in the application. - Establishing connectivity with microservices and backend APIs. - Performing tasks related to compilation, deployment, and version control system, utilizing GIT and AzDo.',
    image: '/images/metlifelogo.jpg',
    dateWork:'2023 - 2024'
  },
]

const educationData = [
 
  {
    title: 'Ingenieria en Sistemas Computacionales',
    institution: 'Tecnologico Nacional de Mexico, Campus Colima (TecNM)',
    date: '2014 - 2019',
    image: '/images/22-tecnologico-colima.png'
  },
  {
    title: 'Programador Web Full Stack, Web Developer',
    institution: 'Academia de desarrollo Web Full Stacl (ACADEMLO)',
    date: '2021 - 2022 ',
    image:"/images/academlo_logo.png" 
    
  },
  {
    title: 'Udemy, JavaScript, React.js + Node.js  ',
    institution: 'Udemy',
    date: '2021 - 2022 ',
    image:"/images/udeemyimage.jpg" 
    
  },
  {
    title: 'Linkedin Learnig, React Hooks ',
    institution: 'Linkedin',
    date: '2023 - 2024 ',
    image:"/images/images.jpg" 
    
  }
];

const glow = keyframes`
  0% {
    box-shadow: 0 0 20px 10px rgba(255, 255, 255, 0.5), 
                0 0 40px 20px rgba(255, 255, 255, 0.5), 
                0 0 60px 30px rgba(255, 255, 255, 0.5);
  }
  50% {
    box-shadow: 0 0 20px 10px rgba(255, 255, 255, 1), 
                0 0 40px 20px rgba(255, 255, 255, 1), 
                0 0 60px 30px rgba(255, 255, 255, 1);
  }
  100% {
    box-shadow: 0 0 20px 10px rgba(255, 255, 255, 0.5), 
                0 0 40px 20px rgba(255, 255, 255, 0.5), 
                0 0 60px 30px rgba(255, 255, 255, 0.5);
  }
`;


function MenuItems() {
  const handleInicioClick = () => {
    const section = document.getElementById('inicio');
    if (section) {
      const offsetTop = section.offsetTop - document.querySelector(`.${classes.appBar}`).clientHeight;
      window.scrollTo({ top: offsetTop, behavior: 'smooth' });
    }
  };


    const [hoveredCard, setHoverCard] = useState(null);

    const handleMouseEnter = (cardIndex) => {
      setHoverCard(cardIndex);
    };
    const handleMouseLeave = () => {
      setHoverCard(null);
    }


  const [tabValue, setTabValue] = React.useState(0);
  const [drawerOpen, setDrawerOpen] = React.useState(false);
  const [isMobileView, setIsMobileView] = React.useState(window.innerWidth < 600);

  React.useEffect(() => {
    const handleResize = () => {
      setIsMobileView(window.innerWidth < 600);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
    const sectionId = ['about-me', 'education', 'work-history', 'contact-me'][newValue];
    const section = document.getElementById(sectionId);
    if (section) {
      const offsetTop = section.offsetTop - document.querySelector(`.${classes.appBar}`).clientHeight;
      window.scrollTo({ top: offsetTop, behavior: 'smooth' });
    }
    setDrawerOpen(false); // Close drawer on tab change (for mobile view)
  };

  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };

  

  return (
    
    <Root className={classes.root}>
         <AppBar position="fixed" className={classes.appBar}>
        <Toolbar className={classes.toolbar}>
          {isMobileView && (
            <IconButton className={classes.menuButton} onClick={toggleDrawer}>
              <MenuIcon />
            </IconButton>
          )}

          <IconButton className={classes.iconButton} onClick={handleInicioClick}>
            <AccountCircleIcon fontSize="large" />
          </IconButton>
          <Typography variant="h6" component="div">
          </Typography>
          {!isMobileView && (
            <Tabs
              value={tabValue}
              onChange={handleTabChange}
              indicatorColor="none"
              textColor="inherit"
              variant="scrollable"
              scrollButtons="auto"
              classes={{ indicator: classes.tabsIndicator }}
            >
              <Tab className={classes.tab} label="About me" />
              <Tab className={classes.tab} label="Education" />
              <Tab className={classes.tab} label="Work history" />
              <Tab className={classes.tab} label="Contact me" />
            </Tabs>
          )}
        </Toolbar>
      </AppBar> 

      {/* Drawer for mobile view */}
      <Drawer
          style={{
            backgroundColor: 'rgba(255, 255, 255, 0.1)', // Color de fondo semi-transparente
            backdropFilter: 'blur(10px)', // Efecto de desenfoque
            borderRadius: '10px',
            height: '100%'
          }}
        anchor="left"
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
        classes={{ paper: classes.drawerPaper }}
      >
        <List sx={{ width: '110%', maxWidth: 380, bgcolor: 'black' , height: '100%', borderRadius: '10px', paddingTop: '100px'}}>
          {['About me', 'Education', 'Work history', 'Contact me'].map((text, index) => (
            <ListItem sx={{ '&:hover': { bgcolor: 'rgba(255, 255, 255, 0.1)', cursor: 'pointer' , borderRadius: '10px',} }}
                      button key={text} onClick={() => handleTabChange(null, index)}>
              <ListItemText primary={text}  />
            </ListItem>
          ))}
        </List>
      </Drawer>

      <FullScreenSection id="inicio">
      <BackgroundContainerFirst />
      <img src="/images/6f41a070-d03e-4b3c-a5ac-5767d89570d4.jpg" alt="Profile" className={classes.profileImage} />
      <Typography variant="h5" >Ed Jasser Lopez Guardado</Typography>
      <Typography variant="body1">Frontend Developer, React.js Developer</Typography>
    </FullScreenSection>

      <FullScreenSection id="about-me" className={classes.section}>
      <BackgroundContainer />
      <SeparatorContainer>
      <LineSeparator />
    </SeparatorContainer>
              <Typography variant="h5" style={{marginBottom:'80px'}}> Nice to meet you</Typography>
              <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', alignItems: 'center' }}>
                {aboutMeData.map((item, index) => (
                  
                  <Card
                    key={index}
                    className={classes.aboutMeCardNew}
                    onMouseEnter={() => handleMouseEnter(index)}
                    onMouseLeave={handleMouseLeave}
                     style={{
                      transform: hoveredCard === index ? 'scale(1.1)' : 'scale(1)',
                     }}
                  >
                    <CardContent >
                    <img src={item.image} alt={item.title} style={{ width: '100px', height: '170px', marginBottom: '10px', borderRadius:'30px' }} />
                      <Typography variant="h5" style={{marginBottom:'50px'}}>{item.title}</Typography>
                      <Typography  variant="body1">{item.description}</Typography>
                     
                    </CardContent>
                  </Card>
                  
                ))}
              </div>
              <div style={{marginTop:'100px'}}>
              </div>
            </FullScreenSection>
            <FullScreenSection id="education" className={classes.section}>
            <BackgroundContainerSecond />
            <SeparatorContainer>
      <LineSeparator />
    </SeparatorContainer>
  <Typography variant="h5" style={{ marginBottom: '80px' }}> Education</Typography>
  <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', alignItems: 'center' }}>
    {educationData.map((item, index) => (
      <Card
        key={index}
        className={classes.aboutMeCardNew}
        onMouseEnter={() => handleMouseEnter(index)}
        onMouseLeave={handleMouseLeave}
        style={{
          transform: hoveredCard === index ? 'scale(1.1)' : 'scale(1)',
          transition: 'transform 0.5s'
        }}
      >
        <CardContent style={{ position: 'relative', width: '200px', height: '200px' }}>
          <img 
            src={item.image} 
            alt={item.title} 
            style={{ 
              width: '100%', 
              height: '100%', 
              borderRadius: '30px', 
              display: hoveredCard === index ? 'none' : 'block' 
            }} 
          />
         
            <Typography style={{marginTop:'40px'}} variant="h6">{item.title}</Typography>
            <Typography variant="body2">{item.institution}</Typography>
            <Typography variant="body2">{item.date}</Typography>
            
          
        </CardContent>
      </Card>
    ))}
      <SeparatorContainer>
      <LineSeparator />
    </SeparatorContainer>
      <div style={{marginTop:'100px', display: 'flex' , flexWrap: 'wrap', justifyContent: 'center', alignItems: 'center', marginLeft:'50px'}}>
                <div >
                <svg style={{margin:'20px' }} fill="currentColor" height="57" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M0 32l34.9 395.8L191.5 480l157.6-52.2L384 32H0zm308.2 127.9H124.4l4.1 49.4h175.6l-13.6 148.4-97.9 27v.3h-1.1l-98.7-27.3-6-75.8h47.7L138 320l53.5 14.5 53.7-14.5 6-62.2H84.3L71.5 112.2h241.1l-4.4 47.7z"></path></svg>
                   <svg style={{margin:'20px'}} fill="currentColor" height="57" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512"><path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"></path></svg>
                   <svg style={{margin:'20px'}} fill="currentColor" height="57" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M0 32v448h448V32H0zm243.8 349.4c0 43.6-25.6 63.5-62.9 63.5-33.7 0-53.2-17.4-63.2-38.5l34.3-20.7c6.6 11.7 12.6 21.6 27.1 21.6 13.8 0 22.6-5.4 22.6-26.5V237.7h42.1v143.7zm99.6 63.5c-39.1 0-64.4-18.6-76.7-43l34.3-19.8c9 14.7 20.8 25.6 41.5 25.6 17.4 0 28.6-8.7 28.6-20.8 0-14.4-11.4-19.5-30.7-28l-10.5-4.5c-30.4-12.9-50.5-29.2-50.5-63.5 0-31.6 24.1-55.6 61.6-55.6 26.8 0 46 9.3 59.8 33.7L368 290c-7.2-12.9-15-18-27.1-18-12.3 0-20.1 7.8-20.1 18 0 12.6 7.8 17.7 25.9 25.6l10.5 4.5c35.8 15.3 55.9 31 55.9 66.2 0 37.8-29.8 58.6-69.7 58.6z"></path></svg>            
                   <svg style={{margin:'20px'}} fill="currentColor" height="57" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M418.2 177.2c-5.4-1.8-10.8-3.5-16.2-5.1.9-3.7 1.7-7.4 2.5-11.1 12.3-59.6 4.2-107.5-23.1-123.3-26.3-15.1-69.2.6-112.6 38.4-4.3 3.7-8.5 7.6-12.5 11.5-2.7-2.6-5.5-5.2-8.3-7.7-45.5-40.4-91.1-57.4-118.4-41.5-26.2 15.2-34 60.3-23 116.7 1.1 5.6 2.3 11.1 3.7 16.7-6.4 1.8-12.7 3.8-18.6 5.9C38.3 196.2 0 225.4 0 255.6c0 31.2 40.8 62.5 96.3 81.5 4.5 1.5 9 3 13.6 4.3-1.5 6-2.8 11.9-4 18-10.5 55.5-2.3 99.5 23.9 114.6 27 15.6 72.4-.4 116.6-39.1 3.5-3.1 7-6.3 10.5-9.7 4.4 4.3 9 8.4 13.6 12.4 42.8 36.8 85.1 51.7 111.2 36.6 27-15.6 35.8-62.9 24.4-120.5-.9-4.4-1.9-8.9-3-13.5 3.2-.9 6.3-1.9 9.4-2.9 57.7-19.1 99.5-50 99.5-81.7 0-30.3-39.4-59.7-93.8-78.4zM282.9 92.3c37.2-32.4 71.9-45.1 87.7-36 16.9 9.7 23.4 48.9 12.8 100.4-.7 3.4-1.4 6.7-2.3 10-22.2-5-44.7-8.6-67.3-10.6-13-18.6-27.2-36.4-42.6-53.1 3.9-3.7 7.7-7.2 11.7-10.7zM167.2 307.5c5.1 8.7 10.3 17.4 15.8 25.9-15.6-1.7-31.1-4.2-46.4-7.5 4.4-14.4 9.9-29.3 16.3-44.5 4.6 8.8 9.3 17.5 14.3 26.1zm-30.3-120.3c14.4-3.2 29.7-5.8 45.6-7.8-5.3 8.3-10.5 16.8-15.4 25.4-4.9 8.5-9.7 17.2-14.2 26-6.3-14.9-11.6-29.5-16-43.6zm27.4 68.9c6.6-13.8 13.8-27.3 21.4-40.6s15.8-26.2 24.4-38.9c15-1.1 30.3-1.7 45.9-1.7s31 .6 45.9 1.7c8.5 12.6 16.6 25.5 24.3 38.7s14.9 26.7 21.7 40.4c-6.7 13.8-13.9 27.4-21.6 40.8-7.6 13.3-15.7 26.2-24.2 39-14.9 1.1-30.4 1.6-46.1 1.6s-30.9-.5-45.6-1.4c-8.7-12.7-16.9-25.7-24.6-39s-14.8-26.8-21.5-40.6zm180.6 51.2c5.1-8.8 9.9-17.7 14.6-26.7 6.4 14.5 12 29.2 16.9 44.3-15.5 3.5-31.2 6.2-47 8 5.4-8.4 10.5-17 15.5-25.6zm14.4-76.5c-4.7-8.8-9.5-17.6-14.5-26.2-4.9-8.5-10-16.9-15.3-25.2 16.1 2 31.5 4.7 45.9 8-4.6 14.8-10 29.2-16.1 43.4zM256.2 118.3c10.5 11.4 20.4 23.4 29.6 35.8-19.8-.9-39.7-.9-59.5 0 9.8-12.9 19.9-24.9 29.9-35.8zM140.2 57c16.8-9.8 54.1 4.2 93.4 39 2.5 2.2 5 4.6 7.6 7-15.5 16.7-29.8 34.5-42.9 53.1-22.6 2-45 5.5-67.2 10.4-1.3-5.1-2.4-10.3-3.5-15.5-9.4-48.4-3.2-84.9 12.6-94zm-24.5 263.6c-4.2-1.2-8.3-2.5-12.4-3.9-21.3-6.7-45.5-17.3-63-31.2-10.1-7-16.9-17.8-18.8-29.9 0-18.3 31.6-41.7 77.2-57.6 5.7-2 11.5-3.8 17.3-5.5 6.8 21.7 15 43 24.5 63.6-9.6 20.9-17.9 42.5-24.8 64.5zm116.6 98c-16.5 15.1-35.6 27.1-56.4 35.3-11.1 5.3-23.9 5.8-35.3 1.3-15.9-9.2-22.5-44.5-13.5-92 1.1-5.6 2.3-11.2 3.7-16.7 22.4 4.8 45 8.1 67.9 9.8 13.2 18.7 27.7 36.6 43.2 53.4-3.2 3.1-6.4 6.1-9.6 8.9zm24.5-24.3c-10.2-11-20.4-23.2-30.3-36.3 9.6.4 19.5.6 29.5.6 10.3 0 20.4-.2 30.4-.7-9.2 12.7-19.1 24.8-29.6 36.4zm130.7 30c-.9 12.2-6.9 23.6-16.5 31.3-15.9 9.2-49.8-2.8-86.4-34.2-4.2-3.6-8.4-7.5-12.7-11.5 15.3-16.9 29.4-34.8 42.2-53.6 22.9-1.9 45.7-5.4 68.2-10.5 1 4.1 1.9 8.2 2.7 12.2 4.9 21.6 5.7 44.1 2.5 66.3zm18.2-107.5c-2.8.9-5.6 1.8-8.5 2.6-7-21.8-15.6-43.1-25.5-63.8 9.6-20.4 17.7-41.4 24.5-62.9 5.2 1.5 10.2 3.1 15 4.7 46.6 16 79.3 39.8 79.3 58 0 19.6-34.9 44.9-84.8 61.4zm-149.7-15c25.3 0 45.8-20.5 45.8-45.8s-20.5-45.8-45.8-45.8c-25.3 0-45.8 20.5-45.8 45.8s20.5 45.8 45.8 45.8z"></path></svg>
                   <svg style={{margin:'20px'}}  fill="currentColor" height="57" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M480 32l-64 368-223.3 80L0 400l19.6-94.8h82l-8 40.6L210 390.2l134.1-44.4 18.8-97.1H29.5l16-82h333.7l10.5-52.7H56.3l16.3-82H480z"></path></svg>
                   <svg style={{margin:'20px' }} fill="currentColor" height="57" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M0 32l34.9 395.8L191.5 480l157.6-52.2L384 32H0zm308.2 127.9H124.4l4.1 49.4h175.6l-13.6 148.4-97.9 27v.3h-1.1l-98.7-27.3-6-75.8h47.7L138 320l53.5 14.5 53.7-14.5 6-62.2H84.3L71.5 112.2h241.1l-4.4 47.7z"></path></svg>
                </div>
              </div>
  </div>
  <div style={{ marginTop: '100px' }}>
  </div>
</FullScreenSection>


      <FullScreenSection id="work-history" className={classes.section}>
      <BackgroundContainer />
      <SeparatorContainer>
      <LineSeparator />
    </SeparatorContainer>
              <Typography variant="h5" style={{marginBottom:'80px'}}> Work History</Typography>
              <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', alignItems: 'center' }}>
                {workData.map((item, index) => (
                  
                  <Card
                    key={index}
                    className={classes.educationCard}
                    onMouseEnter={() => handleMouseEnter(index)}
                    onMouseLeave={handleMouseLeave}
                     style={{
                      transform: hoveredCard === index ? 'scale(1.05)' : 'scale(1)',
                     }}
                  >
                    <CardContent  >
                    <img src={item.image} alt={item.title} style={{ width: '100px', height: '100px', marginBottom: '10px', borderRadius:'20px' }} />
                      <Typography variant="h6">{item.title}</Typography>
                      <Typography variant="body2">{item.dateWork}</Typography>
                      <Typography variant="body2" style={{ textAlign: 'justify', 
                                                           marginTop:'25px', 
                                                           marginBottom:'25px',
                                                           fontSize:'1.2rem',
                                                           
                                                           }}>{item.description}</Typography>
                    </CardContent>
                  </Card>
                  
                ))}
              </div>
            </FullScreenSection>
            
            {/* ----------- ESTAMOS TRABAJANDO EN ESTA SECCION ---------- */}

            
            <Box
               id="contact-me"
               sx={{
               display: 'flex',
               justifyContent: 'center',
               alignItems: 'center',
               flexDirection: 'column',
               minHeight: '14vh',
              bgcolor: 'black',
              p: 2,
                 }}
    >
        <SeparatorContainer>
      <LineSeparator />
    </SeparatorContainer>
      <Box sx={{ textAlign: 'center', my: 2, position: 'relative' }}>
        <Typography variant= "tagContactMe"   sx={{ display: 'inline-block', position: 'relative', color:'white', }}>
          Contact Me
          <Box
            sx={{
              content: '""',
              display: 'block',
              width: '90%',
              height: '1px',
              bgcolor: '#cfff00',
              margin: 'px auto 0',
              position: 'absolute',
              left: '50%',
              transform: 'translateX(-50%)',
            }}
          />
        </Typography>
      </Box>
      <div>
        <Link to="/contact">
          <IconButton
            sx={{
              backgroundColor: '#cfff00',
              '&:hover': {
                backgroundColor: 'white',
              },
              color: 'black',
              borderRadius: '50%',
              padding: '25px',
            }}
          >
            <ArrowForward />
          </IconButton>
        </Link>
      </div>
    </Box>
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        minHeight: '14vh',
        bgcolor: 'black',
        p: 4,
      }}
    >
      <Grid container justifyContent='center'>
        <Grid item>
          <Box display="flex" alignItems="center" mb={2} mr={0}>
            <LocationOn sx={{ color: 'white' }} />
            <Typography color="white" ml={0.5}>Colima, col.</Typography>
          </Box>
          <Box display="flex" alignItems="center" mb={2}>
            <EmailIcon sx={{ color: 'white' }} />
            <Typography color="white" ml={0.5}>edj.lopezguardado@gmail.com</Typography>
          </Box>
          <Box display="flex" alignItems="center" mb={2}>
            <PhoneIcon sx={{ color: 'white' }} />
            <Typography color="white" ml={0.5}>+52 315 114 6409</Typography>
          </Box>
        </Grid>
      </Grid>
      <Grid container spacing={1} justifyContent="center">
        <Grid item>
          <IconButton
            sx={{
              backgroundColor: 'white',
              '&:hover': {
                backgroundColor: 'lightgray',
              },
              color: 'black',
              borderRadius: '50%',
              padding: '15px',
            }}
            href="https://github.com/edlopezg"
            target="_blank"
            rel="noopener noreferrer"
          >
            <GitHub />
          </IconButton>
        </Grid>
        <Grid >
          <IconButton
            sx={{
              backgroundColor: 'white',
              '&:hover': {
                backgroundColor: 'lightgray',
              },
              color: 'black',
              borderRadius: '50%',
              padding: '15px',
              marginLeft: '10px',
              marginTop:'7px'
            }}
            href="https://www.linkedin.com/in/ed-jasser-lopez-guardado-283a41235/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <LinkedIn />
          </IconButton>
        </Grid>
       
      </Grid>
    </Box> 
    </Root>
  );
}

            
            
      
      
function App() {
  return (
   <ThemeProvider theme={theme}>
    <Router>
        <Routes>
          <Route path="/contact" element={<ContactMeSection />} />
          <Route path="/" element={<MenuItems /> } />
        </Routes>
      </Router>
  </ThemeProvider>
  );
}

export default App;
                      
                      
            

       
       
       
        
      

              
             

            

