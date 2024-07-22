import React, { Key } from "react";
import { Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Button } from "@nextui-org/react";

interface UnitDropdownProps {
  onUnitChange: (unit: string) => void;
  defaultUnit?: string;
}

export default function UnitDropdown({onUnitChange, defaultUnit = "grams"}: UnitDropdownProps) {
  const [selectedKey, setSelectedKey] = React.useState<string>(defaultUnit);

  const handleSelectionChange = (keys: "all" | Set<Key>) => {
    const selected = Array.from(keys)[0] as string;
    setSelectedKey(selected);
    onUnitChange(selected)
  }

  return (
      <Dropdown>
        <DropdownTrigger>
          <Button
            className="bg-sky-50" 
            variant="bordered">
            {selectedKey}
          </Button>
        </DropdownTrigger>
        <DropdownMenu
          aria-label="ingredient unit dropdown"
          variant="flat"
          disallowEmptySelection
          selectionMode="single"
          selectedKeys={new Set([selectedKey])}
          onSelectionChange={handleSelectionChange}>
          <DropdownItem key="grams">gram</DropdownItem>
          <DropdownItem key="ml">ml</DropdownItem>
          <DropdownItem key="ts">ts</DropdownItem>
          <DropdownItem key="ss">ss</DropdownItem>
          <DropdownItem key="enhet">enhet</DropdownItem>
        </DropdownMenu>
      </Dropdown>
  );
}