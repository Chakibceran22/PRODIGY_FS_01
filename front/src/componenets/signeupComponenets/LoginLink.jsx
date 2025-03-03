import { motion } from "framer-motion";


const LoginLink = ({ darkMode, goLogin}) => {
    return (
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
    )
}
export default LoginLink