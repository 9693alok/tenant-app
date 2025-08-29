import { useState, useEffect } from "react";
import Welcome from "./pages/Welcome";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import LoadingScreen from "./components/LoadingScreen";
import TenantDashboard from "./pages/TenantDashboard";
function App() {
  const [loading, setLoading] = useState(true);
  const [showWelcome, setShowWelcome] = useState(true);
  const [user, setUser] = useState(null);
  return <TenantDashboard />;
  // Simulate loading screen
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  if (loading) return <LoadingScreen />;

  return (
    <>
      {showWelcome ? (
        <Welcome onContinue={() => setShowWelcome(false)} />
      ) : !user ? (
        <Login onLogin={setUser} />
      ) : (
        <Dashboard user={user} />
      )}
    </>
  );
}

export default App;
