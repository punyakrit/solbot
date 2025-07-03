import { ModalSubmitInteraction, EmbedBuilder } from 'discord.js';

export async function handleModalSubmit(interaction: ModalSubmitInteraction) {
  const modalId = interaction.customId;

  try {
    switch (modalId) {
      case 'buy_modal':
        await handleBuyModalSubmit(interaction);
        break;
      case 'sell_modal':
        await handleSellModalSubmit(interaction);
        break;
      case 'price_modal':
        await handlePriceModalSubmit(interaction);
        break;
      case 'trade_modal':
        await handleTradeModalSubmit(interaction);
        break;
      default:
        await interaction.reply({
          content: 'Unknown modal submission',
          ephemeral: true
        });
    }
  } catch (error) {
    console.error(`Error handling modal ${modalId}:`, error);
    await interaction.reply({
      content: 'There was an error processing your submission!',
      ephemeral: true
    });
  }
}

// Handle buy modal submission
async function handleBuyModalSubmit(interaction: ModalSubmitInteraction) {
  const token = interaction.fields.getTextInputValue('token_input');
  const amountString = interaction.fields.getTextInputValue('amount_input');
  const amount = parseFloat(amountString);

  if (isNaN(amount)) {
    await interaction.reply({
      content: 'Please enter a valid number for the amount.',
      ephemeral: true
    });
    return;
  }

  // Dummy transaction data
  const transactionId = "2ZGU7JKMpPAcC4BVU4Wj9YMKNMbXT8CrhZmVxoVzLBhm";
  const price = token.toUpperCase() === "SOL" ? 182.45 : 0.00000234;
  const totalCost = price * amount;

  await interaction.reply({
    content: `✅ Successfully placed order to buy ${amount} ${token.toUpperCase()} at $${price.toFixed(8)} per token\n` +
             `Total cost: $${totalCost.toFixed(2)}\n` +
             `Transaction ID: ${transactionId}\n\n` +
             `Note: This is dummy data for MVP demonstration.`,
    ephemeral: true
  });
}

// Handle sell modal submission
async function handleSellModalSubmit(interaction: ModalSubmitInteraction) {
  const token = interaction.fields.getTextInputValue('token_input');
  const amountString = interaction.fields.getTextInputValue('amount_input');
  const amount = parseFloat(amountString);

  if (isNaN(amount)) {
    await interaction.reply({
      content: 'Please enter a valid number for the amount.',
      ephemeral: true
    });
    return;
  }

  // Dummy transaction data
  const transactionId = "4pzRFUzM1xJHyBKjVQg6CV6XAKgLfrvmGYxqFPNEbkrW";
  const price = token.toUpperCase() === "SOL" ? 182.45 : 0.00000234;
  const totalValue = price * amount;

  await interaction.reply({
    content: `✅ Successfully placed order to sell ${amount} ${token.toUpperCase()} at $${price.toFixed(8)} per token\n` +
             `Total value: $${totalValue.toFixed(2)}\n` +
             `Transaction ID: ${transactionId}\n\n` +
             `Note: This is dummy data for MVP demonstration.`,
    ephemeral: true
  });
}

// Handle price modal submission
async function handlePriceModalSubmit(interaction: ModalSubmitInteraction) {
  const token = interaction.fields.getTextInputValue('token_input');

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
             `Note: This is dummy data for MVP demonstration.`,
    ephemeral: true
  });
}

// Handle trade modal submission
async function handleTradeModalSubmit(interaction: ModalSubmitInteraction) {
  const fromToken = interaction.fields.getTextInputValue('from_token_input');
  const toToken = interaction.fields.getTextInputValue('to_token_input');
  const amountString = interaction.fields.getTextInputValue('amount_input');
  const amount = parseFloat(amountString);

  if (isNaN(amount)) {
    await interaction.reply({
      content: 'Please enter a valid number for the amount.',
      ephemeral: true
    });
    return;
  }

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
      { name: 'Slippage Tolerance', value: `0.5%`, inline: true },
      { name: 'Transaction ID', value: `\`${transactionId}\``, inline: false }
    )
    .setFooter({ text: 'Note: This is dummy data for MVP demonstration.' })
    .setTimestamp();
  
  await interaction.reply({
    embeds: [embed],
    ephemeral: true
  });
} 