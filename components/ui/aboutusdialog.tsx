// src/components/ui/AboutUsDialog.tsx
"use client";

import React from "react";
// Assuming you use shadcn/ui Dialog components like in TeamMemberDialog
// Adjust imports based on your actual dialog library/implementation
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogClose, // Use DialogClose for the 'X' button
} from "@/components/ui/dialog"; // Ensure this path is correct
import { X } from "lucide-react";

interface AboutUsDialogProps {
  isOpen: boolean;
  onClose: () => void;
}

const AboutUsDialog: React.FC<AboutUsDialogProps> = ({ isOpen, onClose }) => {
  // Use the Dialog component's controlled state
  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="sm:max-w-[60%] max-h-[85vh] flex flex-col">
        {" "}
        {/* Adjust width/height */}
        <DialogHeader>
          <DialogTitle>About Research for Nepal (RfN)</DialogTitle>
        </DialogHeader>
        {/* Make content scrollable */}
        <div className="prose prose-lg max-w-none overflow-y-auto pr-6 mt-4">
          {/* --- PASTE THE FULL ORIGINAL "ABOUT US" CONTENT HERE --- */}
          <p className="text-lg text-gray-600 mb-6 text-justify">
            Research for Nepal (RfN) is a pioneering non-profit research
            institute, established in 2023 with the vision of fostering
            knowledge-driven national development. Our motto, "Diverse Nepal,
            Prosperous Nepali," reflects our commitment to utilizing Nepal's
            rich technological, industrial, cultural, environmental, and
            economic diversity to drive inclusive and sustainable progress.
          </p>

          <p className="text-lg text-gray-600 mb-6 text-justify">
            In an era of rapid global transformation, Nepal encounters both
            challenges and opportunities in critical areas such as climate
            change adaptation, technological innovation, industrial growth,
            economic sustainability, and policy modernization. To tackle these
            issues, Research for Nepal was established with the following goals:
          </p>

          <ul className="space-y-4 text-gray-600 list-decimal pl-6 mb-8 text-justify">
            <li>
              Promoting innovation, modernization, expansion, and
              competitiveness within Nepal's industrial and technological
              sectors.
            </li>
            <li>
              Strengthening the international standing of Nepal's research
              community through collaboration and knowledge exchange.
            </li>
            <li>
              Providing cutting-edge solutions and technologies to meet emerging
              public and private sector needs.
            </li>
            <li>
              Advising the government and other public institutions on policy
              formulation, governance, investment and strategic decision-making.
            </li>
            <li>
              Developing human capital by empowering researchers, technologists,
              and scholars through training, mentorship, and academic
              collaboration.
            </li>
          </ul>

          <p className="text-lg text-gray-600 mb-6 text-justify">
            At Research for Nepal, our greatest asset is knowledge—driven by the
            people who create, refine, and apply it. Our team consists of:
          </p>

          <ul className="space-y-4 text-gray-600 list-decimal pl-6 mb-8 text-justify">
            <li>
              Dedicated researchers and technologists committed to advancing
              Nepal's research landscape.
            </li>
            <li>
              Aspiring young scholars from diverse academic backgrounds,
              actively engaged in graduate and postgraduate studies at leading
              universities in Nepal.
            </li>
            <li>
              Research associates from universities, private firms, and research
              institutions who actively contribute to our initiatives.
            </li>
          </ul>

          <p className="text-lg text-gray-600 mb-6 text-justify">
            Through interdisciplinary research, policy advocacy, and
            capacity-building programs, RfN aims to bridge the gap between
            academic research and real-world application, ensuring that
            knowledge leads to tangible societal progress. We believe that by
            investing in research, innovation, and human capital, Nepal can
            emerge as a globally recognized hub of knowledge and sustainable
            development.
          </p>

          <p className="text-lg text-gray-600 text-justify">
            We invite researchers, policymakers, students, and organizations to
            collaborate with us in shaping a stronger, more resilient, and
            prosperous Nepal.
          </p>
          {/* --- END OF PASTED CONTENT --- */}
        </div>
        {/* Optional: Add an explicit close button at the bottom if desired */}
        {/* <DialogFooter>
            <Button variant="outline" onClick={onClose}>Close</Button>
        </DialogFooter> */}
      </DialogContent>
    </Dialog>
  );
};

export default AboutUsDialog;
