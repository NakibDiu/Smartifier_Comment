import CommentReact from './CommentReact';
import Replies from './Replies';
function Comment() {
    return(
        <div style = {mainstyle}>
            <div style = {commentContainerstyle}>
                <img src = "https://image.shutterstock.com/image-photo/closeup-portrait-laughing-brunette-girl-600w-1082155934.jpg" style = {imagestyle}/>
                <p>Helllo ,,  worrld ddhhdsfojndhfdhfhdhfd</p>
            </div>
            <CommentReact />
            <Replies />
        </div>
    );
}
const commentContainerstyle = {
    marginTop: "16px",
    display: "flex",
    alignItems: "center",
    color: "#808080"
}
const imagestyle = {
    width: "41px",
    height: "41px",
    borderRadius: "50%",
    marginRight: "16px"
}

const mainstyle = {
    maxWidth: "670px",
    borderBottom: "1px solid gray"
}
export default Comment;