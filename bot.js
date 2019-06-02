const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By LeStrong_");

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag} !`);
          client.user.setActivity("!suggest| By LeStrong_",{type: 'Playing'});
  
  });
  
client.on('message', message => {
	var prefix = "!";
    if(message.author.bot) return;
    var name1 = message.mentions.users.first();
    var suggest = message.content.split(' ').slice(2).join(' ');
    if(message.content.startsWith(prefix + 'suggest')) {
        if(message.author.bot) return;
        if(!message.guild.channels.find('name', 'suggest')) return message.channel.send('**نرجو عمل روم باسم suggest**').then(msg => msg.delete(5000));
    if(!name1) return message.reply('**منشن نفسك**').then(msg => msg.delete(3000))
        message.delete();
    if(!suggest) return message.reply('**:innocent:اكتب الاقتراح:innocent:**').then(msg => msg.delete(3000))
        message.delete();
    var abod = new Discord.RichEmbed()
    .setTitle(`**الاقتراح**`)
    .addField('**المقترح:**', `${name1}`, true)
    .addField('**بروم:**', `${message.channel.name}`, true)
    .addField('**الاقتراح:**', `${suggest}`, true)
    .setFooter(`${message.author.username}#${message.author.discriminator}`, message.author.avatarURL)
    .setTimestamp()
        message.guild.channels.find('name', 'suggest').sendEmbed(abod)
    message.reply('**:sunglasses:بنشوف اقتراحك:sunglasses:**').then(msg => msg.delete(3000));
    }
});

client.login(process.env.BOT_TOKEN);