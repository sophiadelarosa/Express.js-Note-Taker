const path= require('path');
const router= require('express').Router();
const fs = require('fs')

//function to retrieve notes from database
function getNotes()
{
 const rawData = fs.readFileSync(path.join(__dirname,"../db/db.json"), 'utf-8');
 const parsedData = JSON.parse(rawData).notes;
 console.log('parsedData', parsedData);
 return parsedData
}

//function to add new note to notes
function addNotes(newNote)
{
    //reading the rawData from the database
    const rawData = fs.readFileSync(path.join(__dirname,"../db/db.json"), 'utf-8');
    const parsedData = JSON.parse(rawData).notes;
    console.log('parsedData', parsedData)

    //adding an id to new note
    const {title, text} = newNote;
    const rawNoteData ={title, text, id: (Math.random()*1000).toString()};
    console.log("rawNoteData", rawNoteData)

    //adding rawNoteData to the end of parsedData
    const notes = [...parsedData, rawNoteData];
    console.log("notes", notes)

    //writing stringified new note data to the database file
    return fs.writeFileSync(path.join(__dirname, "../db/db.json"), 
    JSON.stringify({notes}, null, 2))
}

//gets notes, but awaits getNote function
router.get("/notes", async (req, res)=>
{
    const data= await getNotes()
    res.json(data)
})

//posts notes
router.post("/notes", (req, res)=>
{
    res.json(addNotes(req.body))
})

//export router
module.exports= router