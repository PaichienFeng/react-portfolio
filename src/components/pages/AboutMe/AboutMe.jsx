import React from 'react';
import css from '../AboutMe/AboutMe.module.scss'
import image from '../img/profile.jpg';

export default function About() {
  return (
    <div className={css.container}>
      <h2>About Me</h2>
      <div>
        <img className={css.img} src={image} alt="profile" />
      </div>
      <p>
        Nunc pharetra finibus est at efficitur. Praesent sed congue diam.
        Integer gravida dui mauris, ut interdum nunc egestas sed. Aenean sed
        mollis diam. Nunc aliquet risus ac finibus porta. Nam quis arcu non
        lectus tincidunt fermentum. Suspendisse aliquet orci porta quam semper
        imperdiet. Praesent euismod mi justo, faucibus scelerisque risus cursus
        in. Sed rhoncus mollis diam, sit amet facilisis lectus blandit at. <br/><br />
        
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor, libero 
        adipisci consequatur ipsa quisquam molestias voluptatem maxime repellat 
        accusamus possimus aut, ullam veritatis excepturi hic reprehenderit 
        suscipit neque dolores eaque? Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor, libero 
        adipisci consequatur ipsa quisquam molestias voluptatem maxime repellat 
        accusamus possimus aut, ullam veritatis excepturi hic reprehenderit 
        suscipit neque dolores eaque?
      </p>
    </div>
  );
}
