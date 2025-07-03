import { ChatInputCommandInteraction, ApplicationCommandOptionType, EmbedBuilder } from 'discord.js';

export const accountCommand = {
  name: 'account',
  description: 'Get your Solana account information and holdings',
  options: [
    {
      name: 'address',
      description: 'Optional Solana wallet address to check',
      type: ApplicationCommandOptionType.String,
      required: false,
    }
  ]
};

export async function executeAccountCommand(interaction: ChatInputCommandInteraction) {
  const address = interaction.options.get('address')?.value as string || 'HN7cABqLq46Es1jh92dQQpzQQH7HLsZGPz1AbGsT5QQT';
  
  // Dummy account data
  const shortAddress = `${address.substring(0, 4)}...${address.substring(address.length - 4)}`;
  const solBalance = 4.2069;
  const usdValue = solBalance * 182.45; // Based on SOL price
  
  // Dummy token holdings
  const tokens = [
    { symbol: 'BONK', amount: 42000000, value: 98.28 },
    { symbol: 'JTO', amount: 12.45, value: 29.13 },
    { symbol: 'PYTH', amount: 87.65, value: 66.61 },
    { symbol: 'MEME', amount: 1245.67, value: 52.32 }
  ];
  
  // Calculate total portfolio value
  const portfolioValue = usdValue + tokens.reduce((sum, token) => sum + token.value, 0);
  
  const embed = new EmbedBuilder()
    .setTitle('Solana Account Overview')
    .setDescription(`Address: \`${shortAddress}\``)
    .addFields(
      { name: 'SOL Balance', value: `${solBalance} SOL ($${usdValue.toFixed(2)})`, inline: true },
      { name: 'Total Portfolio Value', value: `$${portfolioValue.toFixed(2)}`, inline: true },
      { name: '\u200B', value: '\u200B' }, // Empty field as spacer
      { name: 'Token Holdings', value: tokens.map(t => 
        `${t.symbol}: ${t.amount.toLocaleString()} ($${t.value.toFixed(2)})`).join('\n')
      }
    )
    .setFooter({ text: 'Note: This is dummy data for MVP demonstration.' })
    .setTimestamp();
  
  await interaction.reply({
    embeds: [embed]
  });
} 