import Header from './components/common/header';
import { ThemeProvider } from './components/common/theme/theme-provider';
import Dashboard from './pages/dashboard';

export default function App() {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <div className="min-h-screen bg-white text-black dark:bg-blue-dark dark:text-white transition-colors">
        <Header
          appName="DemoApp"
          sectionLabel="Loan Management"
          unreadCount={3}
          onSearch={v => console.log('Search:', v)}
        />
        <main className="p-4">
          <Dashboard />
        </main>
      </div>
    </ThemeProvider>
  );
}
