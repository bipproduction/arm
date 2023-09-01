"use client"
import React, { useState } from 'react';
import { EChartsOption } from "echarts";
import EChartsReact from "echarts-for-react";
import { Box } from '@mantine/core';



export function  EchartsDashboard() {
  const [options, setOptions] = useState<EChartsOption>({});

  const option: EChartsOption = {
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'shadow'
      }
    },
    grid: {
      left: '3%',
      right: '4%',
      bottom: '3%',
      containLabel: true
    },
    xAxis: [
      {
        type: 'category',
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        axisTick: {
          alignWithLabel: true
        }
      }
    ],
    yAxis: [
      {
        type: 'value'
      }
    ],
    series: [
      {
        name: 'Direct',
        type: 'bar',
        barWidth: '60%',
        data: [60, 52, 90, 30, 80, 89, 70],
        color: "#212A3E"
      }
    ]
  };
  return (
    <>
    <Box>
    <EChartsReact style={{ height: 300 }} option={option} />
    </Box>
    </>
  );
}

