const newman = require('newman');

newman.run({
    collection: './src/collection/DMoney_API_Test.postman_collection.json',
    reporters: ['htmlextra', 'cli'],
    iterationCount: 1,
    reporter: {
        htmlextra: {
            export: './reports/report.html',
        }
    }
}, function(err){
    if (err) { throw err;}
    console.log('collection run complete');

});