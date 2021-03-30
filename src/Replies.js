function Repies() {
    return(
        <div>
            <div style = {repliesContainerstyle}>
                <img src = "https://image.shutterstock.com/image-photo/gorgeous-shorthaired-girl-sunglasses-dancing-600w-750408166.jpg" style = {imagestyle}/>
                <p>Lorem Ipsum...........</p>
            </div>
        </div>
    )
}

const repliesContainerstyle = {
    marginTop: "16px",
    display: "flex",
    marginLeft: "310px",
    alignItems: "center",
    color: "#808080"
}

const imagestyle = {
    width: "41px",
    height: "41px",
    borderRadius: "50%",
    marginRight: "16px"
}

export default Repies;