import { ChatInputCommandInteraction, ApplicationCommandOptionType } from 'discord.js';

export const sellCommand = {
  name: 'sell',
  description: 'Sell tokens on Solana',
  options: [
    {
      name: 'token',
      description: 'Token you want to sell (SOL, BONK, etc.)',
      type: ApplicationCommandOptionType.String,
      required: true,
    },
    {
      name: 'amount',
      description: 'Amount to sell',
      type: ApplicationCommandOptionType.Number,
      required: true,
    }
  ]
};

export async function executeSellCommand(interaction: ChatInputCommandInteraction) {
  const token = interaction.options.get('token')?.value as string;
  const amount = interaction.options.get('amount')?.value as number;
  
  // Dummy transaction data
  const transactionId = "4pzRFUzM1xJHyBKjVQg6CV6XAKgLfrvmGYxqFPNEbkrW";
  const price = token === "SOL" ? 182.45 : 0.00000234;
  const totalValue = price * amount;
  
  await interaction.reply({
    content: `✅ Successfully placed order to sell ${amount} ${token} at $${price.toFixed(8)} per token\n` +
             `Total value: $${totalValue.toFixed(2)}\n` +
             `Transaction ID: ${transactionId}\n\n` +
             `Note: This is dummy data for MVP demonstration.`,
    ephemeral: true
  });
} 