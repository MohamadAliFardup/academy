'use client';

import { Box, Typography, Paper } from '@mui/material';

export default function MuiBoxTest() {
    return (
        <Paper
            elevation={3}
            sx={{
                padding: 3,
                width: 300,
                textAlign: 'center',
                backgroundColor: (theme) => theme.palette.background.paper,
                color: (theme) => theme.palette.text.primary,
                borderRadius: 2,
            }}
        >
            <Typography variant="h6">MUI تست باکس</Typography>
            <Typography variant="body2">این باکس با تم MUI است</Typography>
        </Paper>
    );
}


