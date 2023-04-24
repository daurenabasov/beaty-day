import Button from '../UI/Button/Button';
import s from './Hero.module.scss';

const Hero = () => {
  return (
    <div className={s.hero}>
      <div className={s.container}>
        <div className={s.content}>
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
      </div>
    </div>
  );
};

export default Hero;