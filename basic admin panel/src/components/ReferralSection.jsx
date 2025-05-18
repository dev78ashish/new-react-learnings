import React, { useState } from "react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { DollarSign, RefreshCw, ChevronsUpDown } from "lucide-react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { useGetReferalQuery, useUpdateReferalMutation } from "../redux/slices/referalApiSlice";

function ReferralPopover({ value, onUpdate }) {
  const [newValue, setNewValue] = useState(value);
  const [isOpen, setIsOpen] = useState(false);
  
  const [updateReferal, { isLoading }] = useUpdateReferalMutation();

  const handleUpdate = async () => {
    try {
      await updateReferal(newValue);
      onUpdate();
      setIsOpen(false);
    } catch (e) {
      console.error("Error updating referral value:", e);
    }
  };

  return (
    <Popover open={isOpen} onOpenChange={setIsOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="default"
          className="bg-[#FE3D76] hover:bg-[#FE3D76]/80 text-white flex items-center gap-2 px-4 py-2 rounded-lg shadow-md shadow-[#FE3D76]/20 transition-all duration-200"
        >
          <ChevronsUpDown className="h-4 w-4" />
          <span>Update Value</span>
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-80 p-5 shadow-lg bg-[#150813]/90 backdrop-blur-md border border-[#FE3D76]">
        <div className="grid gap-4">
          <div className="space-y-2">
            <h4 className="font-semibold text-lg leading-none text-white">Update Referral Value</h4>
            <p className="text-sm text-gray-300">
              Set the new referral amount that users will receive.
            </p>
          </div>
          <div className="grid gap-3">
            <Label htmlFor="referralValue" className="text-gray-200">Referral Amount ($)</Label>
            <div className="relative">
              <DollarSign className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              <Input
                id="referralValue"
                value={newValue}
                onChange={(e) => setNewValue(parseFloat(e.target.value) || 0)}
                className="pl-10 h-10 focus:ring-2 focus:ring-[#FE3D76] focus:border-[#FE3D76] bg-[#2C1228]/50 border-[#FE3D76]/50 text-white"
                type="number"
                min="0"
                step="0.01"
              />
            </div>
            <div className="flex justify-end gap-2 mt-2">
              <Button
                // variant="outline"
                onClick={() => setIsOpen(false)}
                className=" text-gray-200 "
              >
                Cancel
              </Button>
              <Button
                onClick={handleUpdate}
                disabled={isLoading}
                className="bg-[#FE3D76] hover:bg-[#FE3D76]/80 text-white"
              >
                {isLoading ? "Updating..." : "Save Changes"}
              </Button>
            </div>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  );
}

const ReferralSection = () => {
  const { data, error, isLoading, refetch } = useGetReferalQuery();
  const referralValue = data?.refer_num;

  const handleReferralUpdate = () => {
    refetch();
  };

  return (
    <div className="w-full">
      <div className="pay-box hover-shadow rounded-xl shadow-md p-6 border border-[#FE3D76]">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-bold text-white">Referral Reward</h2>
        </div>

        <div className="flex flex-col space-y-6">
          {isLoading ? (
            <div className="flex justify-center items-center h-24">
              <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-[#FE3D76]"></div>
            </div>
          ) : error ? (
            <div className="bg-[#FE3D76]/10 border border-[#FE3D76]/40 rounded-lg p-4">
              <p className="text-[#FE3D76] text-sm">Could not load referral value. Please try again later.</p>
              <Button
                variant="outline"
                size="sm"
                onClick={refetch}
                className="mt-3 text-xs flex items-center gap-1 border-[#FE3D76]/40 text-[#FE3D76] hover:bg-[#FE3D76]/20"
              >
                <RefreshCw className="h-3 w-3" />
                Try Again
              </Button>
            </div>
          ) : (
            <>
              <div className="text-center bg-[#2C1228]/50 rounded-lg p-5 border border-dashed border-[#FE3D76]/50">
                <p className="text-gray-300 text-sm mb-2">Current Referral Amount</p>
                <div className="flex items-center justify-center">
                  <DollarSign className="h-8 w-8 text-[#FE3D76] mr-1" />
                  <p className="text-4xl font-bold text-[#FE3D76]">
                    {typeof referralValue === 'number' ? referralValue.toFixed(2) : referralValue}
                  </p>
                </div>
              </div>

              <div className="flex justify-center">
                <ReferralPopover
                  value={referralValue}
                  onUpdate={handleReferralUpdate}
                />
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default ReferralSection;