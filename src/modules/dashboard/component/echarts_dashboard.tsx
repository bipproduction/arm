"use client";
import React, { useState } from "react";
import { EChartsOption } from "echarts";
import EChartsReact from "echarts-for-react";
import { Box, Text } from "@mantine/core";
import { useShallowEffect } from "@mantine/hooks";

export function EchartsDashboard() {
  const [options, setOptions] = useState<EChartsOption>({});

  useShallowEffect(() => {
    loadData();
  }, []);

  const loadData = () => {
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
          data: [10, 52, 200, 334, 390, 330, 220]
        }
      ]
    };
    setOptions(option);
  };
  return (
    <>
      <Box>
        <Box pt={40}>
          <Box
            sx={{
              backgroundColor: "#C6C5C5",
              borderRadius: 10,
            }}
          >
            <Box p={10}>
              <Text fw={700} pl={20} pt={20}>
                MONTHLY BUDGET STATISTICS
              </Text>
            </Box>
            <Box>
              <EChartsReact style={{ height: 300 }} option={options} />
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
}
