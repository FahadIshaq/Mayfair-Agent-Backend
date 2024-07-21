import { Property } from "@/components/admin/tables/property-tables/property";
import { users } from "@/constants/data";

export default function page() {
  return (
    <>
      <div className="flex-1 space-y-4  p-4 md:p-8 pt-6">
        <Property data={users} />
      </div>
    </>
  );
}
