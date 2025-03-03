import { motion } from "framer-motion";
import { Eye, EyeOff } from "lucide-react";

const ConfirmPassword = ({ darkMode, formData, formErrors, showConfirmPassword, toggleConfirmPasswordVisibility, handleChange}) => {
    return (
        <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <label htmlFor="confirmPassword" className={`block text-sm font-medium mb-1 ${darkMode ? "text-gray-200" : "text-gray-700"}`}>
          Confirm Password
        </label>
        <div className="relative">
          <input
            id="confirmPassword"
            name="confirmPassword"
            type={showConfirmPassword ? "text" : "password"}
            autoComplete="new-password"
            value={formData.confirmPassword}
            onChange={handleChange}
            className={`w-full pl-4 pr-10 py-3 rounded-lg border ${
              formErrors.confirmPassword 
                ? "border-red-500" 
                : darkMode ? "border-gray-600" : "border-gray-300"
            } focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-colors ${
              darkMode ? "bg-gray-700 text-white" : "bg-white text-gray-900"
            }`}
            placeholder="••••••••"
          />
          <div className="absolute inset-y-0 right-0 pr-3 flex items-center">
            <button 
              type="button" 
              onClick={toggleConfirmPasswordVisibility}
              className={`${darkMode ? "text-gray-400 hover:text-gray-300" : "text-gray-400 hover:text-gray-600"} focus:outline-none`}
            >
              {showConfirmPassword ? (
                <EyeOff className="h-5 w-5" />
              ) : (
                <Eye className="h-5 w-5" />
              )}
            </button>
          </div>
        </div>
        {formErrors.confirmPassword && (
          <p className="mt-1 text-sm text-red-500">{formErrors.confirmPassword}</p>
        )}
      </motion.div>
    )
}
export default ConfirmPassword