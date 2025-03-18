import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Search } from "lucide-react"; 

const suggestions = ["home", "about", "school", "contact", "enroll", "news", "careers"];

const SearchInput = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredSuggestions, setFilteredSuggestions] = useState<string[]>([]);
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);
  const navigate = useNavigate();

  // Handle input change and filter suggestions
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value;
    setSearchQuery(query);

    if (query.trim() === "") {
      setFilteredSuggestions([]);
      setIsDropdownVisible(false);
    } else {
      const filtered = suggestions.filter((item) =>
        item.toLowerCase().includes(query.toLowerCase())
      );
      setFilteredSuggestions(filtered);
      setIsDropdownVisible(filtered.length > 0);
    }
  };

  // Navigate on Enter or selecting a suggestion
  const handleSearch = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && searchQuery.trim() !== "") {
      navigate(`/${encodeURIComponent(searchQuery)}`);
      setFilteredSuggestions([]);
      setIsDropdownVisible(false);
    }
  };

  // Handle clicking a suggestion
  const handleSuggestionClick = (suggestion: string) => {
    setSearchQuery(suggestion);
    navigate(`/${encodeURIComponent(suggestion)}`);
    setFilteredSuggestions([]);
    setIsDropdownVisible(false);
  };

  return (
    <div 
      className="relative hidden md:flex flex-col items-center"
      onMouseEnter={() => setIsDropdownVisible(true)}
      onMouseLeave={() => setIsDropdownVisible(false)}
    >
      {/* Search Input */}
      <div className="relative w-full">
        <input
          type="text"
          placeholder="Search..."
          value={searchQuery}
          onChange={handleChange}
          onKeyDown={handleSearch}
          className="px-4 py-2 pl-10 border border-gray-300 rounded-md w-40 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" size={20} />
      </div>

      {/* Suggestions Dropdown */}
      {isDropdownVisible && filteredSuggestions.length > 0 && (
        <ul className="absolute top-[43px] left-0 w-full bg-white border border-gray-300 rounded-md shadow-md z-10">
          {filteredSuggestions.map((suggestion, index) => (
            <li
              key={index}
              onClick={() => handleSuggestionClick(suggestion)}
              className="px-4 py-2 hover:bg-gray-200 cursor-pointer"
            >
              {suggestion}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SearchInput;
