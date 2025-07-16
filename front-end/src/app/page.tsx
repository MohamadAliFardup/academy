import MuiBoxTest from "@/components/MuiBoxTest";
import { ThemeToggleButton } from "@/components/ThemeToggleButton";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex items-center justify-center h-screen">
      <ThemeToggleButton />
      <MuiBoxTest />
      <h1 className="text-2xl font-bold m-auto self-center">صفحه اصلی سایت</h1>
    </div>
  );
}
