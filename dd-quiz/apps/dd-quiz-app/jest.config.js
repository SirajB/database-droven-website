module.exports = {
  name: 'dd-quiz',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/dd-quiz',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js',
  ],
};
