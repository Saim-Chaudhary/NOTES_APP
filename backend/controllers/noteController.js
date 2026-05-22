const Note = require('../models/Note');

const getNotes = async (req, res) => {
  try {
    const notes = await Note.find().sort({ createdAt: -1 });
    res.json(notes);
  } catch (error) {
    res.status(500).json({ message: 'Failed to fetch notes' });
  }
};

const createNote = async (req, res) => {
  try {
    const { text } = req.body;

    if (!text || !text.trim()) {
      return res.status(400).json({ message: 'Text is required' });
    }

    const note = await Note.create({ text: text.trim() });
    res.status(201).json(note);
  } catch (error) {
    res.status(500).json({ message: 'Failed to create note' });
  }
};

const deleteNote = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedNote = await Note.findByIdAndDelete(id);

    if (!deletedNote) {
      return res.status(404).json({ message: 'Note not found' });
    }

    res.json(deletedNote);
  } catch (error) {
    res.status(500).json({ message: 'Failed to delete note' });
  }
};

module.exports = {
  getNotes,
  createNote,
  deleteNote,
};
