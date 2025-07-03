import { ChatInputCommandInteraction, ApplicationCommandOptionType, EmbedBuilder } from 'discord.js';

export const tradeCommand = {
  name: 'trade',
  description: 'Swap between tokens on Solana',
  options: [
    {
      name: 'from_token',
      description: 'Token to trade from (SOL, BONK, etc.)',
      type: ApplicationCommandOptionType.String,
      required: true,
    },
    {
      name: 'to_token',
      description: 'Token to trade to (SOL, BONK, etc.)',
      type: ApplicationCommandOptionType.String,
      required: true,
    },
    {
      name: 'amount',
      description: 'Amount to trade',
      type: ApplicationCommandOptionType.Number,
      required: true,
    },
    {
      name: 'slippage',
      description: 'Slippage tolerance in % (default: 0.5%)',
      type: ApplicationCommandOptionType.Number,
      required: false,
    }
  ]
};

export async function executeTradeCommand(interaction: ChatInputCommandInteraction) {
  const fromToken = interaction.options.get('from_token')?.value as string;
  const toToken = interaction.options.get('to_token')?.value as string;
  const amount = interaction.options.get('amount')?.value as number;
  const slippage = interaction.options.get('slippage')?.value as number || 0.5;
  
  // Dummy price data
  const prices: {[key: string]: number} = {
    'SOL': 182.45,
    'BONK': 0.00000234,
    'JTO': 2.34,
    'PYTH': 0.76,
    'MEME': 0.042,
    'WIF': 1.83,
    'USDC': 1.0
  };
  
  // Calculate exchange rate and received amount
  const fromPrice = prices[fromToken.toUpperCase()] || 1;
  const toPrice = prices[toToken.toUpperCase()] || 1;
  const exchangeRate = fromPrice / toPrice;
  const receivedAmount = amount * exchangeRate;
  
  // Dummy fee calculation (0.5% of trade value)
  const fee = amount * fromPrice * 0.005;
  
  // Dummy transaction ID
  const transactionId = "2mMGsb5MTFRCrLHiBLKK9qUbLFETNcNajfqM1LsGTTV7";
  
  const embed = new EmbedBuilder()
    .setTitle('Trade Executed')
    .setDescription(`Swapped ${fromToken.toUpperCase()} to ${toToken.toUpperCase()}`)
    .addFields(
      { name: 'Amount Sent', value: `${amount} ${fromToken.toUpperCase()}`, inline: true },
      { name: 'Amount Received', value: `${receivedAmount.toFixed(6)} ${toToken.toUpperCase()}`, inline: true },
      { name: 'Exchange Rate', value: `1 ${fromToken.toUpperCase()} = ${exchangeRate.toFixed(6)} ${toToken.toUpperCase()}`, inline: false },
      { name: 'Fee Paid', value: `$${fee.toFixed(4)} (0.5%)`, inline: true },
      { name: 'Slippage Tolerance', value: `${slippage}%`, inline: true },
      { name: 'Transaction ID', value: `\`${transactionId}\``, inline: false }
    )
    .setFooter({ text: 'Note: This is dummy data for MVP demonstration.' })
    .setTimestamp();
  
  await interaction.reply({
    embeds: [embed]
  });
} 