import React, { useState, useEffect } from "react";
import axios from "axios";
import { Box, Grid, SpeedDial, SpeedDialAction, SpeedDialIcon } from "@mui/material";
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import SaveIcon from '@mui/icons-material/Save';
import PrintIcon from '@mui/icons-material/Print';
import ShareIcon from '@mui/icons-material/Share';
import PlayerMenu from "./common/PlayerMenu";

type Props = {};

const actions = [
    { icon: <ContentCopyIcon />, name: 'Copy' },
    { icon: <SaveIcon />, name: 'Save' },
    { icon: <PrintIcon />, name: 'Print' },
    { icon: <ShareIcon />, name: 'Share' },
  ];

const PlayerMain = (props: Props) => { 

  useEffect(() => {
    axios
      .get("http://localhost:8080/home/loadDashBoard/1")
      .then((res) => {
        console.log(res.data);
        
      });
  }, [])

  return (
    <>
      <Box sx={{ height: 320, transform: 'translateZ(0px)', flexGrow: 1 }}>
     <PlayerMenu />
    </Box>
    </>
  );
};

export default PlayerMain;