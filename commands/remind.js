const axios = require('axios').default;

module.exports = {
    name: 'remind',
    description: 'Reminds a tagged user to do something at the specified time.',
    args: true,
    execute(message, args) {
        if (!message.mentions.users.size) {
            return message.reply('You must tag the user you wish to remind');
        }

        const data = args.join(" ");
        axios.post(`[httpTrigger endpoint here]`, {
            message: data
        })
            .then(function (response) {
                if(response.status == 202){
                    message.channel.send(`reminder created!`);
                } else {
                    message.author.send('reminder creation failed: bad response')
                }
            })
            .catch(function (error) {
                console.log(error);
                message.author.send('reminder creation failed: error')
            });
    },
};