
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';

import { areaData } from '@/data/chartData';
import useMediaQuery from '@/hooks/useMediaQuery';

export default function DashboardAreachart() {
  const isMobile = useMediaQuery('(max-width:426px)');

  return (
    <ResponsiveContainer width="100%" height="80%">
      <AreaChart data={areaData}>
        <CartesianGrid vertical={false} />
        <XAxis dataKey="month" className="text-sm" />
        <YAxis className="text-sm" hide={isMobile ? true : false} />
        <Tooltip />
        <Area type={'linear'} dataKey="taps" stroke="#1AA845" fill="#7AE582" />
      </AreaChart>
    </ResponsiveContainer>
  );
}
