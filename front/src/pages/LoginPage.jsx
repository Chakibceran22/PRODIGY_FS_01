import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Eye, EyeOff, Mail, KeyRound, Sun, Moon } from 'lucide-react';
import ToggleButton from '../componenets/ToggleButton';
import Header from '../componenets/Header';

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
              {/* Email Field */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <div className="flex items-center justify-between">
                  <label 
                    htmlFor="email" 
                    className={`block text-sm font-medium mb-1 transition-colors ${
                      darkMode ? "text-gray-300" : "text-gray-700"
                    }`}
                  >
                    Email
                  </label>
                </div>
                <div className="relative">
                  <input
                    id="email"
                    name="email"
                    type="text"
                    autoComplete="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-colors pr-10 ${
                      formErrors.email 
                        ? "border-red-500" 
                        : darkMode ? "border-gray-600" : "border-gray-300"
                    } ${
                      darkMode 
                        ? "bg-gray-700 text-white" 
                        : "bg-white text-gray-900"
                    }`}
                    placeholder="Enter Your Email"
                  />
                  <div
                    className={`absolute inset-y-0 right-0 pr-3 flex items-center transition-colors ${
                      darkMode 
                        ? "text-gray-400 hover:text-gray-200" 
                        : "text-gray-600 hover:text-gray-800"
                    }`}
                  >
                    <Mail size={20} />
                  </div>
                </div>
                
                {formErrors.email && (
                  <p className="mt-1 text-sm text-red-600">{formErrors.email}</p>
                )}
              </motion.div>
              
              {/* Password Field */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <div className="flex items-center justify-between">
                  <label 
                    htmlFor="password" 
                    className={`block text-sm font-medium mb-1 transition-colors ${
                      darkMode ? "text-gray-300" : "text-gray-700"
                    }`}
                  >
                    Password
                  </label>
                  <a 
                    href="#" 
                    className={`text-sm transition-colors ${
                      darkMode 
                        ? "text-indigo-400 hover:text-indigo-300" 
                        : "text-indigo-600 hover:text-indigo-500"
                    }`}
                  >
                    Forgot password?
                  </a>
                </div>
                <div className="relative">
                  <input
                    id="password"
                    name="password"
                    type={showPassword ? "text" : "password"}
                    autoComplete="current-password"
                    value={formData.password}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-colors pr-10 ${
                      formErrors.password 
                        ? "border-red-500" 
                        : darkMode ? "border-gray-600" : "border-gray-300"
                    } ${
                      darkMode 
                        ? "bg-gray-700 text-white" 
                        : "bg-white text-gray-900"
                    }`}
                    placeholder="••••••••"
                  />
                  <button
                    type="button"
                    className={`absolute inset-y-0 right-0 pr-3 flex items-center transition-colors ${
                      darkMode 
                        ? "text-gray-400 hover:text-gray-200" 
                        : "text-gray-600 hover:text-gray-800"
                    }`}
                    onClick={togglePasswordVisibility}
                    tabIndex="-1"
                  >
                    {showPassword ? (
                      <EyeOff size={20} />
                    ) : (
                      <Eye size={20} />
                    )}
                  </button>
                </div>
                {formErrors.password && (
                  <p className="mt-1 text-sm text-red-600">{formErrors.password}</p>
                )}
              </motion.div>
              
              {/* Remember Me */}
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="flex items-center"
              >
                <input
                  id="remember-me"
                  name="rememberMe"
                  type="checkbox"
                  checked={formData.rememberMe}
                  onChange={handleChange}
                  className={`h-4 w-4 text-indigo-600 focus:ring-indigo-500 rounded ${
                    darkMode 
                      ? "border-gray-700 bg-gray-700" 
                      : "border-gray-300"
                  }`}
                />
                <label 
                  htmlFor="remember-me" 
                  className={`ml-2 block text-sm transition-colors ${
                    darkMode ? "text-gray-300" : "text-gray-700"
                  }`}
                >
                  Remember me
                </label>
              </motion.div>
              
              {/* Login Button */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="pt-2"
              >
                <button
                  type="submit"
                  disabled={isLoading}
                  className={`w-full bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-3 px-4 rounded-lg shadow-md transition-colors focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 relative overflow-hidden ${
                    darkMode ? "focus:ring-offset-gray-800" : ""
                  }`}
                >
                  {isLoading ? (
                    <div className="flex items-center justify-center">
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Signing in...
                    </div>
                  ) : (
                    "Sign in"
                  )}
                </button>
              </motion.div>
            </div>
          </form>
          
          {/* Sign Up Link */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="mt-8 text-center"
          >
            <p className={`text-sm transition-colors ${
              darkMode ? "text-gray-400" : "text-gray-600"
            }`}>
              Don't have an account?{' '}
              <a 
                href="#" 
                className={`font-medium transition-colors ${
                  darkMode 
                    ? "text-indigo-400 hover:text-indigo-300" 
                    : "text-indigo-600 hover:text-indigo-500"
                }`}
              >
                Sign up
              </a>
            </p>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default LoginPage;