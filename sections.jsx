// Sections for Fellaw site

const INDUSTRIES = [
{ name: 'Мода', practice: 1, hint: 'коллекции, лекала, выход в&nbsp;ритейл' },
{ name: 'Музыка', practice: 0, hint: 'релизы, splits, договоры с&nbsp;авторами' },
{ name: 'Дизайн', practice: 0, hint: 'принты, объекты, авторские права' },
{ name: 'Фотография', practice: 2, hint: 'лицензии и&nbsp;гонорары за&nbsp;кадр' },
{ name: 'Реклама', practice: 2, hint: 'кампании, креатив, права на&nbsp;образ' },
{ name: 'Медиа', practice: 4, hint: 'СМИ, репутация, споры с&nbsp;маркетплейсами' }];



function Nav({ scrolled }) {
  return (
    <nav className={`nav ${scrolled ? 'scrolled' : ''}`}>
      <div className="row">
        <a href="#top" className="brand">
          Fell<span className="a">a</span>w
        </a>
        <div className="nav-links">
          <a href="#manifest">Подход</a>
          <a href="#services">Услуги</a>
          <a href="#cases">Кейсы</a>
          <a href="#team">О бюро</a>
          <a href="#contact" className="nav-cta" style={{ fontSize: "11px" }}>
            Написать <span className="arrow">→</span>
          </a>
        </div>
      </div>
    </nav>);

}

function Hero({ openPractice }) {
  return (
    <section id="top" className="hero">
      <div className="wrap">
        <div className="top-meta">
          <div className="eyebrow">
            <span className="dot"></span>
            Юридическое бюро
          </div>
        </div>

        <h1 className="serif">
          <span className="h1-row">Право для&nbsp;тех,</span>
          <span className="h1-row">кто <em>создаёт</em></span>
        </h1>
        <p className="sub">Сопровождаем бренды и авторов в креативных индустриях.

        </p>

        <div className="tag-grid-eyebrow">
          <span>С кем работаем</span>
          <span className="hint"><b></b> </span>
        </div>
        <div className="tag-grid">
          {INDUSTRIES.map((t, i) =>
          <a
            key={i}
            href="#services"
            className="tag"
            onClick={(e) => {if (openPractice) openPractice(t.practice);}}>
            
              <span className="nm">
                <span className="bdot"></span>
                {t.name}
              </span>
            </a>
          )}
        </div>

        <div className="tags-marquee" aria-hidden="true" style={{ borderColor: "rgb(0, 0, 0)" }}>
          <div className="tm-track">
            {Array.from({ length: 2 }).map((_, j) =>
            <React.Fragment key={j}>
                <span>авторское право<span className="dt"></span></span>
                <span>товарные знаки<span className="dt"></span></span>
                <span style={{ color: "rgb(40, 38, 42)" }}>коллаборации<span className="dt"></span></span>
                <span style={{ color: "rgb(40, 38, 42)" }}>лицензирование<span className="dt"></span></span>
                <span style={{ color: "rgb(40, 38, 42)" }}>сопровождение сделок<span className="dt"></span></span>
                <span style={{ color: "rgb(40, 38, 42)" }}>судебные споры<span className="dt"></span></span>
                <span style={{ color: "rgb(40, 38, 42)" }}>антимонопольное право<span className="dt"></span></span>
                <span>защита от&nbsp;контрафакта<span className="dt"></span></span>
              </React.Fragment>
            )}
          </div>
        </div>
      </div>
    </section>);

}

function Manifesto() {
  return (
    <section id="manifest" className="section">
      <div className="wrap manifesto" style={{ fontFamily: "\"Inter Tight\"" }}>
        <div>
          <div className="eyebrow" style={{ marginBottom: 32 }}>
            <span className="dot"></span>I. Подход
          </div>
          <h2 className="serif">
            Знаем, где заканчивается <em style={{ color: "rgb(15, 15, 16)" }}>охрана</em><br />и&nbsp;начинается <em style={{ color: "rgb(15, 15, 16)" }}>риск</em>
          </h2>
        </div>
        <div className="right">
          <p className="quote" style={{ fontFamily: "\"Cormorant Garamond\"", textAlign: "justify" }}>
             <span className="accent"></span>Защищаем то, что нельзя повторить
          </p>
          <div className="pillars">
            <div className="pillar">
              <div className="n">01</div>
              <h4>Работаем на опережение</h4>
              <p>Бюро входит в работу на этапе формирования объекта и закрывает риски до того, как они появились.</p>
            </div>
            <div className="pillar">
              <div className="n">02</div>
              <h4>Смотрим на интеллектуальную собственность как на часть бизнеса</h4>
              <p>За каждым юридическим вопросом стоит своя бизнес-логика. Разбираемся в ней на старте и уже потом выбираем инструмент защиты.</p>
            </div>
            <div className="pillar">
              <div className="n">03</div>
              <h4>Камерное бюро</h4>
              <p>В каждой практике ведёт дела  команда юристов с индустриальным бэкграундом. Берёмся только за то, что умеем делать на уровне.</p>
            </div>
          </div>
        </div>
      </div>
    </section>);

}

