export default function ContractTable({ contracts }) {
    return (
      <table className="w-full mt-4 border-collapse">
        <thead>
          <tr className="bg-gray-200">
            <th className="border p-2">Player</th>
            <th className="border p-2">Cap Hit</th>
            <th className="border p-2">Base Salary</th>
            <th className="border p-2">Years Left</th>
          </tr>
        </thead>
        <tbody>
          {contracts.map((contract) => (
            <tr key={contract.player}>
              <td className="border p-2">{contract.player}</td>
              <td className="border p-2">${contract.capHit.toLocaleString()}</td>
              <td className="border p-2">${contract.baseSalary.toLocaleString()}</td>
              <td className="border p-2">{contract.yearsLeft}</td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }