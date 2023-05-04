import { RootState } from "@/plugins/store";
import { Snackbar } from "@mui/material";
import MuiAlert from "@mui/material/Alert";
import { useDispatch, useSelector } from "react-redux";
import { SnackbarActions } from "./snackbarSlice";

/**
 * A snackbar dialog that can be used to display messages to the user.
 *
 *
 * Usage:
 * ```
 * import { SnackbarActions } from "@/components/SnackbarDialog";
 * import { useDispatch } from "react-redux";
 *
 * const dispatch = useDispatch();
 * dispatch(SnackbarActions.show({ text: "Hello World!", severity: "success", duration: 5000 }));
 * ```
 */
export function SnackbarDialog() {
  // global client state - redux
  const snackbarState = useSelector((state: RootState) => state.snackbar);
  const dispatch = useDispatch();

  // actions
  const closeSnackbar = () => {
    dispatch(SnackbarActions.hide());
  };

  return (
    <Snackbar
      open={snackbarState.open}
      autoHideDuration={snackbarState.duration}
      onClose={closeSnackbar}
      anchorOrigin={{ vertical: "top", horizontal: "center" }}
    >
      <MuiAlert
        elevation={6}
        variant="filled"
        onClose={closeSnackbar}
        severity={snackbarState.severity}
        sx={{ width: "100%" }}
      >
        {snackbarState.text}
      </MuiAlert>
    </Snackbar>
  );
}
