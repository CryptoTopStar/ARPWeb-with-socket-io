import { Typography } from "@mui/material";

function Title(props:any) {
  return (
    <div className="title">
     <Typography  variant="h5">{props.name}</Typography>
    </div>
  )
}

export default Title;