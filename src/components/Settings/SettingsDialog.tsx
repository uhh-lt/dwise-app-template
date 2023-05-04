import { RootState } from "@/plugins/store";
import { Dialog, Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { SettingsActions } from "./settingsSlice";

/**
 * A settings dialog that allows the user to modify the app settings.
 *
 *
 * Usage (simple):
 * ```
 * <SettingsIconButton />
 * // or
 * <SettingsListItemButton />
 * ```
 *
 * Usage (advanced):
 * ```
 * import { SettingsActions } from "@/components/SettingsDialog";
 * import { useDispatch } from "react-redux";
 *
 * const dispatch = useDispatch();
 * dispatch(SettingsActions.show());
 * ```
 */
export function SettingsDialog() {
  // global client state - redux
  const isOpen = useSelector((state: RootState) => state.settings.isOpen);
  const dispatch = useDispatch();

  // actions
  const closeSettings = () => {
    dispatch(SettingsActions.hide());
  };

  return (
    <>
      <Dialog open={isOpen} onClose={closeSettings} maxWidth="md" fullWidth>
        <Typography variant="h3" sx={{ mt: 1 }}>
          Settings
        </Typography>
      </Dialog>
    </>
  );
}
