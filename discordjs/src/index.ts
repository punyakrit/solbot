import axios from 'axios';
import { Client, IntentsBitField, GatewayIntentBits, ChatInputCommandInteraction, Interaction } from 'discord.js';
import { executeBuyCommand } from './commands/buyCommand';
import { executeSellCommand } from './commands/sellCommand';
import { executePriceCommand } from './commands/priceCommand';
import { executeAccountCommand } from './commands/accountCommand';
import { executeTradeCommand } from './commands/tradeCommand';
import { executeStartCommand } from './commands/startCommand';
import { handleButtonInteraction } from './handlers/buttonHandler';
import { handleModalSubmit } from './handlers/modalHandler';
import './commands/registerCommands';
require('dotenv').config()

const solana = "So11111111111111111111111111111111111111112";

const client = new Client({ intents: [
    IntentsBitField.Flags.Guilds,
    IntentsBitField.Flags.GuildMembers,
    IntentsBitField.Flags.GuildMessages,
    IntentsBitField.Flags.MessageContent,
] });

client.on('ready', (c)=>{
    console.log(`${c.user.tag} is online - Solana Trading Bot active!`)
});

client.on('interactionCreate', async (interaction: Interaction) => {
    try {
        // Handle slash commands
        if (interaction.isChatInputCommand()) {
            const commandName = interaction.commandName;
            const chatInputInteraction = interaction as ChatInputCommandInteraction;

            switch (commandName) {
                case 'ping':
                    await interaction.reply('Pong!');
                    break;
                case 'buy':
                    await executeBuyCommand(chatInputInteraction);
                    break;
                case 'sell':
                    await executeSellCommand(chatInputInteraction);
                    break;
                case 'price':
                    await executePriceCommand(chatInputInteraction);
                    break;
                case 'account':
                    await executeAccountCommand(chatInputInteraction);
                    break;
                case 'trade':
                    await executeTradeCommand(chatInputInteraction);
                    break;
                case 'start':
                    await executeStartCommand(chatInputInteraction);
                    break;
                default:
                    await interaction.reply({ content: 'Unknown command', ephemeral: true });
            }
        }
        // Handle button clicks
        else if (interaction.isButton()) {
            await handleButtonInteraction(interaction);
        }
        // Handle modal submissions
        else if (interaction.isModalSubmit()) {
            await handleModalSubmit(interaction);
        }
    } catch (error) {
        console.error(`Error handling interaction:`, error);
        
        // Only reply if the interaction hasn't been replied to already
        if (interaction.isRepliable() && !interaction.replied) {
            await interaction.reply({ 
                content: 'There was an error processing this action!', 
                ephemeral: true 
            }).catch(console.error);
        }
    }
});

client.login(process.env.TOKEN);