'use client';

import React from 'react';
import { useTheme } from '@/providers/ThemeContext';
import { IconButton } from '@mui/material';
import { Brightness4, Brightness7 } from '@mui/icons-material';

export function ThemeToggleButton() {
    const { isDark, toggleTheme } = useTheme();

    return (
        <IconButton onClick={toggleTheme} color="inherit">
            {isDark ? <Brightness7 /> : <Brightness4 />}
        </IconButton>
    );
}
