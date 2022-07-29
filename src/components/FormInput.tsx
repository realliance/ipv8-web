import React from 'react';

interface FormInputProps {
  label: string,
  value: string,
  placeholder?: string,
  onChange: (v: string) => void,
}

const FormInput = ({ label, value, placeholder, onChange }: FormInputProps) => (
  <div className="col-span-3 sm:col-span-2">
    <label className="block text-md font-medium text-gray-700">{label} </label>
    <div className="mt-1 flex rounded-md shadow-md">
      <input type="text" className="focus:ring-indigo-500 focus:border-indigo-500 flex-1 block w-full rounded-md sm:text-sm border-gray-300 p-1" placeholder={placeholder || ""} value={value} onChange={(e) => onChange(e.currentTarget.value)}/>
    </div>
  </div>
);

export default FormInput;
