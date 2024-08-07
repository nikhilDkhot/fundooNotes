import express, { IRouter } from 'express';
import notesController from '../controllers/notes.controller';
import { noteAuth, userAuth } from '../middlewares/auth.middleware';
import NoteValidator from '../validators/notes.validator';

class NoteRoutes {
    private NotesController = new notesController();
  private router = express.Router();
  private noteValidator = new NoteValidator();

  constructor() {
    this.routes();
  }

  private routes = () => { 
    
    this.router.post('/update/:id',  noteAuth, this.NotesController.updateNote);
    
    this.router.post('/create', noteAuth, this.NotesController.createNote);

    this.router.get('/allNotes',noteAuth, this.NotesController.getAllNotes);

    this.router.get('/getNote/:id',noteAuth, this.NotesController.getNote);

    this.router.post('/archive/:id', noteAuth, this.NotesController.archiveNote);

    this.router.post('/trash/:id', noteAuth, this.NotesController.trashNote);

    this.router.delete('/delete/:id', noteAuth, this.NotesController.deleteNote);

  };

  public getRoutes = (): IRouter => {
    return this.router;
  };
}

export default NoteRoutes;

