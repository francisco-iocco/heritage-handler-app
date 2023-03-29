import { useContext, useEffect } from "react";
import updateUser from "services/updateUser";
import UserDataContext from "contexts/UserDataContext";
import Router from "Router";

function App() {
  const { userData } = useContext(UserDataContext);

  useEffect(() => {
    window.onclose = () => 
      updateUser({ lastConnection: new Date(), userId: userData._id });
  }, []);

  return (
    <div className="App">
      <Router />
    </div>
  );
}

export default App;
