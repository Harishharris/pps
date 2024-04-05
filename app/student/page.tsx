'use client';

import {
  CardTitle,
  CardDescription,
  CardHeader,
  CardContent,
  CardFooter,
  Card,
} from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { useEffect, useState } from 'react';
import { addStudent, getAllStudents } from '../(action)/actions';
import { useRouter } from 'next/navigation';

export default function Component() {
  const [regdNo, setRegdNo] = useState('');
  const router = useRouter();

  const data = {
    regdNo: regdNo,
    marks: {
      tenth: 10,
      inter: 10,
      btech: 10,
    },
    name: 'harish',
    backlogs: 0,
    skills: ['fdjlfjl'],
  };

  function onSave() {
    addStudent(data);
    console.log(getAllStudents());
    router.push('/companies');
  }

  return (
    <Card className="min-h-screen m-auto max-w-3xl my-8">
      <CardHeader>
        <CardTitle className="text-2xl">Student Profile Information</CardTitle>
        <CardDescription>
          Please fill in the following information to update your profile.
        </CardDescription>
      </CardHeader>
      <CardContent className="grid gap-4">
        <div className="space-y-2">
          <Label htmlFor="regdno">Registration Number</Label>
          <Input
            value={regdNo}
            onChange={(e) => setRegdNo(e.target.value)}
            id="regdno"
            placeholder="1812100000"
            required
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="cgpa">CGPA</Label>
          <Input id="cgpa" placeholder="8.0" required />
        </div>
        <div className="space-y-2">
          <Label htmlFor="attendance">Attendance</Label>
          <Input id="attendance" placeholder="75%" required />
        </div>
        <div className="space-y-2">
          <Label htmlFor="backlogs">Backlogs</Label>
          <Input id="backlogs" placeholder="0" required />
        </div>
        <div className="space-y-2">
          <Label htmlFor="domains">Domains of Interest</Label>
          <Input id="domains" placeholder="Web Development, Data Science" />
          <div>Please enter comma-separated values for multiple domains.</div>
        </div>
        <div className="space-y-2">
          <Label htmlFor="skills">Skills</Label>
          <Input id="skills" placeholder="JavaScript, Python, UI/UX" />
          <div>Please enter comma-separated values for multiple skills.</div>
        </div>
      </CardContent>
      <CardFooter>
        <Button className="ml-auto" onClick={onSave}>
          Next
        </Button>
      </CardFooter>
    </Card>
  );
}
