import  {Grid, Stack, Button, Typography} from '@mui/material'
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import YouTubeIcon from '@mui/icons-material/YouTube';
import FavoriteIcon from '@mui/icons-material/Favorite';
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";

import '../styling/FormOverlay.css'

const FormOverlay = () => {
  return (
    <div className='root'>
      <Grid container>
        <Grid className='item1' item sm={12} xs={12}>
          <h3 className='title-main'>Free consultation with an academic advisor</h3>
          </Grid>
        <Grid className='item2' item sm={5} xs={12}>
          <Stack padding={2} direction='column'>
            <h5 className='list-headline'>During the consultation, you:</h5>
            <table>
              <tbody>
                <tr>
                  <td className='hash-numbers'>#1</td>
                  <td className='list-content'>Get a general idea of ​​the process of admission, enrollment, application to a university or school.</td>
                </tr>
                <tr>
                  <td className='hash-numbers'>#2</td>
                  <td className='list-content'>Get a personal offer based on the results of the conversation.</td>
                </tr>
                <tr>
                  <td className='hash-numbers'>#3</td>
                  <td className='list-content'>We will try to understand the aspects that need to be improved to increase the chances.</td>
                </tr>
                <tr>
                  <td className='hash-numbers'>#4</td>
                  <td className='list-content'>Discuss the chances, challenges, and barriers to enrollment and admission.</td>
                </tr>
              </tbody>
            </table>
          </Stack>
        </Grid>
        <Grid className='item3' item sm={7} xs={12}></Grid>
        <Grid className='item4' item sm={12} xs={12}>
          <Stack direction='column'>
            <Stack className='icon-tray' padding={2} direction='row'>
              <FacebookIcon fontSize='large' sx={{padding: '0px 10px'}}/>
              <YouTubeIcon fontSize='large' sx={{padding: '0px 10px'}}/>
              <InstagramIcon fontSize='large' sx={{padding: '0px 10px'}}/>
              <TwitterIcon fontSize='large' sx={{padding: '0px 10px'}}/>
              <LinkedInIcon fontSize='large' sx={{padding: '0px 10px'}}/>
            </Stack>
            <Stack className='description-tray' direction='row'>
              <Button variant='text' sx={{fontSize: 'small', color: 'gray', textTransform: "capitalize"}}>About Us</Button>
              <Button variant='text' sx={{fontSize: 'small', color: 'gray', textTransform: "capitalize"}}>Privacy Policy</Button>
              <Button variant='text' sx={{fontSize: 'small', color: 'gray', textTransform: "capitalize"}}>Terms of Use</Button>
              <Button variant='text' sx={{fontSize: 'small', color: 'gray', textTransform: "capitalize"}}>Contacts</Button>
            </Stack>
            <Stack className='footer'>
              <Typography className='bottomline-titile'>Study<KeyboardArrowRightIcon className='arrow-icon'/>Moov</Typography>
              <Typography>© 2019-2021 StudyMOOV - education abroad</Typography>
              <Typography>Made with <FavoriteIcon className='arrow-icon' sx={{color: 'red'}}/> in Switzerland </Typography>
            </Stack>
          </Stack>
        </Grid>
      </Grid>
    </div>
  )
}

export default FormOverlay
