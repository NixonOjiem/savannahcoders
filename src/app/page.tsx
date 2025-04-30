import MobileNavigationBar from "@/components/MobileNavigationBar";
import NavigationBar from "@/components/NavigationBar";
import "@/styles/global.css";

export default function Home() {
  return (
    <div>
      <NavigationBar />

      <MobileNavigationBar />
    </div>
  );
}
