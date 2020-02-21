'use strict';

const axios = require('axios');
const baseURL = 'https://discordapp.com/api/webhooks';

class Webhook {
    /**
     * @constructor
     * @param {string} webhookID The webhook ID
     * @param {string} webhookToken The webhook Token
     */
    constructor(webhookID, webhookToken) {
        if(!webhookID) {
            throw new Error('No webhook ID found!');
        }
        if(!webhookToken) {
            throw new Error('No webhook token found!');
        }
        
        this.webhookID = webhookID;
        this.webhookToken = webhookToken;
    }

    /**
     * Send a message with a webhook
     * @param {string} message The message
     * @param {string} username The webhook username
     * @param {string} avatarUrl The url of the webhook avatar
     * @param {Array} embed The embed
     * @returns {Promise<Object>} The sent webhook
     */
    send(message = null, username = null, avatarUrl = null, embed = []) {
        if(!message && embed.length === 0) {
            throw new Error('Cannot send an empty message!');
        }
        
        return new Promise(async () => {
            await axios({
                method: 'post', 
                url: `${baseURL}/${this.webhookID}/${this.webhookToken}`,
                data: {
                    username,
                    avatar_url: avatarUrl,
                    content: message,
                    embeds: embed
                }
            }).catch((err) => {
                if(err) {
                    reject(new Error(err));
                }
            });
        });
    }
};

module.exports = Webhook;
