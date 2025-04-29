import { Controller } from "react-hook-form";
import PropTypes from "prop-types";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import dayjs from "dayjs";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";

const CustomDatePicker = ({
  control,
  name,
  label,
  required = false,
  className = "",
  helperClass = "",
  helperMsg = "",
  defaultValue = null,
  validationRules = {},
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
        defaultValue={defaultValue ? dayjs(defaultValue) : null}
        rules={validationRules}
        render={({ field, fieldState: { error } }) => (
          <div>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DatePicker
                {...rest}
                value={field.value}
                onChange={(date) => field.onChange(date)}
                slotProps={{
                  textField: {
                    id: field.name,
                    error: Boolean(error),
                    fullWidth: true,
                    helperText: error?.message || helperMsg,
                    className: helperClass || "text-gray-500",
                  },
                }}
              />
            </LocalizationProvider>
          </div>
        )}
      />
    </div>
  );
};

CustomDatePicker.propTypes = {
  control: PropTypes.object.isRequired,
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  required: PropTypes.bool,
  className: PropTypes.string,
  helperClass: PropTypes.string,
  helperMsg: PropTypes.string,
  defaultValue: PropTypes.string,
  validationRules: PropTypes.object,
};

export default CustomDatePicker;
