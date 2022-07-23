import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const UserSchema = new Schema(
  {
    name: String,
    isOnline: Boolean,
  },
  {
    timestamps: true,
  }
);

export const UsersModel = mongoose.model("User", UserSchema);
