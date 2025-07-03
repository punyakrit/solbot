import { ButtonInteraction, EmbedBuilder, ModalBuilder, TextInputBuilder, ActionRowBuilder, TextInputStyle } from 'discord.js';

export async function handleButtonInteraction(interaction: ButtonInteraction) {
  const customId = interaction.customId;

  try {
    switch (customId) {
      case 'action_buy':
        await handleBuyAction(interaction);
        break;
      case 'action_sell':
        await handleSellAction(interaction);
        break;
      case 'action_price':
        await handlePriceAction(interaction);
        break;
      case 'action_account':
        await handleAccountAction(interaction);
        break;
      case 'action_trade':
        await handleTradeAction(interaction);
        break;
      case 'action_help':
        await handleHelpAction(interaction);
        break;
      default:
        await interaction.reply({
          content: 'Unknown button action',
          ephemeral: true
        });
    }
  } catch (error) {
    console.error(`Error handling button ${customId}:`, error);
    await interaction.reply({
      content: 'There was an error processing this action!',
      ephemeral: true
    });
  }
}

// Buy action - Show modal for token purchase
async function handleBuyAction(interaction: ButtonInteraction) {
  const modal = new ModalBuilder()
    .setCustomId('buy_modal')
    .setTitle('Buy Tokens');

  const tokenInput = new TextInputBuilder()
    .setCustomId('token_input')
    .setLabel('Token to buy (SOL, BONK, etc.)')
    .setStyle(TextInputStyle.Short)
    .setPlaceholder('SOL')
    .setRequired(true);

  const amountInput = new TextInputBuilder()
    .setCustomId('amount_input')
    .setLabel('Amount to buy')
    .setStyle(TextInputStyle.Short)
    .setPlaceholder('1.5')
    .setRequired(true);

  const firstRow = new ActionRowBuilder<TextInputBuilder>().addComponents(tokenInput);
  const secondRow = new ActionRowBuilder<TextInputBuilder>().addComponents(amountInput);

  modal.addComponents(firstRow, secondRow);
  await interaction.showModal(modal);
}

// Sell action - Show modal for token selling
async function handleSellAction(interaction: ButtonInteraction) {
  const modal = new ModalBuilder()
    .setCustomId('sell_modal')
    .setTitle('Sell Tokens');

  const tokenInput = new TextInputBuilder()
    .setCustomId('token_input')
    .setLabel('Token to sell (SOL, BONK, etc.)')
    .setStyle(TextInputStyle.Short)
    .setPlaceholder('SOL')
    .setRequired(true);

  const amountInput = new TextInputBuilder()
    .setCustomId('amount_input')
    .setLabel('Amount to sell')
    .setStyle(TextInputStyle.Short)
    .setPlaceholder('1.5')
    .setRequired(true);

  const firstRow = new ActionRowBuilder<TextInputBuilder>().addComponents(tokenInput);
  const secondRow = new ActionRowBuilder<TextInputBuilder>().addComponents(amountInput);

  modal.addComponents(firstRow, secondRow);
  await interaction.showModal(modal);
}

// Price action - Show modal for price checking
async function handlePriceAction(interaction: ButtonInteraction) {
  const modal = new ModalBuilder()
    .setCustomId('price_modal')
    .setTitle('Check Token Price');

  const tokenInput = new TextInputBuilder()
    .setCustomId('token_input')
    .setLabel('Token symbol (SOL, BONK, etc.)')
    .setStyle(TextInputStyle.Short)
    .setPlaceholder('SOL')
    .setRequired(true);

  const firstRow = new ActionRowBuilder<TextInputBuilder>().addComponents(tokenInput);

  modal.addComponents(firstRow);
  await interaction.showModal(modal);
}

// Account action - Send account overview
async function handleAccountAction(interaction: ButtonInteraction) {
  // Dummy account data
  const address = 'HN7cABqLq46Es1jh92dQQpzQQH7HLsZGPz1AbGsT5QQT';
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
    embeds: [embed],
    ephemeral: true
  });
}

// Trade action - Show modal for token swapping
async function handleTradeAction(interaction: ButtonInteraction) {
  const modal = new ModalBuilder()
    .setCustomId('trade_modal')
    .setTitle('Swap Tokens');

  const fromTokenInput = new TextInputBuilder()
    .setCustomId('from_token_input')
    .setLabel('From token (SOL, BONK, etc.)')
    .setStyle(TextInputStyle.Short)
    .setPlaceholder('SOL')
    .setRequired(true);

  const toTokenInput = new TextInputBuilder()
    .setCustomId('to_token_input')
    .setLabel('To token (BONK, USDC, etc.)')
    .setStyle(TextInputStyle.Short)
    .setPlaceholder('USDC')
    .setRequired(true);

  const amountInput = new TextInputBuilder()
    .setCustomId('amount_input')
    .setLabel('Amount to swap')
    .setStyle(TextInputStyle.Short)
    .setPlaceholder('1.5')
    .setRequired(true);

  const firstRow = new ActionRowBuilder<TextInputBuilder>().addComponents(fromTokenInput);
  const secondRow = new ActionRowBuilder<TextInputBuilder>().addComponents(toTokenInput);
  const thirdRow = new ActionRowBuilder<TextInputBuilder>().addComponents(amountInput);

  modal.addComponents(firstRow, secondRow, thirdRow);
  await interaction.showModal(modal);
}

// Help action - Show trading help information
async function handleHelpAction(interaction: ButtonInteraction) {
  const embed = new EmbedBuilder()
    .setTitle('SolBot Trading Help')
    .setDescription('Quick guide to trading on Solana')
    .addFields(
      { name: '📈 Buying Tokens', value: 'Use `/buy` or the Buy button to purchase tokens with USDC or SOL', inline: false },
      { name: '📉 Selling Tokens', value: 'Use `/sell` or the Sell button to convert tokens back to USDC or SOL', inline: false },
      { name: '💰 Checking Prices', value: 'Use `/price` or the Price button to view current token values', inline: false },
      { name: '👛 Account Status', value: 'Use `/account` or the Account button to see your portfolio', inline: false },
      { name: '🔄 Swapping Tokens', value: 'Use `/trade` or the Trade button to swap between tokens', inline: false },
    )
    .setFooter({ text: 'Note: This is dummy data for MVP demonstration.' });

  await interaction.reply({
    embeds: [embed],
    ephemeral: true
  });
} 