import mongoose from 'mongoose'
const { Schema } = mongoose;

export const ADMIN_ROLE    = 1;
export const STANDARD_ROLE = 2;

const userSchema = new Schema({
  firstName: {
    type:String,
    required: true
  },

  lastName: {
    type:String,
    required: true
  },

  email: {
    type:String,
    required: true,
    unique: true
  },

  password: {
    type:String,
    required: true
  },

  hierarchy: {
    default:2,
    type:Number
  },
})

export default mongoose.model('User', userSchema);
