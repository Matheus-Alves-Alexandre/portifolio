import Image from "next/image";
import Content from "./components/Content";
import Profile from "./components/Profile";

export default function Home() {
  return (
    <main className="flex bg-background text-primary-color">
      <div className="w-1/4 p-4 h-screen justify-center items-center ">
        <Profile />
      </div>
      <div className="w-3/4 overflow-y-hidden p-4">
        <div className="overflow-y-scroll h-screen scroll-container">
          <Content />
        </div>
      </div>
    </main>
  );
}