const PRACTICES = [
{
  n: '01',
  title: 'Авторское право и&nbsp;интеллектуальная собственность',
  desc: 'Оформляем права, сопровождаем их&nbsp;передачу, формируем портфель объектов интеллектуальной собственности. Товарные знаки, дизайн, ПО, тексты, музыка.',
  list: [
  'Регистрация товарных знаков в&nbsp;России, ЕАЭС и&nbsp;за&nbsp;рубежом',
  'Промышленные образцы: дизайн продукта и&nbsp;упаковки',
  'Регистрация ПО&nbsp;и&nbsp;баз данных',
  'Аудит созданных объектов: что&nbsp;принадлежит клиенту, а&nbsp;что нет',
  'Оспаривание и&nbsp;аннулирование знаков, препятствующих регистрации или&nbsp;использованию'],

  price: 'от 35 000 руб.'
},
{
  n: '02',
  title: 'Мода и&nbsp;коллаборации',
  desc: 'Юридическое сопровождение брендов одежды и&nbsp;аксессуаров: от&nbsp;первой коллекции до&nbsp;выхода на&nbsp;маркетплейсы и&nbsp;в&nbsp;ритейл.',
  list: [
  'Регистрация товарных знаков на&nbsp;бренд и&nbsp;продуктовые линейки',
  'Юридическое оформление коллабораций: партнёрства брендов, капсульные коллекции, совместные кампании',
  'Производство в&nbsp;России и&nbsp;за&nbsp;рубежом: защита конструктивной документации и&nbsp;лекал',
  'Выход в&nbsp;ритейл и&nbsp;на&nbsp;маркетплейсы, оформление франшиз'],

  price: 'от 35 000 руб.'
},
{
  n: '03',
  title: 'Договорная работа',
  desc: 'Разрабатываем, согласовываем и&nbsp;анализируем договоры под&nbsp;специфику каждого проекта.',
  list: [
  'Производственные договоры: съёмки, продакшн, реклама, мероприятия',
  'Договоры с&nbsp;творческим персоналом: авторы, исполнители, дизайнеры, фотографы, модели, агентства',
  'Договоры с&nbsp;инфлюенсерами, амбассадорами и&nbsp;площадками',
  'Клиринг прав на&nbsp;контент для&nbsp;кино и&nbsp;рекламы',
  'NDA, опционы и&nbsp;соглашения о&nbsp;конфиденциальности',
  'Анализ и&nbsp;согласование договоров контрагентов'],

  price: 'от 25 000 руб.'
},
{
  n: '04',
  title: 'Защита бренда от&nbsp;контрафакта',
  desc: 'Комплексная защита: от&nbsp;выявления нарушений до&nbsp;взыскания компенсации. Работаем с&nbsp;российскими брендами и&nbsp;с&nbsp;иностранными, которые вышли в&nbsp;РФ через дистрибьюторов.',
  list: [
  'Мониторинг маркетплейсов, социальных сетей, доменов и&nbsp;офлайн-точек продаж',
  'Фиксация нарушений: контрольные закупки, нотариальные осмотры сайтов',
  'Блокировка карточек на&nbsp;Wildberries, Ozon, Lamoda, Яндекс&nbsp;Маркете, Авито',
  'ТРОИС&nbsp;— таможенный реестр объектов интеллектуальной собственности: блокировка ввоза контрафакта на&nbsp;границе',
  'Взыскание компенсации с&nbsp;нарушителей до&nbsp;суда и&nbsp;в&nbsp;судебном порядке',
  'Инициирование уголовного преследования за&nbsp;систематический сбыт контрафакта'],

  price: 'от 60 000 руб.'
},
{
  n: '05',
  title: 'Споры',
  desc: 'Разрешение споров с&nbsp;маркетплейсами, конкурентами, партнёрами.',
  list: [
  'Суд по&nbsp;интеллектуальным правам, арбитражные суды',
  'Споры с&nbsp;Роспатентом и&nbsp;Палатой по&nbsp;патентным спорам',
  'Доменные споры в&nbsp;России и&nbsp;за&nbsp;рубежом',
  'Антимонопольные дела: недобросовестная конкуренция, имитация товарного знака и&nbsp;упаковки',
  'Защита деловой репутации: опровержение недостоверных публикаций в&nbsp;СМИ и&nbsp;социальных сетях',
  'Досудебные претензии и&nbsp;переговоры'],

  price: 'от 80 000 руб.'
}];


