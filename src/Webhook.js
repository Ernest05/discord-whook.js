'use strict';

const fetch = require('node-fetch');

module.exports = class Webhook {
    /**
     * @constructor
     * @param {string} webhookID The webhook ID
     * @param {string} webhookToken The webhook Token
     */
    constructor(webhookID, webhookToken) {
        if (!webhookID) {
            throw new Error('Please provide a webhook ID!');
        }
        if (!webhookToken) {
            throw new Error('Please provide a webhook token!');
        }

        this.webhookID = webhookID;
        this.webhookToken = webhookToken;
    }

    /**
     * Send a message with a webhook
     * @param {string} message The message
     * @param {string} username The webhook username
     * @param {string} avatarURL The url of the webhook avatar
     * @param {Array} embed The embed
     * @returns {Promise<Object>} The sent webhook
     */
    send (message = undefined, username = undefined, avatarURL = undefined, embed = []) {
        if (!message && embed.length === 0) {
            throw new Error('Cannot send an empty message!');
        }

        return new Promise(async () => {
            await fetch(`https://discordapp.com/api/webhooks/${this.webhookID}/${this.webhookToken}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    content: message,
                    username: username,
                    avatar_url: avatarURL,
                    embeds: embed
                })
            }).catch(err => {
                throw new Error(`Webhook sending error: ${err}`);
            });
        });
    }
};
