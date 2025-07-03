import { ChatInputCommandInteraction, ApplicationCommandOptionType } from 'discord.js';

export const buyCommand = {
  name: 'buy',
  description: 'Buy tokens on Solana',
  options: [
    {
      name: 'token',
      description: 'Token you want to buy (SOL, BONK, etc.)',
      type: ApplicationCommandOptionType.String,
      required: true,
    },
    {
      name: 'amount',
      description: 'Amount to buy',
      type: ApplicationCommandOptionType.Number,
      required: true,
    }
  ]
};

export async function executeBuyCommand(interaction: ChatInputCommandInteraction) {
  const token = interaction.options.get('token')?.value as string;
  const amount = interaction.options.get('amount')?.value as number;
  
  // Dummy transaction data
  const transactionId = "2ZGU7JKMpPAcC4BVU4Wj9YMKNMbXT8CrhZmVxoVzLBhm";
  const price = token === "SOL" ? 182.45 : 0.00000234;
  const totalCost = price * amount;
  
  await interaction.reply({
    content: `✅ Successfully placed order to buy ${amount} ${token} at $${price.toFixed(8)} per token\n` +
             `Total cost: $${totalCost.toFixed(2)}\n` +
             `Transaction ID: ${transactionId}\n\n` +
             `Note: This is dummy data for MVP demonstration.`,
    ephemeral: true
  });
}