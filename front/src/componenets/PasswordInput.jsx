import { EyeOff, Eye } from "lucide-react"
import { motion } from "framer-motion"
const PasswordInput = ({ darkMode, formData, formErrors,showPassword,togglePasswordVisibility, handleChange}) => {
    return (
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
    )
}

export default PasswordInput