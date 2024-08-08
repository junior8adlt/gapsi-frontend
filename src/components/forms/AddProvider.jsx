import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
} from '@mui/material';
import axios from 'axios';
import { useState } from 'react';
import toast from 'react-hot-toast';
const API_URL = import.meta.env.VITE_API_URL;

const AddProviderForm = ({ onClose, onProviderAdded }) => {
  const [name, setName] = useState('');
  const [reason, setReason] = useState('');
  const [address, setAddress] = useState('');
  const [errors, setErrors] = useState({});

  const handleValidation = () => {
    let valid = true;
    let errors = {};

    if (!name) {
      valid = false;
      errors['name'] = 'El nombre es requerido';
    }

    if (!reason) {
      valid = false;
      errors['reason'] = 'La razón social es requerida';
    }

    if (!address) {
      valid = false;
      errors['address'] = 'La dirección es requerida';
    }

    setErrors(errors);
    return valid;
  };

  const handleAddProvider = () => {
    if (handleValidation()) {
      axios
        .post(`${API_URL}/providers`, { name, reason, address })
        .then((response) => {
          onProviderAdded(response.data.provider);
          toast.success('Proveedor agregado correctamente');
          onClose();
        })
        .catch((error) => {
          toast.error(error.response?.data?.message || 'Error agregando proveedor');
          console.error('Error adding provider:', error);
        });
    }
  };

  return (
    <Dialog open onClose={onClose}>
      <DialogTitle>Agregar proveedor</DialogTitle>
      <DialogContent>
        <TextField
          autoFocus
          margin='dense'
          label='Nombre'
          fullWidth
          value={name}
          onChange={(e) => setName(e.target.value)}
          error={!!errors.name}
          helperText={errors.name}
        />
        <TextField
          margin='dense'
          label='Razón Social'
          fullWidth
          value={reason}
          onChange={(e) => setReason(e.target.value)}
          error={!!errors.reason}
          helperText={errors.reason}
        />
        <TextField
          margin='dense'
          label='Dirección'
          fullWidth
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          error={!!errors.address}
          helperText={errors.address}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} color='primary'>
          Cancelar
        </Button>
        <Button onClick={handleAddProvider} color='primary'>
          Agregar
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default AddProviderForm;
