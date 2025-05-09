'use client'

import { Card, CardContent } from '@/components/ui/card'
import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ReferenceLine,
} from 'recharts'

const data = [
  { stage: 'Stage 1', value: 0.01 },
  { stage: 'Current Stage', value: 0.022 },
  { stage: 'Stage 6', value: 0.023 },
  { stage: 'Stage 50', value: 0.20 },
]

const CustomTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white text-black text-xs px-2 py-1 rounded shadow">
        ${payload[0].value.toFixed(3)}
      </div>
    )
  }
  return null
}

export default function Graph() {
  return (
    <Card className="bg-gradient-to-br from-[#2b083f] to-[#400524] text-white rounded-2xl h-screen">
      <CardContent className="p-6 h-full">
        <h2 className="text-lg font-semibold mb-4">Progress</h2>
        <div className="h-full min-h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={data}>
              <XAxis dataKey="stage" tick={{ fill: 'white' }} />
              <YAxis
                tickFormatter={(v) => `$${v.toFixed(3)}`}
                tick={{ fill: 'white' }}
                domain={[0, 0.20]}
              />
              <Tooltip content={<CustomTooltip />} />
              <ReferenceLine
                x="Current Stage"
                stroke="#FF00FF55"
                strokeDasharray="3 3"
              />
              <Line
                type="monotone"
                dataKey="value"
                stroke="#ffffff"
                strokeWidth={2}
                dot={{ fill: '#fff' }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  )
}
