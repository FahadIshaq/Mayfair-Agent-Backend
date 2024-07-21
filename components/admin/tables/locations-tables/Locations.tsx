"use client";
import { Button } from "@/components/ui/button";
import { DataTable } from "@/components/ui/data-table";
import { Heading } from "@/components/ui/heading";
import { Separator } from "@/components/ui/separator";
import { Locations } from "@/constants/data";
import { Plus, PencilRuler as Draft } from "lucide-react";
import { useRouter } from "next/navigation";
import { columns } from "./columns";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Modal } from "./Modal";

interface LocationsClientProps {
  data: Locations[];
}

const Locations: React.FC<LocationsClientProps> = ({ data }) => {
  const router = useRouter();

  return (
    <>
      <div className="flex items-start justify-between">
        <Heading
          title={`Locations (${data.length})`}
          description="List of all locations in the system."
        />
        <div className="space-x-2">
          <Modal />
        </div>
      </div>
      <Separator />
      <DataTable searchKey="name" columns={columns} data={data} />
    </>
  );
};

export default Locations;
