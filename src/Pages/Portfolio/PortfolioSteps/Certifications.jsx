import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { certificationsSchema } from "../../../Validations/PortfolioSteps";
import CustomInputText from "../../../Components/Controls/CustomInputText";

const Certifications = () => {
  const required = true;

  const { control, handleSubmit } = useForm({
    resolver: yupResolver(certificationsSchema),
  });

  const onSubmit = (data) => {
    console.log("Submitted Certifications Data:", data);
  };

  return (
    <div className="p-6">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="grid grid-cols-1 md:grid-cols-2 gap-6"
      >
        <CustomInputText
          name="certificationName"
          label="Certification Name"
          placeholder="Enter the certification name"
          control={control}
          required={required}
        />
        <CustomInputText
          name="issuingOrganization"
          label="Issuing Organization"
          placeholder="Enter the organization name"
          control={control}
          required={required}
        />
        <CustomInputText
          name="date"
          label="Date"
          placeholder="Enter the certification date"
          control={control}
          required={required}
        />
        <CustomInputText
          name="certificateLink"
          label="Certificate Link (optional)"
          placeholder="Enter a link to the certificate"
          control={control}
        />
        <div className="md:col-span-2 flex justify-end">
          <button
            type="submit"
            className="bg-blue-600 text-white py-2 px-6 rounded hover:bg-blue-700"
          >
            Save Certification
          </button>
        </div>
      </form>
    </div>
  );
};

export default Certifications;
