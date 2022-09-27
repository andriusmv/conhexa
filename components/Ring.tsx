import { ThemeIcon, RingProgress, Text, Center } from '@mantine/core';
import { Check } from 'tabler-icons-react';

export default function Ring() {
  return (
    <>
      <RingProgress
        sections={[{ value: 40, color: 'blue' }]}
        label={
          <Text color="blue" weight={700} align="center" size="xl">
            40%
          </Text>
        }
      />

      <RingProgress
        sections={[{ value: 100, color: 'teal' }]}
        label={
          <Center>
            <ThemeIcon color="teal" variant="light" radius="xl" size="xl">
              <Check size={22} />
            </ThemeIcon>
          </Center>
        }
      />
    </>
  );
}
