const express = require('express');
const NoteModel = require('../models/NotesModel.js');
const router = express.Router();

//TODO - Create a new Note
//http://mongoosejs.com/docs/api.html#document_Document-save

// Create a new Note
router.post('/', async (req, res) => {
    // Validate request
    if(!req.body.noteTitle || !req.body.noteDescription || !req.body.priority) {
        return res.status(400).send({
            message: "Note title, description, and priority cannot be empty"
        });
    }

    // Create a new Note
    const note = new NoteModel({
        noteTitle: req.body.noteTitle,
        noteDescription: req.body.noteDescription,
        priority: req.body.priority,
        dateAdded: new Date(),
        dateUpdated: new Date()
    });

    // Save the note in the database
    try {
        const newNote = await note.save();
        return res.status(201).json({
            message: "Note Created",
            note: newNote
        });
    } catch (err) {
        return res.status(500).json({ 
            message: "Some error occured during creating note", 
            error: err.message 
        });
    }
});

//TODO - Retrieve all Notes
//http://mongoosejs.com/docs/api.html#find_find
router.get('/', (req, res) => {
    NoteModel.find()
        .then(notes => {
            res.status(200).send(notes);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while retrieving notes."
            });
        });
});

//TODO - Retrieve a single Note with noteId
//http://mongoosejs.com/docs/api.html#findbyid_findById
// Retrieve a single Note by noteId
router.get('/notes/:noteId', (req, res) => {
    NoteModel.findById(req.params.noteId)
        .then(note => {
            if (!note) {
                return res.status(404).send({
                    message: "Note not found with id " + req.params.noteId
                });
            }
            res.status(200).send(note);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Error retrieving note with id " + req.params.noteId
            });
        });
});

//TODO - Update a Note with noteId
//http://mongoosejs.com/docs/api.html#findbyidandupdate_findByIdAndUpdate
// Update a Note with noteId
router.put('/notes/:noteId', (req, res) => {
    // Validate request
    if (!req.body.noteTitle || !req.body.noteDescription || !req.body.priority) {
        return res.status(400).send({
            message: "Note title, description, and priority cannot be empty"
        });
    }

    // Find note and update it // Same as creating the notes, just using "findById"
    NoteModel.findByIdAndUpdate(req.params.noteId, {
        noteTitle: req.body.noteTitle,
        noteDescription: req.body.noteDescription,
        priority: req.body.priority,
        dateUpdated: new Date()
    }, { new: true })
    .then(note => {
        if (!note) {
            return res.status(404).send({
                message: "Note not found with id " + req.params.noteId
            });
        }
        res.status(200).send(note);
    })
    .catch(err => {
        res.status(500).send({
            message: err.message || "Error updating note with id " + req.params.noteId
        });
    });
});

//TODO - Delete a Note with noteId
//http://mongoosejs.com/docs/api.html#findbyidandremove_findByIdAndRemove
// Delete a Note with noteId
router.delete('/notes/:noteId', (req, res) => {
    NoteModel.findByIdAndDelete(req.params.noteId)
        .then(note => {
            if (!note) {
                return res.status(404).send({
                    message: "Note not found with id " + req.params.noteId
                });
            }
            res.status(200).send({ message: "Note deleted successfully!" });
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Could not delete note with id " + req.params.noteId
            });
        });
});

module.exports = router; 