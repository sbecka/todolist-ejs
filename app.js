const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.set('view engine', 'ejs');

// app.use(bodyParser);
app.get('/', (req, res) => {
    
    let today = new Date();
    let currentDay = today.getDay();
    let day = '';

    if (currentDay === 6 || currentDay === 0) {
        day = 'Weekend';

        // res.send(`<h1>Yay it's the weekend!</h1>`);
    } else {
        day = 'Weekday';

        // res.write(`<h1>Boo! I have to work.</h1>`);
        // res.write(`<p>It's not the weekend.</p>`);
        // res.send(); // sends all write()'s
        // res.sendFile(__dirname + '/index.html'); or use html file
    }
    
    res.render('list', {kindOfDay: day});
});

app.listen(3000, () => console.log('Server listening on port 3000'));