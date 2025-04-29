import { useForm } from "react-hook-form";
import CustomInputText from "../../../Components/Controls/CustomInputText";
import CustomInputSelect from "../../../Components/Controls/CustomInputSelect";
import { yupResolver } from "@hookform/resolvers/yup";
import { basicInfoSchema } from "../../../Validations/PortfolioSteps";

const genderOptions = [
  { label: "Male", value: "male" },
  { label: "Female", value: "female" },
  { label: "Other", value: "other" },
];

const BasicInfo = () => {
  const required = true;

  const { control, handleSubmit } = useForm({
    resolver: yupResolver(basicInfoSchema),
  });

  const onSubmit = (data) => {
    console.log("Submitted Data:", data);
  };

  return (
    <div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="grid grid-cols-1 md:grid-cols-2 gap-6"
      >
        <CustomInputText
          name="firstName"
          label="First Name"
          placeholder="Enter your first name"
          control={control}
          required={required}
        />

        <CustomInputText
          name="lastName"
          label="Last Name"
          placeholder="Enter your last name"
          control={control}
          required={required}
        />

        <CustomInputSelect
          name="gender"
          label="Gender"
          options={genderOptions}
          control={control}
          required={required}
        />

        <CustomInputText
          name="jobTitle"
          label="Job Title"
          placeholder="Enter your job title"
          control={control}
          required={required}
        />

        <div className="md:col-span-2">
          <CustomInputText
            name="bio"
            label="Bio"
            placeholder="Tell us about yourself"
            control={control}
            helperMsg="Max length: 250 characters"
          />
        </div>

        <div className="md:col-span-2 flex justify-end">
          <button
            type="submit"
            className="bg-blue-600 text-white py-2 px-6 rounded hover:bg-blue-700"
          >
            Save
          </button>
        </div>
      </form>
    </div>
  );
};

export default BasicInfo;
