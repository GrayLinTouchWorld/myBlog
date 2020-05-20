import Mock from 'mockjs'

Mock.mock('\/api\/getArticleList',{
    'list|10':[{
        'id|+1' : 1,
        'title' : '@title(5)', 
        'desc' : '@csentence',
        'content' : '@cparagraph(2)',
        'time' : '@datetime'
    }]
})

Mock.mock('\/api\/getArticleContent',{
    'artical':{
        'title' : '@title(5)', 
        'desc' : '@csentence',
        'content' : '@cparagraph(200)',
        'time' : '@datetime',
        'good|1-500' : 1
    }
})





