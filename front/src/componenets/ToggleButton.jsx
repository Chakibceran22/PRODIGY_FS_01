import { Sun, Moon } from "lucide-react";


const ToggleButton = ({ toggleTheme, darkMode}) => {
    return(
        <div className="flex justify-end pt-4 pr-4">
          <button
            onClick={toggleTheme}
            className={`p-2 rounded-full transition-colors ${
              darkMode 
                ? "bg-gray-700 text-yellow-300 hover:bg-gray-600" 
                : "bg-indigo-100 text-indigo-600 hover:bg-indigo-200"
            }`}
            aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
          >
            {darkMode ? <Sun size={20} /> : <Moon size={20} />}
          </button>
        </div>
    )
}
export default ToggleButton;