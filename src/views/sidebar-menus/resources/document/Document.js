import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { documentData } from './DocumentData';
import Grid from '@mui/system/Unstable_Grid/Grid';
// import PDFViewer from './PdfViewer';


export default function Document() {

    // const handleDownload = (url) => {
    //     fetch(url)
    //         .then(response => response.blob())
    //         .then(blob => {
    //             const url = URL.createObjectURL(blob);
    //             const a = document.createElement('a');
    //             a.href = url;
    //             a.download = 'document.pdf';
    //             document.body.appendChild(a);
    //             a.click();
    //             a.remove();
    //         })
    //         .catch(error => console.error('Error downloading PDF:', error));
    // };
    
    

  return (
        <>
        <Grid container spacing={3} sx={{ mt: 3 }}>
                {documentData.map((document, id) => (
                    <Grid lg={4} md={6} sm={12} key={id} sx={{ padding: '20px' }}>
                        <Card elevation={3}  sx={{ display: 'flex' , alignItems:'center'}}>
                            <CardMedia>
                                <img src={document.thumbnailUrl} alt={document.title} style={{ width: '100px', height: '90px', objectFit:'contain' }} />
                            </CardMedia>
                            <CardContent>
                                <Typography gutterBottom variant="h3" component="div">
                                    {document.title}
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    {document.subtitle}
                                </Typography>
                                {/* Integrate PDFViewer component */}
                                {/* <PDFViewer url={document.url} /> */}
                                <a href={document.url} download="document.pdf" target='_blank' rel='noopener noreferrer' onClick={(e) => handleDownload(e, document.url)} style={{color:'inherit',textDecoration:'#000',fontWeight:'500'}}>download</a>
                                

                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </>

  );
}