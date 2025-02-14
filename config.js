import StyleDictionary from 'style-dictionary';

const services = ['icp-gwv'];

services.forEach(async service => {
    const styleDictionary = new StyleDictionary({
        source: [`services/${service}/tokens/**/*.json`],
        platforms: {
            css: {
                transformGroup: 'css',
                buildPath: `services/${service}/build/`,
                files: [{
                    destination: 'variables.css',
                    format: 'css/variables'
                }]
            }
        }
    });

    await styleDictionary.buildAllPlatforms();
});
