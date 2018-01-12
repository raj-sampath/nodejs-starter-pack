var schedule = require('node-schedule');

console.log("Scheduler Service Starting ... ");

//Job 1 Executes Every Second
// schedule.scheduleJob('* * * * * *', function(){
//     console.log('Job 1 - Running Job Every Second !!!');
//   });

//Job 2 Executes EVery 5 Seconds
// schedule.scheduleJob('*/5 * * * * *', function(){
//     console.log('Job 2 - Running Job Every 5 Second !!!');
//   });