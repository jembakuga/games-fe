import { AppBar, Toolbar, Typography } from "@mui/material";
import colorConfigs from "../../../agent/configs/colorConfigs";
import sizeConfigs from "../../../agent/configs/sizeConfigs";

const Topbar = () => {
  return (
    <AppBar
      position="fixed"
      sx={{
        width: `calc(100% - ${sizeConfigs.sidebar.width})`,
        ml: sizeConfigs.sidebar.width,
        boxShadow: "unset",
        backgroundColor: colorConfigs.topbar.bg,
        color: colorConfigs.topbar.color
      }}
    >
      <Toolbar>
        <Typography variant="h6">
          React sidebar with dropdown sdgdf
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Topbar;