'use client'

import { Accordion, Grid } from "@mantine/core"

export function FaqLayout() {
    return (
        <>
            <Grid>
                <Grid.Col span={6}>
                    <Accordion variant="contained">
                        <Accordion.Item value="photos">
                            <Accordion.Control>
                                How can I reset my password?
                            </Accordion.Control>
                            <Accordion.Panel>It can’t help but hear a pin drop from over half a mile away, so it lives deep in the mountains where there aren’t many people or Pokémon.It was born from sludge on the ocean floor. In a sterile environment, the germs within its body can’t multiply, and it dies.It has no eyeballs, so it can’t see. It checks its surroundings via the ultrasonic waves it emits from its mouth.</Accordion.Panel>
                        </Accordion.Item>

                        <Accordion.Item value="print">
                            <Accordion.Control>
                                Can I create more that one account?
                            </Accordion.Control>
                            <Accordion.Panel>It can’t help but hear a pin drop from over half a mile away, so it lives deep in the mountains where there aren’t many people or Pokémon.It was born from sludge on the ocean floor. In a sterile environment, the germs within its body can’t multiply, and it dies.It has no eyeballs, so it can’t see. It checks its surroundings via the ultrasonic waves it emits from its mouth.</Accordion.Panel>
                        </Accordion.Item>

                        <Accordion.Item value="camera">
                            <Accordion.Control>
                                How can I subscribe to monthly newsletter?
                            </Accordion.Control>
                            <Accordion.Panel>It can’t help but hear a pin drop from over half a mile away, so it lives deep in the mountains where there aren’t many people or Pokémon.It was born from sludge on the ocean floor. In a sterile environment, the germs within its body can’t multiply, and it dies.It has no eyeballs, so it can’t see. It checks its surroundings via the ultrasonic waves it emits from its mouth.</Accordion.Panel>
                        </Accordion.Item>
                    </Accordion>
                </Grid.Col>
                <Grid.Col span={6}>
                    <Accordion variant="contained">
                        <Accordion.Item value="photos">
                            <Accordion.Control>
                                How can I reset my password?
                            </Accordion.Control>
                            <Accordion.Panel>It can’t help but hear a pin drop from over half a mile away, so it lives deep in the mountains where there aren’t many people or Pokémon.It was born from sludge on the ocean floor. In a sterile environment, the germs within its body can’t multiply, and it dies.It has no eyeballs, so it can’t see. It checks its surroundings via the ultrasonic waves it emits from its mouth.</Accordion.Panel>
                        </Accordion.Item>

                        <Accordion.Item value="print">
                            <Accordion.Control>
                                Can I create more that one account?
                            </Accordion.Control>
                            <Accordion.Panel>It can’t help but hear a pin drop from over half a mile away, so it lives deep in the mountains where there aren’t many people or Pokémon.It was born from sludge on the ocean floor. In a sterile environment, the germs within its body can’t multiply, and it dies.It has no eyeballs, so it can’t see. It checks its surroundings via the ultrasonic waves it emits from its mouth.</Accordion.Panel>
                        </Accordion.Item>

                        <Accordion.Item value="camera">
                            <Accordion.Control>
                                How can I subscribe to monthly newsletter?
                            </Accordion.Control>
                            <Accordion.Panel>It can’t help but hear a pin drop from over half a mile away, so it lives deep in the mountains where there aren’t many people or Pokémon.It was born from sludge on the ocean floor. In a sterile environment, the germs within its body can’t multiply, and it dies.It has no eyeballs, so it can’t see. It checks its surroundings via the ultrasonic waves it emits from its mouth.</Accordion.Panel>
                        </Accordion.Item>
                    </Accordion>
                </Grid.Col>
            </Grid>
        </>
    )
}