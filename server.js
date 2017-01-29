const express = require('express');
const app = express();
const options = {
	root: __dirname,
	dotfiles: 'deny'
}


app.get('/', (req, res) => {
	res.sendFile('index.html', options);
});

app.get('/resource/:file', (req, res) => {
	//res.sendFile(req.params.file, options); // This is basically sending back whatever the user is requesting

	const file = req.params.file;
	if(file.indexOf('.json') !== -1) {
		res.status(403).send("You can't access this file!");
	}
	res.sendFile(file, options);
});

// This other thing will not be executed
// Since the server is going to go with the first one
app.get('/:otherThing', (req, res) => {
    const subpage = req.params.otherThing;
    
	res.send("This is the other thing");
});
app.listen(3000, () => {
    console.log("Listening on port 3000.");
});
