import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { UserPlus, Loader2, Mail, Lock, CheckCircle, Info, Github, Facebook, Eye, EyeOff, Moon, Sun } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import ToggleButton from '../componenets/ToggleButton';
import SignUpHeader from '../componenets/signeupComponenets/SignUpHeader';
import NameFields from '../componenets/signeupComponenets/NameFileds';
import EmailInput from '../componenets/EmailInput';
import PasswordInputSignUp from '../componenets/signeupComponenets/PasswordInput';
import ConfirmPassword from '../componenets/signeupComponenets/ConfimPassword';
import TermsOfCondition from '../componenets/signeupComponenets/TermsOfCondition';
const SignupPage = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
    agreeTerms: false
  });
  const [formErrors, setFormErrors] = useState({});
  const [passwordStrength, setPasswordStrength] = useState(0);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  
  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    const newValue = type === 'checkbox' ? checked : value;
    
    setFormData({
      ...formData,
      [name]: newValue
    });

    // Clear error when user starts typing
    if (formErrors[name]) {
      setFormErrors({
        ...formErrors,
        [name]: ''
      });
    }

    // Calculate password strength if password field is changed
    if (name === 'password') {
      calculatePasswordStrength(value);
    }

    // Check password confirmation match
    if (name === 'confirmPassword' || (name === 'password' && formData.confirmPassword)) {
      if (name === 'password' && value !== formData.confirmPassword) {
        setFormErrors({
          ...formErrors,
          confirmPassword: 'Passwords do not match'
        });
      } else if (name === 'confirmPassword' && value !== formData.password) {
        setFormErrors({
          ...formErrors,
          confirmPassword: 'Passwords do not match'
        });
      } else {
        setFormErrors({
          ...formErrors,
          confirmPassword: ''
        });
      }
    }
  };

  const calculatePasswordStrength = (password) => {
    let strength = 0;
    
    if (password.length >= 8) strength += 1;
    if (/[A-Z]/.test(password)) strength += 1;
    if (/[a-z]/.test(password)) strength += 1;
    if (/[0-9]/.test(password)) strength += 1;
    if (/[^A-Za-z0-9]/.test(password)) strength += 1;
    
    setPasswordStrength(strength);
  };

  const getStrengthColor = () => {
    if (passwordStrength <= 1) return 'bg-red-500';
    if (passwordStrength <= 3) return 'bg-yellow-500';
    return 'bg-green-500';
  };

  const getStrengthLabel = () => {
    if (passwordStrength <= 1) return 'Weak';
    if (passwordStrength <= 3) return 'Medium';
    return 'Strong';
  };

  const validateForm = () => {
    const errors = {};
    
    if (!formData.firstName.trim()) {
      errors.firstName = 'First name is required';
    }
    
    if (!formData.lastName.trim()) {
      errors.lastName = 'Last name is required';
    }
    
    if (!formData.email) {
      errors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = 'Email is invalid';
    }
    
    if (!formData.password) {
      errors.password = 'Password is required';
    } else if (formData.password.length < 8) {
      errors.password = 'Password must be at least 8 characters';
    } else if (passwordStrength < 3) {
      errors.password = 'Password is too weak';
    }
    
    if (!formData.confirmPassword) {
      errors.confirmPassword = 'Please confirm your password';
    } else if (formData.password !== formData.confirmPassword) {
      errors.confirmPassword = 'Passwords do not match';
    }
    
    if (!formData.agreeTerms) {
      errors.agreeTerms = 'You must agree to the terms and conditions';
    }
    
    return errors;
  };

  const goLogin = () => {
    navigate('/login');
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
      // Here you would typically redirect to dashboard or verification page
      console.log('Signup successful', formData);
    }, 2000);
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword);
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
        className={`max-w-xl w-full rounded-2xl shadow-xl overflow-hidden transition-colors duration-300 ${
          darkMode 
            ? "bg-gray-800 border border-gray-700" 
            : "bg-white"
        }`}
      >
        
        <ToggleButton toggleTheme={toggleTheme} darkMode={darkMode} />
        <div className="px-6 pt-4 pb-12 md:px-10 md:pb-16">
          {/* Header */}
          <SignUpHeader darkMode={darkMode} />
          
          {/* Form */}
          <form onSubmit={handleSubmit}>
            <div className="space-y-5">
              <NameFields darkMode={darkMode} formData={formData} formErrors={formErrors} handleChange={handleChange} />
              <EmailInput darkMode={darkMode} formData={formData} formErrors={formErrors} handleChange={handleChange} />
              
              {/* Password Field */}
             <PasswordInputSignUp darkMode={darkMode} formData={formData} formErrors={formErrors} handleChange={handleChange} togglePasswordVisibility={togglePasswordVisibility} showPassword={showPassword} passwordStrength={passwordStrength} getStrengthColor={getStrengthColor} getStrengthLabel={getStrengthLabel} />
              
              {/* Confirm Password Field */}
              <ConfirmPassword darkMode={darkMode} formData={formData} formErrors={formErrors} showConfirmPassword={showConfirmPassword} toggleConfirmPasswordVisibility={toggleConfirmPasswordVisibility} handleChange={handleChange} />
              
              {/* Terms and Conditions */}
              <TermsOfCondition darkMode={darkMode} formData={formData} formErrors={formErrors} handleChange={handleChange} />
              
              {/* Signup Button */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="pt-2"
              >
                <button
                  type="submit"
                  disabled={isLoading}
                  className={`w-full ${
                    darkMode 
                      ? "bg-indigo-600 hover:bg-indigo-700" 
                      : "bg-indigo-600 hover:bg-indigo-700"
                  } text-white font-medium py-3 px-4 rounded-lg shadow-md transition-colors focus:outline-none focus:ring-2 cursor-pointer focus:ring-indigo-500 focus:ring-offset-2 disabled:opacity-70`}
                >
                  {isLoading ? (
                    <div className="flex items-center justify-center">
                      <Loader2 className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" />
                      Creating account...
                    </div>
                  ) : (
                    "Create Account"
                  )}
                </button>
              </motion.div>
            </div>
          </form>
        
          {/* Login Link */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.7 }}
            className="mt-8 text-center"
          >
            <p className={`text-sm ${darkMode ? "text-gray-300" : "text-gray-600"}`}>
              Already have an account?{' '}
              <a onClick={goLogin} className="font-medium text-indigo-500 hover:text-indigo-400 hover:cursor-pointer">
                Sign in
              </a>
            </p>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default SignupPage;