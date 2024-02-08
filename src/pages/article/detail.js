import { Box, Container, Skeleton, Typography } from "@mui/material";
import React from "react";
import { useParams } from "react-router-dom";
import { useArticle } from "../../features";
import moment from "moment";

export default function ArticleDetail() {
    const { articleId } = useParams();
    const { getArticleDetail } = useArticle();
    const [article, setArticle] = React.useState(null);

    React.useEffect(() => {
        getArticleDetail(articleId)
        .then((data) => {
            setArticle(data);
        });
    }, []);

    return (
        <Container maxWidth="md">
            { article ? <Typography variant="h2" color="primary">{ article.title }</Typography> : <Skeleton height={30}/> }
            { article ? <img src={article.urlToImage} style={{ width: '100%', borderRadius: 10, objectFit: 'cover', marginTop: 10 }}/> : <Skeleton variant="rectangular" height={250} sx={{mt: 2}}/> }
            { 
                article ? 
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 3 }}>
                        <Typography variant="caption">{ article.author }</Typography>
                        <Box sx={{ width: '3px', height: '3px', borderRadius: '100%', bgcolor: 'white' }}></Box>
                        <Typography variant="caption">{ moment(article.publishedAt).format("YYYY-MM-DD hh:mm a") }</Typography>
                    </Box>
                :   <Skeleton width="60%"/> 
            }
            <Box sx={{ marginTop: '60px' }}>
                {
                    article ? 
                        <Typography variant="body1">
                            <div style={{ textAlign: "justify", fontSize: '120%' }} dangerouslySetInnerHTML={{ __html: article.content }} />
                        </Typography>
                    :
                    <>
                        <Skeleton/>
                        <Skeleton/>
                    </>
                }
            </Box>
        </Container>
    )
}