module.exports = {
  "branches": [
      "master",
      {"name": "beta", "channel": "beta", "prelease": "beta"}
  ],
  "extends": "semantic-release-monorepo",
  prepare: [
    '@semantic-release/changelog',
    '@semantic-release/npm',
  ],
  publish: [
    '@semantic-release/npm'
  ],
  verifyConditions: [
    '@semantic-release/npm'
  ],
  monorepo: {
    analyzeCommits: [
      '@semantic-release/commit-analyzer'
    ],
    generateNotes: [
      '@semantic-release/release-notes-generator'
    ]
  }
};
