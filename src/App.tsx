import { ReactQueryProvider } from "./providers/ReactQueryProvider";
import UseRoutes from "./routes/index.routes";

function App() {
  return (
    <ReactQueryProvider>
      <UseRoutes />
    </ReactQueryProvider>
  );
}

export default App;
