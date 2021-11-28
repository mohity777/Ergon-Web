import "./components/Dashboard/Dashboard.css";
import Layout from "./components/Layout";
import PrivateRoutes from "./routes/PrivateRoutes";
import PublicRoutes from "./routes/PublicRoutes";

function App() {
  const isLoggedIn = true;

  if (isLoggedIn)
    return (
      <Layout>
        <PrivateRoutes />
      </Layout>
    );
  return <PublicRoutes />;
}

export default App;