function Services({ openIdx, setOpenIdx }) {
  return (
    <section id="services" className="section services">
      <div className="wrap">
        <div className="head">
          <div>
            <div className="eyebrow" style={{ marginBottom: 32 }}>
              <span className="dot"></span>II. Услуги
            </div>
            <h2 className="serif">
              Пять <em style={{ color: "rgb(15, 15, 16)" }}>направлений</em>,<br />
              одно бюро
            </h2>
          </div>
          <p></p>
        </div>

        <div className="practice-list">
          {PRACTICES.map((p, i) =>
          <div
            key={i}
            className={`practice ${openIdx === i ? 'open' : ''}`}
            onClick={() => setOpenIdx(openIdx === i ? -1 : i)}>
            
              <div className="n">{p.n}</div>
              <div className="body-col">
                <h3 className="serif" dangerouslySetInnerHTML={{ __html: p.title }} />
                <div className="desc" dangerouslySetInnerHTML={{ __html: p.desc }} />
              </div>
              <div className="toggle">
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path d="M7 1 V13 M1 7 H13" stroke="currentColor" strokeWidth="1.4" />
                </svg>
              </div>
              <div className="expand">
                <div className="expand-inner">
                  <div>
                    <h5>Что входит</h5>
                    <ul className="items">
                      {p.list.map((li, j) =>
                    <li key={j}>
                          <span className="sep"></span>
                          <span dangerouslySetInnerHTML={{ __html: li }}>
</span>
                        </li>)}
                    </ul>
                  </div>
                  <div className="price-card">
                    <h5>Стоимость</h5>
                    {p.price ?
                  <div className="price-lg" dangerouslySetInnerHTML={{ __html: p.price.replace(/(от )/, '<em>$1</em>') }} /> :

                  <div className="price-lg"><em>По&nbsp;</em>запросу</div>
                  }
                    <div className="price-note">Обсуждаем объём на первой консультации.</div>
                    <a href="#contact" className="cta-link" onClick={(e) => e.stopPropagation()}>
                      Обсудить задачу <span>→</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>)}
        </div>

        <div className="cta-band">
          <h3 className="serif">Не видите своей задачи в&nbsp;этом списке? <em>Расскажите</em>&nbsp;— разберёмся</h3>
          <div className="actions">
            <a href="#contact" className="btn-primary">Написать <span className="arrow">→</span></a>
          </div>
        </div>
      </div>
    </section>);

}

const CASES = [
{
  n: '01', kind: 'Товарный знак',
  amount: '5 000 000 руб.',
  headline: 'взыскали до&nbsp;суда',
  desc: 'Конкурент зарабатывал на&nbsp;чужом бренде больше, чем&nbsp;сам правообладатель. Зафиксировали нарушение, собрали доказательства, вышли на&nbsp;переговоры. Нарушитель признал вину и&nbsp;выплатил компенсацию в&nbsp;полном объёме.'
},
{
  n: '02', kind: 'Защита предпринимателя',
  amount: '−2,6 млн руб.',
  headline: 'с&nbsp;4,1 до&nbsp;1,5 млн&nbsp;руб.',
  desc: 'Бренд требовал компенсацию, судебные перспективы давали ещё более высокую сумму. Проверили документы, нашли несоответствия в&nbsp;расчётах правообладателя, подготовили контраргументы. Договорились на&nbsp;досудебном этапе.'
},
{
  n: '03', kind: 'Мировое соглашение',
  amount: '1,5 из&nbsp;40 млн',
  headline: 'иск урегулировали миром',
  desc: 'Крупный иностранный правообладатель против небольшого российского бизнеса. Риск взыскания свыше 40 млн руб.. Нашли путь к&nbsp;мировому соглашению, а&nbsp;клиент сохранил бизнес.'
}];


