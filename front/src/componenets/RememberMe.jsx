import { motion } from "framer-motion"

const RememberMe = ({ darkMode, formData, handleChange}) => {
    return (
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
    )
}

export default RememberMe