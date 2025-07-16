'use client';

import { Provider } from 'react-redux';
import { store } from '@/store';
import { ThemeProvider } from '@/providers/ThemeContext';

export function AppProviders({ children }: { children: React.ReactNode }) {
    return (
        <Provider store={store}>
            <ThemeProvider>{children}</ThemeProvider>
        </Provider>
    );
}
