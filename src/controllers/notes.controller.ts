import HttpStatus from 'http-status-codes';
import notesService from '../services/notes.service';


import { Request, Response, NextFunction } from 'express';

class NotesController {

    public NoteService = new notesService();

    public updateNote = async (
        req: Request,
        res: Response,
        next: NextFunction
    ): Promise<any> => {
        try {
            const data = await this.NoteService.updateNotes(parseInt(req.params.id), req.body);
            res.status(HttpStatus.OK).json({
                code: HttpStatus.OK,
                data: data,
                message: 'Note Updated Successfully'
            });
        } catch (error) {
            next(error);
        }
    };

    public createNote = async (
        req: Request,
        res: Response,
        next: NextFunction
    ): Promise<any> => {
        try {
            const data = await this.NoteService.createNotes(req.body, (req as any).id);
            res.status(HttpStatus.OK).json({
                code: HttpStatus.OK,
                data: data,
                message: 'Note Created Successfully'
            });
        } catch (error) {
            next(error);
        }
    };

    public getNote = async (
        req: Request,
        res: Response,
        next: NextFunction
    ): Promise<any> => {
        try {
            const data = await this.NoteService.getNotes(parseInt(req.params.id));
            res.status(HttpStatus.OK).json({
                code: HttpStatus.OK,
                data: data,
                message: 'Note fetched successfully'
            });
        } catch (error) {
            next(error);
        }
    };

    public getAllNotes = async (
        req: Request,
        res: Response,
        next: NextFunction
    ): Promise<any> => {
        try {
            const data = await this.NoteService.getAllNotes((req as any).id);
            res.status(HttpStatus.OK).json({
                code: HttpStatus.OK,
                data: data,
                message: 'Notes fetched successfully'
            });
        } catch (error) {
            next(error);
        }
    };

    public archiveNote = async (
        req: Request,
        res: Response,
        next: NextFunction
    ): Promise<any> => {
        try {
            const data = await this.NoteService.archiveNote(parseInt(req.params.id));
            res.status(HttpStatus.OK).json({
                code: HttpStatus.OK,
                data: data,
                message: 'Note Archive successfully'
            });
        } catch (error) {
            next(error);
        }
    };

    public trashNote = async (
        req: Request,
        res: Response,
        next: NextFunction
    ): Promise<any> => {
        try {
            const data = await this.NoteService.trashNote(parseInt(req.params.id));
            res.status(HttpStatus.OK).json({
                code: HttpStatus.OK,
                data: data,
                message: 'Note Trashed successfully'
            });
        } catch (error) {
            next(error);
        }
    };

    public deleteNote = async (
        req: Request,
        res: Response,
        next: NextFunction
    ): Promise<any> => {
        try {
            const data = await this.NoteService.deleteNote(parseInt(req.params.id));
            res.status(HttpStatus.OK).json({
                code: HttpStatus.OK,
                data: data,
                message: 'Note Deleted successfully'
            });
        } catch (error) {
            next(error);
        }
    };


}

export default NotesController;