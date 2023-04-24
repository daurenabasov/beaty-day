import Button from '../UI/Button/Button';
import s from './Enroll.module.scss';

const Enroll = () => {
  return (
    <div className={s.sing_up}>
      <div className={s.big_ball}></div>
      <div className={s.filter}></div>
      <div className={s.filter1}></div>
      <div className={s.filter2}></div>
      <div className={s.small_ball}></div>
      <div className={s.line}></div>
      <div className={s.line1}></div>
      <div className={s.container}>
        <h3>Записаться г. Бишкек</h3>
        <p>В нашем салоне вы сможете сделать преображение с головы до пяток</p>
        <div className={s.btn}>
          <Button>Записаться онлайн</Button>
        </div>
      </div>
    </div>
  );
};

export default Enroll;