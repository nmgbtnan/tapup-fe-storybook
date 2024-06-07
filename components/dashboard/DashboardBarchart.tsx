import { barData } from '@/data/chartData';
import useMediaQuery from '@/hooks/useMediaQuery';
import {
  BarChart,
  Bar,
  ResponsiveContainer,
  YAxis,
  XAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from 'recharts';
export default function DashboardBarchat() {
  const isMobile = useMediaQuery('(max-width:426px)');
  return (
    <ResponsiveContainer width="100%" height="85%">
      <BarChart data={barData}>
        <CartesianGrid />
        <XAxis dataKey="month" className="text-sm" />
        <YAxis className="text-sm" hide={isMobile ? true : false} />
        <Tooltip />
        <Legend />
        <Bar dataKey="Taps" fill="#7AE582" />
      </BarChart>
    </ResponsiveContainer>
  );
}
