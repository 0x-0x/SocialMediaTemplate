// app/components/ProfileSection.tsx
import { Button } from "@/components/ui/button";
import { FiLogOut, FiSun, FiMoon } from "react-icons/fi";
import { useContext } from "react";
import { ThemeContext } from "../../app/ThemeContext";

interface ProfileSectionProps {
  onLogout: () => void;
  username: string;
  joinedDate: string;
  followersCount: number;
  followingCount: number;
}

export const ProfileSection: React.FC<ProfileSectionProps> = ({
  onLogout,
  username,
  joinedDate,
  followersCount,
  followingCount,
}) => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div className="flex justify-end">
      <div className="flex flex-col items-start bg-background p-10 h-full">
        <div className="w-32 h-32 rounded-full bg-background flex items-center justify-center mb-4">
          <span className="text-4xl font-bold">🙂</span>
        </div>
        <h2 className="text-2xl font-semibold mb-1">{username}</h2>
        <p className="text-gray-500 mb-4">Joined {joinedDate}</p>
        <div className="flex space-x-4 mb-8">
          <div>
            <p className="text-lg font-semibold">{followersCount}</p>
            <p className="text-gray-500">Followers</p>
          </div>
          <div>
            <p className="text-lg font-semibold">{followingCount}</p>
            <p className="text-gray-500">Following</p>
          </div>
        </div>
        <div className="flex space-x-4 mb-8">
          <Button
            variant="ghost"
            className="flex items-center space-x-2"
            onClick={toggleTheme}
          >
            {theme === "light" ? <FiMoon size={20} /> : <FiSun size={20} />}
            <span>{theme === "light" ? "Dark Mode" : "Light Mode"}</span>
          </Button>
        </div>
        <Button
          onClick={onLogout}
          variant="destructive"
          className="flex items-center space-x-2"
        >
          <FiLogOut size={20} />
          <span>Logout</span>
        </Button>
      </div>
    </div>
  );
};
