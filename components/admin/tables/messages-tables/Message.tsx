"use client";
import { Button } from "@/components/ui/button";
import { DataTable } from "@/components/ui/data-table";
import { Heading } from "@/components/ui/heading";
import { Separator } from "@/components/ui/separator";
import { Messages } from "@/constants/data";
import { Plus, PencilRuler as Draft } from "lucide-react";
import { useRouter } from "next/navigation";
import { columns } from "./columns";

interface MessagesClientProps {
  data: Messages[];
}

export const Message: React.FC<MessagesClientProps> = ({ data }) => {
  const router = useRouter();

  return (
    <>
      <div className="flex items-start justify-between">
        <Heading
          title={`Messages (${data.length})`}
          description="Manage all your messages here"
        />
      </div>
      <Separator />
      <DataTable searchKey="name" columns={columns} data={data} />
    </>
  );
};
