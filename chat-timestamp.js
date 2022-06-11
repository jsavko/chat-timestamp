// Settings
Hooks.on("init", () => {
    game.settings.register('chat-timestamp', 'showDate', {
        name: game.i18n.localize("CHAT_TIMESTAMP.showDate.name"),
        hint: game.i18n.localize("CHAT_TIMESTAMP.showDate.hint"),
        scope: 'client',
        config: true,
        default: 'hover',
        type: String,
        choices: {
            "foundry": game.i18n.localize("CHAT_TIMESTAMP.showDate.foundry"),
            "never": game.i18n.localize("CHAT_TIMESTAMP.showDate.never"),
            "hover": game.i18n.localize("CHAT_TIMESTAMP.showDate.hover"),
            "always": game.i18n.localize("CHAT_TIMESTAMP.showDate.always")
        },
        onchange: () => ui.players.render()
    });
});

// Timestamp 
Hooks.once("init", async () => {
    let chatTimeStamp = (timestamp) => { 
        return new Date(timestamp).toLocaleTimeString();
    }
    let chatDateStamp = (timestamp) => { 
        return new Date(timestamp).toLocaleDateString();
    }

    Handlebars.registerHelper({chatTimeStamp: chatTimeStamp});
    Handlebars.registerHelper({chatDateStamp: chatDateStamp});

    switch(game.settings.get('chat-timestamp', 'showDate')) {
        case "never": 
             CONFIG.ChatMessage.template =  "modules/chat-timestamp/templates/sidebar/chat-message.html";
             break;
        case "hover": 
             CONFIG.ChatMessage.template =  "modules/chat-timestamp/templates/sidebar/chat-message-hover.html";
             break;
        case "always": 
             CONFIG.ChatMessage.template =  "modules/chat-timestamp/templates/sidebar/chat-message-date.html";
             break;
        case "foundry":
             break;
    }
});
