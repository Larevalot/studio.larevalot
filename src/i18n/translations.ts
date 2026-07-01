export const languages = {
  en: 'English',
  es: 'Español',
  it: 'Italiano',
  zh: '中文',
} as const;

export type Language = keyof typeof languages;

export const defaultLang: Language = 'en';

export const translations: Record<Language, Record<string, string>> = {
  en: {
    // Navbar
    'nav.home': 'Home',
    'nav.pricing': 'Pricing',
    'nav.ecosystem': 'Ecosystem',
    'nav.about': 'About',

    // Hero
    'hero.badge': 'The Lare Ecosystem',
    'hero.title': '[studio] larevalot',
    'hero.subtitle': 'A curated collection of premium tools designed to elevate your development workflow to unprecedented heights.',
    'hero.cta': 'Explore Ecosystem',
    'hero.cta.pricing': 'View Pricing',

    // Ecosystem
    'ecosystem.badge': 'Our Arsenal',
    'ecosystem.title': 'Ecosystem Tools',
    'ecosystem.subtitle': 'Precision-crafted applications built for developers who demand excellence.',
    'ecosystem.visit': 'Visit',
    'ecosystem.coming.soon': 'Coming Soon',
    'ecosystem.live': 'Live',
    'ecosystem.maintenance': 'Under Maintenance',
    'ecosystem.explore': 'Explore',
    'ecosystem.neural.badge': 'Neural Network',
    'ecosystem.neural.subtitle': 'Interconnected tools forming a creative neural network. Each node enhances the others.',

    // Ecosystem Families
    'ecosystem.family.lareweb.name': 'lareWeb',
    'ecosystem.family.lareweb.desc': 'Web experiences & digital presence',
    'ecosystem.family.lareditor.name': 'larEditor',
    'ecosystem.family.lareditor.desc': 'Open source creative tools',

    // Ecosystem Tools
    'ecosystem.tool.confesiones.name': 'Confesiones',
    'ecosystem.tool.confesiones.desc': 'Anonymous confessions platform with integrated global chat. Share your thoughts freely without identity.',
    'ecosystem.tool.portfolio.name': 'Portfolio',
    'ecosystem.tool.portfolio.desc': 'Personal portfolio of the developer "lare". A showcase of projects, skills, and creative work.',
    'ecosystem.tool.video.name': 'Video Editor',
    'ecosystem.tool.video.desc': 'Open source web-based video editor. Intuitive interface for cutting, merging, and enhancing videos.',
    'ecosystem.tool.image.name': 'Image Editor',
    'ecosystem.tool.image.desc': 'Open source web-based image editor. Intuitive tools for cropping, filters, and creative manipulation.',

    // Tools
    'tool.lareditor.v.name': '[v] larEditor',
    'tool.lareditor.v.desc': 'A powerful visual editor that transforms your development experience. Build, preview, and deploy with unprecedented speed and precision.',
    'tool.lareweb.c.name': '[c] lareWeb',
    'tool.lareweb.c.desc': 'Modern web framework for creating stunning, performant websites with cutting-edge technologies and seamless deployment.',
    'tool.lareweb.p.name': '[p] lareWeb',
    'tool.lareweb.p.desc': 'Professional web development platform with advanced features for building enterprise-grade applications.',
    'tool.lareditor.img.name': '[img] larEditor',
    'tool.lareditor.img.desc': 'Next-generation image editor with AI-powered tools for creating stunning visual content. Stay tuned for the revolution.',

    // Pricing
    'pricing.badge': 'Premium Access',
    'pricing.title': 'Simple, Transparent Pricing',
    'pricing.subtitle': 'Unlock the full potential of the Lare ecosystem with our premium tools. One-time payment, lifetime access.',
    'pricing.one.time': 'One-time Payment',
    'pricing.lifetime': 'Lifetime Access',
    'pricing.no.sub': 'No Subscription Required',
    'pricing.get.access': 'Get Access',
    'pricing.popular': 'Most Popular',
    'pricing.coming.soon': 'Coming Soon',

    // Pricing Cards
    'pricing.lareditor.v.name': '[v] larEditor',
    'pricing.lareditor.v.price': '$5',
    'pricing.lareditor.v.desc': 'The complete visual editing experience. Build, preview, and deploy your projects with professional-grade tools.',
    'pricing.lareditor.v.feature.1': 'Visual Editor Interface',
    'pricing.lareditor.v.feature.2': 'Real-time Preview',
    'pricing.lareditor.v.feature.3': 'One-click Deploy',
    'pricing.lareditor.v.feature.4': 'Lifetime Updates',

    'pricing.lareditor.img.name': '[img] larEditor',
    'pricing.lareditor.img.price': '$3',
    'pricing.lareditor.img.desc': 'AI-powered image editing suite. Create stunning visuals with intelligent automation and professional results.',
    'pricing.lareditor.img.feature.1': 'AI Image Processing',
    'pricing.lareditor.img.feature.2': 'Smart Templates',
    'pricing.lareditor.img.feature.3': 'Batch Processing',
    'pricing.lareditor.img.feature.4': 'Lifetime Updates',

    // Footer
    'footer.rights': '© 2025 [studio] larevalot. All rights reserved.',
    'footer.ecosystem': 'Ecosystem',
    'footer.resources': 'Resources',
    'footer.legal': 'Legal',
    'footer.docs': 'Documentation',
    'footer.support': 'Support',
    'footer.privacy': 'Privacy Policy',
    'footer.terms': 'Terms of Service',
  },
  es: {
    // Navbar
    'nav.home': 'Inicio',
    'nav.pricing': 'Precios',
    'nav.ecosystem': 'Ecosistema',
    'nav.about': 'Acerca de',

    // Hero
    'hero.badge': 'El Ecosistema Lare',
    'hero.title': '[studio] larevalot',
    'hero.subtitle': 'Una colección selecta de herramientas premium diseñadas para elevar tu flujo de trabajo de desarrollo a alturas sin precedentes.',
    'hero.cta': 'Explorar Ecosistema',
    'hero.cta.pricing': 'Ver Precios',

    // Ecosystem
    'ecosystem.badge': 'Nuestro Arsenal',
    'ecosystem.title': 'Herramientas del Ecosistema',
    'ecosystem.subtitle': 'Aplicaciones de precisión construidas para desarrolladores que exigen excelencia.',
    'ecosystem.visit': 'Visitar',
    'ecosystem.coming.soon': 'Próximamente',
    'ecosystem.live': 'En Vivo',
    'ecosystem.maintenance': 'En Mantenimiento',
    'ecosystem.explore': 'Explorar',
    'ecosystem.neural.badge': 'Red Neuronal',
    'ecosystem.neural.subtitle': 'Herramientas interconectadas formando una red neuronal creativa. Cada nodo potencia a los demás.',

    // Ecosystem Families
    'ecosystem.family.lareweb.name': 'lareWeb',
    'ecosystem.family.lareweb.desc': 'Experiencias web y presencia digital',
    'ecosystem.family.lareditor.name': 'larEditor',
    'ecosystem.family.lareditor.desc': 'Herramientas creativas de código abierto',

    // Ecosystem Tools
    'ecosystem.tool.confesiones.name': 'Confesiones',
    'ecosystem.tool.confesiones.desc': 'Plataforma de confesiones anónimas con chat global integrado. Comparte tus pensamientos libremente sin identidad.',
    'ecosystem.tool.portfolio.name': 'Portfolio',
    'ecosystem.tool.portfolio.desc': 'Portafolio personal del desarrollador "lare". Una muestra de proyectos, habilidades y trabajo creativo.',
    'ecosystem.tool.video.name': 'Editor de Video',
    'ecosystem.tool.video.desc': 'Editor de video web de código abierto. Interfaz intuitiva para cortar, fusionar y mejorar videos.',
    'ecosystem.tool.image.name': 'Editor de Imágenes',
    'ecosystem.tool.image.desc': 'Editor de imágenes web de código abierto. Herramientas intuitivas para recortar, filtros y manipulación creativa.',

    // Tools
    'tool.lareditor.v.name': '[v] larEditor',
    'tool.lareditor.v.desc': 'Un potente editor visual que transforma tu experiencia de desarrollo. Construye, previsualiza y despliega con velocidad y precisión sin precedentes.',
    'tool.lareweb.c.name': '[c] lareWeb',
    'tool.lareweb.c.desc': 'Framework web moderno para crear sitios web impresionantes y de alto rendimiento con tecnologías de vanguardia.',
    'tool.lareweb.p.name': '[p] lareWeb',
    'tool.lareweb.p.desc': 'Plataforma profesional de desarrollo web con características avanzadas para construir aplicaciones de nivel empresarial.',
    'tool.lareditor.img.name': '[img] larEditor',
    'tool.lareditor.img.desc': 'Editor de imágenes de próxima generación con herramientas impulsadas por IA para crear contenido visual impactante.',

    // Pricing
    'pricing.badge': 'Acceso Premium',
    'pricing.title': 'Precios Simples y Transparentes',
    'pricing.subtitle': 'Desbloquea todo el potencial del ecosistema Lare con nuestras herramientas premium. Pago único, acceso de por vida.',
    'pricing.one.time': 'Pago Único',
    'pricing.lifetime': 'Acceso de Por Vida',
    'pricing.no.sub': 'Sin Suscripción Requerida',
    'pricing.get.access': 'Obtener Acceso',
    'pricing.popular': 'Más Popular',
    'pricing.coming.soon': 'Próximamente',

    // Pricing Cards
    'pricing.lareditor.v.name': '[v] larEditor',
    'pricing.lareditor.v.price': '$5',
    'pricing.lareditor.v.desc': 'La experiencia completa de edición visual. Construye, previsualiza y despliega tus proyectos con herramientas de nivel profesional.',
    'pricing.lareditor.v.feature.1': 'Interfaz de Editor Visual',
    'pricing.lareditor.v.feature.2': 'Vista Previa en Tiempo Real',
    'pricing.lareditor.v.feature.3': 'Despliegue con Un Clic',
    'pricing.lareditor.v.feature.4': 'Actualizaciones de Por Vida',

    'pricing.lareditor.img.name': '[img] larEditor',
    'pricing.lareditor.img.price': '$3',
    'pricing.lareditor.img.desc': 'Suite de edición de imágenes impulsada por IA. Crea visuales impresionantes con automatización inteligente y resultados profesionales.',
    'pricing.lareditor.img.feature.1': 'Procesamiento de Imágenes con IA',
    'pricing.lareditor.img.feature.2': 'Plantillas Inteligentes',
    'pricing.lareditor.img.feature.3': 'Procesamiento por Lotes',
    'pricing.lareditor.img.feature.4': 'Actualizaciones de Por Vida',

    // Footer
    'footer.rights': '© 2025 [studio] larevalot. Todos los derechos reservados.',
    'footer.ecosystem': 'Ecosistema',
    'footer.resources': 'Recursos',
    'footer.legal': 'Legal',
    'footer.docs': 'Documentación',
    'footer.support': 'Soporte',
    'footer.privacy': 'Política de Privacidad',
    'footer.terms': 'Términos de Servicio',
  },
  it: {
    // Navbar
    'nav.home': 'Home',
    'nav.pricing': 'Prezzi',
    'nav.ecosystem': 'Ecosistema',
    'nav.about': 'Chi Siamo',

    // Hero
    'hero.badge': "L'Ecosistema Lare",
    'hero.title': '[studio] larevalot',
    'hero.subtitle': "Una collezione curata di strumenti premium progettati per elevare il tuo flusso di lavoro di sviluppo a livelli senza precedenti.",
    'hero.cta': "Esplora l'Ecosistema",
    'hero.cta.pricing': 'Vedi i Prezzi',

    // Ecosystem
    'ecosystem.badge': 'Il Nostro Arsenale',
    'ecosystem.title': 'Strumenti dell\'Ecosistema',
    'ecosystem.subtitle': 'Applicazioni di precisione costruite per sviluppatori che esigono eccellenza.',
    'ecosystem.visit': 'Visita',
    'ecosystem.coming.soon': 'Prossimamente',
    'ecosystem.live': 'Attivo',
    'ecosystem.maintenance': 'In Manutenzione',
    'ecosystem.explore': 'Esplora',
    'ecosystem.neural.badge': 'Rete Neurale',
    'ecosystem.neural.subtitle': 'Strumenti interconnessi che formano una rete neurale creativa. Ogni nodo potenzia gli altri.',

    // Ecosystem Families
    'ecosystem.family.lareweb.name': 'lareWeb',
    'ecosystem.family.lareweb.desc': 'Esperienze web e presenza digitale',
    'ecosystem.family.lareditor.name': 'larEditor',
    'ecosystem.family.lareditor.desc': 'Strumenti creativi open source',

    // Ecosystem Tools
    'ecosystem.tool.confesiones.name': 'Confesiones',
    'ecosystem.tool.confesiones.desc': 'Piattaforma di confessioni anonime con chat globale integrata. Condividi liberamente i tuoi pensieri senza identità.',
    'ecosystem.tool.portfolio.name': 'Portfolio',
    'ecosystem.tool.portfolio.desc': 'Portfolio personale dello sviluppatore "lare". Una vetrina di progetti, competenze e lavoro creativo.',
    'ecosystem.tool.video.name': 'Editor Video',
    'ecosystem.tool.video.desc': 'Editor video web open source. Interfaccia intuitiva per tagliare, unire e migliorare i video.',
    'ecosystem.tool.image.name': 'Editor Immagini',
    'ecosystem.tool.image.desc': 'Editor di immagini web open source. Strumenti intuitivi per ritagliare, filtri e manipolazione creativa.',

    // Tools
    'tool.lareditor.v.name': '[v] larEditor',
    'tool.lareditor.v.desc': 'Un potente editor visuale che trasforma la tua esperienza di sviluppo. Costruisci, anteponi e distribuisci con velocità e precisione senza precedenti.',
    'tool.lareweb.c.name': '[c] lareWeb',
    'tool.lareweb.c.desc': 'Framework web moderno per creare siti web straordinari e performanti con tecnologie all\'avanguardia.',
    'tool.lareweb.p.name': '[p] lareWeb',
    'tool.lareweb.p.desc': 'Piattaforma professionale di sviluppo web con funzionalità avanzate per costruire applicazioni di livello aziendale.',
    'tool.lareditor.img.name': '[img] larEditor',
    'tool.lareditor.img.desc': 'Editor di immagini di nuova generazione con strumenti alimentati dall\'IA per creare contenuti visivi straordinari.',

    // Pricing
    'pricing.badge': 'Accesso Premium',
    'pricing.title': 'Prezzi Semplici e Trasparenti',
    'pricing.subtitle': "Sblocca tutto il potenziale dell'ecosistema Lare con i nostri strumenti premium. Pagamento unico, accesso a vita.",
    'pricing.one.time': 'Pagamento Unico',
    'pricing.lifetime': 'Accesso a Vita',
    'pricing.no.sub': 'Nessun Abbonamento Richiesto',
    'pricing.get.access': "Ottieni l'Accesso",
    'pricing.popular': 'Più Popolare',
    'pricing.coming.soon': 'Prossimamente',

    // Pricing Cards
    'pricing.lareditor.v.name': '[v] larEditor',
    'pricing.lareditor.v.price': '$5',
    'pricing.lareditor.v.desc': "L'esperienza completa di editing visuale. Costruisci, anteponi e distribuisci i tuoi progetti con strumenti di livello professionale.",
    'pricing.lareditor.v.feature.1': 'Interfaccia Editor Visuale',
    'pricing.lareditor.v.feature.2': 'Anteprima in Tempo Reale',
    'pricing.lareditor.v.feature.3': 'Distribuzione con Un Clic',
    'pricing.lareditor.v.feature.4': 'Aggiornamenti a Vita',

    'pricing.lareditor.img.name': '[img] larEditor',
    'pricing.lareditor.img.price': '$3',
    'pricing.lareditor.img.desc': 'Suite di editing immagini alimentata dall\'IA. Crea contenuti visivi straordinari con automazione intelligente e risultati professionali.',
    'pricing.lareditor.img.feature.1': 'Elaborazione Immagini con IA',
    'pricing.lareditor.img.feature.2': 'Modelli Intelligenti',
    'pricing.lareditor.img.feature.3': 'Elaborazione in Batch',
    'pricing.lareditor.img.feature.4': 'Aggiornamenti a Vita',

    // Footer
    'footer.rights': '© 2025 [studio] larevalot. Tutti i diritti riservati.',
    'footer.ecosystem': 'Ecosistema',
    'footer.resources': 'Risorse',
    'footer.legal': 'Legale',
    'footer.docs': 'Documentazione',
    'footer.support': 'Supporto',
    'footer.privacy': 'Privacy Policy',
    'footer.terms': 'Termini di Servizio',
  },
  zh: {
    // Navbar
    'nav.home': '首页',
    'nav.pricing': '价格',
    'nav.ecosystem': '生态系统',
    'nav.about': '关于',

    // Hero
    'hero.badge': 'Lare 生态系统',
    'hero.title': '[studio] larevalot',
    'hero.subtitle': '精心策划的高级工具集合，旨在将您的开发工作流程提升到前所未有的高度。',
    'hero.cta': '探索生态系统',
    'hero.cta.pricing': '查看价格',

    // Ecosystem
    'ecosystem.badge': '我们的武器库',
    'ecosystem.title': '生态系统工具',
    'ecosystem.subtitle': '为追求卓越的开发者精心打造的应用程序。',
    'ecosystem.visit': '访问',
    'ecosystem.coming.soon': '即将推出',
    'ecosystem.live': '已上线',
    'ecosystem.maintenance': '维护中',
    'ecosystem.explore': '探索',
    'ecosystem.neural.badge': '神经网络',
    'ecosystem.neural.subtitle': '互连的工具形成创意神经网络。每个节点都增强其他节点。',

    // Ecosystem Families
    'ecosystem.family.lareweb.name': 'lareWeb',
    'ecosystem.family.lareweb.desc': '网络体验和数字存在',
    'ecosystem.family.lareditor.name': 'larEditor',
    'ecosystem.family.lareditor.desc': '开源创意工具',

    // Ecosystem Tools
    'ecosystem.tool.confesiones.name': 'Confesiones',
    'ecosystem.tool.confesiones.desc': '匿名告白平台，集成全球聊天。自由分享您的想法，无需身份。',
    'ecosystem.tool.portfolio.name': 'Portfolio',
    'ecosystem.tool.portfolio.desc': '开发者"lare"的个人作品集。展示项目、技能和创意作品。',
    'ecosystem.tool.video.name': '视频编辑器',
    'ecosystem.tool.video.desc': '开源网页视频编辑器。直观的界面用于剪切、合并和增强视频。',
    'ecosystem.tool.image.name': '图像编辑器',
    'ecosystem.tool.image.desc': '开源网页图像编辑器。直观的工具用于裁剪、滤镜和创意处理。',

    // Tools
    'tool.lareditor.v.name': '[v] larEditor',
    'tool.lareditor.v.desc': '强大的可视化编辑器，彻底改变您的开发体验。以空前的速度和精度构建、预览和部署。',
    'tool.lareweb.c.name': '[c] lareWeb',
    'tool.lareweb.c.desc': '现代化 Web 框架，使用前沿技术创建令人惊叹的高性能网站。',
    'tool.lareweb.p.name': '[p] lareWeb',
    'tool.lareweb.p.desc': '专业 Web 开发平台，具有构建企业级应用程序的高级功能。',
    'tool.lareditor.img.name': '[img] larEditor',
    'tool.lareditor.img.desc': '下一代图像编辑器，配备 AI 驱动的工具，用于创建令人惊叹的视觉内容。',

    // Pricing
    'pricing.badge': '高级访问',
    'pricing.title': '简单透明的定价',
    'pricing.subtitle': '使用我们的高级工具释放 Lare 生态系统的全部潜力。一次付款，终身使用。',
    'pricing.one.time': '一次性付款',
    'pricing.lifetime': '终身访问',
    'pricing.no.sub': '无需订阅',
    'pricing.get.access': '获取访问权限',
    'pricing.popular': '最受欢迎',
    'pricing.coming.soon': '即将推出',

    // Pricing Cards
    'pricing.lareditor.v.name': '[v] larEditor',
    'pricing.lareditor.v.price': '$5',
    'pricing.lareditor.v.desc': '完整的可视化编辑体验。使用专业级工具构建、预览和部署您的项目。',
    'pricing.lareditor.v.feature.1': '可视化编辑器界面',
    'pricing.lareditor.v.feature.2': '实时预览',
    'pricing.lareditor.v.feature.3': '一键部署',
    'pricing.lareditor.v.feature.4': '终身更新',

    'pricing.lareditor.img.name': '[img] larEditor',
    'pricing.lareditor.img.price': '$3',
    'pricing.lareditor.img.desc': 'AI 驱动的图像编辑套件。通过智能自动化和专业效果创建令人惊叹的视觉内容。',
    'pricing.lareditor.img.feature.1': 'AI 图像处理',
    'pricing.lareditor.img.feature.2': '智能模板',
    'pricing.lareditor.img.feature.3': '批量处理',
    'pricing.lareditor.img.feature.4': '终身更新',

    // Footer
    'footer.rights': '© 2025 [studio] larevalot. 保留所有权利。',
    'footer.ecosystem': '生态系统',
    'footer.resources': '资源',
    'footer.legal': '法律',
    'footer.docs': '文档',
    'footer.support': '支持',
    'footer.privacy': '隐私政策',
    'footer.terms': '服务条款',
  },
};

export function useTranslations(lang: Language) {
  return function t(key: string): string {
    return translations[lang][key] || translations[defaultLang][key] || key;
  };
}
