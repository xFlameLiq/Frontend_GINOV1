import {
  Add,
  Announcement,
  EmojiEmotions,
  Image,
  PersonAdd,
  VideoCameraBack,
} from "@mui/icons-material";
import {
  Avatar,
  Box,
  Fab,
  Tooltip,
  Typography,
  TextField,
  Stack,
  ButtonGroup,
  Button,
} from "@mui/material";
import {
  add_post_style,
  avatar_userbox,
  content_icons,
  content_post_field,
  create_new_post,
  create_post_title,
  posting_btn,
  report_btn,
} from "./AddPost.style";
import { useState } from "react";
import { StyledModal, UserBox } from "./AddPost.components";

const AddPost = () => {
  const [open, setOpen] = useState<boolean>(false);
  const handleModal = () => {
    setOpen(!open);
  };

  return (
    <>
      <Tooltip onClick={handleModal} title="Add Post" sx={add_post_style}>
        <Fab color="primary" aria-label="add">
          <Add />
        </Fab>
      </Tooltip>
      <StyledModal
        open={open}
        onClose={handleModal}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={create_new_post}>
          <Typography sx={create_post_title}>Create Post</Typography>
          <UserBox>
            <Avatar
              src="https://approachableai.com/wp-content/uploads/2022/12/AIPortraitExample-scaled.jpg"
              sx={avatar_userbox}
            />
            <Typography variant="body1">
              John Smith
            </Typography>
          </UserBox>
          <TextField
            sx={content_post_field}
            id=""
            multiline
            rows={4}
            label=""
            placeholder="What's on your mind?"
          />
          <Stack sx={content_icons}>
            <EmojiEmotions color="primary" />
            <Image color="secondary" />
            <VideoCameraBack color="success" />
            <PersonAdd color="error" />
          </Stack>
          <ButtonGroup
            fullWidth
            variant="contained"
            aria-label="Basic button group"
          >
            <Button sx={posting_btn}>POST</Button>
            <Button sx={report_btn}>
                <Announcement/>
            </Button>
          </ButtonGroup>
        </Box>
      </StyledModal>
    </>
  );
};

export default AddPost;
