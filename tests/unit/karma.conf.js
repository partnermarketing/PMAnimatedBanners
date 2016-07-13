module.exports = function(config) {
  config.set({

    basePath: '../../',
    
    frameworks: ['browserify', 'jasmine', 'es6-shim'],

    files: [
      'src/**/*.js',
      'tests/unit/**/*.js',
      {
        pattern: 'tests/unit/*.jpg',
        watched: false,
        included: false,
        served: true,
        nocache: false 
      },
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
