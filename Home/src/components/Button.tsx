
import Button from "@mui/material/Button";




type Props = {
  name: string;
  route: string;
};

const CompButton = ({ name, route }: Props) => {
  return (
    <>
          <Button
            
            variant="contained"
            color="secondary"
            href={route}
            sx={{

              width: "10rem",
              mr: "1rem"
            }}
          >
            {name}
          </Button>
    </>
  );
};

export default CompButton;
