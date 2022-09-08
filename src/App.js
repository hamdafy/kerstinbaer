
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import Login from "./components/Login";
import Signup from "./components/Signup";
import ProtectedRoute from "./components/ProtectedRoute";
import { UserAuthContextProvider } from "./context/UserAuthContext";
import AddCost from "./components/AddCost";
import Tabelle from "./components/Tabelle";
import Update from "./components/Update";
import View from "./components/View";
function App() {
  return (
    <div style={{ width: "100%" }}>
   
      
          <UserAuthContextProvider>
            <Routes>
              <Route
                path="/home"
                element={
                  <ProtectedRoute>
                    <Home />
                  </ProtectedRoute>
                }
              />



                <Route
              path="/add"
              element={
                <ProtectedRoute>
                  <AddCost/>
                  
                </ProtectedRoute>
              }
            /> 
            
          <Route
              path="/update/:id"
              element={
                <ProtectedRoute>
                  <Update/>
                  
                </ProtectedRoute>
              }
            />  


              <Route
              path="/Tabelle"
              element={
                <ProtectedRoute>
                  <Tabelle/>
                  
                </ProtectedRoute>
              }
            /> 

       <Route
              path="/view/:id"
              element={
                <ProtectedRoute>
                  <View/>
                  
                </ProtectedRoute>
              }
            /> 
              <Route path="/" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
            </Routes>





          </UserAuthContextProvider>
 
  
  
    </div>
  )
}

export default App;