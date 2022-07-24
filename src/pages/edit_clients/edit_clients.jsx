import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import AdminHeader from "../../components/admin_header/admin_header";
import EditClientsForm from "../../components/edit_clients/edit_clients";

function EditClients() {
  const navigate = useNavigate()
  useEffect(() => {
    if (!!!localStorage.getItem('token')) navigate('/login')
  }, [localStorage.getItem('token')])

  return (
    <>
      <AdminHeader />
      <EditClientsForm />
    </>
  );
}

export default EditClients;
