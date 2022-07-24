import AdminHeader from '../../components/admin_header/admin_header'
import AddClientsForm from '../../components/add_clients_form/add_clients_form'
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';


function AddClients() {
    const navigate = useNavigate()
    useEffect(() => {
      if (!!!localStorage.getItem('token')) navigate('/login')
    }, [localStorage.getItem('token')])

    return (
        <>
            <AdminHeader />
            <AddClientsForm />
        </>
    );
}

export default AddClients;
