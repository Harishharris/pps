'use client';

import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { useState } from 'react';

export default function Home() {
  return (
    <div className="m-auto mt-[15%] w-full max-w-screen-sm space-y-8">
      <div className="space-y-2">
        <h2 className="text-3xl font-bold">Login</h2>
        <p className="text-gray-500 dark:text-gray-400">
          Enter your email below to login to your account
        </p>
      </div>
      <div className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="email">Email</Label>
          <Input id="email" placeholder="m@example.com" required type="email" />
        </div>
        <div className="space-y-2">
          <div className="flex items-center">
            <Label htmlFor="password">Password</Label>
            <Link className="ml-auto inline-block text-sm underline" href="#">
              Forgot your password?
            </Link>
          </div>
          <Input id="password" required type="password" />
        </div>
        <Link href={'/tpo'}>
          <Button className="w-full" type="submit">
            Login as TPO
          </Button>
        </Link>
        <Link href={'/student'}>
          <Button variant={'secondary'} className="w-full" type="submit">
            Login as Student
          </Button>
        </Link>
      </div>
    </div>
  );
}
