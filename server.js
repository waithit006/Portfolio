const express = require('express');
const path = require('path')

const app = express();

app.use(express.json({ extended: false }))


app.use('/api/users', require('./routes/api/users'));
app.use('/api/auth', require('./routes/api/auth'));

// Server static assets in production

if (process.env.NODE_ENV === 'production') {
    //  Set static folder

    app.use(express.static('client/build'));

    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
    })
}

const PORT = process.env.PORT || 5000;



app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
