// Carrega as notas salvas ao carregar a página
document.addEventListener('DOMContentLoaded', loadNotes);

// Função para salvar a nota
function saveNote() {
    const noteArea = document.getElementById('noteArea');
    if (noteArea.value.trim() !== '') {
        let notes = getNotesFromStorage();
        notes.push(noteArea.value);
        localStorage.setItem('notes', JSON.stringify(notes));
        addNoteToDOM(noteArea.value);
        noteArea.value = '';
    }
}

// Função para limpar a nota
function clearNote() {
    document.getElementById('noteArea').value = '';
}

// Função para carregar as notas do LocalStorage e adicioná-las ao DOM
function loadNotes() {
    let notes = getNotesFromStorage();
    notes.forEach(note => addNoteToDOM(note));
}

// Função para obter notas do LocalStorage
function getNotesFromStorage() {
    let notes = localStorage.getItem('notes');
    return notes ? JSON.parse(notes) : [];
}

// Função para adicionar uma nota ao DOM
function addNoteToDOM(noteText) {
    const savedNotes = document.getElementById('savedNotes');

    const note = document.createElement('div');
    note.className = 'note';

    const noteContent = document.createElement('span');
    noteContent.textContent = noteText;

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Excluir';
    deleteButton.className = 'delete-button';
    deleteButton.onclick = () => deleteNote(noteText, note);

    note.appendChild(noteContent);
    note.appendChild(deleteButton);

    savedNotes.appendChild(note);
}

// Função para deletar uma nota
function deleteNote(noteText, noteElement) {
    let notes = getNotesFromStorage();
    notes = notes.filter(note => note !== noteText);
    localStorage.setItem('notes', JSON.stringify(notes));
    noteElement.remove();
}
