const Home = () => {
    const handleClick = (e) =>{
        console.log('Hello ninjas', e);
    }

    return (
        <div className="homePage">
            <h2>HomePage</h2>
            <button onClick={handleClick}>Click Me</button>  
        </div>
    );
}
 
export default Home;