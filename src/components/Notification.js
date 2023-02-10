import React from "react";
import { Alert } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { showNotification } from "../app/ui-slice";

export default function Notification({ type, message }) {
  const notification = useSelector((state) => state.ui.notification);
  const dispatch = useDispatch();

  const handleClose = () => {
    dispatch(
      showNotification({
        open: false,
      })
    );
  };
  return (
    <div>
      {notification.open && (
        <Alert severity={type} onClose={handleClose}>
          {message}
        </Alert>
      )}
    </div>
  );
}
