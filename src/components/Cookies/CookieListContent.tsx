  import { Box, Button, Stack, Typography } from "@mui/material";
  import { CookieList } from "./CookieConstant";
  import {useState} from 'react';
  import EssentialCookieDetails from "./EssentialCookieDetails";

  const CookieListContent = () => {
    const [essentialCookie, setEssentialCookie] = useState(true)
    return (
      <>
        <Box sx={{ display: "flex", flexDirection: "column", padding: "15px" }}>
          <Typography
            variant="h4"
            sx={{ alignSelf: "center", fontWeight: "bold" }}
          >
            Manage you cookies
          </Typography>
          <Typography
            variant="h5"
            sx={{ margin: "5px 30%", fontWeight: "light" }}
          >
            Essential cookies are always on. You have the option to trun off other
            cookie types.
          </Typography>
        </Box>
        {essentialCookie ? 
        <Box sx={{ padding: "30px" }}>
          <Box sx={{ display: "flex" }}>
            <Typography sx={{ textDecoration: "underline", flexGrow: 1, padding: '16px', cursor: 'pointer' }} onClick={()=>setEssentialCookie(!essentialCookie)}>
              &gt; Essential Cookies (Dropdown list)
            </Typography>
            <Typography sx={{ textDecoration: "underline", margin: '0px 50px' }}>
              Always On
            </Typography>
          </Box>
          <Stack>
            {CookieList.map((list_value) => (
              <Stack direction="row" padding={2}>
                <Typography sx={{ textDecoration: "underline", flexGrow: 1}}>
                  {list_value.value}
                </Typography>
                <Button
                  sx={{
                    backgroundColor: "#cfc9c9",
                    color: "black",
                    textDecoration: "underline",
                    textTransform: "capitalize",
                    margin: '5px'
                  }}
                  size="small"
                >
                  {list_value.option.on}
                </Button>
                <Button
                  sx={{
                    backgroundColor: "#cfc9c9",
                    color: "black",
                    textDecoration: "underline",
                    textTransform: "capitalize",
                    margin: '5px'
                  }}
                  size="small"
                >
                  {list_value.option.off}
                </Button>
              </Stack>
            ))}
          </Stack>
          <Typography>
            Essential cookies are always on. You have the option to trun off other
            cookie types. Essential cookies are always on. You have the option to
            trun off other cookie types.
            <span style={{ textDecoration: "underline" }}>
              Full list of cookies.
            </span>
          </Typography>
          <Box sx={{display: 'flex', justifyContent: 'center', margin: '20px'}}>
            <Button
              variant="contained"
              sx={{
                backgroundColor: "#cfc9c9",
                color: "black",
                textTransform: "capitalize",
              }}
            >
              Save preferences
            </Button>
          </Box>
        </Box> : <EssentialCookieDetails setEssentialCookie={setEssentialCookie} essentialCookie={essentialCookie}/>
  }
      </>
    );
  };

  export default CookieListContent;
