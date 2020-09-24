const Discord = require("discord.js");

const bot = new Discord.Client();

const fs = require("fs");

const chalk = require("chalk");

const PREFIX = "%";

const token = "not this time";



bot.on("ready", () => {
  console.log(
    chalk.green(
      `Bot online and running through Discord!`
    )
  );
  bot.user
    .setActivity(`The Time`, {
      type: "WATCHING"
    })
    .catch(console.error);
});
bot.on("message", message => {
  let args = message.content.substring(PREFIX.length).split(" ");

  switch (args[0]) {
    case'ping':
if (!message.content.startsWith(PREFIX)) return;
let m = message.channel.send("Pinging...").then(m => {
  m.delete({ timeout: 2000 });
  var ping = m.createdAt - message.createdAt;
  var botPing = Math.round(bot.ws.ping);

  let pingEmbed = new Discord.MessageEmbed()
    .setTitle("View the bot and your own API!")
    .setColor("RANDOM")
    .setDescription(
      `Pong!\nLatency: ${ping}ms\nAPI Latency: ${botPing}ms`
    );
  message.channel.send(pingEmbed);
});
break;
case `flip`:
    message.channel.send(`https://www.samsung.com/us/mobile/galaxy-z-flip/`);
    break;
    case `apple`:
      if (!message.content.startsWith(PREFIX)) return;
        message.channel.send(`https://www.apple.com`)
        break;
        case `minecraft`:
          if (!message.content.startsWith(PREFIX)) return;
        message.channel.send(`:video_game:`)
        break;
        case `invite`:
          if (!message.content.startsWith(PREFIX)) return;
        message.channel.send(`https://discord.com/oauth2/authorize?client_id=747292356847468704&scope=bot&permissions=2146958847`)
        break;
        case `computers`:
          if (!message.content.startsWith(PREFIX)) return;
            let pingEmbed = new Discord.MessageEmbed()
    .setTitle("what is a computer")
    .setColor("#FF0000")
    .setDescription(
      `...`
    );
  message.channel.send(pingEmbed);
  
      case `meme`:
        if (!message.content.startsWith(PREFIX)) return;
    message.channel
        .send({
          files: [
            "https://images-cdn.9gag.com/photo/aB05wEN_700b.jpg"
          ]
        })
        .then(console.log)
        .catch(console.error);
        break;
        
        case `help`:
          if (!message.content.startsWith(PREFIX)) return;
            let test = new Discord.MessageEmbed()
    .setTitle("help")
    .setColor("RANDOM")
    .setTimestamp()
    .setDescription(
      `
      prefix is %
      
      -help  shows help message
      -apple shows apple.com
      -flip shows zflip
      -meme shows one meme at the moment
      -kick kicks a user
      -ban bans a user
      -unban unbans a user
      -minecraft shows a controller
      -ping shows ping
      -invite shows bot invite
      -status shows status of bot
      
      
      Do %help-(command) to get more info about the command`
    );
    
  message.channel.send(test);
  break;
  case "kick":
    if (!message.content.startsWith(PREFIX)) return;
    let kickTarget = message.guild.member(
      message.mentions.users.first() ||
        message.guild.members.cache.get(args[0])
    );
    if (!message.member.hasPermission("KICK_MEMBERS"))
      return message.channel.send("**the microwave said no**");
    if (!kickTarget)
      return message.channel.send("what am i sopost to kick thin air!");
    if (kickTarget.hasPermission("MANAGE_MESSAGES"))
      return message.channel.send("this person is invinceable");
    var kReason = args.join(" ").slice(9);
    var mem = message.mentions.members.first();
    mem
      .kick()
      .then(() => {})
      .catch(e => {
        console.log(e);
      });
    let k = new Discord.MessageEmbed()
      .setTitle("Kick a user!")
      .setColor("RANDOM")
      .setDescription("**" + mem.displayName + "**" + " has succesfully been kicked by " + "**" + message.author.username + "**")
      .addField("Reason:", kReason)
      .setTimestamp()
    message.channel.send(k);
    break;
    case "ban":
      if (!message.content.startsWith(PREFIX)) return;
      let banTarget = message.guild.member(
        message.mentions.users.first() ||
          message.guild.members.cache.get(args[0])
      );
      if (!message.member.hasPermission("BAN_MEMBERS"))
        return message.channel.send("**No**");
      if (!banTarget)
        return message.channel.send(" air has been banned");
      if (banTarget.hasPermission("MANAGE_MESSAGES"))
        return message.channel.send("this person said they can't be banned");
      var banReason = args.join(" ").slice(9);
      var mem = message.mentions.members.first();
      mem
        .ban()
        .then(() => {})
        .catch(e => {
          console.log(e);
        });
      let ban = new Discord.MessageEmbed()
        .setTitle("ban a user!")
        .setColor("RANDOM")
        .setDescription("**" + mem.displayName + "**" + " has succesfully been banned by " + "**" + message.author.username + "**")
        .addField("Reason:", banReason)
        .setTimestamp()
      message.channel.send(ban);
      break;
      case `status`:
        if (!message.content.startsWith(PREFIX)) return;
            let status = new Discord.MessageEmbed()
            .setTitle("Night bot is currently a work in progress")
            .setColor ("random")
            .setTimestamp()
            message.channel.send(status);
  break;
  case `help-apple`:
          if (!message.content.startsWith(PREFIX)) return;
            let help1 = new Discord.MessageEmbed()
    .setTitle("Apple")
    .setColor("RANDOM")
    .setTimestamp()
    .setDescription(
      `Just Apple's website`
    );
  message.channel.send(help1);
  break;
  case `help-flip`:
          if (!message.content.startsWith(PREFIX)) return;
            let help2 = new Discord.MessageEmbed()
    .setTitle("flip")
    .setColor("RANDOM")
    .setDescription(
      `Just the zflip's website`
    );
  message.channel.send(help2);
  break;
  case `help-meme`:
          if (!message.content.startsWith(PREFIX)) return;
            let help3 = new Discord.MessageEmbed()
    .setTitle("meme")
    .setColor("RANDOM")
    .setDescription(
      `shows a meme`
    );
  message.channel.send(help3);
  break;
  case `help-kick`:
          if (!message.content.startsWith(PREFIX)) return;
            let help4 = new Discord.MessageEmbed()
    .setTitle("Kick")
    .setColor("RANDOM")
    .setDescription(
      `kicks a user`
    );
  message.channel.send(help4);
  break;
  case `help-ban`:
          if (!message.content.startsWith(PREFIX)) return;
            let help5 = new Discord.MessageEmbed()
    .setTitle("Ban")
    .setColor("RANDOM")
    .setDescription(
      `Smashes the ban hammer onto someone`
    );
  message.channel.send(help5);
  break;
  case `help-Minecraft`:
          if (!message.content.startsWith(PREFIX)) return;
            let help6 = new Discord.MessageEmbed()
    .setTitle("Minecraft")
    .setColor("RANDOM")
    .setDescription(
      `Just a controller`
    );
  message.channel.send(help6);
  break;
  case `help-ping`:
          if (!message.content.startsWith(PREFIX)) return;
            let help7 = new Discord.MessageEmbed()
    .setTitle("Ping")
    .setColor("RANDOM")
    .setDescription(
      `shows ping of bot
      
      
      **ping code was by shoe**`
    );
  message.channel.send(help7);
  break;
  case `help-invite`:
          if (!message.content.startsWith(PREFIX)) return;
            let help8 = new Discord.MessageEmbed()
    .setTitle("Invite")
    .setColor("RANDOM")
    .setDescription(
      `Just the bots invite`
    );
  message.channel.send(help8);
  break;
  case `help-status`:
          if (!message.content.startsWith(PREFIX)) return;
            let help9 = new Discord.MessageEmbed()
    .setTitle("status")
    .setColor("RANDOM")
    .setDescription(
      `shows bot announcements`
    );
  message.channel.send(help9);
  break;
  case `help-unban`:
          if (!message.content.startsWith(PREFIX)) return;
            let help10 = new Discord.MessageEmbed()
    .setTitle("status")
    .setColor("RANDOM")
    .setDescription(
      `unbans a banned user`
    );
  message.channel.send(help10);
  break;
  case "unban":
      if (!message.content.startsWith(PREFIX)) return;
      let unbanTarget = message.guild.member(
        message.mentions.users.first() ||
          message.guild.members.cache.get(args[0])
      );
      if (!message.member.hasPermission("BAN_MEMBERS"))
        return message.channel.send("**No**");
      if (!unbanTarget)
        return message.channel.send(" air has been banned");
      var unbanReason = args.join(" ").slice(9);
      var mem = message.mentions.members.cache.first();
      mem
        .unban()
        .then(() => {})
        .catch(e => {
          console.log(e);
        });
      let unban = new Discord.MessageEmbed()
        .setTitle("unban a user!")
        .setColor("RANDOM")
        .setDescription("**" + mem.displayName + "**" + " has succesfully been unbanned by " + "**" + message.author.username + "**")
        .addField("Reason:", unbanReason)
        .setTimestamp()
      message.channel.send(unban);
      break;
  

      
}
    
  ;
  
  


 
  
  
}
);
bot.login(token)