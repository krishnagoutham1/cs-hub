import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import CustomInputText from "../../../Components/Controls/CustomInputText";
import { projectSchema } from "../../../Validations/PortfolioSteps";

const Projects = () => {
  const required = true;

  const { control, handleSubmit } = useForm({
    resolver: yupResolver(projectSchema),
  });

  const onSubmit = (data) => {
    console.log("Submitted Project Data:", data);
  };

  return (
    <div className="p-6">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="grid grid-cols-1 md:grid-cols-2 gap-6"
      >
        <CustomInputText
          name="projectName"
          label="Project Name"
          placeholder="Enter the project name"
          control={control}
          required={required}
        />
        <CustomInputText
          name="projectDescription"
          label="Project Description"
          placeholder="Enter a brief project description"
          control={control}
          required={required}
        />
        <CustomInputText
          name="projectImage"
          label="Project Image (optional)"
          placeholder="Enter an image URL"
          control={control}
        />
        <CustomInputText
          name="liveLink"
          label="Live Link (if deployed)"
          placeholder="Enter a live link"
          control={control}
        />
        <CustomInputText
          name="githubLink"
          label="GitHub Link (repo)"
          placeholder="Enter the GitHub repository link"
          control={control}
          required={required}
        />
        <div className="md:col-span-2 flex justify-end">
          <button
            type="submit"
            className="bg-blue-600 text-white py-2 px-6 rounded hover:bg-blue-700"
          >
            Save Project
          </button>
        </div>
      </form>
    </div>
  );
};

export default Projects;
