import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import ToggleButton from '../componenets/ToggleButton';
import SignUpHeader from '../componenets/signeupComponenets/SignUpHeader';
import NameFields from '../componenets/signeupComponenets/NameFileds';
import EmailInput from '../componenets/EmailInput';
import PasswordInputSignUp from '../componenets/signeupComponenets/PasswordInput';
import ConfirmPassword from '../componenets/signeupComponenets/ConfimPassword';
import TermsOfCondition from '../componenets/signeupComponenets/TermsOfCondition';
import SignUpButton from '../componenets/signeupComponenets/SignUpButton';
import LoginLink from '../componenets/signeupComponenets/LoginLink';
import { calculatePasswordStrength } from '../utils/caclulatePasswordStrength';
import { validateForm } from '../utils/validateSignUpForm';

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
      calculatePasswordStrength(value, setPasswordStrength);
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

  
  const goLogin = () => {
    navigate('/login');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const errors = validateForm(formData);
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
              <SignUpButton darkMode={darkMode} isLoading={isLoading} />
            </div>
          </form>
        
          {/* Login Link */}
          <LoginLink darkMode={darkMode} goLogin={goLogin} />
        </div>
      </motion.div>
    </div>
  );
};

export default SignupPage;