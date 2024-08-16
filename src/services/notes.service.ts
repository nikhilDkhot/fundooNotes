import sequelize, { DataTypes } from '../config/database';
import notes from '../models/notes';
import noteUtil from '../utils/note.util';



class NotesService {
    private Notes = notes(sequelize,DataTypes);
    public util = new noteUtil();

    public createNotes = async (body: any,id: number): Promise<any> => {
        try {
            
            console.log('inside note service create notes');
            body.createdBy = id;
            const sanitizedBody = Object.keys(body).reduce((result, key) => {
              if (key !== 'id') {
               result[key] = body[key];
              }
              return result;
             }, {});
             const data = await this.Notes.create(sanitizedBody);
             if (data) {
              const aba = await this.util.update(id, data);
              //console.log(aba);
              
              return data;
             } else {
              return data;
             }
            
        } catch (error) {
            //throw new Error(`Error creating notes : ${error.message}`);
            return error;
        }
    }

    public updateNotes = async (id : number , body : any) : Promise<any> =>{
       try{
       /*  console.log('update notes');
        const [rowsUpdated, [updatedNote]] = await this.Notes.update(body, {
          where: { id },
          returning: true,
        }); */
        //console.log(id);
        //console.log(body)
        const sanitizedBody = Object.keys(body).reduce((result, key) => {
          if (key !== 'id') {
           result[key] = body[key];
          }
          return result;
         }, {});
        
        const [rowsUpdated,[updatedNote]] = await this.Notes.update(sanitizedBody, {
          where: { id: id },
          returning: true,
        });
        if (rowsUpdated === 0) {
            throw new Error(`No note found with ID ${id} to update`);
          }
          return updatedNote;
       }catch(error){
        throw new Error(`Error updating note with ID ${id}: ${error.message}`);
        //return error;

       }
    }

    public deleteNote = async (id: number): Promise<string> => {
      try {
        const rowsDeleted = await this.Notes.destroy({
          where: { id },
        });
        if (rowsDeleted === 0) {
          throw new Error(`No note found with ID ${id} to delete`);
        }
        return 'Note deleted';
      } catch (error) {
        throw new Error(`Error deleting note with ID ${id}: ${error.message}`);
      }
    };

    public getAllNotes = async (id): Promise<any[]> => {
        try {
            console.log("getting all notes");
            const data = await this.Notes.findAll({ where: { createdBy: id } });
            if (data) {
              const aba = await this.util.set(id, data);
              return data;
             } else {
              return data;
             }

        } catch (error) {

            throw new Error(`error fetching all notes : ${error.message}`);
            //return error;
        }
    }
    
    public getNotes = async (id: number): Promise<any> => {
        try {
          console.log('inside note services, Getting notes');
          const data = await this.Notes.findOne({ where: { id:id } });
          return data;
        } catch (error) {
          throw new Error(`Error fetching note with ID ${id}: ${error.message}`);
        }
      }

    
  public archiveNote = async (id: number): Promise<string> => {
    try {
      console.log('archive note');
      let rowsUpdated = 0
      const note = await this.Notes.findOne({ where: { id } });
      if (!note) {
        throw new Error(`No note found with ID ${id}`);
      }
      if (note.archive === false) {
        console.log(note);
        [rowsUpdated] = await this.Notes.update({ archive: true }, {
          where: { id },
        });
      } else {
        [rowsUpdated] = await this.Notes.update({ archive: false }, {
          where: { id },
        });
      }

      if (rowsUpdated === 0) {
        throw new Error(`No note found with ID ${id} to archive`);
      }
      return 'Note archived';
    } catch (error) {
      throw new Error(`Error archiving note with ID ${id}: ${error.message}`);
    }
  }  

  public trashNote = async (id: number): Promise<string> => {
    try {
      console.log('trash note');
      let rowsUpdated = 0
      const note = await this.Notes.findOne({ where: { id } });
      if (!note) {
        throw new Error(`No note found with ID ${id}`);
      }
      if (note.trash == false) {
        [rowsUpdated] = await this.Notes.update({ trash: true }, {
          where: { id },
        });
      } else {
        [rowsUpdated] = await this.Notes.update({ trash: false }, {
          where: { id },
        });
      }

      if (rowsUpdated === 0) {
        throw new Error(`No note found with ID ${id} to trash`);
      }
      return 'Note trashed';
    } catch (error) {
      throw new Error(`Error trash note with ID ${id}: ${error.message}`);
    }
  }
}

export default NotesService;