import React, { useState } from 'react';
import { motion } from 'framer-motion';
import ToggleButton from '../componenets/ToggleButton';
import Header from '../componenets/Header';
import EmailInput from '../componenets/EmailInput';
import PasswordInput from '../componenets/PasswordInput';
import RememberMe from '../componenets/RememberMe';
import LoginButton from '../componenets/LoginButton';
import SignUpLink from '../componenets/SignUpLink';

const LoginPage = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    rememberMe: false
  });
  const [formErrors, setFormErrors] = useState({});

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value
    });

    // Clear error when user starts typing
    if (formErrors[name]) {
      setFormErrors({
        ...formErrors,
        [name]: ''
      });
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

  const validateForm = () => {
    const errors = {};
    
    if (!formData.email) {
      errors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = 'Email is invalid';
    }
    
    if (!formData.password) {
      errors.password = 'Password is required';
    } else if (formData.password.length < 6) {
      errors.password = 'Password must be at least 6 characters';
    }
    
    return errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const errors = validateForm();
    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }
    
    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      // Here you would typically redirect to dashboard or home
      console.log('Login successful', formData);
    }, 2000);
  };

  return (
    <div className={`min-h-screen flex items-center justify-center px-4 py-12 transition-colors duration-300 ${
      darkMode 
        ? "bg-gradient-to-br from-gray-900 to-indigo-950" 
        : "bg-gradient-to-br from-indigo-50 to-blue-100"
    }`}>
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className={`max-w-md w-full rounded-2xl shadow-xl overflow-hidden transition-colors duration-300 ${
          darkMode 
            ? "bg-gray-800 border border-gray-700" 
            : "bg-white"
        }`}
      >
        <ToggleButton toggleTheme={toggleTheme} darkMode={darkMode} />
        
        <div className="px-6 pt-4 pb-12 md:px-10 md:pb-16">
          <Header darkMode={darkMode} />
          
          {/* Form */}
          <form onSubmit={handleSubmit}>
            <div className="space-y-6">
             <EmailInput darkMode={darkMode} formData={formData} formErrors={formErrors} handleChange={handleChange} />
              
              <PasswordInput darkMode={darkMode} formData={formData} formErrors={formErrors} showPassword={showPassword} togglePasswordVisibility={togglePasswordVisibility} handleChange={handleChange} />
              
              {/* Remember Me */}
              <RememberMe   darkMode={darkMode} formData={formData} handleChange={handleChange} />
              
              {/* Login Button */}
              <LoginButton darkMode={darkMode} isLoading={isLoading}/>
            </div>
          </form>
          
          {/* Sign Up Link */}
          <SignUpLink darkMode={darkMode}/>
        </div>
      </motion.div>
    </div>
  );
};

export default LoginPage;