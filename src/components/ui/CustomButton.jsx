// src/components/ColorButton.js
import { Button } from '@mui/material';
import { styled } from '@mui/material/styles';

const CustomButton = styled(Button)(() => ({
  color: '#ffffff',
  backgroundColor: '#0099cc',
  '&:hover': {
    backgroundColor: '#0099cc',
  },
}));

export default CustomButton;
