/**
 * SECOND CHANCE - MAIN APPLICATION
 * Language switching, estimator logic, forms, and interactions
 */

(function() {
  'use strict';

  // ========================================
  // TRANSLATION SYSTEM
  // ========================================

  const translations = {
    en: {
      // Navigation
      navServices: 'Services',
      navServiceArea: 'Service Area',
      navWhyUs: 'Why Us',
      navGallery: 'Gallery',
      navReviews: 'Reviews',
      navAbout: 'About',
      navContact: 'Contact',
      getQuote: 'Get Quote',
      getInstantQuote: 'Get Instant Quote',
      contactUs: 'Contact Us',
      
      // Hero
      heroTitle: 'Move. Clear. Reuse.',
      heroSubtitle: 'Expert moving, eco-friendly disposal, and used-appliance delivery across Kanto.',
      movesCompleted: 'Moves Completed',
      tonsRecycled: 'Tons Recycled',
      avgRating: 'Avg Rating',
      scrollExplore: 'Scroll to explore',
      
      // Quote Estimator
      quoteTitle: 'Get Your Instant Quote',
      quoteSubtitle: 'Answer a few questions and get an estimated price range in seconds.',
      stepLocation: 'Location',
      stepDetails: 'Details',
      stepItems: 'Items',
      stepContact: 'Contact',
      step1Title: 'Where are you moving?',
      fromLocation: 'From',
      toLocation: 'To',
      moveDate: 'Move Date',
      moveTime: 'Preferred Time',
      continue: 'Continue',
      back: 'Back',
      step2Title: 'Tell us about your property',
      residenceType: 'Residence Type',
      apartment: 'Apartment',
      house: 'House',
      office: 'Office',
      floorFrom: 'Floor (From)',
      floorTo: 'Floor (To)',
      elevatorAvailable: 'Elevator Available?',
      yes: 'Yes',
      no: 'No',
      step3Title: 'What are you moving?',
      furniture: 'Furniture',
      sofa: 'Sofa/Couch',
      bed: 'Bed',
      table: 'Dining Table',
      desk: 'Desk/Office Furniture',
      appliances: 'Appliances',
      refrigerator: 'Refrigerator',
      washingMachine: 'Washing Machine',
      ac: 'Air Conditioner',
      tv: 'TV',
      boxes: 'Boxes & Other',
      boxCount: 'Number of boxes',
      disposalNeeded: 'Need disposal/junk removal?',
      estimatedPrice: 'Your Estimated Price',
      priceNote: 'Final quote provided after reviewing photos/details',
      bookNow: 'Book Your Move',
      fullName: 'Full Name',
      phone: 'Phone',
      email: 'Email',
      preferredContact: 'Preferred Contact Method',
      uploadPhotos: 'Upload Photos (optional but recommended)',
      photoHelp: 'Photos help us provide accurate quotes',
      consent: 'I agree to the privacy policy and terms of service',
      submitQuote: 'Submit Quote Request',
      
      // Services
      servicesTitle: 'Our Services',
      servicesSubtitle: 'Comprehensive logistics solutions for your every need',
      movingTitle: 'Moving Services',
      movingDesc: 'Professional home and office relocation with careful handling and efficient transport across Kanto.',
      movingFeature1: 'Residential & commercial moves',
      movingFeature2: 'Professional packing available',
      movingFeature3: 'Same-day service options',
      movingFeature4: 'Fully insured',
      junkTitle: 'Junk Removal & Disposal',
      junkDesc: 'Eco-friendly clearance and waste disposal with focus on recycling and responsible handling.',
      junkFeature1: 'Estate & office clearance',
      junkFeature2: 'Recycling-first approach',
      junkFeature3: 'Licensed disposal partners',
      junkFeature4: 'Compliance guaranteed',
      applianceTitle: 'Used Home Appliances',
      applianceDesc: 'Quality pre-owned appliances with 3-month warranty, delivery, and installation included.',
      applianceFeature1: '3-month warranty',
      applianceFeature2: 'Professional installation',
      applianceFeature3: 'Quality inspected',
      applianceFeature4: 'Eco-friendly choice',
      estimateThis: 'Get Estimate',
      
      // Service Area
      serviceAreaTitle: 'Where We Serve',
      serviceAreaSubtitle: 'Covering Yokohama, Tokyo, Kanagawa, and wider Kanto region',
      primaryArea: 'Primary Service Area',
      sameDayAvailable: 'Same-Day Available',
      extendedArea: 'Extended Coverage',
      weekendMoves: 'Weekend Moves OK',
      
      // Why Us
      whyUsTitle: 'Why Choose Second Chance?',
      whyUsSubtitle: 'Trust, quality, and care in every move',
      licensedInsured: 'Licensed & Insured',
      licensedInsuredDesc: 'Fully compliant with Japanese regulations. All items insured during transport.',
      bilingualTeam: 'Bilingual Team',
      bilingualTeamDesc: 'Japanese and English speaking staff. Optional Arabic support available.',
      carefulHandling: 'Careful Handling',
      carefulHandlingDesc: 'Professional training and proper equipment for safe transport of all items.',
      reuseFirst: 'Reuse-First Policy',
      reuseFirstDesc: 'We donate, resell, or recycle. Minimizing waste, giving items a second chance.',
      fastResponse: 'Fast Response',
      fastResponseDesc: 'Same-day quotes. Weekend and evening appointments available.',
      transparentPricing: 'Transparent Pricing',
      transparentPricingDesc: 'No hidden fees. Clear estimates. Final quote after item review.',
      
      // Gallery
      galleryTitle: 'Our Work',
      gallerySubtitle: 'Before & after transformations',
      gallery1: 'Complete apartment move - Yokohama',
      gallery2: 'Estate clearance - before & after',
      gallery3: 'Office relocation - Tokyo',
      gallery4: 'Used appliance delivery & install',
      gallery5: 'Our fleet - ready to serve',
      gallery6: 'Disposal & recycling service',
      
      // Reviews
      reviewsTitle: 'What Our Customers Say',
      basedOn: 'based on',
      reviews: 'reviews',
      review1: '"Professional and careful! They moved our entire 3LDK apartment without a single scratch. Bilingual service was a huge help."',
      review2: '"Same-day junk removal when we needed it most. Fair pricing and eco-friendly disposal. Highly recommend!"',
      review3: '"Bought a used fridge with warranty. Installation was perfect and price was unbeatable. Great service!"',
      review4: '"オフィス移転を依頼しました。プロフェッショナルで迅速、価格も適正でした。また利用します！"',
      review5: '"Best moving experience in Japan. Clear communication in English, arrived on time, finished early. Can\'t ask for more!"',
      review6: '"実家の片付けを依頼。丁寧に対応してくれて、リサイクルできるものは寄付してくれました。信頼できる会社です。"',
      
      // About
      aboutTitle: 'About Second Chance',
      aboutLead: 'Founded in Yokohama, we\'re more than a moving company—we\'re sustainability advocates who believe every item deserves a second chance.',
      aboutP1: 'Since our founding, we\'ve helped thousands of families and businesses across Kanto with reliable, bilingual moving and logistics services. Our team combines Japanese precision with international communication, ensuring smooth service for everyone.',
      aboutP2: 'We\'re committed to reducing waste through our reuse-first approach. Items are donated to local charities, sold to give them new life, or recycled responsibly through licensed partners. Every move is an opportunity to make a positive environmental impact.',
      ourValues: 'Our Values',
      value1: '🚚 Fast, reliable service',
      value2: '💚 Environmental responsibility',
      value3: '🌏 Bilingual, inclusive communication',
      value4: '✅ Full compliance & transparency',
      
      // FAQ
      faqTitle: 'Frequently Asked Questions',
      faq1Q: 'How is pricing calculated?',
      faq1A: 'Pricing depends on distance, volume, floors, elevator access, and special handling needs. Our instant estimator provides a range; exact quotes require photos/video of items.',
      faq2Q: 'Do you charge extra for no elevator?',
      faq2A: 'Yes, stairs require additional labor. We add a fee per floor for buildings without elevators, disclosed upfront in your quote.',
      faq3Q: 'What can you dispose of?',
      faq3A: 'Most household items, furniture, and appliances. Hazardous materials require special handling. We\'ll guide you through compliance for items like AC units and refrigerators.',
      faq4Q: 'Is appliance installation included?',
      faq4A: 'Yes! Used appliance purchases include delivery, installation, and basic setup. Our 3-month warranty covers parts and labor.',
      faq5Q: 'Can you move on short notice?',
      faq5A: 'We offer same-day service in Yokohama and Kanagawa (subject to availability). Contact us early morning for best chances.',
      faq6Q: 'Do you work weekends?',
      faq6A: 'Yes, we operate 7 days a week, 8am-8pm. Weekend slots fill quickly, so book ahead when possible.',
      faq7Q: 'Are you licensed and insured?',
      faq7A: 'Fully licensed for transport and waste disposal in Kanagawa. All moves are insured for damage or loss during transit.',
      faq8Q: 'Can I communicate in English?',
      faq8A: 'Absolutely. Our team is bilingual (Japanese/English), with optional Arabic support. All documentation available in multiple languages.',
      faq9Q: 'Do you offer packing services?',
      faq9A: 'Yes, we provide full or partial packing services. Materials (boxes, bubble wrap, tape) available for purchase or included in packing packages.',
      faq10Q: 'How do I track my quote request?',
      faq10A: 'After submission, you\'ll receive confirmation via your preferred contact method (phone/email/LINE/WhatsApp) within 2 hours during business hours.',
      
      // Contact
      contactTitle: 'Get In Touch',
      contactSubtitle: 'We\'re here to help. Reach out via your preferred channel.',
      address: 'Address',
      hours: 'Daily 8am-8pm',
      responseTime: 'Response within 4 hours',
      instantChat: 'Instant chat support',
      sendMessage: 'Send us a message',
      message: 'Message',
      
      // Footer
      footerTagline: 'Move. Clear. Reuse.',
      footerDesc: 'Expert logistics with environmental responsibility.',
      quickLinks: 'Quick Links',
      services: 'Services',
      legal: 'Legal',
      privacy: 'Privacy Policy',
      terms: 'Terms of Service',
      compliance: 'Compliance',
      allRights: 'All rights reserved.',
      license: 'Licensed logistics provider in Kanagawa Prefecture'
    },
    ja: {
      // Navigation
      navServices: 'サービス',
      navServiceArea: 'サービスエリア',
      navWhyUs: '選ばれる理由',
      navGallery: 'ギャラリー',
      navReviews: 'お客様の声',
      navAbout: '会社概要',
      navContact: 'お問い合わせ',
      getQuote: '見積もり依頼',
      getInstantQuote: '即時見積もり',
      contactUs: 'お問い合わせ',
      
      // Hero
      heroTitle: '運ぶ・片づける・再生する。',
      heroSubtitle: '関東エリアの引越し・不用品回収・中古家電配送サービス',
      movesCompleted: '完了した引越し',
      tonsRecycled: 'リサイクル量（トン）',
      avgRating: '平均評価',
      scrollExplore: 'スクロールして詳細を見る',
      
      // Quote Estimator
      quoteTitle: '即時見積もり',
      quoteSubtitle: 'いくつかの質問に答えて、すぐに見積もり金額をご確認ください。',
      stepLocation: '場所',
      stepDetails: '詳細',
      stepItems: '荷物',
      stepContact: '連絡先',
      step1Title: 'どこに引越しますか？',
      fromLocation: '引き取り先',
      toLocation: '配送先',
      moveDate: '引越し日',
      moveTime: '希望時間',
      continue: '次へ',
      back: '戻る',
      step2Title: '物件について教えてください',
      residenceType: '住居タイプ',
      apartment: 'マンション・アパート',
      house: '一戸建て',
      office: 'オフィス',
      floorFrom: '階数（引き取り先）',
      floorTo: '階数（配送先）',
      elevatorAvailable: 'エレベーターはありますか？',
      yes: 'はい',
      no: 'いいえ',
      step3Title: '何を運びますか？',
      furniture: '家具',
      sofa: 'ソファ',
      bed: 'ベッド',
      table: 'ダイニングテーブル',
      desk: 'デスク・オフィス家具',
      appliances: '家電',
      refrigerator: '冷蔵庫',
      washingMachine: '洗濯機',
      ac: 'エアコン',
      tv: 'テレビ',
      boxes: 'ダンボール・その他',
      boxCount: 'ダンボール数',
      disposalNeeded: '不用品処分が必要ですか？',
      estimatedPrice: '見積もり金額',
      priceNote: '写真・動画確認後、正確な見積もりをご提示します',
      bookNow: '予約する',
      fullName: 'お名前',
      phone: '電話番号',
      email: 'メールアドレス',
      preferredContact: '希望連絡方法',
      uploadPhotos: '写真アップロード（任意・推奨）',
      photoHelp: '写真があると正確な見積もりが可能です',
      consent: 'プライバシーポリシーと利用規約に同意します',
      submitQuote: '見積もりリクエストを送信',
      
      // Services
      servicesTitle: 'サービス内容',
      servicesSubtitle: 'あらゆるニーズに対応する総合物流ソリューション',
      movingTitle: '引越しサービス',
      movingDesc: '関東エリアの家庭・オフィス引越しを丁寧かつ効率的に対応します。',
      movingFeature1: '住宅・商業引越し',
      movingFeature2: '梱包サービス提供',
      movingFeature3: '当日対応可能',
      movingFeature4: '完全保険付き',
      junkTitle: '不用品回収・処分',
      junkDesc: '環境に配慮した回収・処分サービス。リサイクル優先で対応します。',
      junkFeature1: '遺品整理・オフィス清掃',
      junkFeature2: 'リサイクル優先方針',
      junkFeature3: '認可済み処分業者',
      junkFeature4: 'コンプライアンス保証',
      applianceTitle: '中古家電販売',
      applianceDesc: '3ヶ月保証付き中古家電。配送・設置込みでお届けします。',
      applianceFeature1: '3ヶ月保証',
      applianceFeature2: 'プロによる設置',
      applianceFeature3: '品質検査済み',
      applianceFeature4: '環境に優しい選択',
      estimateThis: '見積もり依頼',
      
      // Service Area
      serviceAreaTitle: 'サービスエリア',
      serviceAreaSubtitle: '横浜・東京・神奈川・関東全域をカバー',
      primaryArea: '主要サービスエリア',
      sameDayAvailable: '当日対応可能',
      extendedArea: '拡大エリア',
      weekendMoves: '週末対応可',
      
      // Why Us
      whyUsTitle: 'セカンドチャンスが選ばれる理由',
      whyUsSubtitle: '信頼・品質・丁寧さをすべての引越しで',
      licensedInsured: '認可・保険付き',
      licensedInsuredDesc: '日本の規制に完全準拠。輸送中の全荷物を保険でカバー。',
      bilingualTeam: 'バイリンガルチーム',
      bilingualTeamDesc: '日本語・英語対応スタッフ。アラビア語サポートも可能。',
      carefulHandling: '丁寧な取り扱い',
      carefulHandlingDesc: 'プロの訓練と適切な機材で全荷物を安全に輸送。',
      reuseFirst: 'リユース優先方針',
      reuseFirstDesc: '寄付・再販・リサイクル。廃棄物を最小化し、物に第二の人生を。',
      fastResponse: '迅速対応',
      fastResponseDesc: '当日見積もり対応。週末・夜間予約も可能。',
      transparentPricing: '透明な料金体系',
      transparentPricingDesc: '隠れた費用なし。明確な見積もり。最終見積もりは荷物確認後。',
      
      // Gallery
      galleryTitle: '施工事例',
      gallerySubtitle: 'ビフォー・アフター',
      gallery1: 'マンション引越し完了 - 横浜',
      gallery2: '遺品整理 - ビフォー・アフター',
      gallery3: 'オフィス移転 - 東京',
      gallery4: '中古家電配送・設置',
      gallery5: '配送車両 - 準備完了',
      gallery6: '処分・リサイクルサービス',
      
      // Reviews
      reviewsTitle: 'お客様の声',
      basedOn: '件中',
      reviews: 'レビュー',
      review1: '"プロフェッショナルで丁寧！3LDKの引越しで傷一つつかず。バイリンガル対応が助かりました。"',
      review2: '"必要な時に当日対応してくれました。料金も公正で環境配慮も◎。強くお勧めします！"',
      review3: '"保証付き中古冷蔵庫を購入。設置も完璧で価格も最高。素晴らしいサービスです！"',
      review4: '"オフィス移転を依頼しました。プロフェッショナルで迅速、価格も適正でした。また利用します！"',
      review5: '"日本での最高の引越し体験。英語で明確なコミュニケーション、時間通りで早く終了。これ以上何を求める？"',
      review6: '"実家の片付けを依頼。丁寧に対応してくれて、リサイクルできるものは寄付してくれました。信頼できる会社です。"',
      
      // About
      aboutTitle: 'セカンドチャンスについて',
      aboutLead: '横浜を拠点に、私たちは単なる引越し会社ではありません。すべてのものに「第二のチャンス」があると信じるサステナビリティの提唱者です。',
      aboutP1: '創業以来、関東全域の何千もの家庭や企業に信頼性の高いバイリンガル引越し・物流サービスを提供してきました。日本の精密さと国際的なコミュニケーションを組み合わせ、すべての人にスムーズなサービスを提供します。',
      aboutP2: '私たちはリユース優先アプローチで廃棄物削減に取り組んでいます。アイテムは地域の慈善団体に寄付され、新しい人生を与えるために販売され、または認可されたパートナーを通じて責任を持ってリサイクルされます。すべての引越しが環境にプラスの影響を与える機会です。',
      ourValues: '私たちの価値観',
      value1: '🚚 迅速で信頼性の高いサービス',
      value2: '💚 環境への責任',
      value3: '🌏 バイリンガル・包括的なコミュニケーション',
      value4: '✅ 完全なコンプライアンスと透明性',
      
      // FAQ
      faqTitle: 'よくあるご質問',
      faq1Q: '料金はどのように計算されますか？',
      faq1A: '料金は距離・荷物量・階数・エレベーターの有無・特別な取り扱いによって決まります。即時見積もりで範囲を表示し、正確な見積もりには写真・動画が必要です。',
      faq2Q: 'エレベーターなしの場合、追加料金はかかりますか？',
      faq2A: 'はい、階段作業には追加の人件費が必要です。エレベーターなしの建物の場合、階数ごとに料金を追加します。見積もりで事前に開示します。',
      faq3Q: '何を処分できますか？',
      faq3A: 'ほとんどの家庭用品・家具・家電を処分できます。危険物は特別な取り扱いが必要です。エアコンや冷蔵庫などのコンプライアンスについてはご案内します。',
      faq4Q: '家電の設置は含まれていますか？',
      faq4A: 'はい！中古家電の購入には配送・設置・基本セットアップが含まれています。3ヶ月保証は部品と工賃をカバーします。',
      faq5Q: '急な依頼でも対応できますか？',
      faq5A: '横浜・神奈川エリアで当日対応サービスを提供しています（空き状況による）。早朝にご連絡いただくと対応しやすくなります。',
      faq6Q: '週末も対応していますか？',
      faq6A: 'はい、週7日、8時～20時まで営業しています。週末の枠はすぐに埋まるので、可能な限り事前予約をお願いします。',
      faq7Q: '認可・保険はありますか？',
      faq7A: '神奈川県で輸送・廃棄物処理の認可を取得しています。すべての引越しは輸送中の損害・損失に対して保険でカバーされています。',
      faq8Q: '英語でコミュニケーションできますか？',
      faq8A: 'もちろんです。チームはバイリンガル（日本語・英語）で、オプションでアラビア語サポートもあります。すべての書類は多言語で提供されます。',
      faq9Q: '梱包サービスはありますか？',
      faq9A: 'はい、全部または一部の梱包サービスを提供しています。梱包材（ダンボール・緩衝材・テープ）は購入可能、または梱包パッケージに含まれています。',
      faq10Q: '見積もりリクエストを追跡できますか？',
      faq10A: '送信後、希望の連絡方法（電話・メール・LINE・WhatsApp）で営業時間内に2時間以内に確認をお送りします。',
      
      // Contact
      contactTitle: 'お問い合わせ',
      contactSubtitle: 'お気軽にご連絡ください。',
      address: '住所',
      hours: '毎日 8:00-20:00',
      responseTime: '4時間以内に返信',
      instantChat: 'チャットサポート',
      sendMessage: 'メッセージを送る',
      message: 'メッセージ',
      
      // Footer
      footerTagline: '運ぶ・片づける・再生する。',
      footerDesc: '環境責任を持つ専門物流。',
      quickLinks: 'クイックリンク',
      services: 'サービス',
      legal: '法的情報',
      privacy: 'プライバシーポリシー',
      terms: '利用規約',
      compliance: 'コンプライアンス',
      allRights: '全著作権所有。',
      license: '神奈川県認可物流事業者'
    },
    ar: {
      // Basic Arabic translations (expand as needed)
      navServices: 'الخدمات',
      navServiceArea: 'منطقة الخدمة',
      navWhyUs: 'لماذا نحن',
      navGallery: 'معرض الصور',
      navReviews: 'التقييمات',
      navAbout: 'عن الشركة',
      navContact: 'اتصل بنا',
      getQuote: 'احصل على عرض سعر',
      getInstantQuote: 'عرض سعر فوري',
      contactUs: 'اتصل بنا',
      heroTitle: 'نقل. تنظيف. إعادة استخدام.',
      heroSubtitle: 'خدمات نقل احترافية، التخلص الصديق للبيئة، وتوصيل الأجهزة المستعملة في كانتو.',
      continue: 'متابعة',
      back: 'رجوع',
      yes: 'نعم',
      no: 'لا'
    }
  };

  let currentLang = 'en';

  // ========================================
  // LANGUAGE SWITCHING
  // ========================================

  const initLanguageSwitcher = () => {
    const langButtons = document.querySelectorAll('.lang-btn');
    
    langButtons.forEach(btn => {
      btn.addEventListener('click', () => {
        const lang = btn.getAttribute('data-lang');
        switchLanguage(lang);
      });
    });
    
    // Check localStorage or browser language
    const savedLang = localStorage.getItem('language');
    const browserLang = navigator.language.split('-')[0];
    
    if (savedLang && translations[savedLang]) {
      switchLanguage(savedLang);
    } else if (browserLang === 'ja' || browserLang === 'ar') {
      switchLanguage(browserLang);
    }
  };

  const switchLanguage = (lang) => {
    if (!translations[lang]) return;
    
    currentLang = lang;
    document.documentElement.lang = lang;
    document.body.setAttribute('lang', lang);
    
    // Update active button
    document.querySelectorAll('.lang-btn').forEach(btn => {
      btn.classList.toggle('active', btn.getAttribute('data-lang') === lang);
    });
    
    // Update all translated elements
    document.querySelectorAll('[data-translate]').forEach(el => {
      const key = el.getAttribute('data-translate');
      if (translations[lang][key]) {
        if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
          el.placeholder = translations[lang][key];
        } else {
          el.textContent = translations[lang][key];
        }
      }
    });
    
    // Save preference
    localStorage.setItem('language', lang);
  };

  // ========================================
  // MOBILE MENU
  // ========================================

  const initMobileMenu = () => {
    const menuToggle = document.querySelector('.mobile-menu-toggle');
    const navMenu = document.querySelector('.nav-menu');
    
    if (!menuToggle || !navMenu) return;
    
    menuToggle.addEventListener('click', () => {
      const isActive = navMenu.classList.toggle('active');
      menuToggle.setAttribute('aria-expanded', isActive);
    });
    
    // Close menu when clicking links
    navMenu.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        menuToggle.setAttribute('aria-expanded', 'false');
      });
    });
    
    // Close menu on outside click
    document.addEventListener('click', (e) => {
      if (!navMenu.contains(e.target) && !menuToggle.contains(e.target)) {
        navMenu.classList.remove('active');
        menuToggle.setAttribute('aria-expanded', 'false');
      }
    });
  };

  // ========================================
  // QUOTE ESTIMATOR
  // ========================================

  let currentStep = 1;
  let estimatorData = {};

  const initEstimator = () => {
    const form = document.getElementById('estimator-form');
    if (!form) return;
    
    form.addEventListener('submit', handleEstimatorSubmit);
    
    // Set min date to today
    const dateInput = document.getElementById('move-date');
    if (dateInput) {
      const today = new Date().toISOString().split('T')[0];
      dateInput.min = today;
    }
  };

  window.nextStep = () => {
    if (!validateStep(currentStep)) return;
    
    saveStepData(currentStep);
    currentStep++;
    
    if (currentStep === 4) {
      calculateEstimate();
    }
    
    updateStepDisplay();
  };

  window.prevStep = () => {
    currentStep--;
    updateStepDisplay();
  };

  const validateStep = (step) => {
    const stepElement = document.querySelector(`.estimator-step[data-step="${step}"]`);
    if (!stepElement) return false;
    
    const inputs = stepElement.querySelectorAll('input[required], select[required]');
    let isValid = true;
    
    inputs.forEach(input => {
      if (!input.value || (input.type === 'radio' && !stepElement.querySelector(`input[name="${input.name}"]:checked`))) {
        isValid = false;
        input.classList.add('error');
      } else {
        input.classList.remove('error');
      }
    });
    
    return isValid;
  };

  const saveStepData = (step) => {
    const stepElement = document.querySelector(`.estimator-step[data-step="${step}"]`);
    if (!stepElement) return;
    
    const inputs = stepElement.querySelectorAll('input, select');
    inputs.forEach(input => {
      if (input.type === 'radio') {
        if (input.checked) {
          estimatorData[input.name] = input.value;
        }
      } else if (input.type === 'checkbox') {
        if (!estimatorData[input.name]) estimatorData[input.name] = [];
        if (input.checked) {
          estimatorData[input.name].push(input.value);
        }
      } else {
        estimatorData[input.id] = input.value;
      }
    });
  };

  const updateStepDisplay = () => {
    // Update step visibility
    document.querySelectorAll('.estimator-step').forEach(step => {
      step.classList.toggle('active', parseInt(step.getAttribute('data-step')) === currentStep);
    });
    
    // Update progress indicators
    document.querySelectorAll('.progress-step').forEach(step => {
      const stepNum = parseInt(step.getAttribute('data-step'));
      step.classList.toggle('active', stepNum === currentStep);
      step.classList.toggle('completed', stepNum < currentStep);
    });
  };

  const calculateEstimate = () => {
    let basePrice = 25000; // Base price in yen
    
    // Adjust for residence type
    if (estimatorData['residence-type'] === 'office') {
      basePrice += 15000;
    } else if (estimatorData['residence-type'] === 'house') {
      basePrice += 10000;
    }
    
    // Adjust for floors
    const floorFrom = estimatorData['floors-from'];
    const floorTo = estimatorData['floors-to'];
    const hasElevator = estimatorData['elevator'] === 'yes';
    
    if (!hasElevator) {
      if (floorFrom === '5+') basePrice += 8000;
      else if (floorFrom === '4') basePrice += 6000;
      else if (floorFrom === '3') basePrice += 4000;
      else if (floorFrom === '2') basePrice += 2000;
      
      if (floorTo === '5+') basePrice += 8000;
      else if (floorTo === '4') basePrice += 6000;
      else if (floorTo === '3') basePrice += 4000;
      else if (floorTo === '2') basePrice += 2000;
    }
    
    // Adjust for items
    const items = estimatorData.items || [];
    basePrice += items.length * 3000;
    
    // Adjust for boxes
    const boxCount = parseInt(estimatorData['box-count']) || 0;
    basePrice += boxCount * 500;
    
    // Adjust for disposal
    if (estimatorData.disposal === 'yes') {
      basePrice += 10000;
    }
    
    // Calculate range (±20%)
    const priceLow = Math.floor(basePrice * 0.8);
    const priceHigh = Math.ceil(basePrice * 1.2);
    
    // Update display
    document.getElementById('price-low').textContent = priceLow.toLocaleString();
    document.getElementById('price-high').textContent = priceHigh.toLocaleString();
    
    estimatorData.estimatedPrice = { low: priceLow, high: priceHigh };
  };

  const handleEstimatorSubmit = (e) => {
    e.preventDefault();
    
    if (!validateStep(currentStep)) return;
    
    saveStepData(currentStep);
    
    // Collect form data
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());
    
    // Merge with estimator data
    const finalData = { ...estimatorData, ...data };
    
    // Handle file upload
    const photos = document.getElementById('item-photos').files;
    
    console.log('Quote submission:', finalData);
    console.log('Uploaded photos:', photos.length);
    
    // Track conversion event
    if (typeof trackQuoteSubmission === 'function') {
      trackQuoteSubmission();
    }
    
    // Show success message
    alert('Thank you! Your quote request has been submitted. We\'ll contact you within 2 hours.');
    
    // Reset form
    e.target.reset();
    currentStep = 1;
    estimatorData = {};
    updateStepDisplay();
  };

  // ========================================
  // CONTACT FORM
  // ========================================

  const initContactForm = () => {
    const form = document.getElementById('contact-form');
    if (!form) return;
    
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      
      const formData = new FormData(e.target);
      const data = Object.fromEntries(formData.entries());
      
      console.log('Contact form submission:', data);
      
      alert('Thank you for your message! We\'ll respond within 4 hours.');
      e.target.reset();
    });
  };

  // ========================================
  // SMOOTH SCROLL
  // ========================================

  const initSmoothScroll = () => {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
        const href = this.getAttribute('href');
        if (href === '#' || !href) return;
        
        const target = document.querySelector(href);
        if (!target) return;
        
        e.preventDefault();
        
        const offset = 80; // Header height
        const targetPosition = target.offsetTop - offset;
        
        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        });
      });
    });
  };

  // ========================================
  // PERFORMANCE OPTIMIZATIONS
  // ========================================

  const initPerformanceOptimizations = () => {
    // Defer non-critical CSS
    const loadDeferredStyles = () => {
      const addStylesNode = document.getElementById('deferred-styles');
      if (addStylesNode) {
        const replacement = document.createElement('div');
        replacement.innerHTML = addStylesNode.textContent;
        document.body.appendChild(replacement);
        addStylesNode.parentElement.removeChild(addStylesNode);
      }
    };
    
    if (window.requestIdleCallback) {
      requestIdleCallback(loadDeferredStyles);
    } else {
      window.addEventListener('load', loadDeferredStyles);
    }
    
    // Lazy load images (already handled in animations.js)
    
    // Reduce motion for accessibility
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (prefersReducedMotion.matches) {
      document.documentElement.style.setProperty('--transition', 'none');
      document.documentElement.style.setProperty('--transition-fast', 'none');
    }
  };

  // ========================================
  // ACCESSIBILITY ENHANCEMENTS
  // ========================================

  const initAccessibility = () => {
    // Skip to content link
    const skipLink = document.createElement('a');
    skipLink.href = '#home';
    skipLink.className = 'skip-link visually-hidden';
    skipLink.textContent = 'Skip to main content';
    skipLink.addEventListener('focus', function() {
      this.classList.remove('visually-hidden');
    });
    skipLink.addEventListener('blur', function() {
      this.classList.add('visually-hidden');
    });
    document.body.insertBefore(skipLink, document.body.firstChild);
    
    // Announce route changes for screen readers
    const announcer = document.createElement('div');
    announcer.setAttribute('role', 'status');
    announcer.setAttribute('aria-live', 'polite');
    announcer.setAttribute('aria-atomic', 'true');
    announcer.className = 'visually-hidden';
    document.body.appendChild(announcer);
    
    // Keyboard navigation enhancements
    document.addEventListener('keydown', (e) => {
      // Escape key closes mobile menu
      if (e.key === 'Escape') {
        const navMenu = document.querySelector('.nav-menu');
        const menuToggle = document.querySelector('.mobile-menu-toggle');
        if (navMenu && navMenu.classList.contains('active')) {
          navMenu.classList.remove('active');
          if (menuToggle) {
            menuToggle.setAttribute('aria-expanded', 'false');
            menuToggle.focus();
          }
        }
      }
    });
  };

  // ========================================
  // INITIALIZATION
  // ========================================

  const init = () => {
    initLanguageSwitcher();
    initMobileMenu();
    initEstimator();
    initContactForm();
    initSmoothScroll();
    initPerformanceOptimizations();
    initAccessibility();
  };

  // Run on DOM ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();