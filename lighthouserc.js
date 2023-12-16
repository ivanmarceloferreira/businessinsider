module.exports = {
    ci: {
        collect: {
            url: ['https://www.businessinsider.com/'],
            numberOfRuns: 3,
            settings: {
                onlyCategories: ['accessibility'],
                maxWaitForLoad: 45 * 1000,
                emulatedFormFactor: 'desktop',
                throttlingMethod: 'simulate',
                throttling: {
                    rttMs: 40,
                    throughputKbps: 10 * 1024,
                    cpuSlowdownMultiplier: 1,
                    requestLatencyMs: 0,
                    downloadThroughputKbps: 0,
                    uploadThroughputKbps: 0,
                }
            }
        },
        upload: {
            target: 'temporary-public-storage'
        },
        assert: {
            assertions: {
                'categories.pwa': 'off',
                'categories.seo': 'off',
                'categories.best-practices': 'off',
                'categories.accessibility': ['error', { minScore: 0.8 }]
            }
        }
    }
}