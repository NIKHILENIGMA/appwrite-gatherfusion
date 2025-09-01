import Router from "./app/Router";
import AuthProvider from "./components/shared/AuthProvider";

function App() {
  return (
    <AuthProvider>
       <Router />
    </AuthProvider>
  );
}

export default App;
