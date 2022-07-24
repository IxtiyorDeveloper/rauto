import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import AdminHeader from "../../components/admin_header/admin_header";
import Statistics from "../../components/statistics/statistics";

function StatisticsPage() {
  const navigate = useNavigate()
  useEffect(() => {
    if (!!!localStorage.getItem('token')) navigate('/login')
  }, [localStorage.getItem('token')])

  return (
    <>
      <AdminHeader />
      <Statistics />
    </>
  );
}

export default StatisticsPage;
