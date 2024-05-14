import { PrimeReactProvider } from 'primereact/api';
import Routes from "./Router";
import AuthProvider from "./hooks/auth";
import GlobalStyles from "./style/globalStyles";

export default function App() {
  return (
    <PrimeReactProvider>
      <AuthProvider>
        <GlobalStyles />
        <Routes />
      </AuthProvider>
    </PrimeReactProvider>
  )
}
