const df = require("durable-functions");
//const moment = require("moment");

module.exports = df.orchestrator(function* (context) {
    const data = context.df.getInput();
    const reminderTime = data.reminderTime;

    yield context.df.createTimer(new Date(reminderTime));
    yield context.df.callActivity("sendMessage", data);

    //context.log("Unadjusted date:")
    //context.log(new Date(reminderTime));
    //context.log("Adjusted date:");
    //context.log(new Date(moment(reminderTime).add(5,'h').toDate()));
});