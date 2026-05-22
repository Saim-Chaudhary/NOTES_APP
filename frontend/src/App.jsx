import { useEffect, useState } from 'react'
import axios from 'axios'
import './App.css'

const App = () => {
  const [notes, setNotes] = useState([])
  const [text, setText] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const API_URL = 'http://localhost:5000/api/notes'

  const fetchNotes = async () => {
    try {
      setLoading(true)
      setError('')
      const response = await axios.get(API_URL)
      setNotes(response.data)
    } catch (err) {
      setError('Failed to load notes')
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchNotes()
  }, [])

  const handleSubmit = async (event) => {
    event.preventDefault()

    if (!text.trim()) {
      return
    }

    try {
      setError('')
      await axios.post(API_URL, { text: text.trim() })
      setText('')
      fetchNotes()
    } catch (err) {
      setError('Failed to add note')
    }
  }

  const handleDelete = async (id) => {
    try {
      setError('')
      await axios.delete(`${API_URL}/${id}`)
      fetchNotes()
    } catch (err) {
      setError('Failed to delete note')
    }
  }

  return (
    <div className="app">
      <h1 className="app__title">Notes</h1>

      <form className="note-form" onSubmit={handleSubmit}>
        <input
          className="note-form__input"
          type="text"
          placeholder="Write a note"
          value={text}
          onChange={(event) => setText(event.target.value)}
        />
        <button className="note-form__button" type="submit">Add</button>
      </form>

      {loading && <p className="status">Loading notes...</p>}
      {error && <p className="status status--error">{error}</p>}

      {!loading && notes.length === 0 && (
        <p className="status">No notes yet.</p>
      )}

      <ul className="note-list">
        {notes.map((note) => (
          <li key={note._id} className="note-item">
            <span className="note-item__text">{note.text}</span>
            <button
              className="note-item__delete"
              type="button"
              onClick={() => handleDelete(note._id)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default App