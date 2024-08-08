import { Typography } from '@mui/material';
import axios from 'axios';
import { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { Version } from './Version';
import CustomButton from './ui/CustomButton';

export const Welcome = () => {
  const [message, setMessage] = useState('');
  const [version, setVersion] = useState('');
  const navigate = useNavigate();

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
      <CustomButton size='large' variant='contained' onClick={() => navigate('/providers')}>
        Continuar
      </CustomButton>
      <Version version={version} />
    </>
  );
};
