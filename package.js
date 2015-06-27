var chokidarVersion = '1.0.2';

Package.describe({
  name: 'velocity:chokidar',
  version: chokidarVersion + '_1',
  // Brief, one-line summary of the package.
  summary: 'The npm module chokidar packaged as Meteor package.',
  // URL to the Git repository containing the source code for this package.
  git: 'https://github.com/meteor-velocity/chokidar.git',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Npm.depends({
  'chokidar': chokidarVersion
});

Package.onUse(function(api) {
  api.export('chokidar', 'server');
  api.addFiles('chokidar.js', 'server');
});
