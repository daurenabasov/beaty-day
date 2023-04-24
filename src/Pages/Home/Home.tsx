import Enroll from "../../Components/Enroll/Enroll";
import Hero from "../../Components/Hero/Hero";
import s from './Home.module.scss'

const Home = () => {
  return (
    <main className={s.back}>
      <Hero />
      <Enroll />
    </main>
  );
};

export default Home;
