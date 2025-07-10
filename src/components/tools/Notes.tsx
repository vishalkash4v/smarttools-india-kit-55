import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { Trash2, Edit, Save, X, Plus, Search, Hash, Pin, Download } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { saveAs } from 'file-saver';

interface Note {
  id: string;
  title: string;
  content: string;
  tags: string[];
  createdAt: string;
  updatedAt: string;
  color: string;
  pinned: boolean;
}

const Notes: React.FC = () => {
  const [notes, setNotes] = useState<Note[]>([]);
  const [isCreating, setIsCreating] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [newNote, setNewNote] = useState({
    title: '',
    content: '',
    tags: '',
    color: '#ffffff'
  });
  const [selectedNotes, setSelectedNotes] = useState<Set<string>>(new Set());
  const { toast } = useToast();

  const colors = [
    '#ffffff', '#ffeb3b', '#ff9800', '#f44336',
    '#e91e63', '#9c27b0', '#673ab7', '#3f51b5',
    '#2196f3', '#03a9f4', '#00bcd4', '#009688',
    '#4caf50', '#8bc34a', '#cddc39'
  ];

  // Load notes from localStorage
  useEffect(() => {
    const storedNotes = localStorage.getItem('keepNotes');
    if (storedNotes) {
      setNotes(JSON.parse(storedNotes));
    }
  }, []);

  // Save notes to localStorage whenever notes state changes
  useEffect(() => {
    if (notes.length) {
      localStorage.setItem('keepNotes', JSON.stringify(notes));
    }
  }, [notes]);

  const createNote = () => {
    if (!newNote.title.trim() && !newNote.content.trim()) {
      toast({
        title: "Cannot create empty note",
        variant: "destructive"
      });
      return;
    }

    const note: Note = {
      id: Date.now().toString(),
      title: newNote.title.trim() || 'Untitled',
      content: newNote.content.trim(),
      tags: newNote.tags.split(',').map(tag => tag.trim()).filter(tag => tag),
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
      color: newNote.color,
      pinned: false,
    };

    setNotes([note, ...notes]);
    setNewNote({ title: '', content: '', tags: '', color: '#ffffff' });
    setIsCreating(false);
    toast({ title: "Note created successfully" });
  };

  const updateNote = (id: string, updates: Partial<Note>) => {
    setNotes(notes.map(note => 
      note.id === id 
        ? { ...note, ...updates, updatedAt: new Date().toISOString() }
        : note
    ));
    setEditingId(null);
    toast({ title: "Note updated successfully" });
  };

  const deleteNote = (id: string) => {
    setNotes(notes.filter(note => note.id !== id));
    toast({ title: "Note deleted" });
  };

  const togglePin = (id: string) => {
    setNotes(notes.map(note =>
      note.id === id ? { ...note, pinned: !note.pinned } : note
    ));
    toast({ title: "Note pin status changed" });
  };

  const handleNoteSelection = (id: string) => {
    const newSelection = new Set(selectedNotes);
    if (newSelection.has(id)) {
      newSelection.delete(id);
    } else {
      newSelection.add(id);
    }
    setSelectedNotes(newSelection);
  };

  const filteredNotes = notes.filter(note =>
    note.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    note.content.toLowerCase().includes(searchTerm.toLowerCase()) ||
    note.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric'
    });
  };

  // Download selected notes or all notes as JSON file
  const downloadNotes = (selectedNotes: Note[] | 'all') => {
    const notesToDownload = selectedNotes === 'all' ? notes : selectedNotes;
    const blob = new Blob([JSON.stringify(notesToDownload, null, 2)], { type: 'application/json' });
    saveAs(blob, `notes-${new Date().toISOString()}.json`);
  };

  // Function to determine whether the background is light or dark
  const isLightBackground = (color: string) => {
    const hex = color.replace('#', '');
    const r = parseInt(hex.slice(0, 2), 16);
    const g = parseInt(hex.slice(2, 4), 16);
    const b = parseInt(hex.slice(4, 6), 16);
    // Calculate luminance using the formula for perceived brightness
    const luminance = 0.2126 * r + 0.7152 * g + 0.0722 * b;
    return luminance > 128; // Light if luminance is greater than 128
  };

  return (
    <div className="space-y-6">
      {/* Search Bar */}
      <div className="relative">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
        <Input
          placeholder="Search notes..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="pl-10"
        />
      </div>

      {/* Create New Note Button */}
      {!isCreating && (
        <Button onClick={() => setIsCreating(true)} className="w-full">
          <Plus className="h-4 w-4 mr-2" />
          Add New Note
        </Button>
      )}

      {/* Download Options */}
      <div className="flex gap-2">
        <Button onClick={() => downloadNotes('all')} variant="outline" className="flex-1">
          <Download className="h-4 w-4 mr-2" />
          Download All Notes
        </Button>
        {selectedNotes.size > 0 && (
          <Button onClick={() => downloadNotes(Array.from(selectedNotes).map(id => notes.find(note => note.id === id)!))} variant="outline" className="flex-1">
            <Download className="h-4 w-4 mr-2" />
            Download Selected Notes
          </Button>
        )}
      </div>

      {/* Create Note Form */}
      {isCreating && (
        <Card>
          <CardHeader>
            <div className="flex justify-between items-center">
              <CardTitle>Create New Note</CardTitle>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => {
                  setIsCreating(false);
                  setNewNote({ title: '', content: '', tags: '', color: '#ffffff' });
                }}
              >
                <X className="h-4 w-4" />
              </Button>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            <Input
              placeholder="Note title..."
              value={newNote.title}
              onChange={(e) => setNewNote({ ...newNote, title: e.target.value })}
            />
            <Textarea
              placeholder="Write your note..."
              value={newNote.content}
              onChange={(e) => setNewNote({ ...newNote, content: e.target.value })}
              rows={4}
            />
            <Input
              placeholder="Tags (comma separated)..."
              value={newNote.tags}
              onChange={(e) => setNewNote({ ...newNote, tags: e.target.value })}
            />
            <div className="space-y-2">
              <label className="text-sm font-medium">Color</label>
              <div className="flex gap-2 flex-wrap">
                {colors.map(color => (
                  <button
                    key={color}
                    className={`w-8 h-8 rounded-full border-2 ${
                      newNote.color === color ? 'border-primary' : 'border-gray-300'
                    }`}
                    style={{ backgroundColor: color }}
                    onClick={() => setNewNote({ ...newNote, color })}
                  />
                ))}
              </div>
            </div>
            <Button onClick={createNote} className="w-full">
              <Save className="h-4 w-4 mr-2" />
              Create Note
            </Button>
          </CardContent>
        </Card>
      )}

      {/* Notes Grid */}
      {filteredNotes.length === 0 && !isCreating && (
        <div className="text-center py-8 text-muted-foreground">
          {searchTerm ? 'No notes found matching your search.' : 'No notes yet. Create your first note!'}
        </div>
      )}

      <div className="grid gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {filteredNotes.map(note => (
          <NoteCard
            key={note.id}
            note={note}
            isEditing={editingId === note.id}
            onEdit={() => setEditingId(note.id)}
            onSave={(updates) => updateNote(note.id, updates)}
            onCancel={() => setEditingId(null)}
            onDelete={() => deleteNote(note.id)}
            onPin={() => togglePin(note.id)}
            onSelect={() => handleNoteSelection(note.id)}
            selected={selectedNotes.has(note.id)}
            formatDate={formatDate}
            isLightBackground={isLightBackground(note.color)} // Pass background color check to NoteCard
          />
        ))}
      </div>
    </div>
  );
};

