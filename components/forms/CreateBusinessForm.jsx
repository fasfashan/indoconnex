"use client";

import { useState } from "react";
import Button from "../ui/Button";
import Input from "../ui/Input";
import Textarea from "../ui/Textarea";
import Select from "../ui/Select";
import Stepper from "../ui/Stepper";

export default function CreateBusinessForm() {
  const [step, setStep] = useState(1);

  const steps = [
    { id: 1, label: "Basic Info" },
    { id: 2, label: "Details" },
    { id: 3, label: "Contact" },
  ];

  return (
    <div className="bg-white p-6 rounded border border-gray-300">
      <Stepper steps={steps} currentStep={step} />

      <div className="mt-6">
        {step === 1 && (
          <div className="space-y-4">
            <h3 className="font-bold">Step 1: Basic Information</h3>
            <Input
              label="Business Name"
              placeholder="Enter business name"
              required
            />
            <Select
              label="Category"
              options={[
                { value: "", label: "Select a category" },
                { value: "restaurant", label: "Restaurant" },
                { value: "retail", label: "Retail" },
                { value: "services", label: "Services" },
              ]}
            />
            <Textarea
              label="Description"
              placeholder="Describe your business"
            />
          </div>
        )}

        {step === 2 && (
          <div className="space-y-4">
            <h3 className="font-bold">Step 2: Business Details</h3>
            <Input label="Website" placeholder="https://..." />
            <Input label="Established Year" type="number" placeholder="2020" />
            <Textarea
              label="Services Offered"
              placeholder="List your main services"
            />
          </div>
        )}

        {step === 3 && (
          <div className="space-y-4">
            <h3 className="font-bold">Step 3: Contact Information</h3>
            <Input
              label="Email"
              type="email"
              placeholder="contact@business.com"
            />
            <Input label="Phone" placeholder="+62 xxx xxx xxxx" />
            <Textarea label="Address" placeholder="Enter full address" />
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
          <Button onClick={() => setStep(Math.min(3, step + 1))}>
            {step === 3 ? "Create Business" : "Next"}
          </Button>
        </div>
      </div>
    </div>
  );
}
