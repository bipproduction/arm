"use client";

import { Accordion, Box, Grid, SimpleGrid } from "@mantine/core";

const DataHelp = [
  {
    id: 1,
    title: "How can I reset my password?",
    isi: "It can’t help but hear a pin drop from over half a mile away, so it lives deep in the mountains where there aren’t many people or Pokémon.It was born from sludge on the ocean floor. In a sterile environment, the germs within its body can’t multiply, and it dies.It has no eyeballs, so it can’t see. It checks its surroundings via the ultrasonic waves it emits from its mouth.",
  },
  {
    id: 2,
    title: "How can I reset my password?",
    isi: "It can’t help but hear a pin drop from over half a mile away, so it lives deep in the mountains where there aren’t many people or Pokémon.It was born from sludge on the ocean floor. In a sterile environment, the germs within its body can’t multiply, and it dies.It has no eyeballs, so it can’t see. It checks its surroundings via the ultrasonic waves it emits from its mouth.",
  },
  {
    id: 3,
    title: "How can I reset my password?",
    isi: "It can’t help but hear a pin drop from over half a mile away, so it lives deep in the mountains where there aren’t many people or Pokémon.It was born from sludge on the ocean floor. In a sterile environment, the germs within its body can’t multiply, and it dies.It has no eyeballs, so it can’t see. It checks its surroundings via the ultrasonic waves it emits from its mouth.",
  },
  {
    id: 4,
    title: "How can I reset my password?",
    isi: "It can’t help but hear a pin drop from over half a mile away, so it lives deep in the mountains where there aren’t many people or Pokémon.It was born from sludge on the ocean floor. In a sterile environment, the germs within its body can’t multiply, and it dies.It has no eyeballs, so it can’t see. It checks its surroundings via the ultrasonic waves it emits from its mouth.",
  },
];

export function FaqLayout() {
  return (
    <>
      <SimpleGrid
        cols={2}
        spacing="lg"
        breakpoints={[
          { maxWidth: "sm", cols: 2, spacing: "sm" },
          { maxWidth: "xs", cols: 1, spacing: "sm" },
        ]}
      >
        <Box>
          {DataHelp.map((item) => (
            <Accordion variant="contained" key={item.id} mb={10}>
              <Accordion.Item value="photos">
                <Accordion.Control>{item.title}</Accordion.Control>
                <Accordion.Panel>{item.isi}</Accordion.Panel>
              </Accordion.Item>
            </Accordion>
          ))}
        </Box>
        <Box>
          {DataHelp.map((item) => (
            <Accordion variant="contained" key={item.id} mb={10}>
              <Accordion.Item value="photos">
                <Accordion.Control>{item.title}</Accordion.Control>
                <Accordion.Panel>{item.isi}</Accordion.Panel>
              </Accordion.Item>
            </Accordion>
          ))}
        </Box>
      </SimpleGrid>
    </>
  );
}
