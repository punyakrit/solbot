import { ChatInputCommandInteraction, ApplicationCommandOptionType } from 'discord.js';

export const priceCommand = {
  name: 'price',
  description: 'Get token prices on Solana',
  options: [
    {
      name: 'token',
      description: 'Token symbol (SOL, BONK, etc.) or address',
      type: ApplicationCommandOptionType.String,
      required: false,
    }
  ]
};

export async function executePriceCommand(interaction: ChatInputCommandInteraction) {
  const token = interaction.options.get('token')?.value as string || 'SOL';
  
  // Dummy price data
  const prices: {[key: string]: number} = {
    'SOL': 182.45,
    'BONK': 0.00000234,
    'JTO': 2.34,
    'PYTH': 0.76,
    'MEME': 0.042,
    'WIF': 1.83
  };

  // Return the price if it's a known token, otherwise return a dummy response
  const price = prices[token.toUpperCase()] || 0.123456;
  
  // Market data (dummy)
  const change24h = (Math.random() * 20 - 10).toFixed(2); // Random value between -10% and +10%
  const volume24h = (Math.random() * 1000000 + 100000).toFixed(2); // Random volume
  
  await interaction.reply({
    content: `**${token.toUpperCase()} Price Information**\n` +
             `Price: $${price}\n` +
             `24h Change: ${change24h}%\n` +
             `24h Volume: $${volume24h}\n` +
             `Market Cap: $${(price * 1000000).toFixed(2)}\n\n` +
             `Note: This is dummy data for MVP demonstration.`
  });
} 