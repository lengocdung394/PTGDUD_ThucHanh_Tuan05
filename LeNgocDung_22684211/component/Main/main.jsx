import { useState, useEffect } from 'react'
import './main.css'
export default function main() {
    const [subscribed, setSubscribed] = useState(false);
    const [recipes, setRecipes] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    
    useEffect(() => {
        fetch('https://67c7c89ec19eb8753e7abb1c.mockapi.io/thuchanh04')
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setRecipes(data);
            })
    }, []); 

    const handleSubscribe = () => {
        setSubscribed(true);
        alert('Thank you for subscribing!');
    };
var style ={
    color :'#FF4081'
}
    return (
        <div id='main'>
            <div id='menu-item' className='mt-1.5'>
                <ul className=' p-0 flex'>
                    <li className='mt-5'>Home</li>
                    <li className= 'mt-5 text-pink-500'>Your Recipe Box</li>
                </ul>
            </div>
            <div className='m-1.5'>
                <h2 className='font-medium text-2xl'>Emma Gonzale's Recipe Box </h2>
            </div>
            <div id='content'>

                <div id='left' className='w-40 h-40'> < img src="../../image/pandas.png" alt="" className='w-40 h-40 rounded-3xl max-w-none' /></div>
                <div id='right'>
                    <div>
                        <p className='text-justify'>Emma Gonzalez is a deputy editor at Chefity, bringing her expertise as a former cooking editor at The Los Angeles Times She is also an accomplished author, contributing to numerous cookbooks and food publications. Originally from East Los Angeles, Emma now resides in New York City, where she explores a wide range of culinary delights.</p>
                    </div>
                    <div>
                        <button>6.5 Subscribe</button>
                        <button id='share' className='text-teal-100 rounded-1xl m-5 bg-pink-500 w-19 p-1.5 rounded '>Share</button>
                    </div>
                </div>
            </div>

            <div id='menu-food'className='mt-4'>
                <ul className='flex gap-1 border-b-1'>
                    <li className='p-2 mr-1 rounded' id='color'>Saved Recipes</li>
                    <li  className='p-2 mr-1'>Folders</li>
                    <li  className='p-2 mr-1'>Recipes by Genevieve</li>
                </ul>
            </div>
            {loading}
            {error && <div className="error">Error: {error}</div>}
            {recipes.length > 0 && (
                <div id="recipe-list">
                    <ul  className='flex flex-wrap' >
                        {recipes.map(recipe => (
                            <li className='m-6.5 list-none' key={recipe.id.object}>
                                <div className='recipe-card border rounded-xl'>
                                    <img className= 'w-52 h-32 rounded-t-xl rounded-b-none' src={recipe.image} alt={recipe.title} />
                                    <h4 className='font-bold m-1'>{recipe.title}</h4>
                                    <button className='bg-pink-100 p-1 mb-5 ml-0.5 rounded'>{recipe.minute} minutes</button>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    )
}