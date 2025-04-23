"use client";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

interface TeamMemberDialogProps {
  isOpen: boolean;
  onClose: () => void;
  member: {
    name: string;
    role: string;
    image: string;
    description: string;
  };
}

export default function TeamMemberDialog({
  isOpen,
  onClose,
  member,
}: TeamMemberDialogProps) {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold">
            {member.name}
          </DialogTitle>
        </DialogHeader>
        <div className="grid md:grid-cols-2 gap-6 mt-4">
          <div className="w-full aspect-[3/4] overflow-hidden rounded-lg shadow-lg">
            <img
              src={member.image}
              alt={member.name}
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <h4 className="text-lg font-semibold text-primary mb-2">
              {member.role}
            </h4>
            <p className="text-gray-600 text-justify">{member.description}</p>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
