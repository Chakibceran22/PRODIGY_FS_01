import User from '../models/user.js'
export const createUser = async (req, res) => {
  try {
    const { firstname, lastname, email, password } = req.body;
    if(!firstname || !lastname || !email || !password){
      return res.status(400).json({message: "All fields are required"})
    }

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }
    const newUser = new User({
      firstname: firstname,
      lastname: lastname,
      email: email,
      password: password,
    });

    await newUser.save();
    return res.status(201).json({ message: "User created successfully" });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
