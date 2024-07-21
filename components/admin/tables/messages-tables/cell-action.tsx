"use client";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Messages } from "@/constants/data";
import {
  CheckCheck,
  Edit,
  MessageSquareQuote,
  MoreHorizontal,
  Trash,
} from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { AlertModal } from "@/components/modal/alert-modal";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Textarea } from "@/components/ui/textarea";

interface CellActionProps {
  data: Messages;
}

export const CellAction: React.FC<CellActionProps> = ({ data }) => {
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);
  const [reply, setReply] = useState("");
  const router = useRouter();
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const handleReply = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setReply("");
      setIsDialogOpen(false);
    }, 2000);
  };

  const onConfirm = async () => {};

  return (
    <>
      <AlertModal
        isOpen={open}
        onClose={() => setOpen(false)}
        onConfirm={onConfirm}
        loading={loading}
      />
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DropdownMenu modal={false}>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Open menu</span>
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Actions</DropdownMenuLabel>
            <DialogTrigger asChild>
              <DropdownMenuItem>
                <MessageSquareQuote className="mr-2 h-4 w-4" /> Reply
              </DropdownMenuItem>
            </DialogTrigger>
            <DropdownMenuItem>
              <CheckCheck className="mr-2 h-4 w-4" /> Resolved
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => setOpen(true)}>
              <Trash className="mr-2 h-4 w-4" /> Delete
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>

        <DialogContent>
          <DialogHeader>
            <DialogTitle>Your suggestions/reply</DialogTitle>
          </DialogHeader>
          <div className="w-full">
            <Textarea
              id="message"
              placeholder="Your reply"
              onChange={(e) => setReply(e.target.value)}
              value={reply}
              disabled={loading}
            />
          </div>
          <DialogFooter>
            <Button onClick={handleReply} type="submit">
              Submit
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
};
