import React from 'react';
import MovieCard from '@/app/componets/MovieCard';
import styles from '@/app/styles/common.module.css';

const Page = async () => {
    const url = process.env.NEXT_PUBLIC_RAPID_KEY;

    const options = {
        method: 'GET',
        headers: {
          'x-rapidapi-key': '2b9e844c1cmsh4817293fef02dd3p19d286jsn24fd1783849e',
          'x-rapidapi-host': 'netflix54.p.rapidapi.com'
        }
    };

    const response = await fetch(url, options);
    const data = await response.json();
    const main_data = data.titles;
    console.log(main_data.jawSummary);

    return (
        <>
            <section className={styles.movieSection}>
                <div className={styles.container}>
                    <h1>Series & Movie</h1>
                    <div className={styles.card_section}>
                        {
                            main_data.map((curElem) => {
                                return <MovieCard key={curElem.id} {...curElem}/>
                            })
                        }
                    </div>
                </div>
            </section>
        </>
    )
    
};

export default Page;
