import PropTypes from "prop-types";
import Input from "../shared/Input";

export default function SearchInput({ placeholder, onInput, onSearch, inputValue }) {
  function handleInputChange(event) {
    onInput(event.target.value);
  }

  function handleEnterToSearch(event) {
    if (event.key === "Enter") {
      onSearch(event.target.value);
    }
  }

  return (
    <Input
      type="text"
      placeholder={placeholder}
      value={inputValue}
      onChange={handleInputChange}
      onKeyDown={handleEnterToSearch}
    />
  );
}

SearchInput.propTypes = {
  placeholder: PropTypes.string,
  onInput: PropTypes.func.isRequired,
  onSearch: PropTypes.func.isRequired,
  inputValue: PropTypes.string,
};
