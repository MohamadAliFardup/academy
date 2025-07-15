'use client';

import { ThemeProvider } from '@emotion/react';
import theme from '../theme/theme';
import { Provider } from 'react-redux';
import { store } from '@/store';

export function AppProviders({ children }: { children: React.ReactNode }) {
    return (
        <Provider store={store}>
            <ThemeProvider theme={theme}>{children}</ThemeProvider>
        </Provider>
    );
}
