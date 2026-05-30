"use client";

import type { ColumnDef } from "@tanstack/react-table";

export type GoldRateRow = {
  unit: string;
  "24k": string;
  "22k": string;
  "21k": string;
  "18k": string;
  "14k": string;
  "12k": string;
  "10k": string;
};

export const goldColumns: ColumnDef<GoldRateRow>[] = [
  {
    accessorKey: "unit",
    header: "",
  },
  {
    accessorKey: "24k",
    header: "24K",
  },
  {
    accessorKey: "22k",
    header: "22K",
  },
  {
    accessorKey: "21k",
    header: "21K",
  },
  {
    accessorKey: "18k",
    header: "18K",
  },
  {
    accessorKey: "14k",
    header: "14K",
  },
  {
    accessorKey: "12k",
    header: "12K",
  },
  {
    accessorKey: "10k",
    header: "10K",
  },
];
