import { KeyRound } from "lucide-react"
import { motion } from 'framer-motion';

const Header = ({ darkMode}) => {
    return(
        <div className="text-center mb-10">
        <motion.div
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5 }}
          className={`inline-flex h-12 w-12 items-center justify-center rounded-full mb-4 transition-colors ${
            darkMode 
              ? "bg-indigo-900 text-indigo-400" 
              : "bg-indigo-100 text-indigo-600"
          }`}
        >
          <KeyRound size={24} />
        </motion.div>
        <h2 className={`text-2xl font-bold transition-colors ${
          darkMode ? "text-gray-100" : "text-gray-800"
        }`}>Welcome back!</h2>
        <p className={`mt-2 transition-colors ${
          darkMode ? "text-gray-400" : "text-gray-600"
        }`}>Log in to your Horizon account</p>
      </div>
    )
}
export default Header;