
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthUserProvider } from "./context/UserContext";
// import LoginUsuario from "./Infrastructure/components/User/LoginUsuario";
import LoginUser from "./components/User/LoginUser";
import LoginClient from "./components/Client/loginClient";
import RegisterUsuario from "./components/User/RegisterUsuario";
import RegisterClient from "./components/Client/RegisterClient";
import RegisterLaundry from "./components/Admin/RegisterLaundry";
import ProtectedRoute from "./routes/protectedRoutes";
import Navbar from "./components/Header"
import UserEmailReset from "./pages/userEmailReset";
import { AuthClientProvider } from "./context/ClientContext";
import HomeClient from "./pages/HomeClient";
// import RegisterClient from "./components/Client/Body"


//importaciones de AGENDAR CITAS

import CompShowBlogs from './components/blog/ShowBlogs';
import CompCreateBlog from './components/blog/CreateBlog';
import CompEditBlog from './components/blog/EditBlog';

function App() {

  return (
    <AuthUserProvider>
      <AuthClientProvider>
<BrowserRouter>
<Navbar/>
<main className=" pt-20
 container mx-auto">
    <Routes>
      {/* <Route path="/" element={<h1>homepage</h1>} /> */}
      <Route path="/homeUser" element={<h1>iniciado correctamente</h1>} />
      <Route path="/sign-in-user" element={<LoginUser/>} />
      <Route path="/sign-in-client" element={<LoginClient/>} />
      <Route path="/registeruser" element={<RegisterUsuario/>} />
      <Route path="/registerclient" element={<RegisterClient/>} />
      <Route path="/logout" element={<h1>hasta pronto </h1>} />
      <Route path="/" element={<HomeClient/>} />
      
      <Route path="/reset-password" element={<UserEmailReset/>} />

      <Route element={<ProtectedRoute/>}>
      <Route path="/task" element={<h1>task hechas</h1>} />
      </Route>

      


      <Route path="/iniciarsessionAdministrador" element={<LoginClient/>} />
      <Route path="/registrarlavadero" element={<RegisterLaundry/>} />
      <Route path="/registrarse" element={<h1>homepage</h1>} />




      <Route path='/Citas' element={<CompShowBlogs/>} />
      <Route path='/crearCita' element={<CompCreateBlog/>} />
      <Route path='/edit/:id' element={<CompEditBlog/>} />


    </Routes>
    </main>
    </BrowserRouter>
    </AuthClientProvider>
    </AuthUserProvider>
  )
}

export default App
