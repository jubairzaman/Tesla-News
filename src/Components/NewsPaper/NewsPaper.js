import { Grid } from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect, useState } from 'react';
import News from '../News/News';

const NewsPaper = () => {
    const [news, setNews] = useState([]);

    useEffect(() => {
        fetch('https://newsapi.org/v2/everything?q=tesla&from=2021-08-28&sortBy=publishedAt&apiKey=e670e1400f08477f8adf6faf56e7a0bb')
            .then(res => res.json())
            .then(data => setNews(data.articles))

    }, [])
    return (
        <div>
            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                    {

                        news.map(article => <Grid item xs={2} sm={4} md={4} >
                            <News article={article}></News>

                        </Grid>)





                    }
                </Grid>
            </Box>
        </div>
    );
};

export default NewsPaper;
