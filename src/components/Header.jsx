import MoreIcon from '@mui/icons-material/MoreVert';
import AppBar from '@mui/material/AppBar';
import IconButton from '@mui/material/IconButton';
import { styled } from '@mui/material/styles';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { useNavigate } from 'react-router-dom';

const StyledToolbar = styled(Toolbar)(({ theme }) => ({
  alignItems: 'center',
  justifyContent: 'space-between',
  paddingTop: theme.spacing(1),
  paddingBottom: theme.spacing(2),
  paddingLeft: '1rem',
  paddingRight: '1rem',
  backgroundColor: '#F2F2F2',
}));

export const Header = () => {
  const navigate = useNavigate();
  return (
    <>
      <AppBar position='static' sx={{ boxShadow: 'none', borderBottom: '1px solid #E0E0E0' }}>
        <StyledToolbar>
          <Typography
            variant='h1'
            noWrap
            component='div'
            sx={{
              fontSize: '2rem',
              color: '#747474',
              display: 'flex',
              alignItems: 'center',
              cursor: 'pointer',
            }}
            onClick={() => navigate('/')}
          >
            <img
              src='/assets/icon.png'
              alt='Logo'
              style={{ height: '2rem', marginRight: '10px' }}
            />
            e-Commerce Gapsi
          </Typography>

          <IconButton size='large' aria-label='display more actions' edge='end' color='inherit'>
            <MoreIcon sx={{ color: 'black' }} />
          </IconButton>
        </StyledToolbar>
      </AppBar>
    </>
  );
};
