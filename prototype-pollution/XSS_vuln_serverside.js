let friends = [
    {
        id: 1,
        name: "Sabalenka",
        age: 25,
        country: "UK",
        reviews: [],
        albums: [{ name: "USA Trip", photos: "git.thm" }],
        password: "xxx",
    },
...
...
app.post("/submit-friend-review", (req, res) => {
    if (!req.session.user) {
        return res.redirect("/signin");
    }
    const { friendId, reviewContent } = req.body;
    const friend = friends.find((f) => f.id === parseInt(friendId));
    if (!friend) {
        return res.status(404).send("Friend not found");
    }
    try {
        const input = JSON.parse(reviewContent);
        _.set(friend, input.path, payload.value);
    } catch (e) { }
    res.redirect(`/friend/${friendId}`);
});