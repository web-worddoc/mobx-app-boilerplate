import { types } from 'mobx-state-tree';

import { HTTP, Storage } from '@services';



export const AppModel = types
    .model('AppModel', {
        language: types.string,
    })
    .create({
        language: 'en',
    }, {
        HTTP,
        Storage,
    });
