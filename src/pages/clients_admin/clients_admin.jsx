import AdminHeader from '../../components/admin_header/admin_header'
import AdminClients from '../../components/admin_clients/admin_clients'
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

function AdminAnnouncements() {
    const navigate = useNavigate()
    useEffect(() => {
      if (!!!localStorage.getItem('token')) navigate('/login')
    }, [localStorage.getItem('token')])

    return (
        <>
            <AdminHeader />
            <AdminClients />
        </>
    );
}

export default AdminAnnouncements;
