import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link,  } from 'react-router-dom';
import { ArrowForward,GitHub, LinkedIn, LocationOn, } from '@mui/icons-material';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone'; 
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import '@fortawesome/fontawesome-free/css/all.min.css';
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
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
import { styled, createTheme, ThemeProvider, keyframes,} from '@mui/material/styles';
import style from 'styled-components';
import estilo from 'styled-components';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import MenuIcon from '@mui/icons-material/Menu';
import ContactMeSection from '../profile-content/contact-me-section';
import { Box } from '@mui/system';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import MyProjects from '../profile-content/my-projects';


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
    marginRight:'60px'
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
    borderRadius: '10px',
    color:'white',
    padding: theme.spacing(2),
    width: '80%',
    margin: theme.spacing(2),
    textAlign: 'center',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    transition: 'transform 0.3s',
    '&:hover': {
      transform: 'scale(1.01)',
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

const DownloadButton = estilo.button`
 
padding: 20px 50px;
font-family: "Montserrat", san-serif;
font-size: 16px;
background: rgba(255, 255, 255, 0.2); /* Fondo semitransparente */
border: none;
border-radius: 90px;
cursor: pointer;
color: white;
backdrop-filter: blur(10px); /* Efecto de desenfoque */
-webkit-backdrop-filter: blur(10px); /* Para Safari */
transition: background 0.3s ease;
&:hover {
  background: rgba(255, 255, 255, 0.4);
}
`;

const aboutMeData = [
 
  {
    title: 'Ed Jasser Lopez Guardado',
    description: 'Nice to meet you, I am a web developer, enthusiastic about learning new technologies and languages, passionate about problem solving, perfectionist, dedicated and patient. Day by day I work for a better version of myself and face every challenge that comes my way. I am a firm believer that small details make a difference.',
    image: '/images/profile picture.jpeg'
  },
]

const workData = [
   
  {
    title: 'React Developer - METLIFE',
    description: 'During this phase, my responsibilities included: - Developing complete components and services using TypeScript, React.js, MUI, as well as other packages and libraries. - Implementing solutions and improvements to the code of existing services and components in the application. - Establishing connectivity with microservices and backend APIs. - Performing tasks related to compilation, deployment, and version control system, utilizing GIT and AzDo.',
    image: '/images/metlifelogo.jpg',
    dateWork:'2023 - 2024'
  },
  {
    title: 'Asst System Engineer - TATA CONSULTANCY SERVICES',
    description: 'I focused on supporting Java applications. My responsibilities included reviewing, reporting, and implementing solutions for basic defects in digital Java projects. It was during this time that I began working with agile methodologies and task management tools such as Notion and Jira.',
    image: '/images/tatalogo2.jpg',
    dateWork:'2022 - 2023'
  },
  {
    title: 'Web Developer - NISSAN DAOSA GDL',
    description: 'I continued with autonomous development but taking it to the next level, achieving larger projects with new challenges. Using the same stack for build more robust applications, collaborating with a team to whom I reported progress. I started using more advanced resources, such as catalogs, data packages, and consuming client APIs, which was crucial to strengthening my skills.',
    image: '/images/nissanlogo.jpg',
    dateWork:'2021 - 2022'
  },
  {
    title: 'Web Developer - HIDROSOLUCIONES COLIMA ',
    description: 'At this stage of my professional development, my main responsibilities were to develop, maintain and update local client websites. The stack used for this work was HTML, CSS, BOOTSTRAP, WORDPRESS and JS. In this case the development was for a company from Colima called Hidrosoluciones Colima',
    image: '/images/hidrosoluciones.jpg',
    dateWork:'2019 - 2020'
  },
  {
    title: 'WEB DEVELOPMENT (FREELANCER) - LOCAL LAUNDRY',
    description: 'In this professional stage I dedicated myself to carrying out projects independently that would help me understand and reinforce my knowledge in the field of web development, creating a landing page for a local business, on this occasion it was a simple development implementing a frontend stack, CSS, HTML and JS.',
    image: '/images/laundrylogo.jpg',
    dateWork:'2019 - 2020'
  },
  {
    title: 'Informatic Teacher - CECATI',
    description: 'In my time as an instructor I had the opportunity to teach a variety of fundamental topics in computing, including systems, hardware, and software. My goal was to provide actionable understanding and also allow them to develop their project creation and problem-solving skills',
    image: '/images/cecati.png',
    dateWork:'2018 - 2019'
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

    const handleMouseEnter = (index) => {
      setHoverCard(index);
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
    const sectionId = ['about-me', 'education', 'Projects', 'work-history', 'contact-me'][newValue];
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
              <Tab className={classes.tab} label="Projects" />
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
    height: '100vh', // Asegurarse de que ocupe toda la altura de la pantalla
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }}
  anchor="top"
  open={drawerOpen}
  onClose={() => setDrawerOpen(false)}
  classes={{ paper: classes.drawerPaper }}
>
  <List
    sx={{
      width: '100%',
      maxWidth: 'none',
      bgcolor: 'black',
      height: 'auto',
      display: 'flex',
      flexDirection: 'column', // Alinea los elementos en columna
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: '50px', // Añadir margen superior para que todas las opciones sean visibles
      paddingBottom: '20px', // Añadir margen inferior para darle espacio al último elemento
    }}
  >
    {['About me', 'Education', 'Projects', 'Work history', 'Contact me'].map((text, index) => (
      <ListItem
        sx={{
          '&:hover': {
            bgcolor: 'rgba(255, 255, 255, 0.1)',
            cursor: 'pointer',
            borderRadius: '10px',
          },
          my: 2, // Margen vertical para espaciar los elementos
          width: 'auto', // Ajusta el ancho de los items
          justifyContent: 'center', // Centra los items
        }}
        button
        key={text}
        onClick={() => handleTabChange(null, index)}
      >
        <ListItemText primary={text} sx={{ textAlign: 'center', color: 'white' }} />
      </ListItem>
    ))}
  </List>
</Drawer>

      <FullScreenSection id="inicio">
      <BackgroundContainerFirst />
      <img src="/images/6f41a070-d03e-4b3c-a5ac-5767d89570d4.jpg" alt="Profile" className={classes.profileImage} />
      <Typography variant="h5" >Ed Jasser Lopez Guardado</Typography>
      <Typography variant="body1">Frontend Developer, React.js Developer</Typography>
      <a style={{marginTop:'80px'}} href="/documents/CVEdEsp.pdf" download>
      <DownloadButton>Download Spanish CV</DownloadButton>
      </a>
      <a style={{marginTop:'10px'}} href="/documents/CV Ed Jasser Lopez Guardado.pdf" download>
      <DownloadButton>Download English CV</DownloadButton>
      </a>
    </FullScreenSection>

      <FullScreenSection id="about-me" className={classes.section}>
      <BackgroundContainer />
      <SeparatorContainer>
      <LineSeparator />
    </SeparatorContainer>
              <Typography variant="h5" style={{marginBottom:'80px'}}> Hi, this is me ! 👋 </Typography>
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
         
            <Typography style={{marginTop:'40px', fontFamily: '"Montserrat", san-serif'}} variant="h6">{item.title}</Typography>
            <Typography variant="body2" style={{fontFamily: '"Montserrat", san-serif'}}>{item.institution}</Typography>
            <Typography variant="body2" style={{fontFamily: '"Montserrat", san-serif'}}>{item.date}</Typography>
            
          
        </CardContent>
      </Card>
    ))}
  <div style={{ marginTop: '10px', display: 'flex', flexWrap: 'wrap', justifyContent: 'center', alignItems: 'center', marginLeft: '0px' }}>
      <div style={{ margin: '20px' }}>
        <i className="fab fa-react" style={{ fontSize: '70px', color: '#0a4035' }}></i>
      </div>
      <div style={{ margin: '20px' }}>
        <i className="fab fa-java" style={{ fontSize: '70px', color: '#0a4035' }}></i>
      </div>
      <div style={{ margin: '20px' }}>
        <i className="fab fa-sass" style={{ fontSize: '70px', color: '#0a4035' }}></i>
      </div>
      <div style={{ margin: '20px' }}>
        <i className="fab fa-github" style={{ fontSize: '70px', color: '#0a4035' }}></i>
      </div>
      <div style={{ margin: '20px' }}>
        <i className="fab fa-js-square" style={{ fontSize: '70px', color: '#0a4035' }}></i>
      </div>
      <div style={{ margin: '20px' }}>
        <i className="fab fa-css3-alt" style={{ fontSize: '70px', color: '#0a4035' }}></i>
      </div>
      <div style={{ margin: '20px' }}>
        <i className="fab fa-html5" style={{ fontSize: '70px', color: '#0a4035' }}></i>
      </div>
    </div>


   </div>
   
