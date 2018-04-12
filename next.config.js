const npm_package = require('./package.json')
const withTypescript = require('@zeit/next-typescript')

module.exports = withTypescript({
    distDir: '../build',
    useFileSystemPublicRoutes: false,
    typescriptLoaderOptions: {
        transpileOnly: false,
    },
})
