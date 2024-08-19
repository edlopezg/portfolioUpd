import { useState } from 'react';
import Typography from '@mui/material/Typography';
import Slider from "react-slick";
import styled from 'styled-components';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Container from '@mui/material/Container';

// Definir estilos usando styled-components
const LineSeparator = styled.div`
  width: 100%;
  height: 2px;
  background: linear-gradient(to right, transparent, white 50%, transparent);
  margin: 20px auto;
`;

const useStyles = {
  section: {
    padding: '50px 0',
    textAlign: 'center',
    backgroundColor: "black",
  },
  imageCard: {
    width: '96%',
    boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
    borderRadius: '8px',
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: 'auto',
    borderRadius: '10px',
  },
};

// Datos de ejemplo
const projectsData = [
  {
    title: "Proyecto1",
    image: "/images/weather-project.png",
    link: "https://weather-reatc-app.netlify.app/",
  },
  {
    title: "Proyecto2",
    image: "/images/rickapp.png",
    link: "https://rickymorty-wiki-app.netlify.app/",
  },
  {
    title: "Proyecto3",
    image: "/images/random.png",
    link: "https://card-message-random.netlify.app/",
  },
  {
    title: "Proyecto4",
    image: "/images/crudreact.png",
    link: "https://storied-halva-97965b.netlify.app/",
  },
];

function MyProjects() {
  const [hoveredCard, setHoveredCard] = useState(null);
  const [activeSlide, setActiveSlide] = useState(0);

  const handleMouseEnter = (index) => setHoveredCard(index);
  const handleMouseLeave = () => setHoveredCard(null);

  const settings = {
    centerMode: true,
    centerPadding: '50px',
    slidesToShow: 2,
    speed: 500,
    infinite: true,
    arrows: false, // Activar las flechas
    dots: true,
    afterChange: current => setActiveSlide(current),
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          centerPadding: '30px',
        },
      },
    ],
    appendDots: dots => (
      <div
        style={{
          bottom: '-55px',
        }}
      >
        <ul style={{ margin: "0px" }}> {dots} </ul>
      </div>
    ),
    customPaging: index => (
      <div
        style={{
          width: "10px",
          height: "10px",
          borderRadius: "50%",
          backgroundColor: index === activeSlide ? "gray" : "white",
        }}
      ></div>
    ),
  };

  return (
    <Container style={useStyles.section}>
      <LineSeparator />
      <Typography variant="h5" style={{ marginBottom: '90px', color: 'white' }}>Personal Projects</Typography>
      <Slider {...settings} className="custom-slick-slider">
        {Array.isArray(projectsData) && projectsData.length > 0 ? (
          projectsData.map((item, index) => (
            <div key={index} style={{ padding: '0 10px' }}>
              <div
                style={{
                  ...useStyles.imageCard,
                  transform: hoveredCard === index ? 'scale(1.02)' : 'scale(1)',
                  transition: 'transform 0.3s ease',
                }}
                onMouseEnter={() => handleMouseEnter(index)}
                onMouseLeave={handleMouseLeave}
              >
                <a href={item.link}>
                  <img src={item.image} alt={item.title} style={useStyles.image} />
                </a>
              </div>
            </div>
          ))
        ) : (
          <Typography variant="body2" style={{ color: 'white' }}>No work history data available.</Typography>
        )}
      </Slider>
    </Container>
  );
}

export default MyProjects;
