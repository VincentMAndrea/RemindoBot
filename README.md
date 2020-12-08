# RemindoBot
A Discord bot that uses Azure Functions to send reminders to users.

# Prerequisites
- Node.js - https://nodejs.org/en/
- An Azure Account - https://azure.microsoft.com/en-us/
- discord.js - `npm install discord.js`
- axios - `npm install axios`

# Getting Started
In an Azure resource group, create a new function app. Create an `Orchestrator`, `HttpTrigger`, and `ActivityTrigger`. Add the code from the `/functions` folder to the appropriate functions. 

- follow the guide to get your bot up and running - https://discordjs.guide/preparations/setting-up-a-bot-application.html
- add the bot's token to `index.js` in `/discordbot`
- add the bot to your server - https://discordjs.guide/preparations/adding-your-bot-to-servers.html#bot-invite-links
- go to `Server Settings > Webhooks > Create Webhook` and add it to the ActivityTrigger from earlier.
- get the connection string for your HttpTrigger function and place it in the `commands/remind.js` axios call.

# Finished

Test out the bot by using the command `!remind`, ex. `!remind @User to take out the trash in 1 minute`.
