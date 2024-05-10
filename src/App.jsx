import Routes from "./Router";
import AuthProvider from "./hooks/auth";
import GlobalStyles from "./style/globalStyles";

export default function App() {
  return (
    <AuthProvider>
      <GlobalStyles />
      <Routes />
    </AuthProvider>
  )
}
