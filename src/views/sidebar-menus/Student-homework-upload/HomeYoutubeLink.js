import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';

function HomeYoutubeLink() {
  const [youtubeLinks, setYoutubeLinks] = useState([]);
  const [currentLink, setCurrentLink] = useState('');
  

  const handleLinkChange = (event) => {
    setCurrentLink(event.target.value);
  };


  const handleAddLink = () => {
    if (currentLink.trim() !== '') {
      setYoutubeLinks([...youtubeLinks, { link: currentLink, description }]);
      setCurrentLink('');
      setDescription('');
    }
  };

  const handleDeleteLink = (index) => {
    setYoutubeLinks(youtubeLinks.filter((_, i) => i !== index));
  };

  return (
    <div>
      <TextField
        label="Link"
        value={currentLink}
        onChange={handleLinkChange}
        fullWidth
        variant="outlined"
        margin="normal"
      />
      <Button
        variant="contained"
        color="primary"
        onClick={handleAddLink}
      >
        Add
      </Button>
      <div>
        {youtubeLinks.map((linkObj, index) => (
          <div key={index}>
            <IconButton onClick={() => handleDeleteLink(index)}>
              <CloseIcon />
            </IconButton>
            <p>{linkObj.description}</p>
            <iframe
              width="560"
              height="315"
              src={linkObj.link}
              title={`YouTube Video ${index}`}
              frameBorder="0"
              allowFullScreen
            ></iframe>
          </div>
        ))}
      </div>
    </div>
  );
}

export default HomeYoutubeLink;
