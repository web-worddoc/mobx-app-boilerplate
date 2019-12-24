import React from 'react';
import { renderRoutes } from 'react-router-config';

import { routes } from 'routes';
import { ThemeStyles } from 'ThemeStyles';
import { GlobalStyles } from 'GlobalStyles';
import { LanguageProvider } from '@features/Language';


export const App = () => (
    <LanguageProvider>
        {renderRoutes(routes)}
        <GlobalStyles/>
        <ThemeStyles />
    </LanguageProvider>
);
