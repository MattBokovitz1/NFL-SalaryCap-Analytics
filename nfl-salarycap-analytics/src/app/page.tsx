// src/app/page.js
import { getCapData } from "./lib/fetchCapData"
import TeamCard from "./components/TeamCard";

export default async function Home() {
  const data = await getCapData();
  const teams = data.teams;

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">NFL Salary Cap 2025</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {teams.map((team) => (
          <TeamCard key={team.name} team={team} />
        ))}
      </div>
    </div>
  );
}