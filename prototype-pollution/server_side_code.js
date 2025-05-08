app.post("/clone-album/:friendId", (req, res) => {
    const { friendId } = req.params;
    const { selectedAlbum , newAlbumName } = req.body;
    const friend = friends.find((f) => f.id === parseInt(friendId));
    if (!friend) {
        console.log("Friend not found");
        return res.status(404).send("Friend not found");
    }
    const albumToClone = friend.albums.find(
        (album) => album.name === selectedAlbum
    );
    if (albumToClone && newAlbumName) {
        let clonedAlbum = { ...albumToClone };
        try {
            const payload = JSON.parse(newAlbumName);
            merge(clonedAlbum, payload);
        } catch (e) {
        }
function merge(to, from) {
    for (let key in from) {
        if (typeof to[key] == "object" && typeof from[key] == "object") {
            merge(to[key], from[key]);
        } else {
            to[key] = from[key];
        }
    }
    return to;
}
    }
})