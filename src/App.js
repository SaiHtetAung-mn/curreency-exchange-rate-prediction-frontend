import React, { Suspense } from "react";
import { BrowserRouter } from 'react-router-dom';
import AppRoutes from "./routes";
import PageLoading from "./components/PageLoading";
import Theme from "./providers/theme";
import '@fontsource/inter';
import { useMetaData } from "./features";

function App() {
  const { fetchCurrencyData } = useMetaData();
  
  React.useEffect(() => {
    fetchCurrencyData();
  }, []);

  return (
    <Suspense fallback={ <PageLoading/> }>
      <Theme>
        <BrowserRouter>
            <AppRoutes/>
        </BrowserRouter>
      </Theme>
    </Suspense>
  );
}

export default App;
