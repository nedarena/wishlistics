import "./Landing.style.scss";

export const Landing = () => {
  return (
    <>
      <header className="header">
        <h2 className="logo">Вишлистикс</h2>
        <nav className="header-navigation">
          <ul className="header-navigation__menu">
            <li className="header-navigation__item">Возможности</li>
            <li className="header-navigation__item">Преимущества</li>
            <li className="header-navigation__item">Отзывы</li>
          </ul>
        </nav>
        <div className="header__buttons">
          <button className="header__button">Войти</button>
          <button className="header__button">Регистрация</button>
        </div>
      </header>

      <main>
        <section className="hero">
          <div className="hero__info">
            <h1 className="hero__title">
              Создавайте, делитесь и исполняйте желания
            </h1>
            <p className="hero__subtitle">
              Удобное веб-приложение для создания и организации ваших желаний в
              одном месте
            </p>
            <button className="hero__button">Зарегистрироваться</button>
          </div>
          <img src="#" alt="" className="hero__img"/>
        </section>

        <section className="wish">
          <h2 className="wish__title">Ваши желания - в одном месте</h2>
          <p className="wish__subtitle">
            Все функции, необходимые для организации и исполнения ваших желаний
          </p>
          <ul className="wish-list">
            {/* Item 1 */}
            <li className="wish-list__item">
              <img className="wish-list__img" src="#" alt="" />
              <h3 className="wish-list__title">Все желания в одном месте</h3>
              <p className="wish-list__text">
                Создавайте неограниченное количество вишлистов для любого
                случая: день рождения, свадьбы, праздники.
              </p>
            </li>
            {/* Item 2 */}
            <li className="wish-list__item">
              <img className="wish-list__img" src="#" alt="" />
              <h3 className="wish-list__title">Делитесь с близкими</h3>
              <p className="wish-list__text">
                Поделитесь своим вишлистом с друзьями и семьей в один клк через
                любой мессенджер или социальную сеть.
              </p>
            </li>
            {/* Item 3 */}
            <li className="wish-list__item">
              <img className="wish-list__img" src="#" alt="" />
              <h3 className="wish-list__title">Отслеживайте статус</h3>
              <p className="wish-list__text">
                Видите, какие желания уже исполнены, а какие еще ждут своего
                часа с автоматическим обновлением статуса.
              </p>
            </li>
          </ul>
        </section>

        <section className="advantages">
          <h2 className="advantages__title">Наши преимущества</h2>
          <p className="advantages__subtitle">Почему пользователи выбирают нас:</p>
          <ul className="advantages__list">
            {/* Advantage 1 */}
            <li className="advantage">
              <img className="advantage__img" src="#" alt="" />
              <div className="advantage__description">
                <h3 className="advantage__title">Простой интерфейс</h3>
                <p className="advantage__text">
                  Интуитивно понятное управление без лишних сложностей
                </p>
              </div>
            </li>
            {/* Advantage 2 */}
            <li className="advantage">
              <img className="advantage__img" src="#" alt="" />
              <div className="advantage__description">
                <h3 className="advantage__title">Приватность</h3>
                <p className="advantage__text">
                  Вы сами решаете, кто увидит ваши вишлисты
                </p>
              </div>
            </li>
            {/* Advantage 3 */}
            <li className="advantage">
              <img className="advantage__img" src="#" alt="" />
              <div className="advantage__description">
                <h3 className="advantage__title">Уведомления</h3>
                <p className="advantage__text">
                  Получайте оповещения, когда ваши желания исполняются
                </p>
              </div>
            </li>
          </ul>
        </section>

        <section className="reviews">
          <h2 className="reviews__title">Отзывы пользователей</h2>
          <p className="reviews__subtitle">
            Что говорят о нас те, кто уже пользуется Вишлистикс
          </p>
          <ul className="reviews__list">
            {/* Review 1 */}
            <li className="review">
              <div className="review-author">
                <img className="review-author__img" src="#" alt="" />
                <h3 className="review-author__name">Анна, 28 лет</h3>
              </div>
              <p className="review__text">
                “Благодаря Вишлистикс я наконец-то получаю на праздник именно
                то, что хочу! Удобно и для меня, и для моих близких”
              </p>
            </li>
            {/* Review 2 */}
            <li className="review">
              <div className="review-author">
                <img className="review-author__img" src="#" alt="" />
                <h3 className="review-author__name">Егор, 34 года</h3>
              </div>
              <p className="review-author__text">
                “Использую для планирования покупок. Очень удобно отслеживать
                цены и выбирать лучшие предложения”
              </p>
            </li>
            {/* Review 3 */}
            <li className="review">
              <div className="review-author">
                <img className="review-author__img" src="#" alt="" />
                <h3 className="review-author__name">Елена, 21 год</h3>
              </div>
              <p className="review-author__text">
                “Создала вишлист для свадьбы, и это спасло нас от кучи
                одинаковых подарков! Рекомендую всем парам”
              </p>
            </li>
          </ul>
        </section>

        <section className="cta">
          <h1 className="cta__title">Начните исполнять желания уже сейчас</h1>
          <p className="cta__subtitle">
            Быстрая регистрация, как и создание вишлиста
          </p>
          <button className="cta__button">Зарегистрироваться</button>
        </section>
      </main>

      <footer className="footer">
        <h1 className="footer__logo">Вишлистикс</h1>
        <p className="footer__cta">
          Присоединяйтесь к пользователям, которые уже исполняют свои желания
        </p>
        <div className="footer__buttons">
          <button className="footer__button">Политика конфиденциальности</button>
          <button className="footer__button">Условия использования</button>
        </div>
      </footer>
    </>
  );
};
