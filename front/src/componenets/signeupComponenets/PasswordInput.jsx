import { motion } from "framer-motion";
import { Eye, EyeOff, Info } from "lucide-react";
const PasswordInputSignUp = ({ darkMode, formData,handleChange, formErrors, togglePasswordVisibility, showPassword, passwordStrength, getStrengthColor, getStrengthLabel}) => {
    return(
        <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        <label htmlFor="password" className={`block text-sm font-medium mb-1 ${darkMode ? "text-gray-200" : "text-gray-700"}`}>
          Password
        </label>
        <div className="relative">
          <input
            id="password"
            name="password"
            type={showPassword ? "text" : "password"}
            autoComplete="new-password"
            value={formData.password}
            onChange={handleChange}
            className={`w-full pl-4 pr-10 py-3 rounded-lg border ${
              formErrors.password 
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
              onClick={togglePasswordVisibility}
              className={`${darkMode ? "text-gray-400 hover:text-gray-300" : "text-gray-400 hover:text-gray-600"} focus:outline-none`}
            >
              {showPassword ? (
                <EyeOff className="h-5 w-5" />
              ) : (
                <Eye className="h-5 w-5" />
              )}
            </button>
          </div>
        </div>
        {formData.password && (
          <div className="mt-2">
            <div className="flex items-center justify-between mb-1">
              <div className={`text-xs ${darkMode ? "text-gray-400" : "text-gray-500"}`}>Password strength:</div>
              <div className="text-xs font-medium" style={{ color: getStrengthColor().replace('bg-', 'text-') }}>
                {getStrengthLabel()}
              </div>
            </div>
            <div className={`h-1 w-full ${darkMode ? "bg-gray-600" : "bg-gray-200"} rounded-full overflow-hidden`}>
              <div 
                className={`h-full ${getStrengthColor()}`} 
                style={{ width: `${(passwordStrength / 5) * 100}%` }}
              ></div>
            </div>
            <div className={`mt-1 text-xs ${darkMode ? "text-gray-400" : "text-gray-500"} flex items-center`}>
              <Info className={`h-3 w-3 mr-1 ${darkMode ? "text-gray-500" : "text-gray-400"}`} />
              Use 8+ characters with a mix of letters, numbers & symbols
            </div>
          </div>
        )}
        {formErrors.password && (
          <p className="mt-1 text-sm text-red-500">{formErrors.password}</p>
        )}
      </motion.div>
    )
}
export default PasswordInputSignUp