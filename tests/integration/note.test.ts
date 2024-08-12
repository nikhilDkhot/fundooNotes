import { expect } from 'chai';
import request from 'supertest';
import app from '../../src/index';

import { noteObj, updateNoteObj, superUser, superUserLogin } from './user_note';

let token = '';

describe('Note APIs Test', () => {
    
    before((done) => {

    request(app.getApp())
    .post('/api/v1/users/login')
    .send({ email: superUserLogin.email, password: superUserLogin.password })
    .end((err, res) => {
        if (err) return done(err);
        console.log(res.body);
        token = 'Bearer ' + res.body.token; // Set the token
        console.log(token);
        expect(res.statusCode).to.be.equal(200);
        done(); // Call done() after both requests are completed
    });

});

/* describe('/create note 00', () => {
    it('Create a Note', (done) => {

        request(app.getApp())
            .post('/api/v1/notes/create')
            .set('Authorization', token)
            .send(noteObj)
            .end((err, res) => {
                console.log(token, res.body);
                expect(res.statusCode).to.be.equal(200);
                done();
            });
    });
}); */

/* describe('/:id Post', () => {
    it('Update a Note', (done) => {
        request(app.getApp())
            .post('/api/v1/notes/update/19')  // id of note
            .set('Authorization', token)
            .send(updateNoteObj)
            .end((err, res) => {
                console.log(res.body);
                expect(res.statusCode).to.be.equal(200);
                done();
            });
    });
}); */

/* describe('/ GET', () => {
    it('Should Get All Notes', (done) => {
        request(app.getApp())
            .get('/api/v1/notes/allNotes')
            .set('Authorization', token)
            .end((err, res) => {
                console.log(res.body);
                expect(res.statusCode).to.be.equal(200);
                done();
            });
    });
}); */

/* describe('/:id GET', () => {
    it('Should Fetch a Single Note', (done) => {
        request(app.getApp())
            .get('/api/v1/notes/getNote/19')
            .set('Authorization', token)
            .end((err, res) => {
                console.log(res.body);
                expect(res.statusCode).to.be.equal(200);
                done();
            });
    });
}); */

/* describe('/archive/:id POST', () => {
    it('Should Archive a Single Note', (done) => {
        request(app.getApp())
            .post('/api/v1/notes/archive/19')
            .set('Authorization', token)
            .end((err, res) => {
                console.log(res.body);
                expect(res.statusCode).to.be.equal(200);
                done();
            });
    });
}); */

/* describe('/trash/:id POST', () => {
    it('Should Trash a Single Note', (done) => {
        request(app.getApp())
            .post('/api/v1/notes/trash/19')
            .set('Authorization', token)
            .end((err, res) => {
                console.log(res.body);
                expect(res.statusCode).to.be.equal(200);
                done();
            });
    });
}); */

/* describe('/delete/:id POST', () => {
    it('Should Delete a Single Note', (done) => {
        request(app.getApp())
            .post('/api/v1/notes/delete/19')
            .set('Authorization', token)
            .end((err, res) => {
                console.log(res.body);
                expect(res.statusCode).to.be.equal(200);
                done();
            });
    });
}); */

});