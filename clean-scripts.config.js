const childProcess = require('child_process')

module.exports = {
  build: [
    {
      js: [
        `file2variable-cli app.template.html -o variables.ts --html-minify`,
        `tsc`,
        `webpack --display-modules`
      ],
      css: {
        vendor: `cleancss ./node_modules/bootstrap/dist/css/bootstrap.min.css ./node_modules/github-fork-ribbon-css/gh-fork-ribbon.css -o vendor.bundle.css`,
        index: `cleancss index.css -o index.bundle.css`
      },
      clean: `rimraf vendor.bundle-*.js vendor.bundle-*.css index.bundle-*.js index.bundle-*.css`
    },
    `rev-static`,
    [
      `sw-precache --config sw-precache.config.js`,
      `uglifyjs service-worker.js -o service-worker.bundle.js`
    ],
    async () => {
      const { createServer } = require('http-server')
      const puppeteer = require('puppeteer')
      const fs = require('fs')
      const server = createServer()
      server.listen(8000)
      const browser = await puppeteer.launch()
      const page = await browser.newPage()
      await page.goto(`http://localhost:8000`)
      await page.screenshot({ path: `screenshot.png`, fullPage: true })
      const content = await page.content()
      fs.writeFileSync(`screenshot-src.html`, content)
      server.close()
      browser.close()
    }
  ],
  lint: {
    ts: `tslint "*.ts" "tests/*.ts"`,
    js: `standard "**/*.config.js"`,
    export: `no-unused-export "*.ts" "tests/*.ts"`
  },
  test: [
    'tsc -p spec',
    process.env.APPVEYOR ? 'echo "skip karma test"' : 'karma start spec/karma.config.js',
    'git checkout screenshot.png',
    () => new Promise((resolve, reject) => {
      childProcess.exec('git status -s', (error, stdout, stderr) => {
        if (error) {
          reject(error)
        } else {
          if (stdout) {
            reject(new Error(`generated files doesn't match.`))
          } else {
            resolve()
          }
        }
      }).stdout.pipe(process.stdout)
    })
  ],
  fix: {
    ts: `tslint --fix "*.ts" "tests/*.ts"`,
    js: `standard --fix "**/*.config.js"`
  },
  release: `clean-release`,
  watch: {
    template: `file2variable-cli app.template.html -o variables.ts --html-minify --watch`,
    src: `tsc --watch`,
    webpack: `webpack --watch`,
    css: `watch-then-execute "index.css" --script "clean-scripts build[0].css.index"`,
    rev: `rev-static --watch`,
    sw: `watch-then-execute "vendor.bundle-*.js" "index.html" "worker.bundle.js" --script "clean-scripts build[2]"`
  },
  prerender: [
    async () => {
      const { createServer } = require('http-server')
      const puppeteer = require('puppeteer')
      const fs = require('fs')
      const server = createServer()
      server.listen(8000)
      const browser = await puppeteer.launch()
      const page = await browser.newPage()
      await page.waitFor(1000)
      await page.goto('http://localhost:8000')
      await page.waitFor(1000)
      const content = await page.evaluate(() => {
        const element = document.querySelector('#prerender-container')
        return element ? element.innerHTML : ''
      })
      fs.writeFileSync('prerender.html', content)
      server.close()
      browser.close()
    },
    `clean-scripts build[1]`,
    `clean-scripts build[2]`
  ]
}
