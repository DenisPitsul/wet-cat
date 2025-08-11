import webpack from 'webpack-stream';

export const js = () => {
    return app.gulp.src(app.path.src.js, {sourcemaps: app.isDev})
        .pipe(app.plugins.plumber(
            app.plugins.notify.onError({
                title: 'JS',
                message: 'Error: <%= error.message %>'
            })
        ))

        .pipe(webpack({
            mode: app.isBuild ? 'production' : 'development',
            devtool: app.isBuild ? false : 'source-map', // уникає eval()
            entry: {
                main: app.path.src.js, // явна точка входу
            },
            output: {
                filename: 'index.min.js',

                publicPath: app.isBuild ? '/InteriorStudio/js' : '/js',
            },
            module: {
                rules: [
                    {
                        test: /\.css$/i,
                        use: ['style-loader', 'css-loader'],
                    },
                ],
            },
        }))
        .pipe(app.gulp.dest(app.path.build.js))
        .pipe(app.plugins.browserSync.stream())
}