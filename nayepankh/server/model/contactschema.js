import mongoose from "mongoose";

const contactschema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  
  message: {
    type: String,
    required: true,
  },
});

const contact = mongoose.model("messagesdatas", contactschema);
export default contact;
