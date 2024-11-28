"use client"

import { ColumnDef } from "@tanstack/react-table"

export type Contact = {
  id: number
  name: string
  email: string
  phone_number: number
}

export const columns: ColumnDef<Contact>[] = [
  {
    accessorKey: "name",
    header: "Name",
  },
  {
    accessorKey: "email",
    header: "Email",
  },
  {
    accessorKey: "phone_number",
    header: "Phone Number",
  },
]
