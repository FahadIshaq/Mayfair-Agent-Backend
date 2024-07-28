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
import { useState, useEffect } from "react";
import axios from "axios";
import { Checkbox } from "@/components/ui/checkbox";

interface Amenity {
  _id: string;
  name: string;
}

interface ModalProps {
  onSubmit: (data: { type: string; name: string; amenities: string[] }) => void;
}

export function Modal({ onSubmit }: ModalProps) {
  const [data, setData] = useState({
    name: "",
    type: "",
    amenities: [] as string[],
  });
  const [amenitiesData, setAmenitiesData] = useState<Amenity[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAmenities = async () => {
      try {
        const response = await axios.get(
          `${process.env.NEXT_PUBLIC_API_URL}/amenities`,
          {
            headers: {
              Authorization: `Bearer ${process.env.NEXT_PUBLIC_ADMIN_AUTH_TOKEN}`,
            },
          }
        );

        setAmenitiesData(response.data.properties);
        setLoading(false);
      } catch (error) {
        console.error("An error occurred:", error);
        setLoading(false);
      }
    };

    fetchAmenities();
  }, []);

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

  const handleCheckboxChange = (amenityId: string) => {
    setData((prev) => ({
      ...prev,
      amenities: prev.amenities.includes(amenityId)
        ? prev.amenities.filter((id) => id !== amenityId)
        : [...prev.amenities, amenityId],
    }));
  };

  const handleSubmit = () => {
    onSubmit(data);
    setData({ type: "", name: "", amenities: [] });
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
          <div className="grid grid-cols-4 items-center gap-4">
            <Input
              label="Name"
              id="name"
              name="name"
              value={data.name}
              onChange={handleChange}
              className="col-span-4"
            />
          </div>
          <div className="grid gap-4">
            <label className="text-sm font-medium">Select Amenities</label>
            {loading ? (
              <div>Loading...</div>
            ) : (
              amenitiesData.map((amenity) => (
                <div key={amenity._id} className="flex items-center">
                  <Checkbox
                    id={amenity._id}
                    onCheckedChange={() => handleCheckboxChange(amenity._id)}
                    checked={data.amenities.includes(amenity._id)}
                  />
                  <label htmlFor={amenity._id} className="ml-2">
                    {amenity.name}
                  </label>
                </div>
              ))
            )}
          </div>
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
