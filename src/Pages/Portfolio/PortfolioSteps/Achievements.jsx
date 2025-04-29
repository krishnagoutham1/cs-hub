import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { achievementsSchema } from "../../../Validations/PortfolioSteps";
import CustomInputText from "../../../Components/Controls/CustomInputText";

const Achievements = () => {
  const required = true;

  const { control, handleSubmit } = useForm({
    resolver: yupResolver(achievementsSchema),
  });

  const onSubmit = (data) => {
    console.log("Submitted Achievements Data:", data);
  };

  return (
    <div className="p-6">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="grid grid-cols-1 md:grid-cols-2 gap-6"
      >
        <CustomInputText
          name="title"
          label="Achievement Title"
          placeholder="Enter the achievement title"
          control={control}
          required={required}
        />
        <CustomInputText
          name="description"
          label="Description"
          placeholder="Describe your achievement"
          control={control}
          required={required}
        />
        <CustomInputText
          name="date"
          label="Date"
          placeholder="Enter the date of achievement"
          control={control}
          required={required}
        />
        <CustomInputText
          name="relatedLink"
          label="Related Link (optional)"
          placeholder="Enter a reference URL"
          control={control}
        />
        <div className="md:col-span-2 flex justify-end">
          <button
            type="submit"
            className="bg-blue-600 text-white py-2 px-6 rounded hover:bg-blue-700"
          >
            Save Achievement
          </button>
        </div>
      </form>
    </div>
  );
};

export default Achievements;
