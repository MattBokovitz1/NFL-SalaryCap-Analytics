import Link from "next/link";

export default function TeamCard({ team }) {
  return (
    <Link href={`/teams/${team.name.toLowerCase().replace(/\s+/g, "-")}`}>
      <div className="border p-4 rounded shadow hover:bg-gray-100 cursor-pointer">
        <h2 className="text-xl font-semibold">{team.name}</h2>
        <p>Cap Space: ${team.capSpace.toLocaleString()}</p>
      </div>
    </Link>
  );
}