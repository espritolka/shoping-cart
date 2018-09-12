import React, { Component } from 'react';
function Footer(props) {
    return (
    <footer>
          <div className="footcomp1 tel">
         8 (800) 500-75-55*<br/>
         <span className="small">*Бесплатный звонок по всей России</span><br/>
         8 (495) 733-96-03
        </div>
        <div className="footcomp"><span className="zag">Каталог товаров</span><br/>
          Одежда и аксессуары<br/>
          Обувь<br/>
          Украшения<br/>
          Красота и здоровье<br/>
          Товары для дома, дачи и отрыха<br/>
          Товары для кухни
        </div> 
        <div className="footcomp">
          <span className="zag">Заказ</span><br/>
        Оплата и доставка<br/>
          Возврат<br/>
          Помощь<br/>
          Благотворительный Фонд Константина Хабенского <br/>
          Гарантия на допорлнительное обслуживание товара<br/>
          Пользовательское соглашение
        </div> 
        <div className="footcomp">
          <span className="zag">Shop24</span><br/>
        Смотреть прямой эфир<br/>
        Расписание передач<br/>
        Акции<br/>
        Личный кабинет<br/>
        Поиск и карта сайта<br/>
        Карта брендов<br/>
        Обратная связь</div> 
        <div className="footcomp">
          <span className="zag">Информация</span><br/>
          О канале<br/>
          Сотрудничество<br/>
          Покупайте с нами!<br/>
          Контакты
        </div> 
              </footer>
    )
  };

export default Footer;