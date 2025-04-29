import { Controller } from "react-hook-form";
import { Select, MenuItem, FormControl } from "@mui/material";
import PropTypes from "prop-types";

const CustomInputSelect = ({
  control,
  name,
  label,
  placeholder,
  options = [],
  required = false,
  defaultValue = "",
  validationRules = {},
  className = "",
  helperClass = "",
  helperMsg = "",
  ...rest
}) => {
  return (
    <div className={`mb-4 ${className}`}>
      <label htmlFor={name} className="block text-sm font-semibold mb-1">
        {label} {required && <span className="text-red-500">*</span>}
      </label>

      <Controller
        name={name}
        control={control}
        defaultValue={defaultValue}
        rules={validationRules}
        render={({ field, fieldState: { error } }) => (
          <div>
            <FormControl fullWidth error={Boolean(error)}>
              <Select
                {...field}
                id={field.name}
                {...rest}
                displayEmpty
                inputProps={{ "aria-label": name }}
              >
                <MenuItem value="" disabled>
                  {placeholder || "Select an option"}
                </MenuItem>
                {options.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>

            {helperMsg && !error && (
              <small
                id={`${name}-help`}
                className={helperClass || "text-gray-500 mt-1"}
              >
                {helperMsg}
              </small>
            )}

            {error && (
              <p className="text-red-500 text-xs mt-1">
                {error?.message || "Invalid input"}
              </p>
            )}
          </div>
        )}
      />
    </div>
  );
};

CustomInputSelect.propTypes = {
  control: PropTypes.object.isRequired,
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  options: PropTypes.array.isRequired,
  placeholder: PropTypes.string,
  required: PropTypes.bool,
  defaultValue: PropTypes.any,
  validationRules: PropTypes.object,
  className: PropTypes.string,
  helperClass: PropTypes.string,
  helperMsg: PropTypes.string,
};

export default CustomInputSelect;
