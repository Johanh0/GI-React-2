import { categories } from "../utils/data.js";
const Select = ({ ...props }) => {
  return (
    <div className="form__categories">
      <select {...props} name="changes" id="select__genres">
        {categories.map((category) => (
          <option key={category.value} value={category.value}>
            {category.text}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Select;
