import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import { cardUser, divData, sxCard } from "./UserCard.style";

type userData = {
  id: number;
  name: string;
  username: string;
  email: string;
  phone: string;
  website: string;
  address: string;
  picture: string;
};

const UserCard = ({
  id,
  name,
  username,
  email,
  phone,
  website,
  address,
  picture,
}: userData) => {
  return (
    <>
      <Card sx={cardUser}>
        <CardMedia
          component='img'
          sx={{ height: 140 }}
          src={picture}

        />
        <CardContent>
          <Box component="div">
            <Typography variant="h5" component="h3">
              {name}
            </Typography>
            <Typography variant="h6" component="h4">
              {username}
            </Typography>
            <Typography gutterBottom variant="subtitle1">{id}</Typography>
          </Box>
          <Box component="div">
            <Box component="div" sx={divData}>
              <Typography variant="body1" color="initial">
                Email: {email}
              </Typography>
              <Typography variant="body1" color="initial">
                Phone: {phone}
              </Typography>
            </Box>
            <Box component="div" sx={divData}>
              <Typography variant="body1" color="initial">
                website: {website}
              </Typography>
              <Typography variant="body1" color="initial">
                address: {address}
              </Typography>
            </Box>
          </Box>
        </CardContent>
      </Card>
    </>
  );
};

export default UserCard;
