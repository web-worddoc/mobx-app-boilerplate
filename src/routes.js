import React from 'react';
import { Redirect } from 'react-router-dom';

import { makePrivateRoute, makeAuthRoute } from '@lib';
import { paths } from '@core';


export const routes = [
    // {
    //     path: paths.root.pathname,
    //     component: makeAuthRoute(<></>),
    //     routes: [],
    // },
    // {
    //     path: paths.root.pathname,
    //     component: makePrivateRoute(<></>),
    //     routes: [],
    // },
    // {
    //     path: paths.root.pathname,
    //     component: () => <Redirect to={paths.root.pathname}/>,
    // },
];
