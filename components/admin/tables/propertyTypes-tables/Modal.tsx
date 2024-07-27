"use client";

import Input from "@/components/ui/Input";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
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

interface ModalProps {
  onSubmit: (data: { type: string }) => void;
}

export function Modal({ onSubmit }: ModalProps) {
  const [data, setData] = useState({
    // name: "",
    type: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSelectChange = (value: string) => {
    setData((prev) => ({
      ...prev,
      type: value,
    }));
  };

  const handleSubmit = () => {
    onSubmit(data);
    setData({ type: "" });
  };

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button className="text-xs md:text-sm">
          <Plus className="mr-2 h-4 w-4" /> Add New
        </Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Add Property Type</SheetTitle>
          <SheetDescription>Add a new property type</SheetDescription>
        </SheetHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Select onValueChange={handleSelectChange} value={data.type}>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Select Property Type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="residential">Residential</SelectItem>
                <SelectItem value="commercial">Commercial</SelectItem>
              </SelectContent>
            </Select>
          </div>
          {/* <div className="grid grid-cols-4 items-center gap-4">
            <Input
              label="Name"
              id="name"
              name="name"
              value={data.name}
              onChange={handleChange}
              className="col-span-4"
            />
          </div> */}
        </div>
        <SheetFooter>
          <SheetClose asChild>
            <Button onClick={handleSubmit} type="button">
              Save changes
            </Button>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}
