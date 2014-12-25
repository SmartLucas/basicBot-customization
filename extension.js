(function () {

    //Define our function responsible for extending the bot.
    function extend() {
        //If the bot hasn't been loaded properly, try again in 1 second(s).
        if (!window.bot) {
            return setTimeout(extend, 1 * 1000);
        }

        //Precaution to make sure it is assigned properly.
        var bot = window.bot;

        //Load custom settings set below
        bot.retrieveSettings();

        /*
         Extend the bot here, either by calling another function or here directly.
         Model code for a bot command:
         bot.commands.commandCommand = {
         command: 'cmd',
         rank: 'user/bouncer/mod/manager',
         type: 'startsWith/exact',
         functionality: function(chat, cmd){
         if(this.type === 'exact' && chat.message.length !== cmd.length) return void (0);
         if( !bot.commands.executable(this.rank, chat) ) return void (0);
         else{
         //Commands functionality goes here.
         }
         }
         }
         */

        bot.commands.techCommand = {
        command: 'tech',  
        rank: 'user', 
        type: 'exact', 
        functionality: function (chat, cmd) {
            if (this.type === 'exact' && chat.message.length !== cmd.length) return void (0);
            if (!bot.commands.executable(this.rank, chat)) return void (0);
            else {
            API.sendChat("Tech Blog com mais regularidade para informá-lo em quais erros os desenvolvedores estão trabalhando. http://tech.plug.dj/");
                }
            }
        };


        bot.commands.deliciaCommand = {
            command: 'delicia',  //The command to be called. With the standard command literal this would be: !bacon
            rank: 'user', //Minimum user permission to use the command
            type: 'exact', //Specify if it can accept variables or not (if so, these have to be handled yourself through the chat.message
            functionality: function (chat, cmd) {
                if (this.type === 'exact' && chat.message.length !== cmd.length) return void (0);
                if (!bot.commands.executable(this.rank, chat)) return void (0);
                else {
                    API.sendChat("/me AI QUE DELICIA!");
                }
            }
        };

        //Load the chat package again to account for any changes
        bot.loadChat();

    }

    //Change the bots default settings and make sure they are loaded on launch

    localStorage.setItem("basicBotsettings", JSON.stringify({
        botName: "SkyBot",
        language: "portuguese",
        chatLink: "https://rawgit.com/SmartLucas/basicBot/master/lang/pt.json",
        maximumAfk: 120,
        afkRemoval: false,
        maximumDc: 60,
        bouncerPlus: true,
        lockdownEnabled: false,
        lockGuard: false,
        maximumLocktime: 10,
        cycleGuard: true,
        maximumCycletime: 10,
        timeGuard: true,
        maximumSongLength: 08,
        autodisable: false,
        commandCooldown: 30,
        usercommandsEnabled: true,
        lockskipPosition: 3,
        lockskipReasons: [
            ["theme", "Esse video não combina com o tema da sala. "],
            ["op", "This song is on the OP list. "],
            ["history", "Esse video está no historico. "],
            ["mix", "Você tocou um mix, é contra as regras da sala. "],
            ["sound", "O video que você tocou tem uma qualidade ruim, ou não tem nada. "],
            ["nsfw", "Esse video contém NSFW (imagem). "],
            ["bug", "O video que você botou não está liberado para alguns usuarios. "]
        ],
        afkpositionCheck: 15,
        afkRankCheck: "ambassador",
        motdEnabled: false,
        motdInterval: 5,
        motd: "Bem vindo delicias",
        filterChat: false,
        etaRestriction: false,
        welcome: false,
        opLink: null,
        rulesLink: "http://goo.gl/6RP5x1",
        themeLink: null,
        fbLink: "https://www.facebook.com/pages/theskyway1",
        youtubeLink: null,
        website: "",
        intervalMessages: [],
        messageInterval: 5,
        songstats: false,
        commandLiteral: "!",
        blacklists: {
            NSFW: "https://raw.githubusercontent.com/Yemasthui/basicBot-customization/master/blacklists/ExampleNSFWlist.json",
            OP: "https://raw.githubusercontent.com/Yemasthui/basicBot-customization/master/blacklists/ExampleOPlist.json"
        }
    }));

    //Start the bot and extend it when it has loaded.
    $.getScript('https://rawgit.com/Yemasthui/basicBot/master/basicBot.js', extend);

}).call(this);
