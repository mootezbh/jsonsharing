"use client";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "./ui/button";
import { Label } from "./ui/label";
import { Input } from "./ui/input";

import CodeMirror from "@uiw/react-codemirror";
import { json } from "@codemirror/lang-json";
import { useState } from "react";
import { useTheme } from "./theme-provider";

interface AddJsonDialogProps {
  onSave: (name: string, value: string) => Promise<void>;
}
export default function AddJsonDialog({ onSave }: AddJsonDialogProps) {
  const [jsonData, setJsonData] = useState("");
  const [jsonName, setJsonName] = useState("");
  const [openModal, setOpenModal] = useState<boolean>(false);
  const { theme } = useTheme();

  const handleSave = async () => {
    await onSave(jsonName, jsonData);
    setOpenModal(false);
    setJsonData("");
    setJsonName("");
  };

  return (
    <Dialog open={openModal} onOpenChange={setOpenModal}>
      <DialogTrigger className="cursor-pointer" asChild>
        <Button>Add JSON Data</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[900px]">
        <DialogHeader>
          <DialogTitle>JSON Editor</DialogTitle>
          <DialogDescription>Edit and save your JSON data.</DialogDescription>
        </DialogHeader>

        <div className="gird gap-4">
          <div className="grid gap-2">
            <Label>JSON Name</Label>
            <Input
              placeholder="Enter JSON Name"
              value={jsonName}
              onChange={(e) => setJsonName(e.target.value)}
              className="rounded-none"
            />
          </div>
          <div className="grid gap-2 mt-2">
            <Label>JSON Data</Label>
            <CodeMirror
              value={jsonData}
              height="400px"
              extensions={[json()]}
              onChange={(value) => setJsonData(value)}
              className="border shadow-sm"
              theme={theme === "dark" ? "dark" : "light"}
            />
          </div>

          <DialogFooter className="mt-4">
            <DialogClose asChild>
              <Button type="button" variant="secondary">
                Close
              </Button>
            </DialogClose>
            <Button disabled={!jsonName || !jsonData} onClick={handleSave}>
              Save
            </Button>
          </DialogFooter>
        </div>
      </DialogContent>
    </Dialog>
  );
}
