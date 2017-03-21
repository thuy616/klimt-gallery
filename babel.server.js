require("babel-polyfill");
require("babel-core/register")({
  only: /master/,
  presets: ["es2015", "stage-2", "react"],
  plugins: ["transform-decorators-legacy", "transform-runtime"]
});
/**
 * Define isomorphic constants.
 */
global.__CLIENT__ = false;
global.__SERVER__ = true;

global.process.env.NODE_ENV = process.env.NODE_ENV || "development";

if (process.env.NODE_ENV !== "production") {
  if (!require("piping")({hook: true, includeModules: false})) {
    return;
  }
}
try {
  require("./master/src/server");
} catch (error) {
  console.error(error.stack || error);
}
