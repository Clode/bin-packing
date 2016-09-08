Package.describe({
  name: 'clode:binpacking',
  version: '0.0.1',
  summary: '',
  git: 'https://github.com/Clode/bin-packing',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.1');
  api.addFiles(['js/packger.js','js/packer.growing.js'],'client');
  api.export(['Packer','GrowingPacker'],'client');
});
