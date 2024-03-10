import React, { useState } from 'react';
import { TextField, Button, Typography, Grid, Paper, Box } from '@mui/material';
import { styled } from '@mui/system';
import pic from "../images/pic1.jpg";
import backgroundImage from "../images/facts.jpg";

// Importing Google Fonts
import '@fontsource/josefin-sans';
import '@fontsource/yanone-kaffeesatz';

// Custom styled button with desired color and hover effect
const CustomButton = styled(Button)({
  backgroundColor: '#DD2476',
  borderRadius: '999px', // Making the button rounded like a capsule
  padding: '8px 16px', // Adjusting button padding
  fontSize: '14px', // Adjusting button font size
  '&:hover': {
    backgroundColor: '#B81E62', // Adjust hover color as required
  },
});

const StyledBox = styled(Box)({
  height: "100vh",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  backgroundImage: `url(${backgroundImage})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  overflow: "hidden", // Preventing scrolling
});

export default function CitizenContact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    contactNumber: '',
    address: '',
    problem: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your logic to handle form submission here
    console.log(formData);
    // Reset form data after submission
    setFormData({
      name: '',
      email: '',
      contactNumber: '',
      address: '',
      problem: ''
    });
  };

  return (
    <StyledBox>
      <Paper style={{ padding: 20, maxWidth: 400, width: '100%' }}>
        <Typography variant="h5" align="center" gutterBottom style={{ marginBottom: 20, fontFamily: 'Josefin Sans' }}>
          <i>"Give not to receive, but to ignite giving in others."</i> 
        </Typography>
        <Typography variant="h4" align="center" gutterBottom style={{}}>
          Contact
        </Typography>
        <form onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField label="Name" variant="outlined" fullWidth value={formData.name} name="name" onChange={handleChange} required />
            </Grid>
            <Grid item xs={12}>
              <TextField label="Email" variant="outlined" fullWidth value={formData.email} name="email" onChange={handleChange} required />
            </Grid>
            <Grid item xs={12}>
              <TextField label="Address" variant="outlined" fullWidth value={formData.address} name="address" onChange={handleChange} required multiline />
            </Grid>
            <Grid item xs={12}>
              <TextField label="Feedback" variant="outlined" fullWidth value={formData.contactNumber} name="contactNumber" onChange={handleChange} required />
            </Grid>
            <Grid item xs={12}>
              <CustomButton type="submit" variant="contained" color="primary" fullWidth>Submit</CustomButton>
            </Grid>
          </Grid>
        </form>
      </Paper>
    </StyledBox>
  );
}
