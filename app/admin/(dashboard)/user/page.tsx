import { UserTable } from "@/components/admin/tables/user-tables/UserTable";
import { users } from "@/constants/data";

export default function page() {
  return (
    <>
      <div className="flex-1 space-y-4  p-4 md:p-8 pt-6">
        <UserTable data={users} />
      </div>
    </>
  );
}
