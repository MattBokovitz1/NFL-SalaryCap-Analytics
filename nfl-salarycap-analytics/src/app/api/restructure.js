export default async function handler(req, res) {
    const { teamName, player, newBaseSalary } = req.body;
    const data = await import("../data/cap-data.json");
    const team = data.teams.find((t) => t.name === teamName);
    const contract = team.contracts.find((c) => c.player === player);
  
    const savings = contract.baseSalary - newBaseSalary;
    const bonus = savings;
    const newCapHit = newBaseSalary + bonus / contract.yearsLeft;
    const capSpaceIncrease = contract.capHit - newCapHit;
  
    res.status(200).json({
      originalCapHit: contract.capHit,
      newCapHit,
      capSpaceIncrease,
    });
  }