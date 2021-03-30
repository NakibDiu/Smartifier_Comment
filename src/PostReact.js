function PostReact() {
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
          <p>Comments</p>
          </div>
          <div style = {buttonstyle}>
          <img src="https://img.icons8.com/fluent-systems-filled/34/000000/share-3.png" style = {imgstyle}/>
          <p style = {numberstyle}>32</p>
          <p>Shares</p>
          </div>
        </div>
      </div>
    );
}
  
const mystyle = {
    maxWidth: "670px",
    padding: "8px 0",
    borderTop: "1px solid black",
    borderBottom: "1px solid black",
    margin: "16px",
    display: "flex",
    justifyContent: "space-between",
    color: "#808080"
}
  
const buttonstyle = {
    maxWidth: "240px",
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
}
export default PostReact;