// theme.ts (tsx file with usage of StyleFunctions, see 4.)
import { extendTheme } from '@chakra-ui/react'

const theme = extendTheme({
  components: {
    Button: {
      baseStyle: {
        fontWeight: 'semibold',
        border:'2px solid black'
      },
      variants: {
        'primary': {
          bg: 'blue',
          boxShadow: '0 0 2px 2px #efdfde',
        },
        'secondary':{
          bg: 'orange',
        },
        'success':{
          bg:'green'
        },
        'danger':{
          bg:'red'
        }
      },  
      // defaultProps: {
      //   size: 'lg', // default is md
      //   variant: 'sm', // default is solid
      //   colorScheme: 'green', // default is gray
      // },
    },
    Input:{
      baseStyle:{
        field:{
          fontWeight:'semibold',
          maxWidth:'500px',
          border:'20x solid black',
          borderRadius:'5px',
          bg:'yellow.200',
          color:'white'
        },
      },
      variants:{
        'small':{
          field:{
            height:'2rem'
          }
        },
        'medium':{
          field:{
            height:'4rem'
          }
        },
        'large':{
          field:{
            height:'6rem'
          }
        }
      }
    },
  },
})

export default theme