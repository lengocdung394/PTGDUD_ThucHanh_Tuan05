import { useState, useEffect } from 'react'
import './main.css'
export default function main() {
    const [subscribed, setSubscribed] = useState(false);
    const [recipes, setRecipes] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    // Fetch recipes when the component mounts
    useEffect(() => {
        // const fetchRecipes = async () => {
        //     setLoading(true);
        //     setError(null);
        //     try {
        //         const response = await fetch('https://67c7c89ec19eb8753e7abb1c.mockapi.io/thuchanh04'); // Replace with your API URL
        //         if (!response.ok) {
        //             throw new Error('Network response was not ok');
        //         }
        //         const data = await response.json();
        //         setRecipes(data);
        //     } catch (error) {
        //         setError(error.message);
        //     } finally {
        //         setLoading(false);
        //     }
        // };

        // fetchRecipes();
        fetch('https://67c7c89ec19eb8753e7abb1c.mockapi.io/thuchanh04')
            .then(res => res.json())
            .then(data => {
                console.log(data);

                setRecipes(data);
            })
    }, []); // Empty dependency array ensures this runs only once on mount

    const handleSubscribe = () => {
        setSubscribed(true);
        alert('Thank you for subscribing!');
    };
var style ={
    color :'#FF4081'
}
    return (
        <div id='main'>
            <div id='menu-item'>
                <ul>
                    <li>Home</li>
                    <li style={style}>Your Recipe Box</li>
                </ul>
            </div>
            <div>
                <h2>Emma Gonzale's Recipe Box </h2>
            </div>
            <div id='content'>

                <div id='left'> <img src="../../image/pandas.png" alt="" /></div>
                <div id='right'>
                    <div>
                        <p>Emma Gonzalez is a deputy editor at Chefity, bringing her expertise as a former cooking editor at The Los Angeles Times She is also an accomplished author, contributing to numerous cookbooks and food publications. Originally from East Los Angeles, Emma now resides in New York City, where she explores a wide range of culinary delights.</p>
                    </div>
                    <div>
                        <button>6.5 Subscribe</button>
                        <button id='share'>Share</button>
                    </div>
                </div>
            </div>

            <div id='menu-food'>
                <ul>
                    <li id='color'>Saved Recipes</li>
                    <li>Folders</li>
                    <li>Recipes by Genevieve</li>
                </ul>
            </div>
            {loading}
            {error && <div className="error">Error: {error}</div>}
            {recipes.length > 0 && (
                <div id="recipe-list">
                    <ul>
                        {recipes.map(recipe => (
                            <li className='recipe-grid' key={recipe.id.object}>
                                <div className='recipe-card'>
                                    <img src={recipe.image} alt={recipe.title} />
                                    <h4>{recipe.title}</h4>
                                    <button>{recipe.minute} minutes</button>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    )
}