const newman = require('newman');

newman.run({
    collection: './src/collection/DMoney_API_Test.postman_collection.json',
    reporters: 'htmlextra',
    iterationCount: 1,
    reporter: {
        htmlextra: {
            export: './Reports/report.html',
        }
    }
}, function(err){
    if (err) { throw err;}
    console.log('collection run complete');

});