require('dotenv').config()
import { REST, Routes } from 'discord.js'
import { buyCommand } from './buyCommand';
import { sellCommand } from './sellCommand';
import { priceCommand } from './priceCommand';
import { accountCommand } from './accountCommand';
import { tradeCommand } from './tradeCommand';
import { startCommand } from './startCommand';

const commands = [
    {
        name: 'ping',
        description: 'Returns pong'
    },
    buyCommand,
    sellCommand,
    priceCommand,
    accountCommand,
    tradeCommand,
    startCommand
];

const rest = new REST({ version: '10' }).setToken(process.env.TOKEN as string);

(async () => {
    try {
        console.log("Registering commands...");
        await rest.put(
            Routes.applicationCommands(process.env.CLIENT_ID as string), { body: commands }
        )
        console.log("Commands registered successfully!");

    } catch (e) {
        console.log("Error registering commands: " + e)
    }
})()