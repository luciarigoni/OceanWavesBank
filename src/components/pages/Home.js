import image from '../images/home.jpg'

function Home () {
    return(
        <img src={image}
        style={{
            width: 1500, 
            height: 1000
        }}
        />
    )
}

export default Home;