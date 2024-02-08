import { Card, CardContent, CardMedia, Container, Grid, Typography, Skeleton } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { useArticle } from "../../features";
import moment from "moment";
import SeeMoreIcon from '@mui/icons-material/ChevronRight';
import { useNavigate } from "react-router-dom";
import Reveal from "../../components/box/Reveal";

function ArticleItem({article, id}) {
    const navigate = useNavigate();

    const onArticleCardClick = () => {
        navigate(""+id);
    }

    return (
        article.description ? 
        <Grid item lg={4} md={4} xl={3} sm={6} xs={12}>
            <Reveal>
                <Card variant="outlined" sx={{ cursor: 'pointer', "&:hover": { boxShadow: '#F05B1D .95px 1.95px 2.6px;' }, borderRadius: 2 }} onClick={onArticleCardClick}>
                    <CardMedia component="img" image={article.urlToImage} sx={{ height: 140, objectFit: "cover" }}/>
                    <CardContent sx={{ height: 170, position: 'relative' }}>
                        <Typography gutterBottom variant="subtitle2" component="div" sx={{ fontWeight: 600 }} noWrap>
                            { article.title }
                        </Typography>
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 2 }}>
                            <Typography variant="body2" sx={{ fontWeight: 500, fontSize: "90%" }} color="primary">{ article.author }</Typography>
                            <Box sx={{ width: '3px', height: '3px', borderRadius: '100%', bgcolor: 'white' }}></Box>
                            <Typography variant="body2" sx={{ fontWeight: 500, fontSize: "90%" }} color="gray">{ moment(article.publishedAt).format("DD MMM YYYY") }</Typography>
                        </Box>
                        <Typography variant="caption" sx={{ mt: 4 }}>
                            { article.description?.slice(0, 120)+"..." }
                        </Typography>
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, position: 'absolute', bottom: 4, right: 4 }}>
                            <Typography variant="body2" color="primary" sx={{ margin: 0, padding: 0 }}>See more</Typography>
                            <SeeMoreIcon color="primary" sx={{ margin: 0, padding: 0 }}/>
                        </Box>
                    </CardContent>
                </Card>
            </Reveal>
        </Grid>
        : null
    )
}

export default function ArticleList() {
    const { economicArticles, isLoading, fetchArticles } = useArticle();

    React.useEffect(() => {
        //fetchArticles();
    }, []);

    return (
        <>
            <Typography variant="h4" sx={{ textAlign: 'center', mb: 0 }}>
                Latest Economic News Worldwide
            </Typography>
            <Typography variant="h6" sx={{ textAlign: 'center', mt: 0 }} color="gray">
                Powered by News API
            </Typography>

            <Container maxWidth="md" sx={{ marginTop: 10 }}>
                <Grid container spacing={4}>
                    {
                        isLoading ? 
                            Array.from(new Array(6)).map(item => (
                                <Grid item lg={4} md={4} xl={3} sm={6} xs={12}>
                                    <Skeleton variant="rectangular" height={140}/>
                                    <Box sx={{ pt: 0.5 }}>
                                        <Skeleton />
                                        <Skeleton width="60%" />
                                    </Box>
                                </Grid>
                            ))
                        :
                            economicArticles.map((article, index) => <ArticleItem article={article} id={index} key={article.title}/>)
                    }
                </Grid>
            </Container>
        </>
    )
}