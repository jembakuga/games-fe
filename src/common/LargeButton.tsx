import React from 'react';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import FavoriteIcon from '@mui/icons-material/Favorite';
import WalletIcon from '@mui/icons-material/Wallet';
import { SvgIconProps } from '@mui/material';

interface ChildComponentProps {
    title: string;
    icon: React.ReactElement<SvgIconProps>; // Define a prop for the icon
}

function LargeButton({ icon, title }: ChildComponentProps) {
    return (
        <div>
            {/* Your other content */}
            <Grid container direction="column" alignItems="center" spacing={2}>
                <Grid item>
                    <Button
                        variant="contained"
                        color="primary"
                        size="large"
                        style={{ width: '150px', height: '150px' }} // Customize the size
                    >
                        {icon}
                    </Button>
                </Grid>
                <Grid item>
                    <Typography variant="h4" align="center">
                        {title}
                    </Typography>
                </Grid>
            </Grid>
        </div>
    );
}

export default LargeButton;
