// app/components/TopBar.tsx
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

interface TopBarProps {
  onLogout: () => void;
}

export const TopBar: React.FC<TopBarProps> = ({ onLogout }) => {
  return (
    <header className=" p-4 flex justify-between items-center bg-background">
      <Input type="text" placeholder="Search" className="flex-grow mr-4" />
      <Button onClick={onLogout} variant="ghost">
        Profile
      </Button>
    </header>
  );
};
