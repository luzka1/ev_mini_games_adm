"use client";

import { Area, AreaChart, CartesianGrid, XAxis } from "recharts";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/UI/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/UI/chart";
const chartData = [
  { month: "Janeiro", users: 5 },
  { month: "Fevereiro", users: 3 },
  { month: "Março", users: 4 },
  { month: "Abril", users: 2 },
  { month: "Maio", users: 1 },
  { month: "Junho", users: 6 },
];

export function Areachart({ areaColor }: { areaColor: string }) {
  const chartConfig = {
    users: {
      label: "Usuários",
      color: areaColor,
    },
  } satisfies ChartConfig;

  return (
    <Card className="bg-white dark:bg-zinc-950 shadow-lg border-none h-full">
      <CardHeader>
        <CardTitle className="text-lg md:text-2xl">
          Usuários cadastrados
        </CardTitle>
        <CardDescription className="text-sm md:text-base">
          Mostrando os usuários cadastrados nos últimos 6 meses
        </CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <AreaChart
            accessibilityLayer
            data={chartData}
            margin={{
              left: 12,
              right: 12,
            }}
          >
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="month"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent indicator="line" />}
            />
            <Area
              dataKey="users"
              type="natural"
              fill={areaColor}
              fillOpacity={0.4}
            />
          </AreaChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
