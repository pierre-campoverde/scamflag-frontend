import { Button, Rating, TextField, Typography } from "@mui/material";

const CreateReviewForm = () => {
  return (
    <div className="border shadow-md md:w-6/12 mt-6 mx-auto rounded-3xl p-3 dark:bg-zinc-900">
      <form action="">
        <div className="w-full p-3">
          <TextField label="URL" fullWidth />
        </div>
        <div className="flex-col p-3 dark:text-white">
          <Typography>Your rating:</Typography>
          <Rating
            name="simple-controlled"
            value={0}
            onChange={(event, newValue) => {
              console.log(event);
            }}
          />
        </div>
        <div className="p-3">
          <Typography>Comment(Optional):</Typography>
          <TextField
            fullWidth
            id="outlined-textarea"
            label="Comment"
            multiline
            margin="normal"
            rows={4}
          />
        </div>
        <div className="p-3">
          <Button variant="contained" size="large" fullWidth>
            Publicar
          </Button>
        </div>
      </form>
    </div>
  );
};

export default CreateReviewForm;
