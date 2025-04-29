import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import CustomInputText from "../../../Components/Controls/CustomInputText";
import { educationSchema } from "../../../Validations/PortfolioSteps";

const Education = () => {
  const required = true;

  const { control, handleSubmit } = useForm({
    resolver: yupResolver(educationSchema),
  });

  const onSubmit = (data) => {
    console.log("Submitted Education Data:", data);
  };

  return (
    <div className="p-6">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="grid grid-cols-1 md:grid-cols-2 gap-6"
      >
        <CustomInputText
          name="degreeName"
          label="Degree Name"
          placeholder="Enter your degree name"
          control={control}
          required={required}
        />
        <CustomInputText
          name="universityName"
          label="University/College Name"
          placeholder="Enter the institution name"
          control={control}
          required={required}
        />
        <CustomInputText
          name="duration"
          label="Duration (Start Date – End Date)"
          placeholder="Enter duration"
          control={control}
          required={required}
        />
        <CustomInputText
          name="description"
          label="Description (optional)"
          placeholder="Enter a brief description"
          control={control}
        />
        <CustomInputText
          name="location"
          label="Location (optional)"
          placeholder="Enter location"
          control={control}
        />
        <CustomInputText
          name="relevantCoursework"
          label="Relevant Coursework (optional)"
          placeholder="Enter relevant courses"
          control={control}
        />
        <div className="md:col-span-2 flex justify-end">
          <button
            type="submit"
            className="bg-blue-600 text-white py-2 px-6 rounded hover:bg-blue-700"
          >
            Save Education
          </button>
        </div>
      </form>
    </div>
  );
};

export default Education;
