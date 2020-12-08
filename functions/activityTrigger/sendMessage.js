const axios = require('axios').default

module.exports = async function (context) {
    const payload = context.bindings.payload;

    axios.post("[discord webhook here]", {
        content: `Reminder: '${payload.message}'`
    })
};