</FullScreenSection>

{/* in this section we will put the project section */}

<Box id= "Projects" style={{backgroundColor:"black"}}>
  <MyProjects />
</Box>
  
<FullScreenSection id="work-history" className={classes.section}>
  <BackgroundContainer />
  <SeparatorContainer>
    <LineSeparator />
  </SeparatorContainer>
  <Typography variant="h5" style={{ marginBottom: '80px'}}> Work History</Typography>
  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
    {workData.map((item, index) => (
      <Accordion key={index} className={classes.educationCard} style={{marginBottom:'10px'}} >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls={`panel${index}-content`}
          id={`panel${index}-header`}
          onMouseEnter={() => handleMouseEnter(index)}
          onMouseLeave={handleMouseLeave}
          style={{
            transform: hoveredCard === index ? 'scale(1)' : 'scale(1)',
          }}
        >
         <strong style={{fontFamily: '"Montserrat", san-serif', fontSize:'1.3rem', }}>{item.title}</strong> 
        </AccordionSummary>
        <AccordionDetails>
          <CardContent >
            <img src={item.image} alt={item.title} style={{ width: '100px', height: '100px', marginBottom: '10px', borderRadius: '30px' }} />
            <Typography variant="body2" style={{ fontFamily: '"Montserrat", san-serif' }}>{item.dateWork}</Typography>
            <Typography variant="body2" style={{
              textAlign: 'justify',
              marginTop: '25px',
              marginBottom: '25px',
              fontSize: '1.2rem',
              fontFamily: '"Montserrat", san-serif',
            }}>{item.description}</Typography>
          </CardContent>
        </AccordionDetails>
      </Accordion>
    ))}
  </div>
</FullScreenSection>
  
    
                      
            
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
            <Typography color="white" ml={0.5}>+52 312 195 6683</Typography>
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





                      
                      
            

       
       
       
        
      

              
             

            

