import { Flex, Card, Image, Heading, Text, Box } from 'rebass';

const ImageCard = props => (
  <Flex>
    <Card
      width={[256, 320]}
      mx='auto'
      sx={{
        p: 1,
        borderRadius: 2,
        margin: '0 0 40px',
        padding: '8px',
        boxShadow: '0 0 16px rgba(0, 0, 0, .25)',
      }}>
      <Box
        sx={{
          backgroundImage: `url(${props.image})`,
          px: 4,
          py: 6,
          backgroundSize: 'cover',
          borderRadius: 8,
          color: 'white',
          bg: 'gray',
          margin: '0 0 8px',
        }}
      />
      <Heading
        fontSize={[2, 3, 4]}
        color='primary'>
        {props.name}
      </Heading>
      <Text>
      </Text>
    </Card>
  </Flex>
);

export default ImageCard;


