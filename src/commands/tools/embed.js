const { SlashCommandBuilder, EmbedBuilder } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("go")
    .setDescription("Returns an embed."),
  async execute(interaction, client) {
    const embed = new EmbedBuilder()
      .setTitle(`Let's go`)
      .setDescription("Success is 99% failure")
      .setColor(0x18e1ee)
      // .setImage(client.user.displayAvatarURL())
      // .setThumbnail(client.user.displayAvatarURL())
      .setTimestamp(Date.now())
      .setAuthor({
        url: `https://www.notion.so/armansu/Batch-27-Advanced-nFactorial-Web-Knowledge-Base-a40bceff264d4e82b805433c8d9684cd`,
        // iconURL: interaction.user.displayAvatarURL(),
        name: interaction.user.tag,
      })
      .setFooter({
        // iconURL: client.user.displayAvatarURL(),
        text: client.user.tag,
      })
      .setFields()
      .setURL(`https://www.notion.so/armansu/55bba556d0e6489fa54e7ca372616c3e`)
      .addFields([
        {
          name: `Если сразу не получилось хорошо,`,
          value: `назовите это версией 1.0`,
          inline: true,
        },
        // {
        //     name: `Болтовня ничего не стоит,`,
        //     value: `Покажите мне код.`,
        //     inline: true
        // }
      ]);
    await interaction.reply({
      embeds: [embed],
    });
  },
};
