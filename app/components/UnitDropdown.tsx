import React from "react";
import { Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Button } from "@nextui-org/react";

interface UnitDropdownProps {
  onUnitChange: (unit: string) => void;
}

export default function UnitDropdown({onUnitChange}: UnitDropdownProps) {
  const [selectedKey, setSelectedKey] = React.useState(new Set(["grams"]));

  const handleSelectionChange = (keys: React.Key[]) => {
    const selected = Array.from(keys)[0] as string;
    setSelectedKey(new Set([selected]));
    onUnitChange(selected)
  }

  return (
    <Dropdown>
      <DropdownTrigger>
        <Button variant="bordered">
          {selectedKey}
        </Button>
      </DropdownTrigger>
      <DropdownMenu
        aria-label="ingredient unit dropdown"
        variant="flat"
        disallowEmptySelection
        selectionMode="single"
        selectedKeys={selectedKey}
        onSelectionChange={handleSelectionChange}>
        <DropdownItem key="grams">gram</DropdownItem>
        <DropdownItem key="ml">ml</DropdownItem>
        <DropdownItem key="ts">ts</DropdownItem>
        <DropdownItem key="ss">ss</DropdownItem>
        <DropdownItem key="unit">enhet</DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
}