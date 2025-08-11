import svgSprite from 'gulp-svg-sprite';
import replace from 'gulp-replace';
import beautify from 'gulp-beautify';

export const svgSpriteTask = () => {
    return app.gulp.src(`${app.path.src.svgIcons}`, {})

        .pipe(app.plugins.plumber(
            app.plugins.notify.onError({
                title: 'SVG',
                message: 'Error: <%= error.message %>'
            })
        ))
        .pipe(svgSprite({
            mode: {
                symbol: {
                    sprite: './sprite.html',
                }
            },
            shape: {
                transform: [{
                    svgo: {
                        plugins: [
                            { name: 'removeXMLNS', active: true }, { name: 'removeXMLProcInst', active: true }
                        ]
                    }
                }]
            },
            svg: {
                rootAttributes:{
                    style: 'position:absolute; width:0; height:0; overflow:hidden;'
                }
            }
        }))
        .pipe(replace(/<\?xml.*?\?>\s*/g, ''))
        .pipe(replace(/<svg([^>]*)>/, '<svg$1><defs>'))
        .pipe(replace('</svg>', '</defs></svg>'))
        .pipe(beautify.html({indent_size: 2}))
        .pipe(app.gulp.dest(`${app.path.build.svg}`));
};
