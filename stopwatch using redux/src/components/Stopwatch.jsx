import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button } from "@/components/ui/button";
import { start, stop, restart, tick } from '../redux/slices/StopwatchSlice';
import { Play, Pause, RotateCcw } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const Stopwatch = () => {
  const dispatch = useDispatch();
  const ticks = useSelector((state) => state.stopwatch.ticks);
  const running = useSelector((state) => state.stopwatch.running);
  // const isDarkMode = useSelector((state) => state.theme.isDarkMode);

  useEffect(() => {
    if (!running) {
      return;
    }
    const ref = setInterval(() => dispatch(tick()), 1000);
    return () => clearInterval(ref);
  }, [running, dispatch]);

  const formatTime = (totalSeconds) => {
    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;
    
    if (hours > 0) {
      return `${hours}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    }
    return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  };

  return (
    <div className="flex justify-center items-center">
      <Card className="w-80 shadow-lg dark:bg-gray-800 dark:border-gray-700 dark:text-white transition-colors duration-200">
        <CardHeader className="pb-2">
          <CardTitle className="text-2xl font-bold text-center">Stopwatch</CardTitle>
          <CardDescription className="text-center text-gray-500 dark:text-gray-400">Track your time precisely</CardDescription>
        </CardHeader>
        <CardContent className="pt-4 pb-6">
          <div className="text-center text-5xl font-mono font-bold text-primary bg-gray-100 dark:bg-gray-700 py-8 rounded-lg shadow-inner">
            {formatTime(ticks)}
          </div>
        </CardContent>
        <CardFooter className="flex justify-center gap-4">
          {!running ? (
            <Button 
              className="flex-1 bg-green-600 hover:bg-green-700"
              onClick={() => dispatch(start())}
            >
              <Play className="mr-2 h-4 w-4" /> Start
            </Button>
          ) : (
            <Button 
              className="flex-1 bg-amber-600 hover:bg-amber-700"
              onClick={() => dispatch(stop())}
            >
              <Pause className="mr-2 h-4 w-4" /> Pause
            </Button>
          )}
          <Button 
            variant="outline" 
            className="flex-1 dark:border-gray-600 dark:hover:bg-gray-700"
            onClick={() => dispatch(restart())}
          >
            <RotateCcw className="mr-2 h-4 w-4" /> Reset
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default Stopwatch;