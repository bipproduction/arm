"use client"
import { useRef, useState } from 'react';
import { createStyles, NumberInput, NumberInputHandlers, ActionIcon, rem, Button, Paper, Group, Box } from '@mantine/core';
import { AiOutlineMinus, AiOutlineMinusCircle, AiOutlinePlus, AiOutlinePlusCircle } from "react-icons/ai"


const useStyles = createStyles((theme) => ({
  wrapper: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderRadius: theme.radius.sm,
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.white,

    '&:focus-within': {
      borderColor: theme.colors[theme.primaryColor][6],
    },
  },



  input: {
    textAlign: 'center',
    height: rem(28),
    paddingRight: `${theme.spacing.sm} !important`,
    paddingLeft: `${theme.spacing.sm} !important`,
  },
}));

interface QuantityInputProps {
  min?: number;
  max?: number;
}

export function QuantityInput({ min = 1, max = 100 }: QuantityInputProps) {
  const { classes } = useStyles();
  const handlers = useRef<NumberInputHandlers>(null);
  const [value, setValue] = useState<number | ''>(1);

  return (
    <>
    <Paper className={classes.wrapper}>
      <ActionIcon
        variant="transparent"
        onClick={() => handlers.current?.decrement()}
        disabled={value === min}
        onMouseDown={(event) => event.preventDefault()}
      >
        <AiOutlineMinus size="15" />
      </ActionIcon>

      <NumberInput
        variant="unstyled"
        min={min}
        max={max}
        handlersRef={handlers}
        value={value}
        onChange={setValue}
        classNames={{ input: classes.input }}
      />

      <ActionIcon
        variant="transparent"
        onClick={() => handlers.current?.increment()}
        disabled={value === max}
        onMouseDown={(event) => event.preventDefault()}
      >
        <AiOutlinePlus size="15" />
      </ActionIcon>
    </Paper>
    </>
  );
}
