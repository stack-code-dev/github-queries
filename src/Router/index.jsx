import { BrowserRouter as Router} from "react-router-dom";
import AppRoutes from "./App.routes";

export default function Routes() {
  return(
    <Router>
      <AppRoutes />
    </Router>
  )
}