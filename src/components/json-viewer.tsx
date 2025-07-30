"use client";
import CodeMirror from "@uiw/react-codemirror";
import { json } from "@codemirror/lang-json";
import { useTheme } from "@/components/theme-provider";

export default function JsonViewer({ content }: { content: string }) {
  const { theme } = useTheme();
  return (
    <CodeMirror
      value={content || ""}
      height="400px"
      extensions={[json()]}
      editable={false}
      className="border shadow-sm"
      theme={theme === "dark" ? "dark" : "light"}
    />
  );
}