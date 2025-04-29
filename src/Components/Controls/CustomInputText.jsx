import { Controller } from "react-hook-form";
import PropTypes from "prop-types";
import { TextField } from "@mui/material";

const CustomInputText = ({
  control,
  name,
  label,
  type = "text",
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
            <TextField
              {...field}
              {...rest}
              id={field.name}
              type={type}
              placeholder={placeholder}
              error={Boolean(error)}
              fullWidth
              aria-describedby={helperMsg ? "username-help" : undefined}
            />

            {helperMsg && (
              <small
                id="username-help"
                className={helperClass || "text-gray-500"}
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

CustomInputText.propTypes = {
  control: PropTypes.object.isRequired,
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  type: PropTypes.string,
  placeholder: PropTypes.string,
  defaultValue: PropTypes.string,
  validationRules: PropTypes.object,
  required: PropTypes.bool,
  className: PropTypes.string,
  helperClass: PropTypes.string,
  helperMsg: PropTypes.string,
};

export default CustomInputText;
