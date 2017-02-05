var passportLocalMongoose = require('passport-local-mongoose'),
	mongoose     		  = require('mongoose');


 
var UserSchema = new mongoose.Schema({
	name:String,
	username:String,
	email:String,
	password:String,
	favorites:[]


});
UserSchema.plugin(passportLocalMongoose);
 
module.exports = mongoose.model('User',UserSchema);
