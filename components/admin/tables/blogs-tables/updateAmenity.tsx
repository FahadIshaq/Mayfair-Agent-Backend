"use client";

import Input from "@/components/ui/Input";
import { Button } from "@/components/ui/button";
import { DropdownMenuItem } from "@/components/ui/dropdown-menu";
import { Label } from "@/components/ui/label";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Plus } from "lucide-react";
import { useState } from "react";
import { Edit } from "lucide-react";
import { Locations } from "@/constants/data";

interface CellActionProps {
  data: Locations;
}

export const UpdateLocation: React.FC<CellActionProps> = ({ data }) => {
  const [name, setName] = useState(data);

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button className="bg-green-600 hover:bg-green-900">
          <Edit className="mr-2 h-4 w-4" /> Edit
        </Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Edit Location</SheetTitle>
          <SheetDescription>Update the location details.</SheetDescription>
        </SheetHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Input
              label="Name"
              id="name"
              value={name.name}
              onChange={(e) => setName({ ...name, name: e.target.value })}
              className="col-span-4"
            />
          </div>
        </div>
        <SheetFooter>
          <SheetClose asChild>
            <Button type="submit">Save changes</Button>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
};
