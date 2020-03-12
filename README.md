# discord-whook.js

A simple discord webhook wrapper.

#### Installation:
**Using NPM:**
`npm install github:Ernest05/discord-whook.js`

**Using Yarn:**
`yarn add github:Ernest05/discord-whook.js`

<hr>

#### Features:
>- Send a simple message
>- Send an Embed with a simple Embed builder
>- Custom your webhook name/avatar

#### Examples:
>__NOTE__: If you want disable custom content/username/avatar replace **strings** to **undefined**

- Send a simple message 
```js
'use strict';

const { Webhook } = require('discord-whook.js');
const hook = new Webhook('webhookID', 'webhookToken');

hook.send('content', 'username', 'avatarURL');
```

- Send an Embed with a simple Embed builder
>**Do not use Discord RichEmbed/MessageEmbed! You have to use the EmbedBuilder provided with the module!**<br>
```JS
'use strict';

const { Webhook, EmbedBuilder } = require('discord-whook.js');
const hook = new Webhook('webhookID', 'webhookToken');
const embed = new EmbedBuilder()
  .setColor(0xffffff)
  .setTitle('Title')
  .setAuthor('Author', 'Author imageURL', 'Some URL if you wish')
  .setDescription('Description')
  .setThumbnail('Thumbnail imageURL')
  .setImage('ImageURL')
  .addField("Name of field", "Value of field", false)
  .setTimestamp()
  .setFooter('Footer text', 'Footer imageURL if you wish')
  .toJSON();

hook.send('content', 'username', 'avatarURL', embed);
```
