# Discord Selfbot README

This is a Discord Selfbot built with `discord.js-selfbot-v13` and Axios. It allows for various automated tasks and interactions within Discord channels. Below is an overview of the commands and functionality it provides:

## Features
- **Mimic Command**: The bot can mimic a specified user by repeating their messages in the server.
  - Command: `$mimic @user`
  - Stop Mimic: `$mstop`

- **Emoji Reactions**: The bot can react with different emojis to messages from a target user.
  - Command: `$sk @user` (react with 🤡 or 🤓)
  - Stop Reacting: `$skstop`

- **Triple React**: React with three emojis to messages from a target user.
  - Command: `$tri @user`
  - Stop Reacting: `$tristop`

- **Pack Target**: Sends a pre-defined message repeatedly to a target user.
  - Command: `$pack @user`
  - Stop: `$packstop`

- **Mass React**: Automatically reacts to the latest message in a channel.
  - Command: `$mass` (starts mass reacting)
  - Stop Mass React: `$massstop`

- **Spam**: Repeatedly sends a message in a channel.
  - Command: `$spam message`
  - Stop Spamming: `$sstop`

- **React with Custom Emoji**: Reacts to messages from a specified user with a custom emoji.
  - Command: `$r @user emoji`
  - Stop Reacting: `$rstop`

- **Message Purge**: Deletes a specified number of messages sent by the bot's owner.
  - Command: `$purge <number>`
  
- **Shutdown**: Resets all targets and stops all ongoing actions.
  - Command: `$kill`

## Setup and Configuration

### Requirements:
- Node.js (v14+)
- `discord.js-selfbot-v13` and `axios` libraries

### Installation:
1. Clone the repository or create a new file for the bot's code.
2. Install required packages:
   ```bash
   npm install discord.js-selfbot-v13 axios
   ```

### Configuration:
- **OWNER_ID**: Replace `'xx'` with your Discord user ID (the owner of the bot).
- **AUTH**: Replace `'xx'` with your Discord token for authentication.
- **Application ID**: Set the bot’s application ID (replace `'x'` with the actual ID).

### Running the Bot:
1. After configuring the bot, run it with:
   ```bash
   node bot.js
   ```

### Important Notes:
- This bot uses a selfbot setup, meaning it's designed to run on your personal account, and using selfbots is against Discord's Terms of Service. Use with caution and understand the risks involved.
- Commands are only executable by the bot owner.

Enjoy using your Discord Selfbot for automating interactions and tasks!
