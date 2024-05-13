import { useEffect } from 'react'
import Header from '../components/Header'
import Launchyourgame from '../components/Launchyourgame'
import Backedby from '../components/Backedby'
import Blockchain from '../components/Blockchain'
import Sdk from '../components/Sdk'
import Productsite from '../components/Productsite'
import Favoritechain from '../components/Favoritechain'
import Partner from '../components/Partner'
import Blogslider from '../components/Blogslider'
import Review from '../components/Review'
import Community from '../components/Community'
import Footer from '../components/Footer'

export default function Homepage() {
  //this hooks eg we use for basic js function to run on scroll
  useEffect(()=>{
    const allSection = document.querySelectorAll('.section');
    // console.log(allSection);
    const getSection = function(entries, observer){
      const [entry] = entries;
      // console.log(entry);
      if(!entry.isIntersecting) return;
      entry.target.classList.add(`fadein`);
    }
    const sectionObserver = new IntersectionObserver(
      getSection, {
        root : null,
        threshold: 0.15,
      }
    )
    allSection.forEach(function(section){
      sectionObserver.observe(section);
      section.classList.remove(`fadein`);
    });
  });
  return (
    <main className={`main main__inner`}>
      <section>
        <Header />
        <Launchyourgame />
      </section>
      <section className={`section`}>
        <Backedby /> 
      </section>
      <section className={`section section__overlay`}>
        <Blockchain />
      </section>
      <section className={`section section__overlay`}>
        <Sdk />
      </section>
      <section className={`section`}>
        <Productsite />
      </section>
      <section className={`section`}>
        <Favoritechain />
      </section>
      <section className={`section`}>
        <Blogslider />
      </section>
      <section className={`section`}>
        <Review />
      </section>
      <section className={`section`}>
        <Community />
      </section>
      <section className={`section`}>
        <Partner />
      </section>
      <section>
        <Footer />
      </section>
    </main>
  );
}