function Cases() {
  return (
    <section id="cases" className="section cases">
      <div className="wrap">
        <div className="cases-head">
          <div>
            <div className="eyebrow" style={{ marginBottom: 32 }}>
              <span className="dot"></span>III. Кейсы
            </div>
            <h2 className="serif">
              <em style={{ color: "rgb(15, 15, 16)" }}>Истории </em><br />из&nbsp;практики
            </h2>
          </div>
          <p></p>
        </div>

        <div className="case-grid-3">
          {CASES.map((c, i) =>
          <article key={i} className="case-card">
              <div className="case-num">
                <span className="case-n">Кейс {c.n}</span>
                <span className="case-sep"></span>
                <span className="case-kind">{c.kind}</span>
              </div>
              <div className="case-hero">
                <div className="case-amount serif" dangerouslySetInnerHTML={{ __html: c.amount }} />
                <div className="case-headline" dangerouslySetInnerHTML={{ __html: c.headline }} />
              </div>
              <p className="case-desc" dangerouslySetInnerHTML={{ __html: c.desc }} />
            </article>
          )}
        </div>

      </div>
    </section>);
}

function Team() {
  return (
    <section id="team" className="section team">
      <div className="wrap">
        <div className="team-head">
          <div>
            <div className="eyebrow" style={{ marginBottom: 32 }}>
              <span className="dot"></span>IV. Бюро
            </div>
            <h2 className="serif">О бюро <em></em></h2>
          </div>
          <p>Бюро с&nbsp;намеренно узкой специализацией. Работаем только с&nbsp;интеллектуальной собственностью и&nbsp;только в&nbsp;креативных индустриях, где&nbsp;права на&nbsp;результат важнее, чем&nbsp;кажется на&nbsp;старте.</p>
        </div>

        <div className="founder">
          <div className="founder-photo-wrap">
            <span className="vert-label">Основатель бюро</span>
            <span className="corner-mark">
              <svg viewBox="0 0 24 24" fill="none"><path d="M0 0 H24 M24 0 V24" stroke="currentColor" strokeWidth="1" /></svg>
            </span>
            <div className="founder-photo">
              <span className="ring-2"></span>
              <span className="ring"></span>
              <img src={window.__resources && window.__resources.founderPhoto || "founder.jpg"} alt="Анастасия Храмова" />
            </div>
          </div>
          <div className="founder-text">
            <div className="founder-eyebrow"></div>
            <h3 className="serif">Анастасия <em>Храмова</em></h3>
            <p className="founder-lede">Юрист по&nbsp;интеллектуальной собственности и&nbsp;праву новых технологий.</p>
            <div className="founder-bio">
              <p>Специализируется на защите бренда и дизайна. Знает, как устроен этот рынок и где у клиента обычно прячется риск.</p>
              <p>Основала бюро, потому что&nbsp;видела, как люди теряют права на&nbsp;то, что&nbsp;сами создали&nbsp;— из-за неверных договоров или&nbsp;неправильно выбранного инструмента защиты.</p>
            </div>
            <div className="founder-meta">
              <div className="meta-row">
                <span className="k">Специализация</span>
                <span className="v">IP · право новых технологий · защита бренда</span>
              </div>
              <div className="meta-row">
                <span className="k">Образование</span>
                <span className="v">Магистр по&nbsp;интеллектуальным правам</span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>);

}

