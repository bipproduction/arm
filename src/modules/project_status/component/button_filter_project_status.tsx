'use client'

import { Box, Button, Grid } from "@mantine/core"

export function ButtonFilterProjectStatus() {
    return (
        <>
            <Box pt={10}>
                <Grid mt={10}>
                    <Grid.Col md={6} lg={3}>
                        <Button color="gray" fullWidth>
                            APPROVAL
                        </Button>
                    </Grid.Col>
                    <Grid.Col md={6} lg={3}>
                        <Button color="gray" fullWidth>
                            DECLINED
                        </Button>
                    </Grid.Col>
                    <Grid.Col md={6} lg={3}>
                        <Button color="gray" fullWidth>
                            CANCELED
                        </Button>
                    </Grid.Col>
                    <Grid.Col md={6} lg={3}>
                        <Button color="gray" fullWidth>
                            JOB ORDER
                        </Button>
                    </Grid.Col>
                </Grid>
            </Box>
        </>
    )
}