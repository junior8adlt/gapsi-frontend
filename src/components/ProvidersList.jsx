import { Add as AddIcon, Delete as DeleteIcon } from '@mui/icons-material';
import {
  Button,
  CircularProgress,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  IconButton,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
} from '@mui/material';
import axios from 'axios';
import { useEffect, useState } from 'react';
import AddProviderForm from './forms/AddProvider';
import CustomButton from './ui/CustomButton';
const API_URL = import.meta.env.VITE_API_URL;
const ProvidersList = () => {
  const [providers, setProviders] = useState([]);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [total, setTotal] = useState(0);
  const [addProviderOpen, setAddProviderOpen] = useState(false);
  const [deleteProviderOpen, setDeleteProviderOpen] = useState(false);
  const [providerToDelete, setProviderToDelete] = useState(null);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    fetchProviders(page, rowsPerPage);
  }, [page, rowsPerPage]);

  const fetchProviders = (page, limit) => {
    setLoading(true);
    axios
      .get(`${API_URL}/providers?page=${page + 1}&limit=${limit}`)
      .then((response) => {
        setProviders(response.data.providers);
        setTotal(response.data.total);
      })
      .catch((error) => {
        console.error('Error fetching providers:', error);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const handleAddProvider = (newProvider) => {
    setProviders([...providers, newProvider]);
    setAddProviderOpen(false);
  };

  const handleDeleteProvider = () => {
    axios
      .delete(`${API_URL}/providers/${providerToDelete.name}`)
      .then(() => {
        setProviders(providers.filter((provider) => provider.name !== providerToDelete.name));
        setDeleteProviderOpen(false);
        setProviderToDelete(null);
      })
      .catch((error) => {
        console.error('Error deleting provider:', error);
      });
  };

  const handleOpenDeleteDialog = (provider) => {
    setProviderToDelete(provider);
    setDeleteProviderOpen(true);
  };

  const handleCloseDeleteDialog = () => {
    setDeleteProviderOpen(false);
    setProviderToDelete(null);
  };

  const handleAddButtonClick = () => {
    setAddProviderOpen(true);
  };

  const handleCloseAddProvider = () => {
    setAddProviderOpen(false);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
    <Paper style={{ margin: '20px', padding: '20px' }}>
      <div style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: '10px' }}>
        <CustomButton variant='contained' startIcon={<AddIcon />} onClick={handleAddButtonClick}>
          Agregar Proveedor
        </CustomButton>
      </div>
      <TableContainer component={Paper}>
        {loading ? (
          <div style={{ display: 'flex', justifyContent: 'center', padding: '20px' }}>
            <CircularProgress />
          </div>
        ) : (
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Nombre</TableCell>
                <TableCell>Razón Social</TableCell>
                <TableCell>Dirección</TableCell>
                <TableCell>Acciones</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {providers.map((provider, index) => (
                <TableRow key={index}>
                  <TableCell>{provider.name}</TableCell>
                  <TableCell>{provider.reason}</TableCell>
                  <TableCell>{provider.address}</TableCell>
                  <TableCell>
                    <IconButton onClick={() => handleOpenDeleteDialog(provider)} color='secondary'>
                      <DeleteIcon />
                    </IconButton>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        )}
        <TablePagination
          rowsPerPageOptions={[1, 10, 25, 50]}
          component='div'
          count={total}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </TableContainer>
      {addProviderOpen && (
        <AddProviderForm onClose={handleCloseAddProvider} onProviderAdded={handleAddProvider} />
      )}
      <Dialog open={deleteProviderOpen} onClose={handleCloseDeleteDialog}>
        <DialogTitle>Eliminar Proveedor</DialogTitle>
        <DialogContent>
          <DialogContentText>
            ¿Estás seguro de que quieres eliminar al proveedor {providerToDelete?.name}?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDeleteDialog} color='primary'>
            Cancelar
          </Button>
          <Button onClick={handleDeleteProvider} color='secondary'>
            Eliminar
          </Button>
        </DialogActions>
      </Dialog>
    </Paper>
  );
};

export default ProvidersList;
