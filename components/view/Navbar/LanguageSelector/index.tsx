"use client";

import Dropdown from "@/components/ui/dropdown";

export type LanguageSelectorProps = {
  openTop?: boolean;
};

const LanguageSelector = ({ openTop }: LanguageSelectorProps) => {
  return (
    <Dropdown
      openTop={openTop}
      buttonTrigger="🇸🇬"
      Items={[
        {
          title: "🇦🇺",
          onClick: () => {},
        },
        {
          title: "🇺🇸",
          onClick: () => {},
        },
      ]}
    />
  );
};

export default LanguageSelector;
