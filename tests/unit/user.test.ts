/* import { expect } from 'chai';
import UserService from '../../src/services/user.service';

describe('User', () => {
  describe('Get Users', () => {
    it('should return empty array', async () => {
      const result = await new UserService().getAllUsers();
      expect(result).to.be.an('array');
    });
  });
}); */
import chai from 'chai';
import UserService from '../../src/services/user.service';
import NoteService from '../../src/services/notes.service';

const expect = chai.expect;


const userObj = {
  "firstName": "abc7",
  "lastName": "xyz7",
  "email": "abc7@gmail.com",
  "mobile": 8997896623,
  "password": "nic77",
  "gender": "male",
  "dob": "1998-08-31"
}

const updateUserObj = {
  "firstName": "abc9",
  "lastName": "xyz9",
  "email": "abc9@gmail.com",
  "password": "nic99"

};

const noteObj = {
  "title": "never finish",
  "description": "in the silence",
  "color": "white",
  "archive": "false",
  "trash": "false",
  "createdBy": 9 
  
}

const updateNoteObj = {
  "description": "JS jai bhavani jai shivaji",
  "color": "white"
};

const updateSuperUserPass = {
  "password": "nic77"
}



describe("Fundoo Notes app testing", () => {

  describe("User", () => {

    /* it("register a user", async () => {
       const data = await new UserService().register(userObj);
       expect(data).to.be.an('object');
     })*/

    /*it("login user", async () => {
      const data = await new UserService().login(userObj.email , userObj.password );
      console.log(data)
      expect(data).to.be.a('object');
    })*/

    /*   it("Update user", async () => {
        const data = await new UserService().updateUser(9, updateUserObj);
        console.log(data)
        expect(data).to.be.an('object');
    }) */


    /*   it("Get user", async () => {
        const data = await new UserService().getUser(9);
        console.log(data)
        expect(data).to.be.an('object');
    }) */

     
   /*   let token = '';
    it("Forget user", async () => {
            const data = await new UserService().forgetUser({"email": "abc6@gmail.com"});
            token = data;
            console.log(data);
            expect(data).to.be.an('string');
        }) 

       it("Reset user", async () => {
            const data = await new UserService().reset(6, updateSuperUserPass.password);
            console.log(data);
            expect(data).to.be.an('array');
        }) */ 

    //corret reset 


  });

  describe("Notes", () => {
/* 
    it("create notes" ,async () => {
      const data = await new NoteService().createNotes({
        "title": "never finish3",
        "description": "in the silence3",
        "color": "white",
        "archive": "false",
        "trash": "false"  
      } , 9);
      console.log(data);
      
      expect(data).to.be.an('object');
    }) */

   /*  it("Fetch All Notes", async () => {
      const data = await new NoteService().getAllNotes(6);
      console.log(data);
      
      expect(data).to.be.an('array');
  }) */

 /*  it("Fetch Specific Note", async () => {
    const data = await new NoteService().getNotes(7);
    console.log(data);
    expect(data).to.be.an('object');
}) */

/* it("Update a Specific Note", async () => {
  const data = await new NoteService().updateNotes(2,updateNoteObj);
  expect(data).to.be.an('object');
}) */

/* it("Archive Note", async () => {
  const data = await new NoteService().archiveNote(1);
  expect(data).to.be.an('string');
}) */

/* it("Trash Note", async () => {
  const data = await new NoteService().trashNote(1);
  expect(data).to.be.an('string');
}) */

/*it("Delete Note", async () => {
  const data = await new NoteService().deleteNote(10); //10 is delete donot use it again
  expect(data).to.be.an('string');
})*/

  })

})