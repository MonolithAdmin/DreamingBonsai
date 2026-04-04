import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import FloatingPetals from './FloatingPetals';

export default function Layout() {
  return (
    <div className="min-h-screen bg-background text-foreground font-outfit">
      <FloatingPetals />
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}