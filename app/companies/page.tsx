'use client';

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { getAllStudents, Data } from '../(action)/actions';
import { Button } from '@/components/ui/button';
import { getAllCompanies } from '../(action)/companies';
import { Trykker } from 'next/font/google';
import { useState } from 'react';

export default function Page() {
  const details = getAllCompanies();
  const [isClicked, setIsClicked] = useState(false);

  function click() {
    setIsClicked(true);
  }

  return (
    <>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">Name</TableHead>
            <TableHead>Role</TableHead>
            <TableHead>CTC</TableHead>
            <TableHead className="text-right">Work Mode</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {details.map((d) => (
            <TableRow key={d.name}>
              <TableCell className="font-medium">{d.name}</TableCell>
              <TableCell>{d.role}</TableCell>
              <TableCell>{d.CTC}</TableCell>
              <TableCell className="text-right">{d.mode}</TableCell>
              <TableHead className="text-right">
                <Button onClick={click}>Apply</Button>
              </TableHead>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </>
  );
}
