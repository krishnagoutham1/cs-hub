import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import CustomInputText from "../../../Components/Controls/CustomInputText";
import { experienceSchema } from "../../../Validations/PortfolioSteps";

const Experience = () => {
  const required = true;

  const { control, handleSubmit } = useForm({
    resolver: yupResolver(experienceSchema),
  });

  const onSubmit = (data) => {
    console.log("Submitted Experience Data:", data);
  };

  return (
    <div className="p-6">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="grid grid-cols-1 md:grid-cols-2 gap-6"
      >
        <CustomInputText
          name="jobTitle"
          label="Job Title"
          placeholder="Enter your job title"
          control={control}
          required={required}
        />
        <CustomInputText
          name="companyName"
          label="Company Name"
          placeholder="Enter company name"
          control={control}
          required={required}
        />
        <CustomInputText
          name="duration"
          label="Duration (Start Date – End Date / 'Present')"
          placeholder="Enter duration"
          control={control}
          required={required}
        />
        <CustomInputText
          name="description"
          label="Description / Achievements"
          placeholder="Enter description or achievements"
          control={control}
          required={required}
        />
        <CustomInputText
          name="location"
          label="Location (optional)"
          placeholder="Enter job location"
          control={control}
        />
        <CustomInputText
          name="skillsUsed"
          label="Skills Used (optional)"
          placeholder="List key skills used"
          control={control}
        />
        <div className="md:col-span-2 flex justify-end">
          <button
            type="submit"
            className="bg-blue-600 text-white py-2 px-6 rounded hover:bg-blue-700"
          >
            Save Experience
          </button>
        </div>
      </form>
    </div>
  );
};

export default Experience;
