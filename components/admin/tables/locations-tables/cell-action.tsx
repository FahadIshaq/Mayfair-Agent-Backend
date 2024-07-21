"use client";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Locations } from "@/constants/data";
import { Edit, MoreHorizontal, Trash } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { AlertModal } from "@/components/modal/alert-modal";
import { UpdateLocation } from "./updateAmenity";

interface CellActionProps {
  data: Locations;
}

export const CellAction: React.FC<CellActionProps> = ({ data }) => {
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);
  const router = useRouter();

  const onConfirm = async () => {};

  return (
    <>
      <AlertModal
        isOpen={open}
        onClose={() => setOpen(false)}
        onConfirm={onConfirm}
        loading={loading}
      />
      <div className="flex flex-row gap-4">
        <Button
          onClick={() => setOpen(true)}
          className="bg-red-600 hover:bg-red-900"
        >
          <Trash className="mr-2 h-4 w-4" /> Delete
        </Button>
        <UpdateLocation data={data} />
      </div>
    </>
  );
};
