// Vulnerable recursive merge function
function recursiveMerge(target, source) {
    for (let key in source) {
        if (source[key] instanceof Object) {
            if (!target[key]) target[key] = {};
            recursiveMerge(target[key], source[key]);
        } else {
            target[key] = source[key];
        }
    }
}

// Endpoint to update user settings
app.post('/updateSettings', (req, res) => {
    const userSettings = req.body; // User-controlled input
    recursiveMerge(globalUserSettings, userSettings);
    res.send('Settings updated!');
});