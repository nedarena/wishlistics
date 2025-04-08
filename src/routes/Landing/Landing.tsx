import './Landing.style.scss';

export const Landing = () => {
  return (
    <div className="landing">
      <nav className="nav">
        <p className="logo">Вишлистикс</p>
        <ul className="menu">
          <li className='menu__item'>Возможности</li>
          <li className='menu__item'>Преимущества</li>
          <li className='menu__item'>Отзывы</li>
        </ul>
        <div className="btns">
          <button className='btn'>Войти</button>
          <button className='btn'>Регистрация</button>
        </div>
      </nav>

      <main>
        <section className="hero container">
          <div className="hero__info">
            <h1 className='big-title'>Создавайте, делитесь и исполняйте желания</h1>
            <p className="hero-subtitle">Удобное веб-приложение для создания и организации ваших желаний в одном месте</p>
            <button className='hero-btn'>Зарегистрироваться</button>
          </div>
          <div className="hero__img"><img src="#" alt="" /></div>
        </section>

        <section className="wish container">
          <h2 className="title">Ваши желания - в одном месте</h2>
          <p className="subtitle">Все функции, необходимые для организации и исполнения ваших желаний</p>
          <div className="wish__list">
          <div className="wish__list-item">
              <img className='wish__list-item-img' src="#" alt="" />
              <p className="wish__list-item-name">Все желания в одном месте</p>
              <p className="wish__list-item-text">Создавайте неограниченное количество вишлистов для любого случая: день рождения, свадьбы, праздники.</p>
            </div>

            <div className="wish__list-item">
              <img className='wish__list-item-img' src="#" alt="" />
              <p className="wish__list-item-name">Делитесь с близкими</p>
              <p className="wish__list-item-text">Поделитесь своим вишлистом с друзьями и семьей в один клк через любой мессенджер или социальную сеть.</p>
            </div>

            <div className="wish__list-item">
              <img className='wish__list-item-img' src="#" alt="" />
              <p className="wish__list-item-name">Отслеживайте статус</p>
              <p className="wish__list-item-text">Видите, какие желания уже исполнены, а какие еще ждут своего часа с автоматическим обновлением статуса.</p>
            </div>
          </div>
        </section>

        <section className="advantages container">
          <h2 className="title">Наши преимущества</h2>
          <p className="subtitle">Почему пользователи выбирают нас:</p>
          <div className="advantages__list">
          <div className="advantages__list-item">
              <img className='advantages__list-item-img' src="#" alt="" />
              <div className="advantages__list-item-wripper">
                <p className="advantages__list-item-name">Простой интерфейс</p>
                <p className="advantages__list-item-text">Интуитивно понятное управление без лишних сложностей</p>
              </div>
            </div>

            <div className="advantages__list-item">
              <img className='advantages__list-item-img' src="#" alt="" />
              <div className="advantages__list-item-wripper">
                <p className="advantages__list-item-name">Приватность</p>
                <p className="advantages__list-item-text">Вы сами решаете, кто увидит ваши вишлисты</p>
              </div>
            </div>

            <div className="advantages__list-item">
              <img className='advantages__list-item-img' src="#" alt="" />
              <div className="advantages__list-item-wripper">
                <p className="advantages__list-item-name">Уведомления</p>
                <p className="advantages__list-item-text">Получайте оповещения, когда ваши желания исполняются</p>
              </div>
            </div>
          </div>
        </section>

        <section className="comments container">
          <h2 className="title">Отзывы пользователей</h2>
          <p className="subtitle">Что говорят о нас те, кто уже пользуется Вишлистикс</p>
          <div className="comments__list">
          <div className="comments__list-item">
              <div className="comments__list-item-wripper">
                <img className='comments__list-item-img' src="#" alt="" />
                <p className="comments__list-item-name">Анна, 28 лет</p>
              </div>
              <p className="comments__list-item-text">“Благодаря Вишлистикс я наконец-то получаю на праздник именно то, что хочу! Удобно и для меня, и для моих близких”</p>
            </div>

            <div className="comments__list-item">
            <div className="comments__list-item-wripper">
                <img className='comments__list-item-img' src="#" alt="" />
                <p className="comments__list-item-name">Егор, 34 года</p>
              </div>
              <p className="comments__list-item-text">“Использую для планирования покупок. Очень удобно отслеживать цены и выбирать лучшие предложения”</p>
            </div>

            <div className="comments__list-item">
            <div className="comments__list-item-wripper">
                <img className='comments__list-item-img' src="#" alt="" />
                <p className="comments__list-item-name">Елена, 21 год</p>
              </div>
              <p className="comments__list-item-text">“Создала вишлист для свадьбы, и это спасло нас от кучи одинаковых подарков! Рекомендую всем парам”</p>
            </div>
          </div>
        </section>

        <div className="cta container">
          <h1 className="big-title">Начните исполнять желания уже сейчас</h1>
          <p className="hero-subtitle">Быстрая регистрация, как и создание вишлиста</p>
          <button className='hero-btn'>Зарегистрироваться</button>
        </div>
      </main>

      <footer className='landing-footer'>
        <p className="logo">Вишлистикс</p>
        <p className="footer-cta">Присоединяйтесь к пользователям, которые уже исполняют свои желания</p>
        <div className="footer-btns">
          <button className='footer-btn'>Политика конфиденциальности</button>
          <button className='footer-btn'>Условия использования</button>
        </div>
      </footer>
    </div>
  )
}