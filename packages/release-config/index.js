/**
 * @param {Partial<import('semantic-release').GlobalConfig>} config
 */
module.exports = function defineConfig (config) {
    return /** @type {import('semantic-release').GlobalConfig} */ ({
        branches: [
            'main',
            { name: 'beta', prerelease: true },
            { name: 'alpha', prerelease: true },
        ],
        plugins: [
            '@semantic-release/commit-analyzer',
            '@semantic-release/release-notes-generator',
            [
                '@semantic-release/changelog',
                {
                    changelogFile: 'CHANGELOG.md',
                },
            ],
            '@semantic-release/npm',
            '@semantic-release/github',
            [
                '@semantic-release/git',
                {
                    assets: ['package.json', 'CHANGELOG.md'],
                    // eslint-disable-next-line no-template-curly-in-string
                    message: 'chore(release): ${nextRelease.version} [skip ci]\n\n${nextRelease.notes}',
                },
            ],
        ],
        ...config,
    });
};
