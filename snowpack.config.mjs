/** @type {import("snowpack").SnowpackUserConfig } */
export default {
  plugins: [
    '@snowpack/plugin-postcss',
    "@snowpack/plugin-sass",
    [
      'snowpack-plugin-resize-images',
      {
        '**/public/img/**': {
          resize: {
            width: 512,
          },
        }
      }
    ]
  ],
  mount: {
    src: '/dist',
    "public/pages": '/',
    "public/static": { url: '/', static: true },
    styles: '/'
  }
}
