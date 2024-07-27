"use client";

import { ColumnDef } from "@tanstack/react-table";
import { CellAction } from "./cell-action";
import { Property } from "@/constants/data";

export const columns: ColumnDef<Property>[] = [
  {
    accessorKey: "type",
    header: "TYPE",
  },
  {
    id: "actions",
    header: "Actions",
    cell: ({ row }) => <CellAction data={row.original} />,
  },
];
