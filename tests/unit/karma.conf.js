module.exports = function(config) {
  config.set({

    basePath: '../../',

    frameworks: ['browserify', 'jasmine'],

    files: [
      'src/**/*.js',
      'tests/unit/**/*.js'
    ],

    client: {
      captureConsole: true,
      mocha: {
        bail: true
      }
    },

    exclude: [],

    singleRun: true,

    autoWatch: false,

    browsers: ['PhantomJS'],

    preprocessors: {
      'src/**/*.js': ['browserify'],
      'tests/**/*.js': ['browserify']
    },

    browserify: {
      debug: true,
      transform: [
        ['babelify',{
          presets: ['es2015']
        }]
      ]
    }

  });
};
