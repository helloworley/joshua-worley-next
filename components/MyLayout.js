import Navigation from './Navigation';
import { ThemeProvider } from 'theme-ui'
import theme from '../theme'
import { Flex, Box } from 'rebass'


const Layout = props => (
  <ThemeProvider theme={theme}>
    <Flex
      sx={{
        height: '100vh'
      }}
    >
      <Box
        p={4}
        width={[0, 1/6]}
        bg=''>
        <Navigation />
      </Box>
      <Box
        p={4}
        width={[1, 5/6]}
        bg=''
        sx={{
          overflow: 'auto'
        }}
      >
        {props.children}
      </Box>
    </Flex>
  </ThemeProvider>
);

export default Layout;