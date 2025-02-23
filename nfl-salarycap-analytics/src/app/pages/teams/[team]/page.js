// src/app/teams/[team]/page.js
import { getCapData } from "../../../lib/fetchCapData";
import ContractTable from "../../../components/ContractTable";

export default async function TeamPage({ params }) {
  const data = await getCapData();
  const team = data.teams.find(
    (t) => t.name.toLowerCase().replace(/\s+/g, "-") === params.team
  );

  if (!team) {
    return <h1>Team not found</h1>; // Basic 404 handling
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">{team.name}</h1>
      <p>Cap Space: ${team.capSpace.toLocaleString()}</p>
      <ContractTable contracts={team.contracts} />
    </div>
  );
}