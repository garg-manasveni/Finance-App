import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from "recharts";

const COLORS = ["#ec4899", "#8b5cf6"];

const Charts = ({ data }) => {
    return (
        <ResponsiveContainer width="100%" height={320}>
            <PieChart>
                <Pie data={data} dataKey="value" outerRadius={100} innerRadius={60} paddingAngle={4}>
                    {data.map((entry, index) => (
                        <Cell key={index} fill={COLORS[index % COLORS.length]} />
                    ))}
                </Pie>
                <Tooltip formatter={(value) => [value, "Transactions"]} />
            </PieChart>
        </ResponsiveContainer>
    );
};

export default Charts;