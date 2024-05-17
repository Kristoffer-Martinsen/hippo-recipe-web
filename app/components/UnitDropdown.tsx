import React from "react";
import { Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Button } from "@nextui-org/react";

export default function UnitDropdown() {
  return (
    <Dropdown>
      <DropdownTrigger>
        <Button variant="bordered">
          Choose measurement
        </Button>
      </DropdownTrigger>
      <DropdownMenu>
        <DropdownItem>Grams</DropdownItem>
        <DropdownItem>ml</DropdownItem>
        <DropdownItem>Spiseskje</DropdownItem>
        <DropdownItem>Teskje</DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
}