import { useState, useEffect } from "react";
import { useWriteContract, useReadContract } from "wagmi";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { RefreshCw, Save } from "lucide-react";

const abi = [
  {
    "inputs": [],
    "name": "get",
    "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [{ "internalType": "uint256", "name": "_number", "type": "uint256" }],
    "name": "set",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  }
];

const storageAddress = "0xf27aD0963B3E1E5E8B06c8349dfe1Be913e22FDB";

export default function StorageComponent() {
  const [inputValue, setInputValue] = useState("");
  const [storedValue, setStoredValue] = useState("");
  const [txStatus, setTxStatus] = useState(null); 

  const { writeContractAsync, isPending } = useWriteContract();

  const { data, refetch, isError, isLoading: isLoadingRead } = useReadContract({
    address: storageAddress,
    abi: abi,
    functionName: "get",
    watch: true, 
  });

  useEffect(() => {
    if (data !== undefined) {
      setStoredValue(data.toString());
    }
  }, [data]);

  const handleSetValue = async () => {
    if (!inputValue.trim()) return;
    
    setTxStatus(null);
    try {
      await writeContractAsync({
        address: storageAddress,
        abi: abi,
        functionName: "set",
        args: [parseInt(inputValue, 10)],
      });
      
      setInputValue("");
      setTxStatus("success");
      
      setTimeout(() => setTxStatus(null), 3000);
      
      refetch();
    } catch (err) {
      console.error("Error writing to contract:", err);
      setTxStatus("error");
      
      setTimeout(() => setTxStatus(null), 5000);
    }
  };

  return (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader>
        <CardTitle>Storage Contract</CardTitle>
        <CardDescription>Interact with your on-chain storage contract</CardDescription>
      </CardHeader>
      
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <div className="flex justify-between items-center">
            <h3 className="text-sm font-medium">Current Stored Value</h3>
            <Button 
              variant="outline" 
              size="sm" 
              onClick={() => refetch()}
              disabled={isLoadingRead}
            >
              <RefreshCw className="h-4 w-4 mr-2" />
              Refresh
            </Button>
          </div>
          
          <div className="h-12 flex items-center pl-3 border rounded-md bg-muted/30">
            {isError ? (
              <span className="text-destructive">Error loading value</span>
            ) : isLoadingRead ? (
              <span className="text-muted-foreground">Loading...</span>
            ) : (
              <span className="text-xl font-mono">{storedValue}</span>
            )}
          </div>
        </div>
        
        <div className="space-y-2">
          <h3 className="text-sm font-medium">Update Value</h3>
          <div className="flex space-x-2">
            <Input
              type="number"
              placeholder="Enter a new value"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              disabled={isPending}
              className="flex-1"
            />
            <Button 
              onClick={handleSetValue} 
              disabled={isPending || !inputValue.trim()}
            >
              {isPending ? (
                <>
                  <RefreshCw className="h-4 w-4 mr-2 animate-spin" />
                  Setting...
                </>
              ) : (
                <>
                  <Save className="h-4 w-4 mr-2" />
                  Set Value
                </>
              )}
            </Button>
          </div>
        </div>
        
        {txStatus === "success" && (
          <Alert variant="default" className="bg-green-50 text-green-800 border-green-200">
            <AlertDescription>
              Value successfully updated on the blockchain!
            </AlertDescription>
          </Alert>
        )}
        
        {txStatus === "error" && (
          <Alert variant="destructive">
            <AlertDescription>
              Failed to update value. Please check your wallet and try again.
            </AlertDescription>
          </Alert>
        )}
      </CardContent>
    </Card>
  );
}