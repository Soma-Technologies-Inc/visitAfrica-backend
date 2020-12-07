import chai from 'chai';
import chaiHttp from 'chai-http';
import app from '../../server';

chai.should();
chai.use(chaiHttp);

describe('/GET Login with facebook and google', () => {
	it('Should register a user using google', (done) => {
		chai.request(app)
			.get('/api/auth/google')
			.end((err, res) => {
				res.status.should.be.equal(200);
				done();
			});
	});

	it('Should register a user using facebook', (done) => {
		chai.request(app)
			.get('/api/auth/facebook')
			.end((err, res) => {
				res.status.should.be.equal(500);
				done();
			});
	});

	it('Should redirect a user to google login', (done) => {
		chai.request(app)
			.get('/api/auth/google/redirect')
			.end((err, res) => {
				res.status.should.be.equal(200);
				done();
			});
	});

	it('Should redirect a user to facebook login', (done) => {
		chai.request(app)
			.get('/api/auth/facebook/redirect')
			.end((err, res) => {
				res.status.should.be.equal(200);
				done();
			});
	});
});
