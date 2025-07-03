// components/NotificationSnackbar.jsx
import React from 'react';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';

const Alert = React.forwardRef(function Alert(props, ref) {
  return (
    <MuiAlert
      elevation={6}
      ref={ref}
      variant="filled"
      {...props}
      sx={{
        fontSize: '1.2rem',           // 👈 Increase text size
        padding: '20px 24px',         // 👈 More padding = bigger dialog
        minWidth: '320px',            // 👈 Minimum width
        maxWidth: '90vw',             // 👈 Avoid overflow on small screens
        lineHeight: 1.6
      }}
    />
  );
});

const NotificationSnackbar = ({ open, message, severity = 'success', onClose }) => (
  <Snackbar
    open={open}
    autoHideDuration={5000}
    onClose={onClose}
    anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
  >
    <Alert onClose={onClose} severity={severity}>
      {message}
    </Alert>
  </Snackbar>
);

export default NotificationSnackbar;
