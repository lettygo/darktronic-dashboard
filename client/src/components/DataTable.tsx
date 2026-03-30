import { GlowCard } from "./GlowCard";

interface Column {
  key: string;
  label: string;
  align?: "left" | "right" | "center";
  highlight?: boolean;
  render?: (value: any, row: any) => React.ReactNode;
}

interface DataTableProps {
  columns: Column[];
  data: Record<string, any>[];
  title?: string;
  className?: string;
}

export function DataTable({ columns, data, title, className = "" }: DataTableProps) {
  return (
    <GlowCard className={`p-4 ${className}`}>
      {title && <h3 className="text-sm font-semibold text-[#00E5FF] mb-3">{title}</h3>}
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-[rgba(0,229,255,0.1)]">
              {columns.map((col) => (
                <th
                  key={col.key}
                  className={`py-2 text-[10px] uppercase tracking-wider text-[#5A7A8A] font-normal ${
                    col.align === "right" ? "text-right" : col.align === "center" ? "text-center" : "text-left"
                  }`}
                >
                  {col.label}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data.map((row, i) => (
              <tr key={i} className="border-b border-[rgba(0,229,255,0.04)] hover:bg-[rgba(0,229,255,0.02)] transition-colors">
                {columns.map((col) => (
                  <td
                    key={col.key}
                    className={`py-2.5 ${
                      col.align === "right" ? "text-right" : col.align === "center" ? "text-center" : "text-left"
                    } ${col.highlight ? "font-mono font-semibold text-[#00E5FF]" : "text-[#AAB8C2]"}`}
                  >
                    {col.render ? col.render(row[col.key], row) : row[col.key]}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </GlowCard>
  );
}
