export default function EmergencyCard({ type, status, icon }) {
  return (
    <div className="bg-red-100 p-4 rounded shadow">
      <div className="flex items-center gap-4">
        <span>{icon}</span>
        <div>
          <h3 className="font-bold">{type}</h3>
          <p>{status}</p>
        </div>
      </div>
    </div>
  );
}