function Contact() {
  const [form, setForm] = React.useState({
    name: '', company: '', email: '', task: '', industry: '', budget: ''
  });
  const [focus, setFocus] = React.useState('');
  const [agree, setAgree] = React.useState(false);
  const [sent, setSent] = React.useState(false);

  const set = (k) => (e) => setForm({ ...form, [k]: e.target.value });
  const submit = (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !agree) return;
    setSent(true);
  };

  const industries = ['Мода', 'Музыка', 'Дизайн', 'Фотография', 'Реклама', 'Медиа', 'Другое'];
  const budgets = ['до 150k', '150–500k', '500k–1M', 'от 1M', 'обсудим'];

  return (
    <section id="contact" className="contact">
      <div className="wrap">
        <div className="head">
          <div>
            <div className="eyebrow" style={{ marginBottom: 32, color: 'var(--bordo)' }}>
              <span className="dot" style={{ background: 'var(--bordo)' }}></span>V. Контакты
            </div>
            <h2 className="serif">Расскажите про&nbsp;<em style={{ color: "rgb(15, 15, 16)" }}>задачу</em></h2>
            <p className="lede" style={{ marginTop: 32, maxWidth: 520 }}>Каждую заявку читаем лично.</p>
          </div>
          <div>
            <div className="info">
              <div className="grp">
                <div className="lbl">Часы</div>
                <div className="v mono">пн–пт &nbsp;10:00–19:00</div>
              </div>
            </div>
          </div>
        </div>

        {sent ?
        <div className="form">
            <div className="sent">
              <div className="ico">✓</div>
              <div className="t">Спасибо. Мы&nbsp;уже читаем&nbsp;ваше сообщение и&nbsp;<span className="accent">ответим в&nbsp;течение рабочего дня</span>.</div>
            </div>
          </div> :

        <form className="form" onSubmit={submit}>
            <div className={`field ${focus === 'name' ? 'focused' : ''}`}>
              <label>Имя</label>
              <input value={form.name} onChange={set('name')} onFocus={() => setFocus('name')} onBlur={() => setFocus('')} placeholder="Как к&nbsp;вам обращаться" />
            </div>
            <div className={`field ${focus === 'company' ? 'focused' : ''}`}>
              <label>Бренд / компания</label>
              <input value={form.company} onChange={set('company')} onFocus={() => setFocus('company')} onBlur={() => setFocus('')} placeholder="название или сайт" />
            </div>
            <div className={`field ${focus === 'email' ? 'focused' : ''}`}>
              <label>Контакт</label>
              <input value={form.email} onChange={set('email')} onFocus={() => setFocus('email')} onBlur={() => setFocus('')} placeholder="email или телеграм" />
            </div>
            <div className={`field full ${focus === 'task' ? 'focused' : ''}`}>
              <label>Задача</label>
              <textarea value={form.task} onChange={set('task')} onFocus={() => setFocus('task')} onBlur={() => setFocus('')} placeholder="в двух абзацах: что у&nbsp;вас происходит и&nbsp;к&nbsp;какому сроку нужен ответ" />
            </div>
            <div className="submit-row">
              <label className={`consent ${agree ? 'on' : ''}`}>
                <input type="checkbox" checked={agree} onChange={(e) => setAgree(e.target.checked)} />
                <span className="box" aria-hidden="true">
                  <svg width="11" height="9" viewBox="0 0 11 9" fill="none"><path d="M1 4.5 L4 7.5 L10 1" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" /></svg>
                </span>
                <span className="consent-text">Я <a href="#" target="_blank" rel="noopener" onClick={(e) => { e.preventDefault(); e.stopPropagation(); }}>соглашаюсь</a> на&nbsp;обработку персональных данных и&nbsp;принимаю <a href="Политика конфиденциальности.html" target="_blank" rel="noopener" onClick={(e) => e.stopPropagation()}>политику конфиденциальности</a>.</span>
              </label>
              <button type="submit" className="submit" disabled={!agree}>Отправить <span className="arrow">→</span></button>
            </div>
          </form>
        }
      </div>
    </section>);

}

function Footer() {
  return (
    <footer className="footer">
      <div className="wrap">
        <div className="foot-top">
          <a href="#top" className="foot-brand">Fell<span className="a">a</span>w</a>
          <div className="legal">
            <a href="Политика конфиденциальности.html" target="_blank" rel="noopener">Политика конфиденциальности</a>
            <a href="#">Реквизиты</a>
          </div>
        </div>
        <div className="foot-bottom">
          <span>© Fellaw, 2026 · Юридическое бюро</span>
          <a href="#contact">Написать нам →</a>
        </div>
      </div>
    </footer>);

}

function CookieConsent() {
  const [show, setShow] = React.useState(false);

  React.useEffect(() => {
    let ok = false;
    try {ok = localStorage.getItem('fellaw-cookie') === 'accepted';} catch (e) {}
    if (!ok) {
      const t = setTimeout(() => setShow(true), 900);
      return () => clearTimeout(t);
    }
  }, []);

  const accept = () => {
    try {localStorage.setItem('fellaw-cookie', 'accepted');} catch (e) {}
    setShow(false);
  };

  return (
    <div className={`cookie ${show ? 'show' : ''}`} role="dialog" aria-label="Использование cookie">
      <div className="cookie-inner">
        <div className="cookie-mark">F</div>
        <p className="cookie-text">
          Мы&nbsp;используем cookie, чтобы&nbsp;сайт работал корректно и&nbsp;мы&nbsp;понимали, что&nbsp;для&nbsp;вас удобнее. Продолжая, вы&nbsp;соглашаетесь с&nbsp;{' '}
          <a href="Политика конфиденциальности.html" target="_blank" rel="noopener">политикой обработки персональных данных</a>.
        </p>
        <button className="cookie-btn" onClick={accept}>Принять</button>
      </div>
    </div>);

}

window.Nav = Nav;
window.Hero = Hero;
window.Manifesto = Manifesto;
window.Services = Services;
window.Cases = Cases;
window.Team = Team;
window.Contact = Contact;
window.Footer = Footer;
window.CookieConsent = CookieConsent;