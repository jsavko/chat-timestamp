Hooks.once("init", async () => {
    let chatTimeStamp =  (timestamp) => { 
        return new Date(timestamp).toLocaleTimeString();
    }
    
    Handlebars.registerHelper({timeSince: chatTimeStamp});

});
