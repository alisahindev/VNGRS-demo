"use client";

import { useOutsideClick } from "@/hooks/useOutsideClick";
import { cloneElement } from "@/utils/reactNode";
import React, { useRef, useState } from "react";
import Close from "../Icons/Close";
import { CSSTransition } from "react-transition-group";

const SearchableDropdown: React.FC<ISearchableDropdown> = ({
  items,
  children,
  filterBy,
}) => {
  const [options, setOptions] = useState(items);
  const [isOpen, setIsOpen] = useState(false);

  const dropdownRef = useRef<HTMLDivElement>(null);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const closeDropdown = () => {
    console.log("closeDropdown");
    setIsOpen(false);
  };

  const onSearch = (query: string) => {
    const filteredOptions = items.filter((item) =>
      item.searchValue.toLowerCase().includes(query.toLowerCase())
    );
    setOptions(filteredOptions);
  };

  useOutsideClick(dropdownRef, closeDropdown);

  const child = React.Children.only(children) as React.ReactElement<any>;

  const dropdownTrigger = cloneElement(child, {
    className: child.props.className,
    onClick: toggleDropdown,
  });

  return (
    <div className="relative">
      {dropdownTrigger}
      <CSSTransition
        in={isOpen}
        timeout={500}
        classNames={{
          enter: "max-h-0",
          enterActive: "max-h-[500px] transition-all duration-300 ease-in-out",
          exit: "max-h-[500px]",
          exitActive: "max-h-0 transition-all duration-300 ease-in-out",
        }}
        unmountOnExit
      >
        <div
          className="absolute top-full right-0 max-w-xs w-80  bg-muted-hover border border-issue-list-border rounded-md shadow-md z-10"
          ref={dropdownRef}
        >
          <header className="p-[7px] pl-4 text-xs font-semibold flex items-center justify-between text-issue-list-text leading-normal">
            Filter by {filterBy}
            <span
              className="cursor-pointer text-[#7d8590] hover:text-issue-list-text transition-colors duration-200 ease-in-out -m-[7px] -mr-[7px] p-[7px]"
              onClick={() => {
                setIsOpen(false);
              }}
            >
              <Close />
            </span>
          </header>
          <div className="p-2 border-b border-b-issue-list-border">
            <input
              type="text"
              className="w-full placeholder:capitalize text-issue-list-text bg-muted rounded-md text-sm px-3 py-[5px] focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder={`Filter ${filterBy}s`}
              onChange={(e) => {
                onSearch(e.target.value);
              }}
            />
          </div>
          <ul>
            {options?.length > 0 ? (
              items.map((item) => <li key={item.key}>{item.label}</li>)
            ) : (
              <li className="border-none">No results</li>
            )}
          </ul>
        </div>
      </CSSTransition>
    </div>
  );
};

export default SearchableDropdown;
