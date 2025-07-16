import { createTheme } from '@mui/material/styles';
import { faIR } from '@mui/material/locale';

export const darkTheme = createTheme(
    {
        palette: {
            mode: 'dark',
            primary: { main: '#3B82F6' },
            background: { default: '#0F172A', paper: '#1E293B' },
            text: { primary: '#F1F5F9', secondary: '#94A3B8' },
        },
        direction: 'rtl',
        typography: {
            fontFamily: 'Vazirmatn, B Nazanin ,IRANSans, sans-serif',
        },
    },
    faIR
);
