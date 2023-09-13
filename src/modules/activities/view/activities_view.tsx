"use client";

import { Box, Grid, SimpleGrid, Text } from "@mantine/core";
import { COLOR } from "@/modules/_global";
import { DraftProjects } from "../components/draft_projects";
import { CreateProject } from "../components/create_project";
import { Archive } from "../components/archive";
import { Quotation } from "../components/quotation";
import { ProjectsStatus } from "../components/projects_status";
import { DeliveryStatus } from "../components/delivery_status";

export function ActivitiesView() {
  return (
    <>
      <Box pt={10}>
        <Box pb={20}>
          <Text fw={700}>ACTIVITIES</Text>
        </Box>
        <Grid>
          <Grid.Col md={8} lg={8}>
            <Box>
              <DraftProjects />
            </Box>
          </Grid.Col>
          <Grid.Col md={4} lg={4}>
            <Box
              sx={{
                backgroundColor: COLOR.AbuMuda,
                borderRadius: 10,
              }}
              p={10}
            >
              <Box>
                <Box m={12}>
                  <CreateProject />
                </Box>
                <Box m={10}>
                  <Archive />
                </Box>
                <Box m={10}>
                  <Quotation />
                </Box>
              </Box>
            </Box>
          </Grid.Col>
        </Grid>

        {/* Project Status */}
        <ProjectsStatus />

        {/* Delivery Status */}
        <DeliveryStatus />
      </Box>
    </>
  );
}
