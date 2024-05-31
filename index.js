const Discord = require('discord.js-selfbot-v13');
const axios = require('axios');
const client = new Discord.Client({
  readyStatus: false,
  checkUpdate: false
});

const OWNER_ID = '71434390550355968';
let mimicTarget = null;
let skTarget = null;
let useClownEmoji = true;
let triTarget = null;
let packTarget = null;
let massReact = false;
let CID = null;
let latestMessageId = null;
let spam = false;
let spamMessage = '';
let rTarget = null;
let rEmoji = null;
const AUTH = 'NzE0MzQzOTA1NTAzNTU5Njg.GaGWlF.upPP3kdQzaOFgx9SpYNS8Oa_ElZFVeufeUQTMI';

client.on('ready', async () => {
  console.clear();
  console.log(`${client.user.tag} - rich presence started!`);

  const r = new Discord.RichPresence()
    .setApplicationId('1109976841604845569')
    .setType('STREAMING')
    .setURL('https://twitch.tv/discord') // Must be a YouTube video link 
    .setName('xoxo');

  client.user.setActivity(r);
  client.user.setPresence({ status: "dnd" });
});

client.on('messageCreate', async message => {
  if (message.content.startsWith('$mimic') && message.author.id === OWNER_ID) {
    const mentionedUser = message.mentions.users.first();
    if (mentionedUser) {
      mimicTarget = mentionedUser.id;
      message.delete();
    }
  }

  if (message.content === '$mstop' && message.author.id === OWNER_ID) {
    mimicTarget = null;
    message.delete();
  }

  if (message.content.startsWith('$sk') && message.author.id === OWNER_ID) {
    const mentionedUser = message.mentions.users.first();
    if (mentionedUser) {
      skTarget = mentionedUser.id;
      message.delete();
    }
  }
  
  if (message.content === '$skstop' && message.author.id === OWNER_ID) {
    skTarget = null;
    message.delete();
  }
  
  if (skTarget && message.author.id === skTarget) {
    if (useClownEmoji) {
      message.react('🤡');
    } else {
      message.react('🤓');
    }
    useClownEmoji = !useClownEmoji; // Toggle the emoji state
  }

  if (mimicTarget && message.author.id === mimicTarget && message.content) {
    message.channel.send(message.content);
  }
  if (message.content.startsWith('$tri') && message.author.id === OWNER_ID) {
    const mentionedUser = message.mentions.users.first();
    if (mentionedUser) {
      triTarget = mentionedUser.id;
      message.delete();
    }
  }

  if (message.content === '$tristop' && message.author.id === OWNER_ID) {
    triTarget = null;
    message.delete();
  }

  if (triTarget && message.author.id === triTarget) {
    message.react('☠️');
    message.react('😭');
    message.react('🤓');
  }
  if (message.content.startsWith('$pack') && message.author.id === OWNER_ID) {
    const mentionedUser = message.mentions.users.first();
    if (mentionedUser) {
      packTarget = mentionedUser.id;
      message.delete();
    }
  }

  if (message.content === '$packstop' && message.author.id === OWNER_ID) {
    packTarget = null;
    message.delete();
  }

  if (packTarget && message.author.id === packTarget) {
    message.channel.send(`# SHUT YO NASTY ASS UP NIGGA YOU UGLY AS FUCK MISSING CHROMOSOMES HEAD AHH



































 




    Se
    S
    S
    S
    S
    
    
    
    
    A
    A
    
    AA
    
    SS
    S
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    # LMAO UR SLOW UR ASS STFU UR MY BITCH UR SO FUCKING ASS UR MY LITTLE SLUT I OWN U BITCH
    
    
    
    
    
    
    
    # SHUT YO NASTY ASS UP NIGGA YOU UGLY AS FUCK MISSING CHROMOSOMES HEAD AHH
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
     
    
    
    
    
    Se
    S
    S
    S
    S
    
    
    
    
    A
    A
    
    AA
    
    SS
    S
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    # LMAO UR SLOW UR ASS STFU UR MY BITCH UR SO FUCKING ASS UR MY LITTLE SLUT I OWN U BITCH`);
  }
  if (message.content === '$mass' && message.author.id === OWNER_ID) {
    massReact = true;
    CID = message.channel.id;
    message.delete();

    reactToLatestMessage(CID, AUTH);
  }

  // Command to stop mass reacting
  if (message.content === '$massstop' && message.author.id === OWNER_ID) {
    massReact = false;
    CID = null;
    latestMessageId = null; // Clear latest message ID
    message.delete();
  }
  if (message.content === '$kill' && message.author.id === OWNER_ID) {
    mimicTarget = null;
    skTarget = null;
    triTarget = null;
    packTarget = null;
    massReact = false;
    CID = null;
    latestMessageId = null;
    spam = false;
    spamMessage = '';
    rTarget = null;
    rEmoji = null;
    message.delete();
  }
  if (message.content.startsWith('$purge') && message.author.id === OWNER_ID) {
    // Extract the number of messages to purge from the command
    const args = message.content.split(' ');
    const purgeCount = parseInt(args[1]); // Parse the number from the command

    if (isNaN(purgeCount) || purgeCount <= 0) {
      // If the provided number is not valid, send an error message
      message.channel.send('Please provide a valid number of messages to purge.');
      return;
    }

    try {
      const fetchedMessages = await message.channel.messages.fetch({ limit: purgeCount });
      const ownerMessages = fetchedMessages.filter(msg => msg.author.id === OWNER_ID);
      
      // Delete each message
      ownerMessages.forEach(async msg => {
        await msg.delete();
      });
      
      const confirmationMessage = await message.channel.send(`Deleted ${ownerMessages.size} messages.`);

      // Delay for 2 seconds, then delete the confirmation message
      setTimeout(async () => {
        await confirmationMessage.delete();
      }, 2000);
      
    } catch (error) {
      console.error('Error purging messages:', error);
      message.channel.send('Error purging messages.');
    }
  }
  if (message.content.startsWith('$spam') && message.author.id === OWNER_ID) {
    const args = message.content.split(' ');
    spamMessage = args.slice(1).join(' '); // Extract the message to spam
    message.delete();

    if (spamMessage) {
      spam = true;
      spamMessages(message.channel); // Start spamming messages
    }
  }

  // Command to stop spamming
  if (message.content === '$sstop' && message.author.id === OWNER_ID) {
    spam = false;
    message.delete();
  }
  if (message.content.startsWith('$r') && message.author.id === OWNER_ID) {
    const args = message.content.split(' ');
    if (args.length === 3) {
      const mentionedUser = message.mentions.users.first();
      if (mentionedUser) {
        rTarget = mentionedUser.id;
        rEmoji = args[2];
        message.delete();
      }
    }
  }
  
  if (message.content === '$rstop' && message.author.id === OWNER_ID) {
    rTarget = null;
    rEmoji = null;
    message.delete();
  }
  
  if (rTarget && message.author.id === rTarget) {
    if (rEmoji) {
      message.react(rEmoji);
    }
  }
});
async function spamMessages(channel) {
    while (spam) {
      await channel.send(spamMessage);
      await new Promise(resolve => setTimeout(resolve, 0)); // Wait 1 second between messages
    }
  }

async function reactToLatestMessage(channelId, AUTH) {
  const url = `https://discord.com/api/v9/channels/${channelId}/messages`;
  const headers = {
    "Authorization": AUTH,
  };
  const params = {
    "limit": 1,
  };

  while (massReact) {
    try {
      const response = await axios.get(url, { headers, params });
      if (response.status === 200 && response.data.length > 0) {
        const newLatestMessageId = response.data[0].id;
        if (newLatestMessageId !== latestMessageId) {
          const reactionUrl = `https://discord.com/api/v9/channels/${channelId}/messages/${newLatestMessageId}/reactions/%F0%9F%92%80/%40me`;
          
          await axios.put(reactionUrl, null, { headers });
          
          console.log(`Reacted to latest message in channel ${channelId}`);
          latestMessageId = newLatestMessageId;
        }
      } else {
        console.error(`Failed to get the latest message. Status: ${response.status}`);
      }
    } catch (error) {
      console.error(`Error fetching or reacting to the latest message: ${error.message}`);
    }

    await new Promise(resolve => setTimeout(resolve, 1));
  }
}

client.login(AUTH);