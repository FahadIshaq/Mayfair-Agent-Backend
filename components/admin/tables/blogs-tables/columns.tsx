"use client";

import { ColumnDef } from "@tanstack/react-table";
import { Blog } from "@/constants/data";
import { CellAction } from "./cell-action";

export const columns: ColumnDef<Blog>[] = [
  {
    accessorKey: "title",
    header: "Title",
  },
  {
    accessorKey: "user",
    header: "User",
  },
  {
    accessorKey: "date",
    header: "Date",
  },
  {
    id: "actions",
    header: "Actions",
    cell: ({ row }) => <CellAction data={row.original} />,
  },
];
