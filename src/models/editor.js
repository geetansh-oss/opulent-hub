import { Schema, model, models } from "mongoose";

const editorSchema = new Schema({
  email: {
    type: String,
    unique: [true, 'Email already exist!'],
    required: [true, 'Email is required'],
  },
  username: {
    type: String,
    match: [/^(?=.{8,20}$)(?![_.])(?!.*[_.]{2})[a-zA-Z0-9._]+(?<![_.])$/, "Username invalid, it should contain 8-20 alphanumeric letters and be unique!"]
  },
  image: {
    type: String,
  }
});

const Editor = models.Editor || model("Editor", editorSchema);

export default Editor;