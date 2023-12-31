import Check from "@/components/Icons/Check";
import Typography from "@/components/Typography";
import Link from "next/link";

export const getLabelListItem = (labels: any[], searchParams: SearchParams) => {
  return labels.map((item) => {
    const selected = searchParams.labels === item.name;
    return {
      key: item.name,
      label: (
        <Link
          href={{
            query: {
              ...searchParams,
              labels: selected ? null : item.name,
            },
            slashes: true,
          }}
          className="text-issue-list-text flex items-center gap-2"
        >
          <span className="w-4 h-4 flex items-center justify-center text-issue-list-text">
            {selected && <Check />}
          </span>
          <span
            className="w-4 h-4 rounded-full"
            style={{ backgroundColor: `#${item.color}` }}
          />
          <Typography
            variant="h3"
            className="text-issue-list-text font-bold text-xs"
          >
            {item.name}
          </Typography>
        </Link>
      ),
      searchValue: item.name,
    };
  });
};
