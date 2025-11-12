"use client";

import { ArrowLeft, ChevronDown, Upload } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useBusinessContext } from "@/contexts/BusinessContext";

export default function CreateBusinessPage() {
  const router = useRouter();
  const { createBusinessPage } = useBusinessContext();
  const [currentStep, setCurrentStep] = useState(1); // Start at step 1
  const [formData, setFormData] = useState({
    businessName: "",
    customUrl: "",
    businessType: "",
    businessCategory: "",
    contactEmail: "",
    contactNumber: "",
    businessDescription: "",
    logo: null,
    coverPhoto: null,
    country: "",
    stateProvince: "",
    city: "",
    address: "",
    postalCode: "",
    googleMapsLink: "",
    businessContactEmail: "",
    businessPhoneNumber: "",
    website: "",
    facebook: "",
    linkedin: "",
    instagram: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleFileChange = (e) => {
    const { name } = e.target;
    const file = e.target.files[0];
    if (file) {
      setFormData((prev) => ({
        ...prev,
        [name]: file,
      }));
    }
  };

  const handleNext = () => {
    if (currentStep < 5) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const steps = [
    { number: 1, label: "Business Information" },
    { number: 2, label: "Branding & Media" },
    { number: 3, label: "Location" },
    { number: 4, label: "Contact" },
    { number: 5, label: "Online Presence" },
  ];

  return (
    <div className="bg-white border border-[#dde1e6] w-full">
      {/* Header Section */}
      <div className="px-6 py-6 border-b border-[#dde1e6]">
        {/* Back Button */}
        <Link
          href="/business"
          className="inline-flex items-center gap-2 text-[#535862] mb-5 hover:text-[#414651]"
        >
          <ArrowLeft className="w-5 h-5" />
          <span className="font-semibold text-base">Back</span>
        </Link>

        {/* Page Title */}
        <div className="space-y-2">
          <h1 className="text-2xl font-medium text-[#21272a]">
            Create Your Business Page
          </h1>
          <p className="text-lg text-[#535862]">
            Complete these steps to set up your business profile
          </p>
        </div>
      </div>

      {/* Form Content */}
      <div className="p-6">
        {/* Step Indicator */}
        <div className="flex gap-4 mb-6">
          {steps.map((step) => (
            <div key={step.number} className="flex items-center gap-2">
              <div
                className={`w-8 h-8 rounded-full flex items-center justify-center ${
                  step.number === currentStep
                    ? "bg-[#cccccc] text-[#21272a]"
                    : step.number < currentStep
                    ? "bg-[#ededed] text-[#a4a7ae]"
                    : "bg-[#ededed] text-[#a4a7ae]"
                }`}
              >
                <span className="text-sm font-medium">{step.number}</span>
              </div>
              <span
                className={`text-sm ${
                  step.number === currentStep
                    ? "font-medium text-[#21272a]"
                    : "font-normal text-[#a4a7ae]"
                }`}
              >
                {step.label}
              </span>
            </div>
          ))}
        </div>

        {/* Step 1: Business Information */}
        {currentStep === 1 && (
          <div className="border border-[#d5d7da] rounded-lg p-4 space-y-4">
            {/* Section Header */}
            <div className="space-y-2">
              <h2 className="text-lg font-medium text-[#21272a]">
                Business Information
              </h2>
              <p className="text-lg text-[#535862]">
                Provide clear and complete information to help users identify
                your business.
              </p>
            </div>

            {/* Business Name */}
            <div className="space-y-2">
              <label className="block text-base font-medium text-[#21272a]">
                Business Name *
              </label>
              <input
                type="text"
                name="businessName"
                value={formData.businessName}
                onChange={handleChange}
                placeholder="Lia Design Services"
                className="w-full px-4 py-3 bg-[#f2f4f8] border-b border-[#c1c7cd] text-base text-[#697077] focus:outline-none focus:border-[#414651]"
              />
            </div>

            {/* Custom URL */}
            <div className="space-y-2">
              <label className="block text-base font-medium text-[#21272a]">
                indoconnex.com/company/
              </label>
              <input
                type="text"
                name="customUrl"
                value={formData.customUrl}
                onChange={handleChange}
                placeholder="indoconnex.com/lia-design-services"
                className="w-full px-4 py-3 bg-[#f2f4f8] border-b border-[#c1c7cd] text-base text-[#a2a9b0] focus:outline-none focus:border-[#414651]"
              />
            </div>

            {/* Business Type & Category */}
            <div className="grid grid-cols-2 gap-4">
              {/* Business Type */}
              <div className="space-y-2">
                <label className="block text-base font-medium text-[#21272a]">
                  Business Type*
                </label>
                <div className="relative">
                  <select
                    name="businessType"
                    value={formData.businessType}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-[#f2f4f8] border-b border-[#c1c7cd] text-base text-[#21272a] appearance-none focus:outline-none focus:border-[#414651]"
                  >
                    <option value="">Select business type</option>
                    <option value="company">Company</option>
                    <option value="individual">Individual</option>
                    <option value="startup">Startup</option>
                  </select>
                  <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-6 h-6 text-[#717680] pointer-events-none" />
                </div>
              </div>

              {/* Business Category */}
              <div className="space-y-2">
                <label className="block text-base font-medium text-[#21272a]">
                  Business Category *
                </label>
                <div className="relative">
                  <select
                    name="businessCategory"
                    value={formData.businessCategory}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-[#f2f4f8] border-b border-[#c1c7cd] text-base text-[#21272a] appearance-none focus:outline-none focus:border-[#414651]"
                  >
                    <option value="">Select business category</option>
                    <option value="technology">Technology</option>
                    <option value="design">Design</option>
                    <option value="marketing">Marketing</option>
                    <option value="consulting">Consulting</option>
                  </select>
                  <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-6 h-6 text-[#717680] pointer-events-none" />
                </div>
              </div>
            </div>

            {/* Contact Email & Number */}
            <div className="grid grid-cols-2 gap-4">
              {/* Contact Email */}
              <div className="space-y-2">
                <label className="block text-base font-medium text-[#21272a]">
                  Contact Email *
                </label>
                <input
                  type="email"
                  name="contactEmail"
                  value={formData.contactEmail}
                  onChange={handleChange}
                  placeholder="e.g., Owner, Manager, Director"
                  className="w-full px-4 py-3 bg-[#f2f4f8] border-b border-[#c1c7cd] text-base text-[#697077] focus:outline-none focus:border-[#414651]"
                />
              </div>

              {/* Contact Number */}
              <div className="space-y-2">
                <label className="block text-base font-medium text-[#21272a]">
                  Contact Number *
                </label>
                <input
                  type="tel"
                  name="contactNumber"
                  value={formData.contactNumber}
                  onChange={handleChange}
                  placeholder="(123) 234567890"
                  className="w-full px-4 py-3 bg-[#f2f4f8] border-b border-[#c1c7cd] text-base text-[#697077] focus:outline-none focus:border-[#414651]"
                />
              </div>
            </div>

            {/* Business Description */}
            <div className="space-y-2">
              <label className="block text-sm text-[#21272a]">
                Business Description
              </label>
              <textarea
                name="businessDescription"
                value={formData.businessDescription}
                onChange={handleChange}
                placeholder="Tell us about your business, what you do, and what makes you unique"
                rows={4}
                className="w-full px-4 py-3.5 bg-[#f2f4f8] border-b border-[#c1c7cd] text-base text-[#697077] resize-none focus:outline-none focus:border-[#414651]"
              />
            </div>

            {/* Action Buttons */}
            <div className="flex items-center justify-between pt-2">
              <button
                type="button"
                onClick={handleBack}
                disabled={currentStep === 1}
                className="px-[18px] py-2.5 bg-white border border-[#e9eaeb] rounded-lg text-base font-semibold text-[#d5d7da] hover:bg-[#f5f5f5] disabled:opacity-50"
              >
                Back
              </button>

              <button
                type="button"
                onClick={handleNext}
                className="px-[18px] py-2.5 bg-black border border-black rounded-lg text-sm font-medium text-white hover:bg-[#414651]"
              >
                Next
              </button>
            </div>
          </div>
        )}

        {/* Step 2: Branding & Media */}
        {currentStep === 2 && (
          <div className="border border-[#d5d7da] rounded-lg p-4 space-y-4">
            {/* Section Header */}
            <div className="space-y-2">
              <h2 className="text-lg font-medium text-[#21272a]">
                Branding & Media
              </h2>
              <p className="text-lg text-[#535862]">
                Your logo and cover photo help your page stand out.
              </p>
            </div>

            {/* Upload Section */}
            <div className="flex gap-4">
              {/* Upload Logo */}
              <div className="flex-1 space-y-4">
                <label className="block text-base font-medium text-[#21272a]">
                  Upload business Logo *
                </label>
                <div className="border border-dashed border-[#d5d7da] rounded flex flex-col items-center justify-center p-10 space-y-2.5">
                  <input
                    type="file"
                    id="logo"
                    name="logo"
                    accept="image/png,image/jpeg,image/jpg"
                    onChange={handleFileChange}
                    className="hidden"
                  />
                  <label
                    htmlFor="logo"
                    className="cursor-pointer flex flex-col items-center gap-2.5"
                  >
                    <Upload className="w-6 h-6 text-[#535862]" />
                    <p className="text-base font-medium text-[#535862]">
                      Click to upload or drag and drop
                    </p>
                    <p className="text-sm text-[#535862]">PNG, JPG</p>
                  </label>
                  {formData.logo && (
                    <p className="text-sm text-[#21272a] mt-2">
                      {formData.logo.name}
                    </p>
                  )}
                </div>
              </div>

              {/* Upload Cover */}
              <div className="flex-1 space-y-4">
                <label className="block text-base font-medium text-[#21272a]">
                  Upload business cover
                </label>
                <div className="border border-dashed border-[#d5d7da] rounded flex flex-col items-center justify-center p-10 space-y-2.5">
                  <input
                    type="file"
                    id="coverPhoto"
                    name="coverPhoto"
                    accept="image/png,image/jpeg,image/jpg"
                    onChange={handleFileChange}
                    className="hidden"
                  />
                  <label
                    htmlFor="coverPhoto"
                    className="cursor-pointer flex flex-col items-center gap-2.5"
                  >
                    <Upload className="w-6 h-6 text-[#535862]" />
                    <p className="text-base font-medium text-[#535862]">
                      Click to upload or drag and drop
                    </p>
                    <p className="text-sm text-[#535862]">PNG, JPG</p>
                  </label>
                  {formData.coverPhoto && (
                    <p className="text-sm text-[#21272a] mt-2">
                      {formData.coverPhoto.name}
                    </p>
                  )}
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex items-center justify-between pt-2">
              <button
                type="button"
                onClick={handleBack}
                className="px-[18px] py-2.5 bg-white border border-[#d5d7da] rounded-lg text-base font-semibold text-[#414651] hover:bg-[#f5f5f5]"
              >
                Back
              </button>

              <button
                type="button"
                onClick={handleNext}
                className="px-[18px] py-2.5 bg-black border border-black rounded-lg text-sm font-medium text-white hover:bg-[#414651]"
              >
                Next
              </button>
            </div>
          </div>
        )}

        {/* Step 3: Location */}
        {currentStep === 3 && (
          <div className="border border-[#d5d7da] rounded-lg p-4 space-y-4">
            {/* Section Header */}
            <div className="space-y-2">
              <h2 className="text-lg font-medium text-[#21272a]">Location</h2>
              <p className="text-lg text-[#535862]">
                Your business location helps users find you more easily.
              </p>
            </div>

            {/* Country, State, City */}
            <div className="grid grid-cols-3 gap-4">
              {/* Country */}
              <div className="space-y-2">
                <label className="block text-base font-medium text-[#21272a]">
                  Country *
                </label>
                <div className="relative">
                  <select
                    name="country"
                    value={formData.country}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-[#f2f4f8] border-b border-[#c1c7cd] text-base text-[#21272a] appearance-none focus:outline-none focus:border-[#414651]"
                  >
                    <option value="">Select Country</option>
                    <option value="indonesia">Indonesia</option>
                    <option value="singapore">Singapore</option>
                    <option value="malaysia">Malaysia</option>
                  </select>
                  <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-6 h-6 text-[#717680] pointer-events-none" />
                </div>
              </div>

              {/* State/Province */}
              <div className="space-y-2">
                <label className="block text-base font-medium text-[#21272a]">
                  State/Province*
                </label>
                <div className="relative">
                  <select
                    name="stateProvince"
                    value={formData.stateProvince}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-[#f2f4f8] border-b border-[#c1c7cd] text-base text-[#21272a] appearance-none focus:outline-none focus:border-[#414651]"
                  >
                    <option value="">Select province</option>
                    <option value="jakarta">DKI Jakarta</option>
                    <option value="west-java">West Java</option>
                    <option value="east-java">East Java</option>
                  </select>
                  <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-6 h-6 text-[#717680] pointer-events-none" />
                </div>
              </div>

              {/* City */}
              <div className="space-y-2">
                <label className="block text-base font-medium text-[#21272a]">
                  City*
                </label>
                <div className="relative">
                  <select
                    name="city"
                    value={formData.city}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-[#f2f4f8] border-b border-[#c1c7cd] text-base text-[#21272a] appearance-none focus:outline-none focus:border-[#414651]"
                  >
                    <option value="">Select city</option>
                    <option value="jakarta">Jakarta</option>
                    <option value="bandung">Bandung</option>
                    <option value="surabaya">Surabaya</option>
                  </select>
                  <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-6 h-6 text-[#717680] pointer-events-none" />
                </div>
              </div>
            </div>

            {/* Address */}
            <div className="space-y-2">
              <label className="block text-base font-medium text-[#21272a]">
                Address*
              </label>
              <input
                type="text"
                name="address"
                value={formData.address}
                onChange={handleChange}
                placeholder="Street address"
                className="w-full px-4 py-3 bg-[#f2f4f8] border-b border-[#c1c7cd] text-base text-[#697077] focus:outline-none focus:border-[#414651]"
              />
            </div>

            {/* Postal Code & Google Maps Link */}
            <div className="grid grid-cols-2 gap-4">
              {/* Postal Code */}
              <div className="space-y-2">
                <label className="block text-base font-medium text-[#21272a]">
                  Postal code
                </label>
                <input
                  type="text"
                  name="postalCode"
                  value={formData.postalCode}
                  onChange={handleChange}
                  placeholder="e.g., 123456"
                  className="w-full px-4 py-3 bg-[#f2f4f8] border-b border-[#c1c7cd] text-base text-[#697077] focus:outline-none focus:border-[#414651]"
                />
              </div>

              {/* Google Maps Link */}
              <div className="space-y-2">
                <label className="block text-base font-medium text-[#21272a]">
                  Google Maps Link
                </label>
                <input
                  type="url"
                  name="googleMapsLink"
                  value={formData.googleMapsLink}
                  onChange={handleChange}
                  placeholder="https://maps.google.com"
                  className="w-full px-4 py-3 bg-[#f2f4f8] border-b border-[#c1c7cd] text-base text-[#697077] focus:outline-none focus:border-[#414651]"
                />
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex items-center justify-between pt-2">
              <button
                type="button"
                onClick={handleBack}
                className="px-[18px] py-2.5 bg-white border border-[#d5d7da] rounded-lg text-base font-semibold text-[#414651] hover:bg-[#f5f5f5]"
              >
                Back
              </button>

              <button
                type="button"
                onClick={handleNext}
                className="px-[18px] py-2.5 bg-black border border-black rounded-lg text-sm font-medium text-white hover:bg-[#414651]"
              >
                Next
              </button>
            </div>
          </div>
        )}

        {/* Step 4: Contact */}
        {currentStep === 4 && (
          <div className="border border-[#d5d7da] rounded-lg p-4 space-y-4">
            {/* Section Header */}
            <div className="space-y-2">
              <h2 className="text-lg font-medium text-[#21272a]">
                Contact Information
              </h2>
              <p className="text-lg text-[#535862]">
                Add at least one valid contact so customers can reach you.
              </p>
            </div>

            {/* Contact Email & Phone Number */}
            <div className="grid grid-cols-2 gap-4">
              {/* Contact Email */}
              <div className="space-y-2">
                <label className="block text-base font-medium text-[#21272a]">
                  Contact Email *
                </label>
                <input
                  type="email"
                  name="businessContactEmail"
                  value={formData.businessContactEmail}
                  onChange={handleChange}
                  placeholder="contact@business.com"
                  className="w-full px-4 py-3 bg-[#f2f4f8] border-b border-[#c1c7cd] text-base text-[#697077] focus:outline-none focus:border-[#414651]"
                />
              </div>

              {/* Phone Number */}
              <div className="space-y-2">
                <label className="block text-base font-medium text-[#21272a]">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  name="businessPhoneNumber"
                  value={formData.businessPhoneNumber}
                  onChange={handleChange}
                  placeholder="+62 82121 2625"
                  className="w-full px-4 py-3 bg-[#f2f4f8] border-b border-[#c1c7cd] text-base text-[#697077] focus:outline-none focus:border-[#414651]"
                />
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex items-center justify-between pt-2">
              <button
                type="button"
                onClick={handleBack}
                className="px-[18px] py-2.5 bg-white border border-[#d5d7da] rounded-lg text-base font-semibold text-[#414651] hover:bg-[#f5f5f5]"
              >
                Back
              </button>

              <button
                type="button"
                onClick={handleNext}
                className="px-[18px] py-2.5 bg-black border border-black rounded-lg text-sm font-medium text-white hover:bg-[#414651]"
              >
                Next
              </button>
            </div>
          </div>
        )}

        {/* Step 5: Online Presence */}
        {currentStep === 5 && (
          <div className="border border-[#d5d7da] rounded-lg p-4 space-y-4">
            {/* Section Header */}
            <div className="space-y-2">
              <h2 className="text-lg font-medium text-[#21272a]">
                Online Presence
              </h2>
              <p className="text-lg text-[#535862]">
                Connect your social media and online platforms.
              </p>
            </div>

            {/* Website & Facebook */}
            <div className="grid grid-cols-2 gap-4">
              {/* Website */}
              <div className="space-y-2">
                <label className="block text-base font-medium text-[#21272a]">
                  Website
                </label>
                <input
                  type="url"
                  name="website"
                  value={formData.website}
                  onChange={handleChange}
                  placeholder="https://website.com"
                  className="w-full px-4 py-3 bg-[#f2f4f8] border-b border-[#c1c7cd] text-base text-[#697077] focus:outline-none focus:border-[#414651]"
                />
              </div>

              {/* Facebook */}
              <div className="space-y-2">
                <label className="block text-base font-medium text-[#21272a]">
                  Facebook
                </label>
                <input
                  type="url"
                  name="facebook"
                  value={formData.facebook}
                  onChange={handleChange}
                  placeholder="https://facebook.com"
                  className="w-full px-4 py-3 bg-[#f2f4f8] border-b border-[#c1c7cd] text-base text-[#697077] focus:outline-none focus:border-[#414651]"
                />
              </div>
            </div>

            {/* LinkedIn & Instagram */}
            <div className="grid grid-cols-2 gap-4">
              {/* LinkedIn */}
              <div className="space-y-2">
                <label className="block text-base font-medium text-[#21272a]">
                  LinkedIn
                </label>
                <input
                  type="url"
                  name="linkedin"
                  value={formData.linkedin}
                  onChange={handleChange}
                  placeholder="https://linkedin.com"
                  className="w-full px-4 py-3 bg-[#f2f4f8] border-b border-[#c1c7cd] text-base text-[#697077] focus:outline-none focus:border-[#414651]"
                />
              </div>

              {/* Instagram */}
              <div className="space-y-2">
                <label className="block text-base font-medium text-[#21272a]">
                  Instagram
                </label>
                <input
                  type="url"
                  name="instagram"
                  value={formData.instagram}
                  onChange={handleChange}
                  placeholder="https://instagram.com"
                  className="w-full px-4 py-3 bg-[#f2f4f8] border-b border-[#c1c7cd] text-base text-[#697077] focus:outline-none focus:border-[#414651]"
                />
              </div>
            </div>

            {/* Confirmation Checkbox */}
            <div className="flex items-center gap-2 pt-2">
              <input
                type="checkbox"
                id="confirmAccuracy"
                className="w-4 h-4 border border-[#d5d7da] rounded"
              />
              <label
                htmlFor="confirmAccuracy"
                className="text-sm font-medium text-[#414651]"
              >
                I confirm that the information provided is accurate and
                complete.
              </label>
            </div>

            {/* Action Buttons */}
            <div className="flex items-center justify-between pt-2">
              <button
                type="button"
                onClick={handleBack}
                className="px-[18px] py-2.5 bg-white border border-[#d5d7da] rounded-lg text-base font-semibold text-[#414651] hover:bg-[#f5f5f5]"
              >
                Back
              </button>

              <button
                type="button"
                onClick={() => {
                  // Save business data to context
                  createBusinessPage(formData);
                  // Navigate to dashboard
                  router.push("/business/dashboard");
                }}
                className="px-[18px] py-2.5 bg-black border border-black rounded-lg text-sm font-medium text-white hover:bg-[#414651]"
              >
                Create Business
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
