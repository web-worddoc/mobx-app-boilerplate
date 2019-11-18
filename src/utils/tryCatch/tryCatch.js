export default callback => {
    if (typeof callback !== 'function') return;

    try {
        return callback();
    } catch (err) {
        return err;
    }
};
