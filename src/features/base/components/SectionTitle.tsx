import React, { FunctionComponent } from "react";

interface Props {
  label: string;
}

export const SectionTitle: FunctionComponent<Props> = ({ label }) => {
  return <div className="text-3xl text-gray-600 font-bold">{label}</div>;
};
