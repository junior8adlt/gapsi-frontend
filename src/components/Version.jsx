import { Box, Paper, Stack } from '@mui/material';
import { styled } from '@mui/material/styles';
import PropTypes from 'prop-types';

export const Version = ({ version }) => {
  const Item = styled(Paper)(() => ({
    backgroundColor: '#fff',
    padding: '1rem',
    textAlign: 'right',
    color: '#747474',
    fontWeight: 'bold',
  }));
  return (
    <div className='version-div'>
      <Box sx={{ width: '100%' }}>
        <Stack spacing={2}>
          <Item>Versión {version}</Item>
        </Stack>
      </Box>
    </div>
  );
};

Version.propTypes = {
  version: PropTypes.string.isRequired,
};
