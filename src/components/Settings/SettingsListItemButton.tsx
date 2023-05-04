import SettingsIcon from "@mui/icons-material/Settings";
import { ListItemButton, ListItemButtonBaseProps, ListItemIcon, ListItemText } from "@mui/material";
import { useDispatch } from "react-redux";
import { SettingsActions } from "./settingsSlice";

export function SettingsListItemButton(props: Omit<ListItemButtonBaseProps, "onClick">) {
  // global client state - redux
  const dispatch = useDispatch();

  const openSettings = () => {
    dispatch(SettingsActions.show());
  };

  return (
    <ListItemButton onClick={openSettings} {...props}>
      <ListItemIcon>
        <SettingsIcon />
      </ListItemIcon>
      <ListItemText primary="Settings" />
    </ListItemButton>
  );
}
