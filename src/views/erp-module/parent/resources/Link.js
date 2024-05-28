// Page owner : abhishek negi
// description : link tab in resources page

import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Grid from '@mui/system/Unstable_Grid/Grid';
import AttachmentOutlinedIcon from '@mui/icons-material/AttachmentOutlined';

// sample data
export const LinkData = [
    {
        id:1,
        linkText : 'The Wisdom Tree School',
        link : 'https://www.thewisdomtree.co/',
        thumbnailUrl : <AttachmentOutlinedIcon sx={{width:'4rem' , height:'4rem' , paddingLeft:'18px' , color : '#5a4f4f'}}/>,
    },
    {
        id:2,
        linkText : 'The Wisdom Tree School',
        link : 'https://www.thewisdomtree.co/',
        thumbnailUrl : <AttachmentOutlinedIcon sx={{width:'4rem' , height:'4rem' , paddingLeft:'18px' , color : '#5a4f4f'}}/>,
    },
    {
        id:3,
        linkText : 'The Wisdom Tree School',
        link : 'https://www.thewisdomtree.co/',
        thumbnailUrl : <AttachmentOutlinedIcon sx={{width:'4rem' , height:'4rem' , paddingLeft:'18px' , color : '#5a4f4f'}}/>,
    },
    {
        id:4,
        linkText : 'The Wisdom Tree School',
        link : 'https://www.thewisdomtree.co/',
        thumbnailUrl : <AttachmentOutlinedIcon sx={{width:'4rem' , height:'4rem' , paddingLeft:'18px' , color : '#5a4f4f'}}/>,
    },
    {
        id:5,
        linkText : 'The Wisdom Tree School',
        link : 'https://www.thewisdomtree.co/',
        thumbnailUrl : <AttachmentOutlinedIcon sx={{width:'4rem' , height:'4rem' , paddingLeft:'18px' , color : '#5a4f4f'}}/>,
    },
    {
        id:6,
        linkText : 'The Wisdom Tree School',
        link : 'https://www.thewisdomtree.co/',
        thumbnailUrl : <AttachmentOutlinedIcon sx={{width:'4rem' , height:'4rem' , paddingLeft:'18px' , color : '#5a4f4f'}}/>,
    },
    {
        id:7,
        linkText : 'The Wisdom Tree School',
        link : 'https://www.thewisdomtree.co/',
        thumbnailUrl : <AttachmentOutlinedIcon sx={{width:'4rem' , height:'4rem' , paddingLeft:'18px' , color : '#5a4f4f'}}/>,
    },
    {
        id:8,
        linkText : 'The Wisdom Tree School',
        link : 'https://www.thewisdomtree.co/',
        thumbnailUrl : <AttachmentOutlinedIcon sx={{width:'4rem' , height:'4rem' , paddingLeft:'18px' , color : '#5a4f4f'}}/>,
    },

    {
        id:9,
        linkText : 'The Wisdom Tree School',
        link : 'https://www.thewisdomtree.co/',
        thumbnailUrl : <AttachmentOutlinedIcon sx={{width:'4rem' , height:'4rem' , paddingLeft:'18px' , color : '#5a4f4f'}}/>,
    },
    {
        id:10,
        linkText : 'The Wisdom Tree School',
        link : 'https://www.thewisdomtree.co/',
        thumbnailUrl : <AttachmentOutlinedIcon sx={{width:'4rem' , height:'4rem' , paddingLeft:'18px' , color : '#5a4f4f'}}/>,
    },
    {
        id:11,
        linkText : 'The Wisdom Tree School',
        link : 'https://www.thewisdomtree.co/',
        thumbnailUrl : <AttachmentOutlinedIcon sx={{width:'4rem' , height:'4rem' , paddingLeft:'18px' , color : '#5a4f4f'}}/>,
    },
    {
        id:12,
        linkText : 'The Wisdom Tree School',
        link : 'https://www.thewisdomtree.co/',
        thumbnailUrl : <AttachmentOutlinedIcon sx={{width:'4rem' , height:'4rem' , paddingLeft:'18px' , color : '#5a4f4f'}}/>,
    },
    {
        id:13,
        linkText : 'The Wisdom Tree School',
        link : 'https://www.thewisdomtree.co/',
        thumbnailUrl : <AttachmentOutlinedIcon sx={{width:'4rem' , height:'4rem' , paddingLeft:'18px' , color : '#5a4f4f'}}/>,
    },
    {
        id:14,
        linkText : 'The Wisdom Tree School',
        link : 'https://www.thewisdomtree.co/',
        thumbnailUrl : <AttachmentOutlinedIcon sx={{width:'4rem' , height:'4rem' , paddingLeft:'18px' , color : '#5a4f4f'}}/>,
    },

    {
        id:15,
        linkText : 'The Wisdom Tree School',
        link : 'https://www.thewisdomtree.co/',
        thumbnailUrl : <AttachmentOutlinedIcon sx={{width:'4rem' , height:'4rem' , paddingLeft:'18px' , color : '#5a4f4f'}}/>,
    },

]
const Link = () => {
  return (
    <>
      <Grid container spacing={3} sx={{ mt: 3 }}>
                    {LinkData.map((link, id) => (
                        <Grid lg={4} md={6} sm={12} key={id} sx={{ padding: '20px' }}>
                            <Card elevation={3}  sx={{ display: 'flex' , alignItems:'center'}}>
                                <CardMedia>
                                    {/* <img src={link.thumbnailUrl} alt={link.title} style={{ width: '78px', height: '65px', objectFit:'contain', padding:'10px', }} /> */}
                                    {link.thumbnailUrl}
                                </CardMedia>
                                <CardContent>
                                    <Typography gutterBottom variant="h3" component="div">
                                        {link.linkText}
                                    </Typography>
                    
                                    <a href={link.link} target='_blank' rel='noopener noreferrer' style={{color:'inherit',textDecoration:'#000',fontWeight:'500'}}>Click Here To View</a>                                
                                </CardContent>
                            </Card>
                        </Grid>
                    ))}
      </Grid>
    </>
  )
}

export default Link