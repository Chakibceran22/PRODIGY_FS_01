import { motion } from "framer-motion";


const NameFields = ({ darkMode, formData,formErrors, handleChange, }) => {
    return (
        <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-4"
        >
            <div>
                <label htmlFor="firstName" className={`block text-sm font-medium mb-1 ${darkMode ? "text-gray-200" : "text-gray-700"}`}>
                    First Name
                </label>
                <input
                    id="firstName"
                    name="firstName"
                    type="text"
                    autoComplete="given-name"
                    value={formData.firstName}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 rounded-lg border ${formErrors.firstName
                            ? "border-red-500"
                            : darkMode ? "border-gray-600" : "border-gray-300"
                        } focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-colors ${darkMode ? "bg-gray-700 text-white" : "bg-white text-gray-900"
                        }`}
                    placeholder="John"
                />
                {formErrors.firstName && (
                    <p className="mt-1 text-sm text-red-500">{formErrors.firstName}</p>
                )}
            </div>

            <div>
                <label htmlFor="lastName" className={`block text-sm font-medium mb-1 ${darkMode ? "text-gray-200" : "text-gray-700"}`}>
                    Last Name
                </label>
                <input
                    id="lastName"
                    name="lastName"
                    type="text"
                    autoComplete="family-name"
                    value={formData.lastName}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 rounded-lg border ${formErrors.lastName
                            ? "border-red-500"
                            : darkMode ? "border-gray-600" : "border-gray-300"
                        } focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-colors ${darkMode ? "bg-gray-700 text-white" : "bg-white text-gray-900"
                        }`}
                    placeholder="Doe"
                />
                {formErrors.lastName && (
                    <p className="mt-1 text-sm text-red-500">{formErrors.lastName}</p>
                )}
            </div>
        </motion.div>

    )
}
export default NameFields