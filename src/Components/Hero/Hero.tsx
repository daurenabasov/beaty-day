import Button from '../UI/Button/Button';
import s from './Hero.module.scss';
import Back from '../../Assets/Images/Hero-Back.png'
import Lady from '../../Assets/Images/Lady.png'

const Hero = () => {
  return (
    <div className={s.hero}>
      <div className={s.image}><img src={Back} /></div>
      <div className={s.container}>
        <div className={s.content}>
          <div>
            <h1>Салон красоты Beauty Day</h1>
            <div className={s.about}>
              <div>
                <p>Больше 1000 клиентов в месяц</p>
              </div>
              <div>
                <p>Работаем до последнего клиента</p>
              </div>
              <div>
                <p>Варим вкуснейший кофе</p>
              </div>
              <div>
                <p>Приходи и убедись сама</p>
              </div>
            </div>
            <div className={s.btn}>
              <Button>Записаться сейчас</Button>
            </div>
          </div>
          <div className={s.lady__img}>
            <img src={Lady} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;