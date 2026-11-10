import React from 'react';
import { createRoot } from 'react-dom/client';
import './style.css';

function App(){
  const [page,setPage]=React.useState('home');
  const [notice,setNotice]=React.useState('');
  React.useEffect(()=>{const tg=window.Telegram?.WebApp;if(tg){tg.ready();tg.expand();}},[]);
  const nav=[['home','Главная'],['info','Информация'],['profile','Профиль']];
  return <div className="app">
    <header><div className="logo">V</div><div><b>VapePoint</b><small>Информационное приложение</small></div></header>
    <main>
      {page==='home'&&<><section className="hero"><span className="eyebrow">VAPEPOINT</span><h1>Добро пожаловать</h1><p>Информация о проекте, новости и помощь пользователям — в одном месте.</p><button onClick={()=>setPage('info')}>Подробнее</button></section><section className="panel"><h2>Разделы приложения</h2><div className="tiles"><button onClick={()=>setPage('info')}>ℹ️ Информация</button><button onClick={()=>setPage('profile')}>👤 Профиль</button><button onClick={()=>setNotice('Напишите администратору через Telegram-бота.')}>💬 Поддержка</button></div></section></>}
      {page==='info'&&<section className="panel"><h1>Информация</h1><p>Здесь публикуются общие сведения о проекте, правила использования и официальные уведомления.</p><p className="muted">Приложение не принимает заказы и платежи.</p></section>}
      {page==='profile'&&<section className="panel"><h1>Профиль</h1><p>Раздел профиля Telegram. Данные пользователя будут доступны после подключения и проверки Telegram WebApp initData на сервере.</p><p className="muted">Не вводите здесь пароли или платёжные данные.</p></section>}
      {notice&&<div className="notice" onClick={()=>setNotice('')}>{notice} <b>×</b></div>}
    </main>
    <nav>{nav.map(([id,label])=><button className={page===id?'active':''} onClick={()=>setPage(id)} key={id}>{label}</button>)}</nav>
    <footer>VapePoint · Информационный сервис</footer>
  </div>
}

createRoot(document.getElementById('root')).render(<App/>);
