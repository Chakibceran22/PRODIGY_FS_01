import bcrypt from "bcryptjs";

export async function hashPasswordBeforeSave(next) {
    if (!this.isModified("password")) return next(); 

    const salt = await bcrypt.genSalt(10); 
    this.password = await bcrypt.hash(this.password, salt); 
    next();
}