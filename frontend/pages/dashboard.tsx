import {useEffect, useState} from "react";

export default function Dashboard() {
  const [isLoading, setLoading] = useState(true);
  const [dashboardData, setDashboardData] = useState<any[]>([]);

  useEffect(() => {
    async function fetchDashboardData(): Promise<void> {
      const res = await fetch("https://jsonplaceholder.typicode.com/comments");
      const data = await res.json();
      setDashboardData(data);
      setLoading(false);
    }

    fetchDashboardData().then();
  }, []);

  if (isLoading) {
    return <h2>Loading...</h2>;
  }
  return (
    <div>
      <h2>Dashboard</h2>
      <h2>Name</h2>
      <div>{dashboardData[0].name}</div>
    </div>
  )
}
