import PostReact from './PostReact';
import Comment from './Comment'
function Comments() {
    return (
      <div>
        <div style = {containerstyle}>
          <div style = {inputConatinerstyle}>
            <img src = "https://image.shutterstock.com/image-photo/gorgeous-shorthaired-girl-sunglasses-dancing-600w-750408166.jpg" style = {imagestyle}/>
            <input type = "text" placeholder = "Write a comment..." style = {inputstyle}/>
            <img src="https://img.icons8.com/fluent-systems-filled/30/000000/sent.png" style = {iconstyle}/>
          </div>
          <p style = {pstyle}>Comments</p>
          <Comment />
        </div>
      </div>
    );
}
const containerstyle = {
  margin: "16px"
}
const pstyle = {
  color: "#6CDCFE"
}
const imagestyle = {
  width: "41px",
  height: "41px",
  borderRadius: "50%",
  marginRight: "16px"
}
const inputConatinerstyle = {
  maxWidth: "670px",
  display: "flex",
  alignItems: "center",
}
const inputstyle = {
  width: "80%",
  padding: "12px",
  marginRight: "16px",
  border: "1px solid black",
  borderRadius: "25px"
}

const iconstyle = {
  width: "36px",
  height: "36px",
}

export default Comments;