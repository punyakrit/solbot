import { ChatInputCommandInteraction, ActionRowBuilder, ButtonBuilder, EmbedBuilder, ButtonStyle } from 'discord.js';

export const startCommand = {
  name: 'start',
  description: 'Start interacting with SolBot trading features'
};

export async function executeStartCommand(interaction: ChatInputCommandInteraction) {
  // Create the embed
  const embed = new EmbedBuilder()
    .setTitle('SolBot - Solana Trading Assistant')
    .setDescription('Select an action to get started with trading on Solana')
    .setColor(0x1E90FF)
    .addFields(
      { name: 'Buy & Sell', value: 'Buy or sell tokens on Solana', inline: true },
      { name: 'Price Check', value: 'Get current token prices', inline: true },
      { name: 'Portfolio View', value: 'Check your holdings', inline: true },
      { name: 'Token Swap', value: 'Trade between different tokens', inline: true }
    )
    .setFooter({ text: 'Note: This is for MVP demonstration purposes only' });

  // Create the buttons
  const row1 = new ActionRowBuilder<ButtonBuilder>()
    .addComponents(
      new ButtonBuilder()
        .setCustomId('action_buy')
        .setLabel('Buy Tokens')
        .setStyle(ButtonStyle.Success),
      new ButtonBuilder()
        .setCustomId('action_sell')
        .setLabel('Sell Tokens')
        .setStyle(ButtonStyle.Danger)
    );

  const row2 = new ActionRowBuilder<ButtonBuilder>()
    .addComponents(
      new ButtonBuilder()
        .setCustomId('action_price')
        .setLabel('Check Prices')
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId('action_account')
        .setLabel('View Account')
        .setStyle(ButtonStyle.Secondary)
    );

  const row3 = new ActionRowBuilder<ButtonBuilder>()
    .addComponents(
      new ButtonBuilder()
        .setCustomId('action_trade')
        .setLabel('Swap Tokens')
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId('action_help')
        .setLabel('Trading Help')
        .setStyle(ButtonStyle.Secondary)
    );

  // Send the message with the embed and buttons
  await interaction.reply({
    embeds: [embed],
    components: [row1, row2, row3]
  });
} 