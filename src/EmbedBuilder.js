'use strict';

module.exports = class EmbedBuilder {
    /**
     * @constructor
     */
    constructor () {
        this.embed = [{
            title: null,
            url: null,
            author: null,
            color: null,
            description: null,
            thumbnail: null,
            fields: [],
            image: null,
            footer: null,
            timestamp: null
        }];
    }

    /**
     * Sets the color of the embed.
     * @param {ColorResolvable} color The color of the embed
     * @returns {EmbedBuilder} New changes applied to the embed
     */
    setColor (color) {
        if (!color) {
            throw new Error('You have to provide a color to set!');
        }

        this.embed[0].color = color;

        return this;
    }

    /**
     * Sets the title of the embed.
     * @param {string} title The title
     * @returns {EmbedBuilder} New changes applied to the embed
     */
    setTitle (title) {
        if (!title) {
            throw new Error('You have to provide a title to set!');
        }
        if (title.length > 256) {
            throw new Error('The title must have a maximal length of 256 characters.');
        }

        this.embed[0].title = title;

        return this;
    }

    /**
     * Sets the author of the embed.
     * @param {string} name The name of the author
     * @param {string} iconURL The icon URL of the author
     * @param {string} url The URL of the author
     * @returns {EmbedBuilder} New changes applied to the embed
     */
    setAuthor (name, iconURL, url) {
        if (!name) {
            throw new Error('You have to provide a author name to set!');
        }
        if (name.length > 256) {
            throw new Error('The author name must have a maximal length of 256 characters.');
        }
        if (!iconURL) {
            throw new Error('You have to provide an imageURL to set into the author.');
        }

        this.embed[0].author = {
            name: name,
            icon_url: iconURL,
            url: url ? url : null
        };

        return this;
    }

    /**
     * Sets the description of the embed.
     * @param {string} description The description
     * @returns {EmbedBuilder} New changes applied to the embed
     */
    setDescription (description) {
        if(!description) {
            throw new Error('You have to provide a description to set!');
        }
        if (description.length > 2048) {
            throw new Error('The description must have a maximal length of 2018 characters');
        }

        this.embed[0].description = description;

        return this;
    }

    /**
     * Sets the thumbnail of the embed.
     * @param {string} imageURL The URL of the thumbnail
     * @returns {EmbedBuilder} New changes applied to the embed
     */
    setThumbnail (imageURL) {
        if (!imageURL) {
            throw new Error('You have to provide an imageURL to set a thumbnail!');
        }

        this.embed[0].thumbnail = {
            url: imageURL
        };

        return this;
    }

    /**
     * Sets the image of the embed.
     * @param {string} imageURL The URL of the image
     * @returns {EmbedBuilder} New changes applied to the embed
     */
    setImage (imageURL) {
        if (!imageURL) {
            throw new Error('You have to provide an image URL to set an image!');
        }

        this.embed[0].image = {
            url: imageURL
        };

        return this;
    }

    /**
     * Adds a field to the embed.
     * @param {string} name The name of the field
     * @param {string} value The value of the field
     * @param {boolean} [inline=false] Set the field to display inline
     * @returns {EmbedBuilder} New changes applied to the embed
     */
    addField (name, value, inline = false) {
        if (this.embed[0].fields.length > 25) {
            throw new Error('An embed can\'t have more than 25 fields!');
        }
        if(!name) {
            throw new Error('You have to provide a name to add a field!');
        }
        if (name.length > 256) {
            throw new Error('The field name must have a maximal length of 256 characters');
        }
        if (!value) {
            throw new Error('You have to provide a value to add a field!');
        }
        if (value.length > 1024) {
            throw new Error('The field value must have a maximal length of 1024 characters.');
        }

        this.embed[0].fields.push({
            name: name,
            value: value,
            inline: inline
        });

        return this;
    }

    /**
     * Sets the timestamp of the embed.
     * @returns {EmbedBuilder} New changes applied to the embed
     */
    setTimestamp () {
        this.embed[0].timestamp = new Date();

        return this;
    }

    /**
     * Sets the footer of the embed.
     * @param {string} text The text of the footer
     * @param {string} iconURL The icon URL of the footer
     * @returns {EmbedBuilder} New changes applied to the embed
     */
    setFooter (text, iconURL) {
        if (!text) {
            throw new Error('You have to provided a text to set into the footer!');
        }
        if (text.length > 2048) {
            throw new Error('The text footer must have a maximal length of 2048 characters');
        }

        this.embed[0].footer = {
            text: text,
            icon_url: iconURL ? iconURL : null
        };

        return this;
    }
    
    /**
     * Converts the EmbedBuilder to an JSON object
     * @returns {Object} The JSON embed object
     */
    toJSON () {
        return this.embed;
    }
};
