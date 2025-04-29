import { Controller } from "react-hook-form";
import PropTypes from "prop-types";

const CustomInputCalendar = ({
  control,
  name,
  label,
  placeholder = "",
  defaultValue = "",
  validationRules = {},
  required = false,
  className = "",
  helperClass = "",
  helperMsg = "",
  ...rest
}) => {
  return (
    <div className={`mb-4 ${className}`}>
      {label && (
        <label htmlFor={name} className="block text-sm font-semibold mb-1">
          {label} {required && <span className="text-red-500">*</span>}
        </label>
      )}
      <Controller
        name={name}
        control={control}
        defaultValue={defaultValue}
        rules={validationRules}
        render={({ field, fieldState: { error } }) => (
          <div>
            <input
              {...field}
              {...rest}
              id={field.name}
              type="date"
              placeholder={placeholder}
              className={`border p-2 rounded w-full ${
                error ? "border-red-500" : "border-gray-300"
              }`}
            />
            {helperMsg && (
              <small
                id={`${name}-help`}
                className={helperClass || "text-gray-500"}
              >
                {helperMsg}
              </small>
            )}
            {error && (
              <p className="text-red-500 text-xs mt-1">{error.message}</p>
            )}
          </div>
        )}
      />
    </div>
  );
};

CustomInputCalendar.propTypes = {
  control: PropTypes.object.isRequired,
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  defaultValue: PropTypes.string,
  validationRules: PropTypes.object,
  required: PropTypes.bool,
  className: PropTypes.string,
  helperClass: PropTypes.string,
  helperMsg: PropTypes.string,
};

export default CustomInputCalendar;
