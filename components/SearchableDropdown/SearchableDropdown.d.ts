interface ISearchableDropdown {
  items: ISearchableDropdownItem[];
  children: React.ReactNode;
  searchKey?: string;
  filterBy: string;
  filtering?: boolean;
}

interface ISearchableDropdownItem {
  label: React.ReactNode | string;
  key: string;
  searchValue?: string;
}
