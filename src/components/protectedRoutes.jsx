import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";
import userName from "../store/slices/userName";

const ProtectedRoutes = () => {
  // Aquí va la condición. Puede ser una condición de cualquier tipo. Lo que
  // Importa es que valide si el usuario está loggeado o no
  const name = useSelector((state) => state.userName);
  if (name) {
    return <Outlet />;
  } else {
    return <Navigate to="/" />;
  } // Aquí le debemos decir la ruta a la que queremos llevar
}; // al usuario si no está autenticado

export default ProtectedRoutes;
