"use client";
import { useEffect, useState } from "react";
import { redirect } from "next/navigation";
import { useAuth } from "../authContext";
import { ProfileSection } from "../../components/home/ProfileSection";
import { FeedsSection } from "../../components/home/FeedsSection";
import { NotificationSection } from "../../components/home/NotificationSection";
import { TopBar } from "../../components/home/TopBar";
import { SearchBar } from "../../components/home/SearchBar";
import { BottomBar } from "../../components/home/BottomBar";

export default function HomePage() {
  const { isAuthenticated, logout } = useAuth();
  const [loading, setLoading] = useState(true);
  const [activeSection, setActiveSection] = useState("feeds");

  useEffect(() => {
    const checkAuth = () => {
      if (!isAuthenticated) {
        redirect("/auth");
      } else {
        setLoading(false);
      }
    };

    checkAuth();
  }, [isAuthenticated]);

  if (loading) {
    return <div>Loading...</div>;
  }

  const handleLogout = () => {
    logout();
  };

  const handleSectionChange = (section: string) => {
    setActiveSection(section);
  };

  // Dummy data for demonstration purposes
  const username = "JohnDoe";
  const joinedDate = "2022-01-01";
  const followersCount = 100;
  const followingCount = 50;

  return (
    <div className="min-h-screen ">
      {/* Desktop view */}
      <div className="hidden md:grid md:grid-cols-3 h-screen">
        <section className="bg-background p-4">
          <ProfileSection
            onLogout={logout}
            username={username}
            joinedDate={joinedDate}
            followersCount={followersCount}
            followingCount={followingCount}
          />
        </section>
        <section className="bg-background p-4 overflow-y-auto hide-scrollbar border-x">
          <SearchBar />
          <FeedsSection />
        </section>
        <section className="bg-background p-4">
          <NotificationSection />
        </section>
      </div>

      {/* Mobile view */} 
      <div className="md:hidden flex flex-col min-h-screen">
        <TopBar onLogout={handleLogout} />
        <main className="flex-grow overflow-y-auto">
          {activeSection === "feeds" && <FeedsSection />}
          {activeSection === "profile" && (
            <div className="overflow-y-auto">
              <ProfileSection
                onLogout={logout}
                username={username}
                joinedDate={joinedDate}
                followersCount={followersCount}
                followingCount={followingCount}
              />
            </div>
          )}
          {activeSection === "notifications" && (
            <div className="overflow-y-auto">
              <NotificationSection />
            </div>
          )}
        </main>
        <BottomBar
          activeSection={activeSection}
          onSectionChange={handleSectionChange}
        />
        <div className="h-16"></div>{" "}
        {/* Add a spacer for the fixed bottom bar */}
      </div>
    </div>
  );
}
