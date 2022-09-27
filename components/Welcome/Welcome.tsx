import { Title, Text, Container, Space, Button, Group } from '@mantine/core';
import Link from 'next/link';
import { IconPlayerPlay } from '@tabler/icons';
import useStyles from './Welcome.styles';

export function Welcome() {
  const { classes } = useStyles();

  return (
    <>
    <Container size={600} px={0}>
      <Title className={classes.title} align="center" mt={100}>
        Bienvenidos a{' '}
        <Text inherit variant="gradient" component="span" gradient={{ from: 'lime.6', to: 'lime.0', deg: 45 }}>
          Conhexa 
        </Text> interactive
      </Title>
      <Text color="dimmed" align="center" size="xl" sx={{ maxWidth: 600 }} mx="auto" mt="xl">
Este es un apartamento modelo interactivo.
Te invitamos a jugar con los colores y materiales para que definas tu espacio a tu gusto.
      </Text>
      <Space h="xl" />
      <Group position="center">
      <Link href="/dashboard" passHref>
        <Button rightIcon={<IconPlayerPlay size={28} />} variant="filled" color="lime" radius="xl" size="xl" uppercase>
      Comenzar
        </Button>
      </Link>
      </Group>
    </Container>
    </>
  );
}
