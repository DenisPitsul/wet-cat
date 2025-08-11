import * as nodePath from "path";
const rootFolder = nodePath.basename(nodePath.resolve());

const buildFolder = './dist'
const srcFolder = './src'

export const  path ={
    build: {
        files: `${buildFolder}/files/`,
        html: `${buildFolder}/`,
        css: `${buildFolder}/css/`,
        js: `${buildFolder}/js/`,
        images: `${buildFolder}/assets/`,
        fonts: `${buildFolder}/fonts/`,
        svg: `${srcFolder}/html-partials/base/`,
    },
    src:{
        files: `${srcFolder}/files/**/*.*`,
        html: `${srcFolder}/*.html`,
        scss: `${srcFolder}/scss/index.scss`,
        js: `${srcFolder}/js/index.js`,
        images: `${srcFolder}/assets/**/*.{jpg,jpeg,png,gif,webp}`,
        svg: `${srcFolder}/assets/**/*.svg`,
        svgIcons: `${srcFolder}/assets/**/*.svg`,
    },
    watch:{
        files: `${srcFolder}/files/**/*.*`,
        html: `${srcFolder}/**/*.html`,
        scss: `${srcFolder}/scss/**/*.scss`,
        js: `${srcFolder}/js/**/*.js`,
        images: `${srcFolder}/assets/**/*.{png,jpeg,jpg,gif,webp,ico,svg}`,
    },
    clean: buildFolder,
    buildFolder: buildFolder,
    srcFolder: srcFolder,
    rootFolder: rootFolder,
    ftp:'test'
}