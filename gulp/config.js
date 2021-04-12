const	srcPath = "./source"
const	destPath = "./build"

export default {
	src: {
    styles: [`${srcPath}/global/scss/global_style.scss`, `${srcPath}/pages/**/*.scss`],
    html: `${srcPath}/pages/**/*.{njk,html}`,
    scripts: `${srcPath}/**/*.js`,
    images: `${srcPath}/**/images/*.{jpg,png,svg}`,
    svgSprite: `${srcPath}/**/sprite/*.svg`,
    fonts: `${srcPath}/global/fonts/*`,
  }, 
  build: {
    styles: `${destPath}/css`,
    html: `${destPath}`,
    scripts: `${destPath}/js`,
    images: `${destPath}/img`,
    svgSprite: `${destPath}/img`,
    fonts: `${destPath}/fonts`,
  },
  browserSync: {
    build: `${destPath}`,
    html: `${srcPath}/**/*.{njk,html}`, 
    styles: `${srcPath}/**/*.scss`,
    images: `${srcPath}/**/images/*.{jpg,png,svg}`,
    svgSprite: `${srcPath}/**/sprite/*.svg`,
    scripts: `${srcPath}/**/*.js`,
  },
	setEnv() {
		this.isProd = process.argv.includes("--prod")
		this.isDev = !this.isProd
	}
}
