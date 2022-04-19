Hooks.once("init", async () => {
    let chatTimeStamp =  (timestamp) => { 
        return new Date(timestamp).toLocaleTimeString();
    }
    Handlebars.registerHelper({chatTimeStamp: chatTimeStamp});

    CONFIG.ChatMessage =  {
        documentClass: ChatMessage,
        collection: Messages,
        template: "modules/chat-timestamp/templates/sidebar/chat-message.html",
        sidebarIcon: "fas fa-comments",
        batchSize: 100
      }
});



