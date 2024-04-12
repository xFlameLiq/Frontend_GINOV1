import { Box, Container, Typography } from "@mui/material"
import { body, body_container, children, empty_div, main_container, parent, section_container, section_title } from "./Login.styles"


const Login = () => {
  return (
    <>

    <Box component="div" sx={main_container}>
      <Box component="section" sx={section_container}>
        <Box sx={section_title}>
        <Typography variant="h3" component="p" color="black">LEFT</Typography>
        </Box>
        <Box>
          <Typography variant="body1" color="initial">RIGHT</Typography>
        </Box>
      </Box>
      <Container maxWidth="tablet" sx={body_container}>
        <Box sx={parent}>
          <Box sx={children}>
            <Box flex={2}>
            <Typography >JUST A TITLE</Typography>
            </Box>
            <Box flex={1}>
            <Typography>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate architecto minima cum ipsam quo dignissimos consectetur, porro corrupti sed quis reiciendis nihil atque modi laudantium fugit commodi? Nam, qui sunt.</Typography>
            </Box>

        
          </Box>
        </Box>
        <Box sx={body}>
            <Typography variant="body1" color="initial">LAAA
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quaerat aliquid impedit placeat consequatur autem amet nulla velit fugit vitae eos eaque commodi, sapiente praesentium enim, vel doloremque? Corporis, ea iste.
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Praesentium maxime voluptas error eligendi porro cumque minus magnam quibusdam dicta corrupti? Molestias nulla sunt temporibus voluptatem maxime dolorum aspernatur expedita at!
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsam eos magnam vitae iure ipsum, iste id. Nobis perspiciatis quae voluptatum quidem, quisquam ipsam impedit assumenda praesentium unde in id expedita!
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet quidem tempora optio, quaerat veniam maiores, repellendus eum recusandae expedita deleniti labore nihil blanditiis enim rerum! Nisi officia corporis nihil sint.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad consequuntur eveniet commodi itaque, est ab quod tempora molestiae in, ipsa vero explicabo ullam nemo distinctio sit laudantium eos, cumque molestias?</Typography>
          </Box>
      </Container>
    </Box>

   
    </>
  )
}

export default Login