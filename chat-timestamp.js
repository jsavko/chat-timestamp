Hooks.once("ready", async () => {
    timeStamp =  (timestamp) => { 
        return new Date(timestamp).toLocaleTimeString();
    }
    
    Handlebars.registerHelper({timeSince: timeStamp});

});