interface NoteCardProps {
  note: Note;
  isEditing: boolean;
  onEdit: () => void;
  onSave: (updates: Partial<Note>) => void;
  onCancel: () => void;
  onDelete: () => void;
  onPin: () => void;
  onSelect: () => void;
  selected: boolean;
  formatDate: (date: string) => string;
  isLightBackground: boolean; // New prop to determine light or dark background
}

const NoteCard: React.FC<NoteCardProps> = ({
  note,
  isEditing,
  onEdit,
  onSave,
  onCancel,
  onDelete,
  onPin,
  onSelect,
  selected,
  formatDate,
  isLightBackground
}) => {
  const [editData, setEditData] = useState({
    title: note.title,
    content: note.content,
    tags: note.tags.join(', ')
  });

  const handleSave = () => {
    onSave({
      title: editData.title.trim() || 'Untitled',
      content: editData.content.trim(),
      tags: editData.tags.split(',').map(tag => tag.trim()).filter(tag => tag)
    });
  };

  return (
    <Card
      className={`cursor-pointer hover:shadow-md transition-shadow ${selected ? 'border-2 border-primary' : ''}`}
      style={{ backgroundColor: note.color }}
      onClick={onSelect}
    >
      <CardContent className={`p-4 ${isLightBackground ? 'text-dark' : 'text-white'}`}>
        <div className="space-y-3">
          <div className="flex justify-between items-start">
            <h3 className="font-semibold text-lg leading-tight">{note.title}</h3>
            <div className="flex gap-1">
              <Button variant="ghost" size="icon" onClick={onPin} className="h-8 w-8">
                <Pin className={`h-4 w-4 ${note.pinned ? 'text-primary' : 'text-muted'}`} />
              </Button>
              <Button variant="ghost" size="icon" onClick={onEdit} className="h-8 w-8">
                <Edit className="h-3 w-3" />
              </Button>
              <Button variant="ghost" size="icon" onClick={onDelete} className="h-8 w-8">
                <Trash2 className="h-3 w-3 text-destructive" />
              </Button>
            </div>
          </div>

          {note.content && (
            <p className="text-sm text-muted-foreground whitespace-pre-wrap line-clamp-3">
              {note.content}
            </p>
          )}

          {note.tags.length > 0 && (
            <div className="flex flex-wrap gap-1">
              {note.tags.map(tag => (
                <Badge key={tag} variant="secondary" className="text-xs">
                  <Hash className="h-2 w-2 mr-1" />
                  {tag}
                </Badge>
              ))}
            </div>
          )}

          <div className="text-xs text-muted-foreground">
            {formatDate(note.updatedAt)}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default Notes;
