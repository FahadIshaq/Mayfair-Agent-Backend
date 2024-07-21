"use client";
import { Button } from "@/components/ui/button";
import { DataTable } from "@/components/ui/data-table";
import { Heading } from "@/components/ui/heading";
import { Separator } from "@/components/ui/separator";
import { Locations, Blog } from "@/constants/data";
import { Plus, PencilRuler as Draft } from "lucide-react";
import { useRouter } from "next/navigation";
import { columns } from "./columns";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Modal } from "./Modal";

interface BlogsClientProps {
  data: Blog[];
}

const Blogs: React.FC<BlogsClientProps> = ({ data }) => {
  const router = useRouter();

  return (
    <>
      <div className="flex items-start justify-between">
        <Heading
          title={`Blogs (${data.length})`}
          description="List of all blogs. You can add, edit and delete blogs."
        />
        <div className="space-x-2">
          <Button
            className="text-xs md:text-sm"
            onClick={() => router.push(`/admin/blogs/drafts`)}
          >
            <Draft className="mr-2 h-4 w-4" /> Drafts
          </Button>
          <Button
            className="text-xs md:text-sm"
            onClick={() => router.push(`/admin/blogs/new`)}
          >
            <Plus className="mr-2 h-4 w-4" /> Add New
          </Button>
        </div>
      </div>
      <Separator />
      <DataTable searchKey="name" columns={columns} data={data} />
    </>
  );
};

export default Blogs;
