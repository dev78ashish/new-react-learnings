import React from 'react';
import { toggleTheme } from '../redux/slices/ThemeSlice';
import { Button } from "@/components/ui/button";
import { useDispatch, useSelector } from 'react-redux';
import { Moon, Sun } from 'lucide-react';
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip";

const ThemeToggle = () => {

    const dispatch = useDispatch();
    const isDarkMode = useSelector((state) => state.theme.isDarkMode);

    return (
        <TooltipProvider>
            <Tooltip>
                <TooltipTrigger asChild>
                    <Button
                        variant="outline"
                        size="icon"
                        className="rounded-full"
                        onClick={() => dispatch(toggleTheme())}
                        aria-label="Toggle theme"
                    >
                        {isDarkMode ? (
                            <Sun className='h-5 w-5 text-yellow-300' />
                        ) : (
                            <Moon className='h-5 w-5 text-blue-700' />
                        )}
                    </Button>
                </TooltipTrigger>
                <TooltipContent>
                    {isDarkMode ? (
                        <p>Switch to Light Mode</p>
                    ) : (
                        <p>Switch to Dark Mode</p>
                    )}
                </TooltipContent>
            </Tooltip>
        </TooltipProvider>
    )
}

export default ThemeToggle