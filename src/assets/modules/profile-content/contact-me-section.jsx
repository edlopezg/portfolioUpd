import React, { useState } from 'react';
import { Card, CardContent, Typography, TextField, Button, Box, Grid, IconButton } from '@mui/material';
import { styled, createTheme, ThemeProvider } from '@mui/material/styles';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { ArrowBack } from '@mui/icons-material';
import SendIcon from '@mui/icons-material/Send';
import emailjs from 'emailjs-com'; // Importar EmailJS
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; // Importar estilos de react-toastify

const theme = createTheme({
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: '25px',
          backgroundColor: '#808080',
          color: '#FFFFFF',
          '&:hover': {
            backgroundColor: '#696969',
          },
        },
      },
    },
  },
});

const CustomTextField = styled(TextField)({
  '& label.Mui-focused': {
    color: 'gray',
  },
  '& .MuiInput-underline:after': {
    borderBottomColor: 'gray',
  },
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderColor: 'gray',
      borderRadius: '25px',
    },
    '&:hover fieldset': {
      borderColor: '#cfff00',
    },
    '&.Mui-focused fieldset': {
      borderColor: 'white',
    },
    '& input': {
      color: 'white',
    },
  },
});

const CustomTextFieldMessage = styled(TextField)({
  '& .MuiInputBase-input': {
    color: 'white',
  },
  '& label.Mui-focused': {
    color: 'gray',
  },
  '& .MuiInput-underline:after': {
    borderBottomColor: 'gray',
  },
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderColor: 'gray',
      borderRadius: '25px',
    },
    '&:hover fieldset': {
      borderColor: '#cfff00',
    },
    '&.Mui-focused fieldset': {
      borderColor: 'white',
    },
    '& input': {
      color: 'white',
    },
  },
});

const ContactMeSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.send(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      formData,
      import.meta.env.VITE_EMAILJS_USER_ID
    )
    .then((result) => {
      console.log(result.text);
      toast.success('Message sent successfully!');
      setFormData({ name: '', email: '', message: '' }); // Reset the form after successful submission
    }, (error) => {
      console.log(error.text);
      toast.error('Failed to send message. Please try again later.');
    });
  };

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh', bgcolor: '#1b2c2e', p: 2 }}>
        <Card sx={{ maxWidth: 900, width: '100%', p: 4, backgroundColor: 'rgba(0, 0, 0, 0.8)', backdropFilter: 'blur(10px)', borderWidth: '1px', borderStyle: 'solid', borderColor: 'gray', borderRadius: '15px' }}>
          <CardContent>
            <Typography variant="h5" component="div" sx={{ mb: 2, color: 'white', textAlign: 'center' }}>
              CONTACT ME
            </Typography>
            <form id='form' onSubmit={handleSubmit}>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <Typography style={{ color: 'gray', marginBottom: '5px' }}>Name</Typography>
                  <CustomTextField name="name" type="text" fullWidth variant="outlined" value={formData.name} onChange={handleChange} />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Typography style={{ color: 'gray', marginBottom: '5px' }}>Email</Typography>
                  <CustomTextField name="email" fullWidth variant="outlined" value={formData.email} onChange={handleChange} />
                </Grid>
                <Grid item xs={12}>
                  <Typography style={{ color: 'gray', marginBottom: '5px' }}>Message</Typography>
                  <CustomTextFieldMessage name="message" multiline rows={6} fullWidth variant="outlined" value={formData.message} onChange={handleChange} />
                </Grid>
              </Grid>
              <Box sx={{ display: 'flex', justifyContent: 'center', mt: 6 }}>
                <Button id='button' size="large" variant="contained" startIcon={<SendIcon />} type="submit">
                  Submit
                </Button>
              </Box>
            </form>
          </CardContent>
          <Box sx={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'right' }}>
            <div>
              <Link to='/'>
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
                  <ArrowBack />
                </IconButton>
              </Link>
            </div>
          </Box>
        </Card>
      </Box>
      <ToastContainer />
    </ThemeProvider>
  );
};

export default ContactMeSection;
