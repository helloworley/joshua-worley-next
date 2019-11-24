import { Flex, Card, Image, Heading, Text, Box } from 'rebass';

const ImageCard = props => (
  <Flex>
    <Card
      width={[256, 320]}
      mx='auto'
      sx={{
        margin: '0 0 40px',
        borderRadius: 8,
        boxShadow: '0 0 16px rgba(0, 0, 0, .25)',
      }}>
      <Box
        sx={{
          backgroundImage: `url(${props.image})`,
          borderTopLeftRadius: 8,
          borderTopRightRadius: 8,
          height: 240,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          color: 'white',
          bg: 'gray',
          margin: '0 0 8px',
        }}
      />
      <Box
        sx={{
          px: 4,
          py: 4,
        }}
      >
        <Heading fontSize={[2, 3, 4]} color='text' mb={3}>{props.name}</Heading>
        <Text
          sx={{
            mb: 3,
          }}
        fontSize={[1]}>
          {props.date}
        </Text>
        <Text fontSize={[2]}>
          {props.excerpt}
        </Text>
      </Box>
    </Card>
  </Flex>
);

export default ImageCard;


