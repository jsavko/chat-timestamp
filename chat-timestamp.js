Hooks.once("init", async () => {
    let chatTimeStamp =  (timestamp) => { 
        return new Date(timestamp).toLocaleTimeString();
    }

    Handlebars.registerHelper({chatTimeStamp: chatTimeStamp});

    CONFIG.ChatMessage.template =  "modules/chat-timestamp/templates/sidebar/chat-message.html";
    
});
