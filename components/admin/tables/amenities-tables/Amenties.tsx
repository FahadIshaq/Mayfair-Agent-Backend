"use client";
import { Button } from "@/components/ui/button";
import { DataTable } from "@/components/ui/data-table";
import { Heading } from "@/components/ui/heading";
import { Separator } from "@/components/ui/separator";
import { Amenities } from "@/constants/data";
import { Plus, PencilRuler as Draft } from "lucide-react";
import { useRouter } from "next/navigation";
import { columns } from "./columns";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Modal } from "./Modal";

interface AmenitiesClientProps {
  data: Amenities[];
}

export const Amenties: React.FC<AmenitiesClientProps> = ({ data }) => {
  const router = useRouter();

  return (
    <>
      <div className="flex items-start justify-between">
        <Heading
          title={`Amenities (${data.length})`}
          description="Manage Amenities for your properties."
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
