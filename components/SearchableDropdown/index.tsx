"use client";

import { useOutsideClick } from "@/hooks/useOutsideClick";
import { cloneElement } from "@/utils/reactNode";
import React, { useEffect, useMemo, useRef, useState } from "react";
import Close from "../Icons/Close";
import { CSSTransition } from "react-transition-group";
import debounce from "lodash.debounce";

const SearchableDropdown: React.FC<ISearchableDropdown> = ({
  items,
  children,
  filterBy,
  filtering = true,
}) => {
  const [options, setOptions] = useState(items);
  const [isOpen, setIsOpen] = useState(false);

  const dropdownRef = useRef<HTMLDivElement>(null);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const closeDropdown = () => {
    setIsOpen(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const filteredItems = items.filter((item) =>
      item.searchValue!.toLowerCase().includes(e.target.value.toLowerCase())
    );
    setOptions(filteredItems);
  };

  const debouncedResults = useMemo(() => {
    return debounce(handleChange, 300);
  }, []);

  useEffect(() => {
    return () => {
      debouncedResults.cancel();
    };
  });

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
        timeout={100}
        classNames={{
          enter: "opacity-0",
          enterActive: "opacity-100",
          exit: "opacity-100",
          exitActive: "opacity-0",
        }}
        nodeRef={dropdownRef}
        unmountOnExit
        onExit={() => {
          setOptions(items);
        }}
      >
        <div
          className="absolute top-full right-0 max-w-xs w-80  bg-muted-hover border border-issue-list-border rounded-md shadow-md z-10"
          ref={dropdownRef}
        >
          <div
            // sticky
            className="sticky top-0 z-10 bg-muted-hover"
          >
            <header className="p-[7px] pl-4 text-xs font-semibold flex items-center justify-between text-issue-list-text leading-normal">
              {filterBy !== "sort" ? `Filter by ${filterBy}` : "Sort by"}
              <span
                className="cursor-pointer text-[#7d8590] hover:text-issue-list-text transition-colors duration-200 ease-in-out -m-[7px] -mr-[7px] p-[7px]"
                onClick={() => {
                  setIsOpen(false);
                }}
              >
                <Close />
              </span>
            </header>
            {filtering && (
              <div className="p-2 border-b border-b-issue-list-border">
                <input
                  type="text"
                  className="w-full placeholder:capitalize text-issue-list-text bg-muted rounded-md text-sm px-3 py-[5px] focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder={`Filter ${filterBy}s`}
                  onChange={debouncedResults}
                />
              </div>
            )}
          </div>
          <ul className="divide-y divide-issue-list-border max-h-[380px]  overflow-hidden overflow-y-auto">
            {options?.length > 0 ? (
              options.map((item) => (
                <li
                  className="px-4 py-[7px] text-sm text-issue-list-text hover:bg-[#6e76811a] cursor-pointer transition-colors duration-200 ease-in-out"
                  key={item.key}
                >
                  {item.label}
                </li>
              ))
            ) : (
              <li className="border-none px-4 py-[7px] text-sm text-issue-list-text hover:bg-[#6e76811a] cursor-pointer transition-colors duration-200 ease-in-out">
                No results
              </li>
            )}
          </ul>
        </div>
      </CSSTransition>
    </div>
  );
};

export default SearchableDropdown;
