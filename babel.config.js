module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        "module-resolver",
        {
          "alias": {
            "@images": "./src/assets/images",
            "@lotties": "./src/assets/lotties",
            "@commom": "./src/component/commom",
            "@reuse": "./src/component/reuse",
            "@hooks": "./src/hooks",
            "@method": "./src/method",
            "@navigation": "./src/navigation",
            "@asyncThunk": "./src/redux/asyncThunk",
            "@selector": "./src/redux/selector",
            "@slice": "./src/redux/slice",
            "@screen": "./src/screen",
            "@service": "./src/service",
            "@theme": "./src/theme",
            "@util": "./src/util",
          }
        }
      ]
    ],
  };
};
