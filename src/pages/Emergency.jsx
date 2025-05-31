import EmergencyCard from '../components/EmergencyCard';

export default function Emergency() {
  return (
    <section className="p-6">
      <h2 className="text-xl font-bold mb-4">Emergency Services</h2>
      <div className="grid gap-4">
        <EmergencyCard type="Nearest Police" status="5 mins away" icon="🚓" />
        <EmergencyCard type="Nearest Ambulance" status="7 mins away" icon="🚑" />
        <EmergencyCard type="Nearest Hospital" status="10 mins away" icon="🏥" />
      </div>
    </section>
  );
}
