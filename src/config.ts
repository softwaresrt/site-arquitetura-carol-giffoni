export const siteConfig = {
  name: 'Carol Giffoni',
  fullName: 'Carol Giffoni Arquitetura & Design',
  tagline: 'Arquitetura que conta histórias e constrói legado.',
  hero: {firstLine:'O espaço muda', secondLine:'a forma', emphasis:'de viver.', description:['Arquitetura com intenção.','Interiores com identidade.','Espaços para sentir e permanecer.']},
  manifesto:'Acreditamos que os ambientes mais especiais são aqueles que revelam, em cada detalhe, a história de quem vive neles.',
  city: 'Rio de Janeiro, RJ',
  address: 'CasaShopping, Av. Ayrton Senna, 2150, sala 212, bloco B, Barra da Tijuca, Rio de Janeiro - RJ, 22775-900',
  addressShort: 'CasaShopping · Barra da Tijuca · RJ',
  telephoneDisplay: '(21) 97912-2229',
  whatsappNumber: '5521979122229',
  whatsappMessage: 'Olá, Carol! Conheci o escritório pelo site e gostaria de conversar sobre um projeto.',
  instagram: 'https://www.instagram.com/carolgiffoni/',
  website: 'https://www.carolgiffoni.com.br',
  // E-mail não informado: manter indefinido até confirmação.
  email: '' as string,
  leadEndpoint: import.meta.env.VITE_LEAD_ENDPOINT || '',
  coordinates: {lat: -22.998, lon: -43.365},
  colors: {chalk:'#ece9e2',ink:'#20241f',olive:'#4b5147',sand:'#b4aa99',accent:'#9d725c'},
  social: {instagram:'https://www.instagram.com/carolgiffoni/'},
  services: [
    {title:'Arquitetura residencial',detail:'Da intenção inicial à organização dos espaços, projetos que respeitam os ritmos de quem vai viver ali.'},
    {title:'Interiores',detail:'Materiais, luz, proporção e mobiliário pensados como uma única linguagem.'},
    {title:'Arquitetura comercial',detail:'Ambientes profissionais que traduzem identidade e melhoram a experiência de quem os utiliza.'},
    {title:'Reformas',detail:'Novas possibilidades para espaços existentes, preservando o que importa e transformando o que precisa mudar.'},
    {title:'Acompanhamento de obra',detail:'Aproximação entre o projeto e sua execução, com alinhamentos em cada etapa.'},
    {title:'Consultoria de ambientes',detail:'Um olhar atento para escolhas que definem a personalidade dos espaços.'},
  ],
} as const;
export const whatsAppLink = (message: string = siteConfig.whatsappMessage) =>
  `https://wa.me/${siteConfig.whatsappNumber.replace(/\D/g,'')}?text=${encodeURIComponent(message)}`;
