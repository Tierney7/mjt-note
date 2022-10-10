const util = require("util")
const fs = require("fs")

const { v4: uuidv4 } = require('uuid');
// uuidv4(); // ⇨ '1b9d6bcd-bbfd-4b2d-9b5d-ab8dfbbd4bed'
const readfileasync = util.promisify(fs.readFile)
const writefileasync = util.promisify(fs.writeFile)

class Queries{
    read() {
        return readfileasync("db/db.json", "utf8")
    }
    write(note) {
        return writefileasync("db/db.json", JSON.stringify(note))
    }
    get() {
        return this.read() .then ((returnNotes) => {
            if (Array.isArray(JSON.parse(returnNotes)))
            {var parsedNotes = [].concat(JSON.parse(returnNotes))}
            else{
                var parsedNotes = []
            }
            return parsedNotes
        })
    }
    addNote(note) {
        const { title, text } = note;
    
        if (!title || !text) {
          throw new Error("Note 'title' and 'text' cannot be blank");
        }
    
        // Add a unique id to the note using uuid package
        const newNote = { title, text, id: uuidv4() };
    
        // Get all notes, add the new note, write all the updated notes, return the newNote
        return this.get()
          .then((notes) => [...notes, newNote])
          .then((updatedNotes) => this.write(updatedNotes))
          .then(() => newNote);
      }
    
}
module.exports = new Queries();