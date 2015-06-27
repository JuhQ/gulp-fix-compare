// through2 is a thin wrapper around node transform streams
var through = require('through2');
var gutil = require('gulp-util');
var PluginError = gutil.PluginError;

// Consts
const PLUGIN_NAME = 'gulp-fix-compare';

function fix(content) {
  return String(content).replace(/\s==\s/g, " === ").replace(/\s!=\s/g, " !== ");;
}

// Plugin level function(dealing with files)
module.exports = function() {

  // Creating a stream through which each file will pass
  return through.obj(function(file, enc, cb) {
    if (file.isNull()) {
      // return empty file
      return cb(null, file);
    }

    if (file.isBuffer()) {
      file.contents = new Buffer(fix(file.contents));
    }
    if (file.isStream()) {
      file.contents = file.contents.pipe(fix(file.contents));
    }

    cb(null, file);

  });

};
