import { expect } from 'chai';
import request from 'supertest';

import app from '../../src/index';
import { superUser, superUserLogin, updateSuperUser, updateSuperUserPass } from './user_note';

let token = '';
let forgetToken = '';
let password = ''

describe("Fundoo Notes Integration testing", () => {
  describe('User APIs Test', () => {

    /* describe('Register A User', () => {
       it('Registration Of User', (done) => {
         request(app.getApp())
           .post('/api/v1/users/register')
           .send(superUser)
           .end((err, res) => {
             console.log(res.body);
             expect(res.statusCode).to.be.equal(201);
             done();
           });
       });
     });*/

    /*  describe('Login A User', () => {
       it('Login Of User', (done) => {
         request(app.getApp())
           .post('/api/v1/users/login')
           .send({ email: superUserLogin.email, password: superUserLogin.password })
           .end((err, res) => {
             console.log(res.body);
             token = ('bearer ' + res.body.token);
             console.log(token)
             expect(res.statusCode).to.be.equal(200);
             done();
           });
       });
     });
 
     describe('User Profile Changing', () => {
       it('Change of User', (done) => {
         request(app.getApp())
           .post('/api/v1/users/changePass')
           .set('Authorization', token)
           .send(updateSuperUserPass.password)
           .end((err, res) => {
             console.log(res.body);
             expect(res.statusCode).to.be.equal(202);
             done();
           });
       });
     });
  */


   /*  describe('forget password', () => {
      it('write mail when forgot password', (done) => {
        request(app.getApp())
          .post('/api/v1/users/forget')
          .send({ "email": "abc7@gmail.com" })
          .end((err, res) => {
            console.log(res.body);
            forgetToken = ('bearer ' + res.body.data);
            console.log('.....................................', forgetToken);
            expect(res.statusCode).to.be.equal(202);
            done();
          });
      });
    });

    describe('User Profile Password Changing', () => {
      it('Password Change of User', (done) => {
        request(app.getApp())
          .post('/api/v1/users/reset')
          .set('Authorization', forgetToken)
          .send({ password: 'nic77' })
          .end((err, res) => {
            //console.log(res.body);
            password = ("pass*******************" + res.body.dataValues)
            console.log(password);

            expect(res.statusCode).to.be.equal(202);
            done();
          });
      });
    });*/

  }); 

})