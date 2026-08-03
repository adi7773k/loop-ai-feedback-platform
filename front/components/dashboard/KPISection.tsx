import {
  MessageSquare,
  Smile,
  Frown,
  Meh,
} from "lucide-react";

import StatCard from "./StatCard";

export default function KPISection() {
  return (
    <section className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">

      <StatCard
        title="Total Feedback"
        value="12,580"
        growth="+18%"
        color="bg-blue-600"
        icon={<MessageSquare size={28} />}
      />

      <StatCard
        title="Positive"
        value="8,764"
        growth="+12%"
        color="bg-green-500"
        icon={<Smile size={28} />}
      />

      <StatCard
        title="Negative"
        value="1,124"
        growth="-3%"
        color="bg-red-500"
        icon={<Frown size={28} />}
      />

      <StatCard
        title="Neutral"
        value="2,692"
        growth="+6%"
        color="bg-yellow-500"
        icon={<Meh size={28} />}
      />

    </section>
  );
}