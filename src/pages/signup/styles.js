import {styled, FormControl as FormControlNext, Grid, Typography} from "@mui/material";
import {green2, green3} from "@/theme";

export const FormControl = styled(FormControlNext)`
  padding: 0 0 25px 0 ;
`

export const Bg = styled(Grid)`
  background-color: ${green3};
  height: 100vh;
`

export const P = styled(Typography)`
  font-size: 16px;
  color: ${green2};
  padding: 0 45px;
  text-align: center;
`

export const ContentContainer = styled('div')`
  height: 400px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`