"use client";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

// Update the interface to include the optional links array
interface TeamMemberDialogProps {
  isOpen: boolean;
  onClose: () => void;
  member: {
    name: string;
    role: string;
    image: string;
    description: string;
    links?: string[]; // Added links here as well
  };
}

export default function TeamMemberDialog({
  isOpen,
  onClose,
  member,
}: TeamMemberDialogProps) {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold">
            {member.name}
          </DialogTitle>
        </DialogHeader>
        <div className="grid md:grid-cols-2 gap-6 mt-4">
          <div className="w-full max-h-[400px] overflow-hidden rounded-lg shadow-lg">
            <img
              src={member.image}
              alt={member.name}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-primary">
              {member.role}
            </h4>
            <div className="prose prose-sm max-w-none">
              {/* Display the main description paragraph */}
              <p className="text-gray-600 whitespace-pre-wrap">
                {member.description}
              </p>

              {/* Check if there are links and display them */}
              {member.links && member.links.length > 0 && (
                <div className="mt-4">
                  {" "}
                  {/* Add some spacing above links */}
                  <p className="text-md font-semibold text-gray-800 mb-2">
                    Relevant Links:
                  </p>{" "}
                  {/* Optional heading */}
                  <ul className="list-disc list-inside space-y-1">
                    {" "}
                    {/* Use a list for links */}
                    {member.links.map((link, index) => (
                      <li key={index}>
                        <a
                          href={link}
                          target="_blank" // Open link in a new tab
                          rel="noopener noreferrer" // Security best practice for target="_blank"
                          className="text-blue-600 hover:underline text-sm" // Basic link styling
                        >
                          {link} {/* Display the URL text */}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
