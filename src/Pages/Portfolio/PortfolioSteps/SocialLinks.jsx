import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { socialLinksSchema } from "../../../Validations/PortfolioSteps";
import CustomInputText from "../../../Components/Controls/CustomInputText";

const SocialLinks = () => {
  const { control, handleSubmit } = useForm({
    resolver: yupResolver(socialLinksSchema),
  });

  const onSubmit = (data) => {
    console.log("Submitted Social Links Data:", data);
  };

  return (
    <div className="p-6">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="grid grid-cols-1 md:grid-cols-2 gap-6"
      >
        <CustomInputText
          name="twitter"
          label="Twitter (optional)"
          placeholder="Enter your Twitter profile URL"
          control={control}
        />
        <CustomInputText
          name="linkedin"
          label="LinkedIn (optional)"
          placeholder="Enter your LinkedIn profile URL"
          control={control}
        />
        <CustomInputText
          name="github"
          label="GitHub (optional)"
          placeholder="Enter your GitHub profile URL"
          control={control}
        />
        <CustomInputText
          name="portfolio"
          label="Portfolio (optional)"
          placeholder="Enter your portfolio URL"
          control={control}
        />
        <CustomInputText
          name="other"
          label="Other (optional)"
          placeholder="Enter any other relevant link"
          control={control}
        />
        <div className="md:col-span-2 flex justify-end">
          <button
            type="submit"
            className="bg-blue-600 text-white py-2 px-6 rounded hover:bg-blue-700"
          >
            Save Social Links
          </button>
        </div>
      </form>
    </div>
  );
};

export default SocialLinks;
