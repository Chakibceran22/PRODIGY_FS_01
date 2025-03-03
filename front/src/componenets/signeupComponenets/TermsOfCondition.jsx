import { motion } from "framer-motion";

const TermsOfCondition = ({ darkMode, formData, formErrors, handleChange }) => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="flex items-start"
        >
            <div className="flex items-center h-5">
                <input
                    id="agreeTerms"
                    name="agreeTerms"
                    type="checkbox"
                    checked={formData.agreeTerms}
                    onChange={handleChange}
                    className={`h-4 w-4 text-indigo-600 focus:ring-indigo-500 rounded ${formErrors.agreeTerms ? 'border-red-500' : 'border-gray-300'
                        }`}
                />
            </div>
            <div className="ml-3 text-sm">
                <label htmlFor="agreeTerms" className={`font-medium ${darkMode ? "text-gray-200" : "text-gray-700"}`}>
                    I agree to the{' '}
                    <a href="#" className="text-indigo-500 hover:text-indigo-400">
                        Terms of Service
                    </a>{' '}
                    and{' '}
                    <a href="#" className="text-indigo-500 hover:text-indigo-400">
                        Privacy Policy
                    </a>
                </label>
                {formErrors.agreeTerms && (
                    <p className="mt-1 text-sm text-red-500">{formErrors.agreeTerms}</p>
                )}
            </div>
        </motion.div>
    )
}
export default TermsOfCondition;