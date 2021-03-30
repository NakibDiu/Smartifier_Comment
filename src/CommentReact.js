function CommentReact() {
    return (
      <div style = {mainstyle}>
        <div style = {mystyle}>
          <div style = {buttonstyle}>
            <img src="https://img.icons8.com/pastel-glyph/34/000000/facebook-like--v1.png" style = {imgstyle}/>
          <p style = {numberstyle}>32</p>
          <p>Likes</p>
          </div>
          <div style = {buttonstyle}>
          <img src="https://img.icons8.com/fluent-systems-regular/34/000000/comments--v2.png" style = {imgstyle}/>
          <p style = {numberstyle}>32</p>
          <p>Replies</p>
          </div>
        </div>
      </div>
    );
}
  
const mystyle = {
    maxWidth: "450px",
    padding: "8px 0",
    marginLeft: "0",
    display: "flex",
    justifyContent: "space-between",
    color: "#808080"
}
  
const buttonstyle = {
    maxWidth: "230px",
    display: "flex",
    marginRight: "16px"
}
const numberstyle = {
    marginRight: "8px"
}
const imgstyle = {
    width: "23px",
    height: "23px",
    marginRight: "16px",
    alignSelf: "center",
    backgroundColor: "lightgray",
    borderRadius: "50%",
    padding: "5px"
}

const mainstyle = {
    maxWidth: "1175px",
    borderBottom: "1px solid black",
}
export default CommentReact;