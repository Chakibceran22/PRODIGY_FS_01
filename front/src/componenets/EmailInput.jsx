import { motion } from "framer-motion"
import { Mail } from "lucide-react"
const EmailInput = ({ darkMode, formData,formErrors, handleChange}) => {
    return (
         <motion.div
         initial={{ opacity: 0, x: -20 }}
         animate={{ opacity: 1, x: 0 }}
         transition={{ duration: 0.5, delay: 0.1 }}
       >
         <div className="flex items-center justify-between">
           <label 
             htmlFor="email" 
             className={`block text-sm font-medium mb-1 transition-colors ${
               darkMode ? "text-gray-300" : "text-gray-700"
             }`}
           >
             Email
           </label>
         </div>
         <div className="relative">
           <input
             id="email"
             name="email"
             type="text"
             autoComplete="email"
             value={formData.email}
             onChange={handleChange}
             className={`w-full px-4 py-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-colors pr-10 ${
               formErrors.email 
                 ? "border-red-500" 
                 : darkMode ? "border-gray-600" : "border-gray-300"
             } ${
               darkMode 
                 ? "bg-gray-700 text-white" 
                 : "bg-white text-gray-900"
             }`}
             placeholder="Enter Your Email"
           />
           <div
             className={`absolute inset-y-0 right-0 pr-3 flex items-center transition-colors ${
               darkMode 
                 ? "text-gray-400 hover:text-gray-200" 
                 : "text-gray-600 hover:text-gray-800"
             }`}
           >
             <Mail size={20} />
           </div>
         </div>
         
         {formErrors.email && (
           <p className="mt-1 text-sm text-red-600">{formErrors.email}</p>
         )}
       </motion.div>
    )
}

export default EmailInput