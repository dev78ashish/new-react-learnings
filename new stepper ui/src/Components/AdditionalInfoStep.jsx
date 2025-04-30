import React, { useState } from 'react';
import { useFormContext } from 'react-hook-form';
import { Input } from '@/components/ui/input';
import { FormField, FormItem, FormLabel, FormControl, FormMessage } from '@/components/ui/form';
import { Eye, EyeOff } from 'lucide-react';
import { Button } from '@/components/ui/button';

const PasswordInput = ({ field, label, placeholder }) => {
  const [show, setShow] = useState(false);

  return (
    <FormItem>
      <FormLabel>{label}</FormLabel>
      <FormControl>
        <div className="relative">
          <Input
            {...field}
            type={show ? 'text' : 'password'}
            placeholder={placeholder}
            className="pr-10"
          />
          <Button
            type="button"
            variant="ghost"
            size="icon"
            onClick={() => setShow(!show)}
            className="absolute right-2 top-1/2 -translate-y-1/2"
          >
            {show ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
          </Button>
        </div>
      </FormControl>
      <FormMessage />
    </FormItem>
  );
};

const AdditionalInfoStep = () => {
  const form = useFormContext();

  return (
    <div className="space-y-4">
      <div className="grid gap-4">
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <PasswordInput 
              field={field}
              label="Password"
              placeholder="Enter your password"
            />
          )}
        />

        <FormField
          control={form.control}
          name="confirmpassword"
          render={({ field }) => (
            <PasswordInput 
              field={field}
              label="Confirm Password"
              placeholder="Confirm your password"
            />
          )}
        />
      </div>
    </div>
  );
};

export default AdditionalInfoStep;
