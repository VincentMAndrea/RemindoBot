const df = require('durable-functions');
const moment = require('moment-timezone');
const chrono = require('chrono-node');

module.exports = async function (context, req) {
    const client = df.getClient(context);
    var data = {
        'message': req.body.message,
        'reminderTime': moment.utc(chrono.parseDate(req.body.message))
    }
    
    const id = await client.startNew(req.params.functionName, undefined, data);
    return client.createCheckStatusResponse(context.bindingData.req, id);
};