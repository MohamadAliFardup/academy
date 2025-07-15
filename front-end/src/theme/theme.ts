import { createTheme } from '@mui/material/styles';
import { faIR } from '@mui/material/locale';

const theme = createTheme(
    {
        direction: 'rtl',
        typography: {
            fontFamily: 'Vazirmatn, IRANSans, sans-serif',
        },
        components: {
            MuiFormHelperText: {
                styleOverrides: {
                    root: {
                        textAlign: 'right',
                        direction: 'rtl',
                    },
                },
            },
            MuiInputLabel: {
                styleOverrides: {
                    root: {
                        textAlign: 'right',
                        right: 0,
                        left: 'auto',
                    },
                },
            },
        },
    },
    faIR
);

export default theme;
