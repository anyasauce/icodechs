import { Outlet } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function MainLayout() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-gray-900 dark:bg-gray-900 dark:text-gray-100">
      <Header />
      <main className="flex-grow p-6 md:p-8 lg:p-20">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
