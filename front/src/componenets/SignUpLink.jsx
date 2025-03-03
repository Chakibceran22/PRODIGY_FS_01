import { motion } from "framer-motion"

const SignUpLink = ({ darkMode, handleGo}) => {
    return (
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
                
                className={`font-medium transition-colors hover:cursor-pointer ${
                  darkMode 
                    ? "text-indigo-400 hover:text-indigo-300" 
                    : "text-indigo-600 hover:text-indigo-500"
                }`}
                onClick={handleGo}
              >
                Sign up
              </a>
            </p>
          </motion.div>
    )
}

export default SignUpLink