const prefix = '/api';

export const api = {
    login: {
        url: () => `${prefix}/login`,
    },
    logout: {
        url: () => `${prefix}/logout`,
    },
};
