import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import CustomInputText from "../../../Components/Controls/CustomInputText";
import { skillsSchema } from "../../../Validations/PortfolioSteps";
import CustomInputSelect from "../../../Components/Controls/CustomInputSelect";

const Skills = () => {
  const required = true;

  const { control, handleSubmit } = useForm({
    resolver: yupResolver(skillsSchema),
  });

  const onSubmit = (data) => {
    console.log("Submitted Skills Data:", data);
  };

  return (
    <div className="p-6">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="grid grid-cols-1 md:grid-cols-2 gap-6"
      >
        <CustomInputText
          name="skillName"
          label="Skill Name"
          placeholder="Enter skill name"
          control={control}
          required={required}
        />
        <CustomInputSelect
          name="category"
          label="Category"
          placeholder="Select skill category"
          control={control}
          required={required}
          options={["Frontend", "Backend", "DevOps", "Database", "Other"]}
        />
        <CustomInputSelect
          name="proficiency"
          label="Proficiency"
          placeholder="Select proficiency level"
          control={control}
          options={["Beginner", "Intermediate", "Expert"]}
        />
        <CustomInputText
          name="experienceYears"
          label="Years of Experience (optional)"
          placeholder="Enter years of experience"
          control={control}
        />
        <div className="md:col-span-2 flex justify-end">
          <button
            type="submit"
            className="bg-blue-600 text-white py-2 px-6 rounded hover:bg-blue-700"
          >
            Save Skills
          </button>
        </div>
      </form>
    </div>
  );
};

export default Skills;
