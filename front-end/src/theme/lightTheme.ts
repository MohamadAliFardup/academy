import { createTheme } from '@mui/material/styles';
import { faIR } from '@mui/material/locale';

export const lightTheme = createTheme(
    {
        palette: {
            mode: 'light',
            primary: { main: '#3B82F6' },
            background: { default: '#F9FAFB', paper: '#FFFFFF' },
            text: { primary: '#111827', secondary: '#4B5563' },
        },
        direction: 'rtl',
        typography: {
            fontFamily: 'Vazirmatn, B Nazanin ,IRANSans, sans-serif',
        },
    },
    faIR
);
