import { Button, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import axios from 'axios';
import { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { Version } from './Version';

export const Welcome = () => {
  const [message, setMessage] = useState('');
  const [version, setVersion] = useState('');
  const navigate = useNavigate();
  const ColorButton = styled(Button)(() => ({
    color: '#ffffff',
    backgroundColor: '#0099cc',
    '&:hover': {
      backgroundColor: '#0099cc',
    },
  }));

  useEffect(() => {
    const fetchWelcomeAndVersion = async () => {
      try {
        const welcomeResponse = await axios.get('http://localhost:3000/welcome');
        setMessage(welcomeResponse.data.message);
      } catch (error) {
        toast.error('Error fetching welcome message');
        console.error('Error fetching welcome message:', error);
      }

      try {
        const versionResponse = await axios.get('http://localhost:3000/version');
        setVersion(versionResponse.data.version);
      } catch (error) {
        toast.error('Error fetching version');
        console.error('Error fetching version:', error);
      }
    };

    fetchWelcomeAndVersion();
  }, []);

  return (
    <>
      <div className='circle'>
        <img src='/assets/logo.png' alt='Logo' />
      </div>
      <Typography
        variant='h4'
        component='h4'
        sx={{
          color: '#747474',
          textAlign: 'center',
        }}
      >
        {message}
      </Typography>
      <ColorButton size='large' variant='contained' onClick={() => navigate('/providers')}>
        Continuar
      </ColorButton>
      <Version version={version} />
    </>
  );
};
