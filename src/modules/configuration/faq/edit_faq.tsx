"use client";
import { ButtonBack, COLOR } from "@/modules/_global";
import { Box, Button, Stack, Text, TextInput } from "@mantine/core";
import React, { useState } from "react";

export default function EditFaq({ data }: { data: any }) {
  const [lisaData, setListData] = useState<any[]>(data);
  return (
    <>
      {/* {JSON.stringify(lisaData)} */}
      <Stack>
        <ButtonBack />
      </Stack>
      <Box pt={20}>
        <Box
          sx={{
            border: `1px solid ${COLOR.AbuMuda}`,
            padding: 20,
            borderRadius: 10,
          }}
        >
          <Stack>
            <Text>Edit FAQ</Text>
            <TextInput
              placeholder="Question"
              // onChange={(val) =>
              //   setDataFaq({
              //     ...dataFaq,
              //     question: val.target.value,
              //   })
              // }
            />
            <TextInput
              placeholder="Answer"
              // onChange={(val) =>
              //   setDataFaq({
              //     ...dataFaq,
              //     answer: val.target.value,
              //   })
              // }
            />
            <Button
              color="gray.7"
              // onClick={onFaq}
            >
              EDIT
            </Button>
          </Stack>
        </Box>
      </Box>
    </>
  );
}
