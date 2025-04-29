import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { contactInfoSchema } from "../../../Validations/PortfolioSteps";
import CustomInputText from "../../../Components/Controls/CustomInputText";

const required = true;

const Contact = () => {
  const { control, handleSubmit } = useForm({
    resolver: yupResolver(contactInfoSchema),
  });

  const onSubmit = (data) => {
    console.log("Submitted Data:", data);
  };

  return (
    <div className="p-6">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="grid grid-cols-1 md:grid-cols-2 gap-6"
      >
        <CustomInputText
          name="mobile"
          label="Mobile"
          placeholder="Enter your mobile number"
          control={control}
          required={required}
        />
        <CustomInputText
          name="email"
          label="Email"
          placeholder="Enter your email"
          control={control}
          required={required}
        />
        <CustomInputText
          name="relate"
          label="Relation"
          placeholder="Relation with you"
          control={control}
          required={required}
        />
        <CustomInputText
          name="city"
          label="City"
          placeholder="Enter your city"
          control={control}
          required={required}
        />
        <CustomInputText
          name="country"
          label="Country"
          placeholder="Enter your country"
          control={control}
          required={required}
        />
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

export default Contact;
