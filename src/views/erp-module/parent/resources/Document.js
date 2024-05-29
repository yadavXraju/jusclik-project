// Page owner : abhishek negi
// description : document tab in resources page

import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Grid from '@mui/system/Unstable_Grid/Grid';
import pdf from 'assets/images/pdfIcon.png';

// sample data
export const documentData = [
    {
        id: 1,
        url:'https://www.thewisdomtree.co/downloads?download=the-jungle-book#54',
        title:' The Jungle Book',
        subtitle : ' Rudyard Kipling',
        thumbnailUrl: pdf,
         postDate:'20-Jan-2029',
    },

    {
        id: 2,
        url:'https://www.thewisdomtree.co/downloads?download=the-jungle-book#54',
        title:' The Jungle Book',
        subtitle : ' Rudyard Kipling',
        thumbnailUrl: pdf,
         postDate:'20-Jan-2022',
    },

    {
        id: 3,
        url:'https://www.thewisdomtree.co/downloads?download=the-jungle-book#54',
        title:' The Jungle Book',
        subtitle : ' Rudyard Kipling',
        thumbnailUrl: pdf,
        postDate:'20-Feb-2022',
    },
    {
        id: 4,
        url:'https://www.thewisdomtree.co/downloads?download=the-jungle-book#54',
        title:' The Jungle Book',
        subtitle : ' Rudyard Kipling',
        thumbnailUrl: pdf,
         postDate:'20-Jan-2027',
    },

    {
        id: 5,
        url:'https://www.thewisdomtree.co/downloads?download=the-jungle-book#54',
        title:' The Jungle Book',
        subtitle : ' Rudyard Kipling',
        thumbnailUrl: pdf,
         postDate:'20-July-2021',
    },

    {
        id: 6,
        url:'https://www.thewisdomtree.co/downloads?download=the-jungle-book#54',
        title:' The Jungle Book',
        subtitle : ' Rudyard Kipling',
        thumbnailUrl: pdf,
         postDate:'20-Feb-2026',
    },

    {
        id: 7,
        url:'https://www.thewisdomtree.co/downloads?download=the-jungle-book#54',
        title:' The Jungle Book',
        subtitle : ' Rudyard Kipling',
        thumbnailUrl: pdf,
         postDate:'20-Jan-2023',
    },

    {
        id: 8,
        url:'https://www.thewisdomtree.co/downloads?download=the-jungle-book#54',
        title:' The Jungle Book',
        subtitle : ' Rudyard Kipling',
        thumbnailUrl: pdf,
         postDate:'20-Jan-2025',
    },

    {
        id: 9,
        url:'https://www.thewisdomtree.co/downloads?download=the-jungle-book#54',
        title:' The Jungle Book',
        subtitle : ' Rudyard Kipling',
        thumbnailUrl: pdf,
         postDate:'20-May-2022',
    },
    {
        id: 10,
        url:'https://www.thewisdomtree.co/downloads?download=the-jungle-book#54',
        title:' The Jungle Book',
        subtitle : ' Rudyard Kipling',
        thumbnailUrl: pdf,
         postDate:'20-Jan-2027',
    },

    {
        id: 11,
        url:'https://www.thewisdomtree.co/downloads?download=the-jungle-book#54',
        title:' The Jungle Book',
        subtitle : ' Rudyard Kipling',
        thumbnailUrl: pdf,
         postDate:'20-Aug-2029',
    },

    {
        id: 12,
        url:'https://www.thewisdomtree.co/downloads?download=the-jungle-book#54',
        title:' The Jungle Book',
        subtitle : ' Rudyard Kipling',
        thumbnailUrl: pdf,
         postDate:'20-Feb-2029',
    },


]

export default function Document() {


  return (
        <>
        <Grid container spacing={3} sx={{ mt: 3 }}>
                {documentData.map((document, id) => (
                    <Grid lg={4} md={6} sm={12} key={id} sx={{ padding: '20px' }}>
                        <Card elevation={3}  sx={{ display: 'flex' , alignItems:'center'}}>
                            <CardMedia>
                                <img src={document.thumbnailUrl} alt={document.title} style={{ width: '100px', height: '90px', objectFit:'contain',padding:'10px' }} />
                            </CardMedia>
                            <CardContent>
                                <Typography gutterBottom variant="h3" component="div">
                                    {document.title}
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    {document.subtitle}
                                </Typography>
                                                    
                                {/* if you want to download file on click then you uncomment this line */}

                                {/* <a href={document.url} download="document.pdf" target='_blank' rel='noopener noreferrer' onClick={(e) => handleDownload(e, document.url)} style={{color:'inherit',textDecoration:'#000',fontWeight:'500'}}>download</a> */}

                                <a href={document.url}  target='_blank' rel='noopener noreferrer' style={{color:'inherit',textDecoration:'#000',fontWeight:'500'}}>download</a>
                                
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </>

  );
}