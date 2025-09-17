module.exports = function (config) {
  config.set({
    basePath: '',
    frameworks: ['jasmine'],
    plugins: [
      require('karma-jasmine'),
      require('karma-chrome-launcher'),
      require('karma-jasmine-html-reporter'),
      require('karma-coverage'),
    ],

    client: {
      jasmine: {},
      clearContext: false, // показуємо результати тестів у браузері
    },

    reporters: ['progress', 'kjhtml'],

    coverageReporter: {
      dir: require('path').join(__dirname, './coverage'),
      subdir: '.',
      reporters: [{ type: 'html' }, { type: 'text-summary' }],
    },

    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,

    autoWatch: true,          // слідкувати за змінами файлів
    singleRun: false,
    restartOnFileChange: true,

    browsers: ['ChromeHeadlessCustom'],

    customLaunchers: {
      ChromeHeadlessCustom: {
        base: 'ChromeHeadless',
        flags: [
          '--no-sandbox',
          '--disable-gpu',
          '--disable-dev-shm-usage',
          '--disable-software-rasterizer',
          '--disable-site-isolation-trials',
          '--remote-debugging-port=9222',
        ],
      },
    },

    browserDisconnectTimeout: 10000,
    browserDisconnectTolerance: 3,
    browserNoActivityTimeout: 120000,
    captureTimeout: 120000,
  });
};
