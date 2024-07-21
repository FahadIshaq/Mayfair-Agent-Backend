"use client";
import { ColumnDef } from "@tanstack/react-table";
import { CellAction } from "./cell-action";
import { Checkbox } from "@/components/ui/checkbox";
import { Messages } from "@/constants/data";

export const columns: ColumnDef<Messages>[] = [
  {
    accessorKey: "name",
    header: "NAME",
  },
  {
    accessorKey: "email",
    header: "EMAIL",
  },
  {
    accessorKey: "status",
    header: "STATUS",
  },
  {
    accessorKey: "subject",
    header: "SUBJECT",
  },
  {
    accessorKey: "message",
    header: "MESSAGE",
  },
  {
    id: "actions",
    header: "Actions",
    cell: ({ row }) => (
      <>
        <CellAction data={row.original} />
      </>
    ),
  },
];
