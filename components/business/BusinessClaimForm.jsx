"use client";

import { useState } from "react";
import Button from "../ui/Button";
import Input from "../ui/Input";
import Textarea from "../ui/Textarea";
import Stepper from "../ui/Stepper";

export default function BusinessClaimForm({ businessId }) {
  const [step, setStep] = useState(1);

  const steps = [
    { id: 1, label: "Verify Identity" },
    { id: 2, label: "Provide Documentation" },
    { id: 3, label: "Review & Submit" },
  ];

  return (
    <div className="bg-white p-6 rounded border border-gray-300">
      <Stepper steps={steps} currentStep={step} />

      <div className="mt-6">
        {step === 1 && (
          <div className="space-y-4">
            <h3 className="font-bold">Step 1: Verify Identity</h3>
            <Input label="Full Name" placeholder="Enter your full name" />
            <Input label="Email" type="email" placeholder="Enter your email" />
            <Input label="Phone Number" placeholder="Enter your phone number" />
          </div>
        )}

        {step === 2 && (
          <div className="space-y-4">
            <h3 className="font-bold">Step 2: Provide Documentation</h3>
            <Textarea
              label="Relationship to Business"
              placeholder="Describe your relationship to this business"
            />
            <Input label="Upload Document" type="file" />
          </div>
        )}

        {step === 3 && (
          <div className="space-y-4">
            <h3 className="font-bold">Step 3: Review & Submit</h3>
            <p className="text-gray-600">
              Please review your information before submitting.
            </p>
          </div>
        )}

        <div className="flex justify-between mt-6">
          <Button
            variant="outline"
            onClick={() => setStep(Math.max(1, step - 1))}
            disabled={step === 1}
          >
            Previous
          </Button>
          <Button
            onClick={() => setStep(Math.min(3, step + 1))}
            disabled={step === 3}
          >
            {step === 3 ? "Submit" : "Next"}
          </Button>
        </div>
      </div>
    </div>
  );
}
