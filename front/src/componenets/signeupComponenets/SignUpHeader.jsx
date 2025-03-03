import { motion } from "framer-motion"
import { UserPlus } from "lucide-react"
const SignUpHeader = ({darkMode}) => {
    return (
        <div className="text-center mb-8">
            <motion.div
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5 }}
              className={`inline-flex h-12 w-12 items-center justify-center rounded-full ${
                darkMode 
                  ? "bg-indigo-900 text-indigo-300" 
                  : "bg-indigo-100 text-indigo-600"
              } mb-4`}
            >
              <UserPlus className="h-6 w-6" />
            </motion.div>
            <h2 className={`text-2xl font-bold ${darkMode ? "text-white" : "text-gray-800"}`}>
              Create your account
            </h2>
            <p className={`mt-2 ${darkMode ? "text-gray-300" : "text-gray-600"}`}>
              Join Horizon and start building amazing experiences
            </p>
          </div>
    )
}
export default SignUpHeader