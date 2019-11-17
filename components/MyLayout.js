import Header from './Header';
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
        width={[1 / 16, 1 / 4]}
        bg=''>
        <Header />
      </Box>
      <Box
        p={4}
        width={[1, 3 / 4]}
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