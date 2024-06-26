import { DEMO_VERSION } from "../../utils/constants";
import Form from "../../ui/Form";
import FormRow from "../../ui/FormRow";
import Input from "../../ui/Input";
import Spinner from "../../ui/Spinner";
import { useUpdateSetting } from "./useUpdateSetting";
import { useSettings } from "./useSettings";
import toast from "react-hot-toast";

function UpdateSettingsForm() {
  const { isLoading, settings = {} } = useSettings();
  // eslint-disable-next-line no-unused-vars
  const { isUpdating, updateSetting } = useUpdateSetting();

  const {
    minBookingLength,
    maxBookingLength,
    maxNumGuestsPerBooking,
    breakfastPrice,
  } = settings;

  if (isLoading) return <Spinner />;

  function handleUpdate(e, field) {
    if (DEMO_VERSION) {
      toast.error("Setting updates are disabled in demo version");
      return;
    }
    const { value } = e.target;
    if (!value) return;
    updateSetting({ [field]: value });
  }

  return (
    <Form>
      <FormRow label="Minimum nights/booking">
        <Input
          disabled={isUpdating}
          type="number"
          id="min-nights"
          defaultValue={minBookingLength}
          onBlur={(e) => handleUpdate(e, "minBookingLength")}
        />
      </FormRow>
      <FormRow label="Maximum nights/booking">
        <Input
          disabled={isUpdating}
          type="number"
          id="max-nights"
          defaultValue={maxBookingLength}
          onBlur={(e) => handleUpdate(e, "maxBookingLength")}
        />
      </FormRow>
      <FormRow label="Maximum guests/booking">
        <Input
          disabled={isUpdating}
          type="number"
          id="max-guests"
          defaultValue={maxNumGuestsPerBooking}
          onBlur={(e) => handleUpdate(e, "maxNumGuestsPerBooking")}
        />
      </FormRow>
      <FormRow label="Breakfast price">
        <Input
          disabled={isUpdating}
          type="number"
          id="breakfast-price"
          defaultValue={breakfastPrice}
          onBlur={(e) => handleUpdate(e, "breakfastPrice")}
        />
      </FormRow>
    </Form>
  );
}

export default UpdateSettingsForm;
