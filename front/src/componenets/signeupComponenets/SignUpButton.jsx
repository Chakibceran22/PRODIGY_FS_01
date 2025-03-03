import { motion } from "framer-motion";
import { Loader2 } from "lucide-react";
const SignUpButton = ({ darkMode, isLoading }) => {
    return (
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
    )
}
export default SignUpButton