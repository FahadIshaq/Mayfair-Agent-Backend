import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

const PropertyChoice = ({ form }: { form: any }) => {
  return (
    <div className="space-y-4">
      <FormField
        control={form.control}
        name="type"
        render={({ field }) => (
          <FormItem className="space-y-3">
            <FormLabel>Property Type</FormLabel>
            <FormControl>
              <RadioGroup
                value={field.value} // Change defaultValue to value
                onValueChange={field.onChange}
                className="flex flex-row gap-10"
              >
                <FormItem className="flex items-center space-x-3 space-y-0">
                  <FormControl>
                    <RadioGroupItem value="commerical" />
                  </FormControl>
                  <FormLabel className="font-normal">Commercial</FormLabel>
                </FormItem>
                <FormItem className="flex items-center space-x-3 space-y-0">
                  <FormControl>
                    <RadioGroupItem value="residential" />
                  </FormControl>
                  <FormLabel className="font-normal">Residential</FormLabel>
                </FormItem>
              </RadioGroup>
            </FormControl>
          </FormItem>
        )}
      />
    </div>
  );
};

export default PropertyChoice;
