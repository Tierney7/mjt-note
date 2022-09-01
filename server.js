//host
const express = require("express")

const app = express()

const PORT = 3001


app.use(express.json());
app.use(express.urlencoded({ extended: true}));
app.use(express.static('public'));

app.get('/api/notes', (req, res) => {
//controller
let notes 
//read and write to db
//access database fs.readfile()

res(notes)
})

app.post('/api/notes', (req, res) => {

})




app.listen(PORT, () => console.log ('server is running'))
//routes


