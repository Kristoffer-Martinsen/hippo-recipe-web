import React from "react";
import { Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Button } from "@nextui-org/react";

export default function UnitDropdown() {
  const [selectedKeys, setSelectedKeys] = React.useState(new Set(["grams"]));
  const selectedValue = React.useMemo(
    () => Array.from(selectedKeys).join(", "),
    [selectedKeys]
  );

  return (
    <Dropdown>
      <DropdownTrigger>
        <Button variant="bordered">
          {selectedValue}
        </Button>
      </DropdownTrigger>
      <DropdownMenu
        aria-label="ingredient unit dropdown"
        variant="flat"
        disallowEmptySelection
        selectionMode="single"
        selectedKeys={selectedKeys}
        onSelectionChange={setSelectedKeys}>
        <DropdownItem key="grams">grams</DropdownItem>
        <DropdownItem key="ml">ml</DropdownItem>
        <DropdownItem key="teskje">teskje</DropdownItem>
        <DropdownItem key="spiseskje">spiseskje</DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
}