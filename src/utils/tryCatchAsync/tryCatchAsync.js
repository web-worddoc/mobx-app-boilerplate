export default async callback => {
    if (typeof callback !== 'function') return;

    try {
        return callback();
    } catch (err) {
        throw new Error(err);
    }
};
