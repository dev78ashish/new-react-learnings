import React, { useEffect, useState } from "react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import axios from "axios";

function ReferralPopover({ value, onUpdate }) {
  const [newValue, setNewValue] = useState(value);
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setNewValue(value);
  }, [value]);

  const handleUpdate = async () => {
    try {
      setIsLoading(true);
      const token = localStorage.getItem('token');

      const res = await axios.put(`${import.meta.env.VITE_APP_URL}/refer/update`, {
        refer_num: newValue
      }, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });

      onUpdate();
      
      setIsOpen(false);
      console.log(res);
      
    } catch (e) {
      console.error("Error updating referral value:", e);
     
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Popover open={isOpen} onOpenChange={setIsOpen}>
      <PopoverTrigger asChild>
        <Button variant="default" className="bg-blue-600 hover:bg-blue-700">
          Update Value
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-72">
        <div className="grid gap-4">
          <div className="space-y-2">
            <h4 className="font-medium leading-none">Update Referral Value</h4>
            <p className="text-sm text-muted-foreground">
              Enter a new referral value below.
            </p>
          </div>
          <div className="grid gap-2">
            <Label htmlFor="referralValue">Referral Value ($)</Label>
            <Input
              id="referralValue"
              value={newValue}
              onChange={(e) => setNewValue(parseFloat(e.target.value) || 0)}
              className="h-8"
              type="number"
              min="0"
              step="0.01"
            />
            <Button 
              className="mt-2" 
              onClick={handleUpdate} 
              disabled={isLoading}
            >
              {isLoading ? "Updating..." : "Update"}
            </Button>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  );
}

const ReferralSection = () => {
  const [referralValue, setReferralValue] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchReferralValue = async () => {
    try {
      setIsLoading(true);
      setError(null);
      const token = localStorage.getItem('token');

      const res = await axios.get(`${import.meta.env.VITE_APP_URL}/refer`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });

      setReferralValue(res.data.refer_num);
    } catch (e) {
      console.error("Error fetching referral value:", e);
      setError("Could not load referral value. Please try again later.");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchReferralValue();
  }, []);

  const handleReferralUpdate = () => {
    fetchReferralValue();
  };

  return (
    <div className="w-full">
      <div className="bg-white rounded-xl shadow-md p-6">
        <h2 className="text-xl font-semibold mb-4">Referral Value</h2>
        
        {isLoading ? (
          <p className="text-2xl font-bold text-gray-400 mb-4">Loading...</p>
        ) : error ? (
          <div className="mb-4">
            <p className="text-red-500">{error}</p>
            <Button 
              variant="outline" 
              size="sm" 
              onClick={fetchReferralValue}
              className="mt-2"
            >
              Try Again
            </Button>
          </div>
        ) : (
          <p className="text-2xl font-bold text-green-600 mb-4">
            ${typeof referralValue === 'number' ? referralValue.toFixed(2) : referralValue}
          </p>
        )}
        
        {!isLoading && !error && (
          <ReferralPopover
            value={referralValue}
            onUpdate={handleReferralUpdate}
          />
        )}
      </div>
    </div>
  );
};

export default ReferralSection;