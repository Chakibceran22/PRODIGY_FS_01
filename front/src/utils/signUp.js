import axios from 'axios';

export async function signUp(firstname, lastname, email, password) {
    try {
        const response = await axios.post('http://localhost:3000/signup', {
            firstname,
            lastname,
            email,
            password
        });
        return response.data; 
    } catch (error) {
        console.error("Signup error:", error.response?.data || error.message);
        return { error: error.response?.data || "Something went wrong" };
    }
}
