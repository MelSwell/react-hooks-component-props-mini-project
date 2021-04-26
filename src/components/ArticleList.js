import React from "react";
import Article from "./Article"

function ArticleList({ posts }){
  const articleComponents = posts.map(({ id, title, preview, date, minutes }) => {
    return <Article
              key={id} 
              title={title}
              date={date}
              preview={preview}
              minutes={minutes}
           />
  })
  
  return <main>{articleComponents}</main>
}

export default ArticleList