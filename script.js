/* ============================================================
   AYGÜN — charity site
   Vanilla JS: i18n, lightbox (with history API), copy-to-clipboard,
   scroll reveals, floating-button scroll behaviour.
   ============================================================ */

(function () {
  'use strict';

  /* ----------------------------------------------------------
     1. TRANSLATIONS
     ---------------------------------------------------------- */
  const translations = {
    az: {
      pageTitle: 'Aygünə dəstək',
      heroHeadline: 'Aygünün dəstəyinizə ehtiyacı var',
      scrollDown: 'Aşağı sürüşdürün',

      storyTitle: 'Mənim də normal həyat yaşamaq ümidim var',
      storyText:
        'Mən, Baxşəliyeva Aygün Əliağa qızıyam, 05.04.1986-cı il təvəllüdlüyəm. Bir yaşından etibarən ağır hemangioma xəstəliyi ilə yaşayıram. Bu xəstəlik illərdir həyatımın bir parçasına çevrilib və hər keçən il məni həm fiziki, həm də mənəvi olaraq yorub. Bəlkə də bir çox insan üçün rahat nəfəs almaq, bir stəkan çay içmək, çörək yemək çox adi şeylərdir... Amma mənim üçün bunlar illərdir həsrətində olduğum bir həyatdır. Xəstəliyim yalnız ağrı vermədi: xarici görünüşümə görə yaşadığım çətinliklər, insanlardan çəkinməyim, yarımçıq qalan arzularım həyatımda dərin iz buraxdı. Mən də hər bir qadın kimi rahat nəfəs almaq, normal qidalanmaq, güzgüyə qorxmadan baxmaq və yarımçıq qalan arzularımı yaşamaq istəyirəm. Bu gün sizdən kömək istəmək mənim üçün asan deyil. Amma ümidimi itirmək də istəmirəm.',

      medicalTitle: 'Tibbi vəziyyət və əlaqə',
      diagnosisTitle: 'Diaqnoz',
      diagnosisText:
        'Ağır hemangioma — kapilyar damarların qan sızması və genişlənməsi. Bu xəstəlik rahat nəfəs almağıma və normal qidalanmağıma mane olur.',
      supportTitle: 'Dəstək',
      supportText:
        'İmkanı olan hər kəsdən xahiş edirəm, mənə dəstək olun. Kiçik hesab etdiyiniz bir yardım belə mənim üçün böyük bir ümid ola bilər. Maddi dəstək edə bilməyənlər isə paylaşaraq səsimi daha çox insana çatdıra bilərlər. Bəlkə də sizin bir yardımınız, bir paylaşımınız mənim illərdir gözlədiyim yeni həyatın başlanğıcı olar...',
      contactTitle: 'Xəstə / Əlaqə',
      patientLabel: 'Xəstə',
      patientName: 'Baxşəliyeva Aygün Əliağa qızı',
      birthLabel: 'Doğum tarixi',
      addressLabel: 'Ünvan',
      addressText: 'Mingəçevir şəhəri',
      phoneLabel: 'Telefon',

      galleryTitle: 'Şəkillər',

      documentsTitle: 'Rəsmi sənədlər',
      documentsCaption:
        'Bu sənədlər Aygünün diaqnozunu təsdiqləyir.',

      donationTitle: 'Yardım üçün bank kartları',
      copyBtn: 'Kopyala',
      copiedBtn: 'Kopyalandı',

      cardsBtn: 'Kartlara bax',
    },

    tr: {
      pageTitle: 'Aygün\'e destek',
      heroHeadline: 'Aygün desteğinize ihtiyaç duyuyor',
      scrollDown: 'Aşağı kaydırın',

      storyTitle: 'Benim de normal bir hayat yaşama umudum var',
      storyText:
        'Ben Bahşeliyeva Aygün Aliağa kızıyım, 05.04.1986 doğumluyum. Bir yaşımdan beri ağır hemanjiyom hastalığıyla yaşıyorum. Bu hastalık yıllardır hayatımın bir parçası haline geldi ve geçen her yıl beni hem fiziksel hem de manevi olarak yordu. Belki birçok insan için rahat nefes almak, bir bardak çay içmek, ekmek yemek çok olağan şeylerdir... Ama benim için bunlar yıllardır özlemini çektiğim bir hayat. Hastalığım yalnızca acı vermedi: dış görünüşüm yüzünden yaşadığım zorluklar, insanlardan çekinmem, yarım kalan hayallerim hayatımda derin izler bıraktı. Ben de her kadın gibi rahat nefes almak, normal beslenmek, aynaya korkmadan bakmak ve yarım kalan hayallerimi yaşamak istiyorum. Bugün sizden yardım istemek benim için kolay değil. Ama umudumu kaybetmek de istemiyorum.',

      medicalTitle: 'Tıbbi durum ve iletişim',
      diagnosisTitle: 'Tanı',
      diagnosisText:
        'Ağır hemanjiyom — kılcal damarlardan kan sızması ve damarların genişlemesi. Bu hastalık rahat nefes almama ve normal beslenmeme engel oluyor.',
      supportTitle: 'Destek',
      supportText:
        'Gücü yeten herkesten rica ediyorum, bana destek olun. Küçük gördüğünüz bir yardım bile benim için büyük bir umut olabilir. Maddi destek veremeyenler ise paylaşarak sesimi daha çok insana ulaştırabilir. Belki sizin bir yardımınız, bir paylaşımınız yıllardır beklediğim yeni hayatın başlangıcı olur...',
      contactTitle: 'Hasta / İletişim',
      patientLabel: 'Hasta',
      patientName: 'Bahşeliyeva Aygün Aliağa kızı',
      birthLabel: 'Doğum tarihi',
      addressLabel: 'Adres',
      addressText: 'Mingeçevir şehri',
      phoneLabel: 'Telefon',

      galleryTitle: 'Fotoğraflar',

      documentsTitle: 'Resmi belgeler',
      documentsCaption:
        'Bu belgeler Aygün\'ün tanısını doğruluyor.',

      donationTitle: 'Yardım için banka kartları',
      copyBtn: 'Kopyala',
      copiedBtn: 'Kopyalandı',

      cardsBtn: 'Kartlara bak',
    },

    ru: {
      pageTitle: 'Поддержка Айгюн',
      heroHeadline: 'Айгюн нужна ваша поддержка',
      scrollDown: 'Прокрутите вниз',

      storyTitle: 'У меня тоже есть надежда на нормальную жизнь',
      storyText:
        'Меня зовут Бахшалиева Айгюн Алиага гызы, я родилась 05.04.1986. С годовалого возраста я живу с тяжёлой гемангиомой. Эта болезнь на долгие годы стала частью моей жизни, и каждый год утомляет меня и физически, и морально. Возможно, для многих людей свободно дышать, выпить чашку чая, съесть кусок хлеба — обычные вещи... Но для меня это жизнь, о которой я мечтаю уже много лет. Болезнь принесла не только боль: трудности из-за внешности, стеснение перед людьми, несбывшиеся мечты оставили глубокий след. Я, как и любая женщина, хочу свободно дышать, нормально питаться, без страха смотреть в зеркало и осуществить свои несбывшиеся мечты. Сегодня мне непросто просить вас о помощи. Но терять надежду я тоже не хочу.',

      medicalTitle: 'Медицинское состояние и контакты',
      diagnosisTitle: 'Диагноз',
      diagnosisText:
        'Тяжёлая гемангиома — кровотечение и расширение капиллярных сосудов. Болезнь мешает мне свободно дышать и нормально питаться.',
      supportTitle: 'Поддержка',
      supportText:
        'Прошу всех, кто может, поддержать меня. Даже небольшая помощь может стать для меня большой надеждой. Те, кто не может помочь материально, могут поделиться этой историей и донести мой голос до большего числа людей. Возможно, ваша помощь или репост станут началом новой жизни, которую я жду много лет...',
      contactTitle: 'Пациентка / Контакты',
      patientLabel: 'Пациентка',
      patientName: 'Бахшалиева Айгюн Алиага гызы',
      birthLabel: 'Дата рождения',
      addressLabel: 'Адрес',
      addressText: 'г. Мингечевир',
      phoneLabel: 'Телефон',

      galleryTitle: 'Фотографии',

      documentsTitle: 'Официальные документы',
      documentsCaption:
        'Эти документы подтверждают диагноз Айгюн.',

      donationTitle: 'Банковские карты для помощи',
      copyBtn: 'Копировать',
      copiedBtn: 'Скопировано',

      cardsBtn: 'Карты помощи',
    },

    en: {
      pageTitle: 'Support Aygün',
      heroHeadline: 'Aygün needs your support',
      scrollDown: 'Scroll down',

      storyTitle: 'I too have the hope of living a normal life',
      storyText:
        'I am Bakhshaliyeva Aygün Aliagha qizi, born on 05.04.1986. Since the age of one I have lived with severe hemangioma. For years this illness has been a part of my life, and every passing year has worn me down, both physically and emotionally. For many people, breathing easily, drinking a cup of tea or eating bread are ordinary things... But for me, they are a life I have longed for over the years. My illness did not bring only pain: the difficulties caused by my appearance, avoiding people, my unfinished dreams — all of it left a deep mark on my life. Like every woman, I want to breathe easily, eat normally, look in the mirror without fear and live my unfinished dreams. Asking you for help today is not easy for me. But I do not want to lose hope either.',

      medicalTitle: 'Medical condition & contact',
      diagnosisTitle: 'Diagnosis',
      diagnosisText:
        'Severe hemangioma — leaking and dilation of the capillary blood vessels. This illness prevents me from breathing easily and eating normally.',
      supportTitle: 'Support',
      supportText:
        'I ask everyone who can to support me. Even a help you consider small can be a great hope for me. Those who cannot give financial support can share my story and carry my voice to more people. Perhaps your help or your share will be the beginning of the new life I have waited for all these years...',
      contactTitle: 'Patient / Contact',
      patientLabel: 'Patient',
      patientName: 'Bakhshaliyeva Aygün Aliagha qizi',
      birthLabel: 'Date of birth',
      addressLabel: 'Address',
      addressText: 'Mingachevir',
      phoneLabel: 'Phone',

      galleryTitle: 'Photos',

      documentsTitle: 'Official documents',
      documentsCaption:
        'These documents confirm Aygün\'s diagnosis.',

      donationTitle: 'Bank cards for donation',
      copyBtn: 'Copy',
      copiedBtn: 'Copied',

      cardsBtn: 'See the cards',
    },
  };

  // v2 redesign: extra keys merged into the base translations
  const extra = {
    az: { navStory:'Hekayə', navGallery:'Şəkillər', navDocs:'Sənədlər', heroBadge:'Xeyriyyə kampaniyası', heroText:'Aygün bir yaşından ağır hemangioma xəstəliyi ilə yaşayır. Rahat nəfəs almaq və normal qidalanmaq üçün sizin dəstəyinizə ehtiyacı var.', heroCta:'Dəstək ol', heroCta2:'WhatsApp ilə əlaqə', heroCta3:'Sənədlərə bax', heroCta4:'Şəkillərə bax', heroCta5:'Tibbi məlumat', heroFloat:'Hər dəstək bir addımdır', chipAge:'Bir yaşından', chipDiagnosis:'Hemangioma', chipNeed:'Dəstəyə ehtiyac', storyEyebrow:'Hekayə', medicalEyebrow:'Tibbi məlumat', galleryEyebrow:'Qalereya', docsEyebrow:'Şəffaflıq', helpEyebrow:'Dəstək', helpTitle:'Necə kömək edə bilərsiniz?', step1Title:'Kartı seçin', step1Text:'Aşağıdakı kartlardan sizə uyğun olanı seçin.', step2Title:'Nömrəni kopyalayın', step2Text:'"Kopyala" düyməsi ilə kart nömrəsini bir toxunuşla kopyalayın.', step3Title:'Köçürmə edin', step3Text:'Bank tətbiqinizdən istənilən məbləği köçürün — hər dəstək dəyərlidir.', donationEyebrow:'Bank kartları', donationSubtitle:'Kartlar xəstənin özünə, əlaqə nömrəsi isə ailəyə məxsusdur. Məlumatların doğruluğunu istəyən hər kəs araşdıra bilər.', relSelf:'(xəstənin öz kartı)', footerNote:'Bu sayt Aygünə dəstək üçün ailəsi tərəfindən yaradılıb.', docsNote:'Qeyd: sənədlərdə ad “Aygun Abdullayeva” kimi yazılıb; doğum tarixi eynidir (05.04.1986).', daysLeft:'{n} gün qalıb', daysLeftOne:'Son gün' },
    tr: { navStory:'Hikaye', navGallery:'Fotoğraflar', navDocs:'Belgeler', heroBadge:'Yardım kampanyası', heroText:'Aygün bir yaşından beri ağır hemanjiyom hastalığıyla yaşıyor. Rahat nefes alabilmek ve normal beslenebilmek için desteğinize ihtiyacı var.', heroCta:'Destek ol', heroCta2:'WhatsApp ile iletişim', heroCta3:'Belgelere bak', heroCta4:'Fotoğraflara bak', heroCta5:'Tıbbi bilgi', heroFloat:'Her destek bir adımdır', chipAge:'Bir yaşından beri', chipDiagnosis:'Hemanjiyom', chipNeed:'Desteğe ihtiyaç', storyEyebrow:'Hikaye', medicalEyebrow:'Tıbbi bilgi', galleryEyebrow:'Galeri', docsEyebrow:'Şeffaflık', helpEyebrow:'Destek', helpTitle:'Nasıl yardım edebilirsiniz?', step1Title:'Kartı seçin', step1Text:'Aşağıdaki kartlardan size uygun olanı seçin.', step2Title:'Numarayı kopyalayın', step2Text:'"Kopyala" düğmesiyle kart numarasını tek dokunuşla kopyalayın.', step3Title:'Transfer yapın', step3Text:'Banka uygulamanızdan dilediğiniz tutarı gönderin — her destek değerlidir.', donationEyebrow:'Banka kartları', donationSubtitle:'Kartlar hastanın kendisine, iletişim numarası ise aileye aittir. Bilgilerin doğruluğunu isteyen herkes araştırabilir.', relSelf:'(hastanın kendi kartı)', footerNote:'Bu site Aygün\'e destek için ailesi tarafından oluşturuldu.', docsNote:'Not: belgelerde ad “Aygun Abdullayeva” olarak yazılıdır; doğum tarihi aynıdır (05.04.1986).', daysLeft:'{n} gün kaldı', daysLeftOne:'Son gün' },
    ru: { navStory:'История', navGallery:'Фото', navDocs:'Документы', heroBadge:'Благотворительная кампания', heroText:'Айгюн с годовалого возраста живёт с тяжёлой гемангиомой. Чтобы свободно дышать и нормально питаться, ей нужна ваша поддержка.', heroCta:'Помочь', heroCta2:'Связаться в WhatsApp', heroCta3:'Документы', heroCta4:'Смотреть фото', heroCta5:'Медицинская информация', heroFloat:'Каждая помощь — это шаг', chipAge:'С 1 года', chipDiagnosis:'Гемангиома', chipNeed:'Нужна поддержка', storyEyebrow:'История', medicalEyebrow:'Медицинская информация', galleryEyebrow:'Галерея', docsEyebrow:'Прозрачность', helpEyebrow:'Поддержка', helpTitle:'Как вы можете помочь?', step1Title:'Выберите карту', step1Text:'Выберите подходящую карту из списка ниже.', step2Title:'Скопируйте номер', step2Text:'Кнопка «Копировать» скопирует номер карты одним касанием.', step3Title:'Сделайте перевод', step3Text:'Переведите любую сумму через приложение банка — важна любая помощь.', donationEyebrow:'Банковские карты', donationSubtitle:'Карты принадлежат самой пациентке, номер телефона — семье. Достоверность информации может проверить каждый.', relSelf:'(карта самой пациентки)', footerNote:'Этот сайт создан семьёй Айгюн для её поддержки.', docsNote:'Примечание: в документах имя указано как «Aygun Abdullayeva»; дата рождения совпадает (05.04.1986).', daysLeft:'Осталось {n} дн.', daysLeftOne:'Последний день' },
    en: { navStory:'Story', navGallery:'Photos', navDocs:'Documents', heroBadge:'Charity campaign', heroText:'Aygün has lived with severe hemangioma since she was one year old. She needs your support to breathe easily and eat normally.', heroCta:'Donate', heroCta2:'Contact on WhatsApp', heroCta3:'View documents', heroCta4:'View photos', heroCta5:'Medical info', heroFloat:'Every gift is a step', chipAge:'Since age one', chipDiagnosis:'Hemangioma', chipNeed:'Needs support', storyEyebrow:'Story', medicalEyebrow:'Medical info', galleryEyebrow:'Gallery', docsEyebrow:'Transparency', helpEyebrow:'Support', helpTitle:'How can you help?', step1Title:'Pick a card', step1Text:'Choose the card that suits you from the list below.', step2Title:'Copy the number', step2Text:'The "Copy" button copies the card number in one tap.', step3Title:'Make a transfer', step3Text:'Send any amount from your banking app — every bit counts.', donationEyebrow:'Bank cards', donationSubtitle:'The cards belong to the patient herself, and the phone number to the family. Anyone may verify the information.', relSelf:'(the patient\'s own card)', footerNote:'This site was created by Aygün\'s family to support her.', docsNote:'Note: the documents list the name as “Aygun Abdullayeva”; the date of birth is the same (05.04.1986).', daysLeft:'{n} days left', daysLeftOne:'Last day' },
  };
  Object.keys(extra).forEach((l) => Object.assign(translations[l], extra[l]));

  /* ----------------------------------------------------------
     2. STATE
     ---------------------------------------------------------- */
  const STORAGE_KEY = 'aygun-lang';
  let currentLang = 'az';
  // Tracks whether a history entry was pushed for the lightbox.
  // Prevents history.back() from going further than the lightbox state.
  let lightboxHistoryPushed = false;

  /* ----------------------------------------------------------
     3. LANGUAGE
     ---------------------------------------------------------- */
  function applyLanguage(lang) {
    if (!translations[lang]) lang = 'az';
    currentLang = lang;

    const t = translations[lang];
    document.documentElement.lang = lang;
    document.title = t.pageTitle;

    // text nodes
    document.querySelectorAll('[data-i18n]').forEach((el) => {
      const key = el.getAttribute('data-i18n');
      if (t[key] !== undefined) el.textContent = t[key];
    });

    // html-allowed nodes (trust note has <strong>)
    document.querySelectorAll('[data-i18n-html]').forEach((el) => {
      const key = el.getAttribute('data-i18n-html');
      if (t[key] !== undefined) el.innerHTML = t[key];
    });

    // active language button
    document.querySelectorAll('.lang-btn').forEach((btn) => {
      btn.classList.toggle('is-active', btn.dataset.lang === lang);
    });

    // Reset any copy button that happens to be mid-"Kopyalandı" so it reflects
    // the new language (we just rewrote its label via [data-i18n] above).

    renderDaysLeft();
  }

  /* ----------------------------------------------------------
     3b. DAYS LEFT badge (header) — reads window.PAID_UNTIL, set by
     the gate script at the top of index.html.
     ---------------------------------------------------------- */
  function renderDaysLeft() {
    const badge = document.getElementById('daysLeft');
    const text = document.getElementById('daysLeftText');
    if (!badge || !text || !window.PAID_UNTIL) return;

    const deadline = new Date(window.PAID_UNTIL + 'T23:59:59+04:00').getTime();
    if (isNaN(deadline)) return;

    // Whole days until the period ends; < 24h left counts as the last day.
    const days = Math.ceil((deadline - Date.now()) / 86400000);
    if (days < 1) { badge.hidden = true; return; }

    // Only the number shows; the wording goes to assistive tech and the tooltip.
    const t = translations[currentLang];
    const label = days === 1 ? t.daysLeftOne : t.daysLeft.replace('{n}', days);
    text.textContent = days;
    badge.setAttribute('aria-label', label);
    badge.setAttribute('title', label);

    badge.classList.toggle('is-urgent', days <= 3);
    badge.hidden = false;
  }

  function initLanguage() {
    let saved = null;
    try { saved = localStorage.getItem(STORAGE_KEY); } catch (e) { /* private mode */ }
    applyLanguage(saved || 'az');

    document.querySelectorAll('.lang-btn').forEach((btn) => {
      btn.addEventListener('click', () => {
        const lang = btn.dataset.lang;
        applyLanguage(lang);
        try { localStorage.setItem(STORAGE_KEY, lang); } catch (e) { /* ignore */ }
      });
    });
  }

  /* ----------------------------------------------------------
     4. HEADER scroll effect + hero scroll-down indicator
     ---------------------------------------------------------- */
  function initScrollEffects() {
    const header = document.getElementById('siteHeader');
    const hero = document.getElementById('hero');
    const scrollIndicator = document.getElementById('scrollIndicator');

    function onScroll() {
      const y = window.scrollY || window.pageYOffset;
      header.classList.toggle('is-scrolled', y > 24);

      // Fade the indicator out once we've scrolled past ~40% of hero.
      if (hero && scrollIndicator) {
        const threshold = hero.offsetHeight * 0.4;
        scrollIndicator.classList.toggle('is-hidden', y > threshold);
      }
    }

    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
  }

  /* ----------------------------------------------------------
     5. Reveal-on-scroll using IntersectionObserver
     ---------------------------------------------------------- */
  function initReveals() {
    const els = document.querySelectorAll('.reveal');
    if (!('IntersectionObserver' in window)) {
      els.forEach((el) => el.classList.add('is-visible'));
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
    );
    els.forEach((el) => io.observe(el));
  }

  /* ----------------------------------------------------------
     6. LIGHTBOX (with History API for back-button behaviour)
     ---------------------------------------------------------- */
  function initLightbox() {
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightboxImg');
    const closeBtn = document.getElementById('lightboxClose');
    if (!lightbox || !lightboxImg) return;

    function openLightbox(src, alt) {
      lightboxImg.src = src;
      lightboxImg.alt = alt || '';
      lightbox.classList.add('is-open');
      lightbox.setAttribute('aria-hidden', 'false');
      document.body.classList.add('is-lightbox-open');

      // Push a history state ONLY on the first open in a series.
      // If the user clicks one thumb after another without closing,
      // we don't push extra states.
      if (!lightboxHistoryPushed) {
        history.pushState({ lightbox: true }, '');
        lightboxHistoryPushed = true;
      }
    }

    function closeLightbox(opts) {
      const fromPopstate = opts && opts.fromPopstate;
      if (!lightbox.classList.contains('is-open')) return;

      lightbox.classList.remove('is-open');
      lightbox.setAttribute('aria-hidden', 'true');
      document.body.classList.remove('is-lightbox-open');
      // small delay to clear src after fade so it doesn't flash blank
      setTimeout(() => { lightboxImg.src = ''; }, 250);

      // If we closed manually (X button, backdrop, Escape), pop the state we pushed.
      // If close was triggered BY popstate, the browser already moved history back.
      if (lightboxHistoryPushed && !fromPopstate) {
        history.back();
      }
      lightboxHistoryPushed = false;
    }

    // Wire up every thumb (gallery photos AND documents) with prev/next nav.
    const thumbs = Array.from(document.querySelectorAll('[data-src]'));
    let current = 0;

    function showIndex(i) {
      current = (i + thumbs.length) % thumbs.length;
      const el = thumbs[current];
      const img = el.querySelector('img');
      openLightbox(el.getAttribute('data-src'), img ? img.alt : '');
    }

    thumbs.forEach((el, i) => {
      el.addEventListener('click', () => showIndex(i));
    });

    const prevBtn = document.getElementById('lightboxPrev');
    const nextBtn = document.getElementById('lightboxNext');
    if (prevBtn) prevBtn.addEventListener('click', (e) => { e.stopPropagation(); showIndex(current - 1); });
    if (nextBtn) nextBtn.addEventListener('click', (e) => { e.stopPropagation(); showIndex(current + 1); });

    document.addEventListener('keydown', (e) => {
      if (!lightbox.classList.contains('is-open')) return;
      if (e.key === 'ArrowLeft') showIndex(current - 1);
      if (e.key === 'ArrowRight') showIndex(current + 1);
    });

    closeBtn.addEventListener('click', () => closeLightbox());

    // click outside the image to close
    lightbox.addEventListener('click', (e) => {
      if (e.target === lightbox) closeLightbox();
    });

    // ESC to close
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && lightbox.classList.contains('is-open')) {
        closeLightbox();
      }
    });

    // Hardware/browser BACK button -> just close lightbox, don't leave site
    window.addEventListener('popstate', () => {
      if (lightbox.classList.contains('is-open')) {
        closeLightbox({ fromPopstate: true });
      }
    });
  }

  /* ----------------------------------------------------------
     7. COPY-TO-CLIPBOARD on bank cards
     ---------------------------------------------------------- */
  function initCopyButtons() {
    const buttons = document.querySelectorAll('.copy-btn');

    async function copyText(text) {
      try {
        await navigator.clipboard.writeText(text);
        return true;
      } catch (_) {
        // fallback for older browsers / non-secure contexts
        try {
          const ta = document.createElement('textarea');
          ta.value = text;
          ta.setAttribute('readonly', '');
          ta.style.position = 'fixed';
          ta.style.opacity = '0';
          document.body.appendChild(ta);
          ta.select();
          const ok = document.execCommand('copy');
          document.body.removeChild(ta);
          return ok;
        } catch (e) {
          return false;
        }
      }
    }

    buttons.forEach((btn) => {
      btn.addEventListener('click', async () => {
        const number = btn.getAttribute('data-copy');
        const label = btn.querySelector('.copy-label');
        if (!number || !label) return;

        const ok = await copyText(number);
        if (!ok) return;

        // Swap label to "Kopyalandı" for ~2s, keeping i18n in sync.
        label.setAttribute('data-i18n', 'copiedBtn');
        label.textContent = translations[currentLang].copiedBtn;
        btn.classList.add('is-copied');

        clearTimeout(btn._copyTimer);
        btn._copyTimer = setTimeout(() => {
          label.setAttribute('data-i18n', 'copyBtn');
          label.textContent = translations[currentLang].copyBtn;
          btn.classList.remove('is-copied');
        }, 2000);
      });
    });
  }

  /* ----------------------------------------------------------
     8. Floating "Kartlara bax" button -> smooth scroll to donation
     ---------------------------------------------------------- */
  function initCardsButton() {
    const btn = document.getElementById('cardsBtn');
    const donation = document.getElementById('donation');
    if (!btn || !donation) return;

    btn.addEventListener('click', () => {
      // 'center' so the section sits comfortably in the viewport.
      donation.scrollIntoView({ behavior: 'smooth', block: 'center' });
    });
  }

  /* ----------------------------------------------------------
     INIT
     ---------------------------------------------------------- */
  document.addEventListener('DOMContentLoaded', () => {
    initLanguage();
    initScrollEffects();
    initReveals();
    initLightbox();
    initCopyButtons();
    initCardsButton();
  });
})();
