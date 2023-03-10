const {
  SlashCommandBuilder,
  ActionRowBuilder,
  ButtonBuilder,
  ButtonStyle,
} = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("repeat")
    .setDescription("Return a button"),
  async execute(interaction, client) {
    const button = new ButtonBuilder()
      .setCustomId("sub")
      .setLabel(`Click Me!`)
      .setStyle(ButtonStyle.Primary);

    await interaction.reply({
      components: [new ActionRowBuilder().addComponents(button)],
    });
  },
};
