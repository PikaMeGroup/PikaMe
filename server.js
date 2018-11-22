//Ryan's part =============================================
const express = require('express');

var app = express();
var path = require('path');


app.use(express.static(path.join(__dirname, 'public')));

app.listen(8080, () => {
	console.log('Server is up on port 8080');
});

app.get('/test', (request, response) => {
	response.render('test.hbs');
});
//End of Ryan's part ======================================