
import Router from 'next/router'
export default function handler(req, res) {
    // res.setPreviewData({});
    // res.writeHead(307, { Location: '/pages/post/preview' });
    // res.end();

    // Enable Preview Mode by setting the cookies
    res.setPreviewData({})
    console.log(req.query)
    console.log('query')
    //http://localhost:5000/api/preview?secret=abc123&slug=/post/540&title=Gary%20crash%20la%20ligne%20ouverte%20avec%20sa%20HAINE%20DU%20CH!!!&blog_content=%3Cp%3EThe%20Apology%20Line%20Premieres%20on%20January%2019th,%20or%20you%20can%20listen%20right%20now%20Ad-free%20by%20joining%20Wondery%20Plus%20in%20the%20Wondery%20App.%20%20-%20%3Ca%20href=%22https://wondery.app.link/theapologyline%22%20rel=%22noopener%20noreferrer%22%20target=%22_blank%22%3Ehttps://wondery.app.link/theapologyline%3C/a%3E%3C/p%3E%3Cp%3E%3Ca%20href=%22https://art19.com/privacy%22%20rel=%22noopener%20noreferrer%22%20target=%22_blank%22%3EPrivacy%20Policy%3C/a%3E%20and%20%3Ca%20href=%22https://art19.com/privacy#do-not-sell-my-info%22%20rel=%22noopener%20noreferrer%22%20target=%22_blank%22%3ECalifornia%20Privacy%20Notice%3C/a%3E.%3C/p%3E&image_url=https://next.podboxx.com/rails/active_storage/blobs/redirect/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBMGVNQVE9PSIsImV4cCI6bnVsbCwicHVyIjoiYmxvYl9pZCJ9fQ==--55512e7662758afafdb567aca39cdef6cb3ffaef/po61286f9746.jpg
    // Redirect to the path from the fetched post
    // We don't redirect to req.query.slug as that might lead to open redirect vulnerabilities
    res.redirect()
    // Router.push({pathname: '/post/preview', query: {title: req.query.title, blog_content: req.query.blog_content}})
    // res.redirect(`${req.query.slug}/?title=${req.query.title}&blog_content=${req.query.blog_content}`)
}
// http://localhost:5000/api/preview?secret=abc123&slug=/post/540&title=Gary crash la ligne ouverte avec sa HAINE DU CH!!!&blog_content=Tribunelib finale de la Coupe Stanley. Les Nordiques se pointent le nez.&image_url=https://next.podboxx.com/rails/active_storage/blobs/redirect/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBMGVNQVE9PSIsImV4cCI6bnVsbCwicHVyIjoiYmxvYl9pZCJ9fQ==--55512e7662758afafdb567aca39cdef6cb3ffaef/po61286f9746.jpg&publication_date=2021-06-27
// http://localhost:5000/api/preview?secret=abc123&slug=/post/540
// http://localhost:5000/api/preview?secret=abc123&slug=/pages/index
// http://localhost:5000/api/preview?secret=abc123&slug=/pages/post/1

