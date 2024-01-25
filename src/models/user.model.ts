import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    name: {
        type: String
    },
    email: {
        type: String,
        unique: true
    },
    mobile: {
        type: String,
        unique: true
    }
}, {
    timestamps: true
});

export default mongoose.model("User", userSchema);
