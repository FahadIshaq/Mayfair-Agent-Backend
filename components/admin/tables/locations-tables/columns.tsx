"use client";

import { ColumnDef } from "@tanstack/react-table";
import { Locations } from "@/constants/data";
import { CellAction } from "./cell-action";

export const columns: ColumnDef<Locations>[] = [
  {
    accessorKey: "name",
    header: "NAME",
  },
  {
    id: "actions",
    header: "Actions",
    cell: ({ row }) => <CellAction data={row.original} />,
  },
];
