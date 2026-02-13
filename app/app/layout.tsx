import { Header } from "@/components/layout/Header";
import { BottomNav } from "@/components/layout/BottomNav";

export default function AppLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
        <Header />
        <main className="min-h-screen px-4 py-6 max-w-md mx-auto pb-24 pt-20">
            {children}
        </main>
        <BottomNav />
    </>
  );
}
