interface ISearchableDropdown {
  items: ISearchableDropdownItem[];
  children: React.ReactNode;
  searchKey?: string;
  filterBy: string;
}

interface ISearchableDropdownItem {
  label: React.ReactNode | string;
  key: string;
  searchValue: string;
}
