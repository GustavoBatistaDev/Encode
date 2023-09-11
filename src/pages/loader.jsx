import { Jelly } from '@uiball/loaders'
import { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';
import './Style.css';

export const Loader = () => {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        if(isLoading){
            setTimeout(() => {
                setIsLoading(false);
            }, 3000);
        }
    }, [isLoading]);

    if(!isLoading){
        return <Navigate to="/home" />; // Redireciona para a rota '/home'
    }
    return (

        <div className="container-loader">
            <Jelly
                className='loader'
                size={80}
                speed={0.9}
                color="#262899"
            />
        </div>
    );
};