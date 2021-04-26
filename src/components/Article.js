import React from "react";

function Article({ title, preview, minutes, date="January 1, 1970" }) {
  const minutesDisplay = minutes => {
    let timeToReadString = ""
    let count = 0
    if (minutes < 30){
      const numEmojis = Math.ceil(minutes/5)
      while (count < numEmojis) {
        timeToReadString += "☕"
        count++
      }
      return timeToReadString
    }
    else {
      const numEmojis = Math.ceil(minutes/10)
      while (count < numEmojis) {
        timeToReadString += "🍱"
        count++
      }
      return timeToReadString
    }
  }

  return (
    <article>
      <h3>{title}</h3>
      <small>{date}, {minutesDisplay(minutes)}{minutes} minute read</small>
      <p>{preview}</p>
    </article>
  )
}

export default Article;