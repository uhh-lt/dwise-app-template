import SettingsIcon from "@mui/icons-material/Settings";
import { IconButton, IconButtonProps } from "@mui/material";
import { useDispatch } from "react-redux";
import { SettingsActions } from "./settingsSlice";

export function SettingsIconButton(props: Omit<IconButtonProps, "onClick">) {
  // global client state - redux
  const dispatch = useDispatch();

  const openSettings = () => {
    dispatch(SettingsActions.show());
  };

  return (
    <IconButton onClick={openSettings} {...props}>
      <SettingsIcon />
    </IconButton>
  );
}
