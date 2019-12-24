const req = require.context('./img/', true, /\.\/[^/]+\/*.\.svg|png|jpg|jpeg$/)

req.keys().forEach((key) => {
    const componentName = key.replace(/^.+\/([^/]+)\/*\.svg|png|jpg|jpeg/, '$1');

    module.exports[componentName] = req(key)
})
