{
  mode: 'development',
  resolve: {
    modules: [
      '/Users/harukimiyazaki/IdeaProjects/jvm-js-fullstack/build/js/packages/shoppinglist/kotlin-dce-dev',
      'node_modules'
    ]
  },
  plugins: [
    ProgressPlugin {
      profile: false,
      handler: [Function: handler],
      modulesCount: 5000,
      dependenciesCount: 10000,
      showEntries: true,
      showModules: true,
      showDependencies: true,
      showActiveModules: false,
      percentBy: undefined
    },
    TeamCityErrorPlugin {}
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        use: [
          'source-map-loader'
        ],
        enforce: 'pre'
      }
    ]
  },
  entry: {
    main: [
      '/Users/harukimiyazaki/IdeaProjects/jvm-js-fullstack/build/js/packages/shoppinglist/kotlin-dce-dev/shoppinglist.js'
    ]
  },
  output: {
    path: '/Users/harukimiyazaki/IdeaProjects/jvm-js-fullstack/build/distributions',
    filename: [Function: filename],
    library: 'shoppinglist',
    libraryTarget: 'umd',
    globalObject: 'this'
  },
  devtool: 'eval-source-map',
  ignoreWarnings: [
    /Failed to parse source map/
  ],
  stats: {
    warnings: false,
    errors: false
  }
}