import { AlertColor, Alert } from "@mui/material";
import toast, { ToastType, Toaster, resolveValue } from "react-hot-toast";

const toast2Alert: Record<ToastType, AlertColor> = {
  success: "success",
  error: "error",
  loading: "warning",
  blank: "info",
  custom: "info",
};

export function CustomToaster() {
  return (
    <Toaster>
      {(t) => (
        <Alert
          className={t.className}
          elevation={6}
          key={t.id}
          style={{ opacity: t.visible ? 1 : 0, ...t.style }}
          variant="filled"
          onClose={() => toast.remove(t.id)}
          severity={toast2Alert[t.type]}
          sx={{ width: "33%" }}
          icon={t.icon}
        >
          {resolveValue(t.message, t)}
        </Alert>
      )}
    </Toaster>
  );
}
