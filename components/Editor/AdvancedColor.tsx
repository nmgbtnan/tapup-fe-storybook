'use client'
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '@/components/ui/alert-dialog';

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

import { Button } from '@/components/ui/button';
import { Input } from '../ui/input';
import { useCustomCard } from '@/hooks/useCustomCard';
import { useMemo, useState } from 'react';

type Direction =
  | 'to right'
  | 'to left'
  | 'to top'
  | 'to bottom'
  | 'to bottom right'
  | 'to bottom left'
  | 'to top right'
  | 'to top left';

export default function AdvancedColor() {
  const backgroundColor = useCustomCard((s) => s.backgroundColor);
  const initialValue = backgroundColor.includes('linear-gradient')
    ? {
        from: backgroundColor.split(',')[1],
        to: backgroundColor
          .split(',')[2]
          .substring(0, backgroundColor.split(',')[2].length - 1),
      }
    : {
        from: '#ffffff',
        to: '#000000',
      };

  const changeBackgroundColor = useCustomCard((s) => s.changeBackgroundColor);

  const [direction, setDirection] = useState<Direction>('to right');
  const [colors, setColors] = useState(initialValue);

  const background = useMemo(() => {
    return `linear-gradient(${direction},${colors.from},${colors.to})`;
  }, [direction, colors]);

  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button
          className="text-[12px] w-full text-[#454545] border-gray-200"
          variant={'outline'}
        >
          Advance Colors
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Advanced Background Color Picker</AlertDialogTitle>
          <AlertDialogDescription>
            You can choose two color combination, with multiple linear
            directions.
          </AlertDialogDescription>
          <div>
            <div className="flex flex-col gap-y-2">
              <div className="flex flex-row gap-x-2 items-center w-[200px]">
                <label htmlFor="from">From:</label>
                <p className="font-semibold ms-auto">{colors.from}</p>
                <Input
                  type="color"
                  name="from"
                  className="w-[50px] h-[50px] p-0 aspect-square"
                  defaultValue={initialValue.from}
                  onChange={(e) => {
                    const color = e.currentTarget.value;
                    setColors((c) => ({ ...c, from: color }));
                  }}
                />
              </div>
              <div className="flex flex-row gap-x-2 items-center w-[200px]">
                <label htmlFor="from">To:</label>
                <p className="font-semibold ms-auto">{colors.to}</p>
                <Input
                  type="color"
                  name="to"
                  className="w-[50px] h-[50px] p-0 aspect-square"
                  defaultValue={initialValue.to}
                  onChange={(e) => {
                    const color = e.currentTarget.value;
                    setColors((c) => ({ ...c, to: color }));
                  }}
                />
              </div>

              <div>
                <label htmlFor="direction">Direction</label>
                <Select onValueChange={(v) => setDirection(v as Direction)}>
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Direction" />
                  </SelectTrigger>
                  <SelectContent defaultValue={'to right'}>
                    <SelectGroup>
                      <SelectLabel>Direction</SelectLabel>
                      <SelectItem value="to right">To Right</SelectItem>
                      <SelectItem value="to left">To Left</SelectItem>
                      <SelectItem value="to top">To Top</SelectItem>
                      <SelectItem value="to bottom">To Bottom</SelectItem>
                      <SelectItem value="to bottom right">
                        To Bottom Right
                      </SelectItem>
                      <SelectItem value="to bottom left">
                        To Bottom Left
                      </SelectItem>
                      <SelectItem value="to top left">To Top Right</SelectItem>
                      <SelectItem value="to top right">To Top Left</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </div>
            </div>
            <div className="flex flex-col items-center justify-center py-4 gap-2">
              <p className="text-lg font-semibold">Preview</p>
              <div
                className="w-[330px] aspect-[16/3] shadow-md"
                style={{
                  background,
                }}
              />
            </div>
          </div>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction onClick={() => changeBackgroundColor(background)}>
            Continue
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
