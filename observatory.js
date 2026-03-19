// ============================================
//   OBSERVATORY — observatory.js
//   Sistema solar 3D · Auroras · Telescopio
//   Partículas · Audio espacial · Reservas
// ============================================

// ======= DATA =======
const planets = [
  {
    id:1, codename:'AURUM',
    name:'Jhon Jairo Parra', role:'Director & Fundador',
    orbits:14200, spec:'Degradados', rating:'5.0 ⭐',
    bio:'El sol del sistema. Fundador del Observatorio con 12 años de trayectoria. Su precisión con el fade es legendaria en Cali.',
    color1:'#e8c050', color2:'#c8a030', color3:'#7a4800',
    glow:'rgba(200,160,48,0.6)', size:52, orbitR:110, speed:18,
    available:true
  },
  {
    id:2, codename:'VELA',
    name:'Sebastián Banguera', role:'Co-Fundador & Dir. Creativo',
    orbits:11800, spec:'Modernos & Color', rating:'4.9 ⭐',
    bio:'Visionario de identidades. Su especialidad: leer al cliente y crear el estilo exacto que necesita.',
    color1:'#b080ff', color2:'#7a4af0', color3:'#2a0a80',
    glow:'rgba(122,74,240,0.6)', size:46, orbitR:165, speed:27,
    available:true
  },
  {
    id:3, codename:'DELTA',
    name:'Valentina Ríos', role:'Especialista Senior',
    orbits:7400, spec:'Navaja & Barba', rating:'4.8 ⭐',
    bio:'Maestra de la navaja recta. Sus afeitados clásicos son una experiencia que trasciende el corte.',
    color1:'#70d0ff', color2:'#3a8aff', color3:'#0a3080',
    glow:'rgba(58,138,255,0.6)', size:38, orbitR:215, speed:38,
    available:true
  },
  {
    id:4, codename:'NOVA',
    name:'Isabella Torres', role:'Experta en Coloración',
    orbits:5600, spec:'Coloración & Textura', rating:'4.8 ⭐',
    bio:'La coloración como arte. Isabella convierte cada sesión en una obra única, con técnicas de decoloración y tonos que duran.',
    color1:'#ff8080', color2:'#f05a7a', color3:'#801030',
    glow:'rgba(240,90,122,0.6)', size:36, orbitR:258, speed:50,
    available:true
  },
  {
    id:5, codename:'KILO',
    name:'Camilo Herrera', role:'Especialista Fade',
    orbits:4100, spec:'Skin Fade', rating:'4.7 ⭐',
    bio:'El rey del skin fade. Camilo trabaja con máquina con una precisión que raya en lo imposible. Cada transición, perfecta.',
    color1:'#80ffb0', color2:'#00d4aa', color3:'#005a40',
    glow:'rgba(0,212,170,0.6)', size:33, orbitR:296, speed:64,
    available:false
  },
  {
    id:6, codename:'ECHO',
    name:'Felipe Vargas', role:'Operativo Junior',
    orbits:1800, spec:'Clásicos', rating:'4.5 ⭐',
    bio:'La estrella en ascenso del observatorio. Técnica impecable para cortes clásicos y el barbero favorito de las familias.',
    color1:'#ffc080', color2:'#c87030', color3:'#603000',
    glow:'rgba(200,112,48,0.6)', size:28, orbitR:330, speed:80,
    available:true
  },
];

const constelaciones = [
  {id:1,icon:'✂️',name:'Fade Galáctico',cat:'Degradados',desc:'El degradado definitivo. Máquina + tijera, transición de skin fade a longitud. El corte más solicitado del observatorio.',price:'$38.000',dur:'45 min',tags:['Fade','Degradado','Máquina'],isNew:false},
  {id:2,icon:'🌀',name:'Nebulosa Clásica',cat:'Clásicos',desc:'Tijera, peine y navaja. Corte clásico profesional con acabado con navaja para líneas perfectas. Para el agente de imagen impecable.',price:'$32.000',dur:'35 min',tags:['Tijera','Clásico','Navaja'],isNew:false},
  {id:3,icon:'⚡',name:'Supernova Combo',cat:'Combos',desc:'Corte completo + barba en una sola órbita. Para el astronauta que necesita el paquete total. El más popular del universo.',price:'$55.000',dur:'70 min',tags:['Combo','Barba','Premium'],isNew:true},
  {id:4,icon:'🗡️',name:'Eclipse de Barba',cat:'Barba',desc:'Escultura de barba con navaja recta. Definición de líneas, contorno y perfil. Tu barba como arma estelar.',price:'$26.000',dur:'30 min',tags:['Barba','Navaja','Diseño'],isNew:false},
  {id:5,icon:'🌊',name:'Ola de Textura',cat:'Modernos',desc:'Corte texturizado con puntas. Volumen, movimiento y estructura. Para el viajero intergaláctico que quiere personalidad.',price:'$36.000',dur:'40 min',tags:['Textura','Moderno','Volumen'],isNew:false},
  {id:6,icon:'🎨',name:'Aurora de Color',cat:'Color',desc:'Decoloración parcial o total + tonalización. Isabella crea auroras boreales en tu cabello. Arte en estado puro.',price:'$80.000',dur:'120 min',tags:['Color','Decoloración','Arte'],isNew:true},
  {id:7,icon:'☄️',name:'Afeitado Cometario',cat:'Barba',desc:'Afeitado clásico con toalla caliente, espuma artesanal y navaja Solingen. La experiencia más ancestral del observatorio.',price:'$28.000',dur:'35 min',tags:['Afeitado','Toalla','Ritual'],isNew:false},
  {id:8,icon:'👑',name:'Protocolo VIP',cat:'Combos',desc:'Corte + barba + tratamiento + cejas + masaje capilar. La misión más completa del cosmos. Solo para viajeros de primera clase.',price:'$90.000',dur:'120 min',tags:['VIP','Completo','Premium'],isNew:false},
  {id:9,icon:'🌙',name:'Luna de Diseño',cat:'Modernos',desc:'Corte creativo con diseños en fade o lateral. Líneas, figuras, iniciales. Tu cabeza como lienzo estelar.',price:'$45.000',dur:'55 min',tags:['Diseño','Creativo','Arte'],isNew:true},
];

const telescopeZones = [
  {x:0.15,y:0.3,title:'Nebulosa del Fade',body:'Degradados desde $38.000 · 45 min · Skin fade, mid fade, high fade'},
  {x:0.5,y:0.2,title:'Clúster Clásico',body:'Cortes tradicionales desde $32.000 · Tijera + navaja'},
  {x:0.82,y:0.4,title:'Sistema de Barbas',body:'Diseño de barba desde $26.000 · Navaja recta · Contorno perfecto'},
  {x:0.3,y:0.7,title:'Galaxia de Color',body:'Coloración artística desde $80.000 · Aurora boreal en tu cabello'},
  {x:0.68,y:0.65,title:'Estrella VIP',body:'Protocolo completo $90.000 · 2h · Corte + barba + tratamiento + cejas'},
  {x:0.5,y:0.5,title:'El Observatorio',body:'Granada, Cali · +57 317 890 1234 · Lun-Vie 8-20h · Sáb 8-18h'},
];

// ======= STATE =======
let bookingState = {planet:null, svc:null, date:null, time:null, pay:null};
let activePlanet = null;
let audioCtx = null;

const PAY_LABELS = {
  cash:'💵 Efectivo al llegar',
  nequi:'📱 Nequi — 317 890 1234',
  daviplata:'🔴 Daviplata — 317 890 1234',
  transfer:'🏦 Transferencia / PSE',
};

// ======= BOOT =======
document.addEventListener('DOMContentLoaded', () => {
  initBoot();
  initReveal();
  initNavbar();
  renderConstelaciones();
  renderConstFilters();
  initTelescope();
  initBookingForm();
  initDateInput();
  animCounters();
});

function initBoot() {
  const log = document.getElementById('bootLog');
  const bar = document.getElementById('bootBar');
  const enter = document.getElementById('bootEnter');
  const lines = [
    '> Iniciando sistema de navegación estelar...',
    '> Cargando mapa del cosmos...',
    '> Calibrando auroras boreales...',
    '> Detectando planetas activos: 6 encontrados',
    '> Sincronizando órbitas planetarias...',
    '> Sistema solar listo.',
    '> OBSERVATORY ONLINE ✓',
  ];
  let i = 0;
  const iv = setInterval(() => {
    if (i >= lines.length) { clearInterval(iv); setTimeout(() => { if(enter) enter.style.display='block'; }, 300); return; }
    const d = document.createElement('div');
    d.textContent = lines[i];
    d.style.opacity = '0';
    log.appendChild(d);
    requestAnimationFrame(() => { d.style.transition = 'opacity 0.3s'; d.style.opacity = '1'; });
    log.scrollTop = log.scrollHeight;
    if (bar) bar.style.width = ((i + 1) / lines.length * 100) + '%';
    i++;
  }, 360);
  setTimeout(() => enterObs(), 3200);
}

function enterObs() {
  const bs = document.getElementById('bootScreen');
  if (!bs || bs.classList.contains('hidden')) return;
  bs.classList.add('hidden');
  document.getElementById('obsNav').classList.add('visible');
  initStarCanvas();
  initAuroraCanvas();
  initDustCanvas();
  initSolarSystem();
  playSpaceChime();
}

// ======= CANVAS: STARS =======
function initStarCanvas() {
  const c = document.getElementById('starCanvas');
  if (!c) return;
  const ctx = c.getContext('2d');
  c.width = window.innerWidth; c.height = window.innerHeight;
  window.addEventListener('resize', () => { c.width = window.innerWidth; c.height = window.innerHeight; drawStars(); });

  function drawStars() {
    ctx.clearRect(0, 0, c.width, c.height);
    // Stars
    for (let i = 0; i < 600; i++) {
      const x = Math.random() * c.width;
      const y = Math.random() * c.height;
      const r = Math.random() * 1.5;
      const op = Math.random() * 0.8 + 0.2;
      ctx.beginPath();
      ctx.arc(x, y, r, 0, Math.PI * 2);
      const hue = Math.random() > 0.7 ? 200 + Math.random() * 60 : 280 + Math.random() * 40;
      ctx.fillStyle = `hsla(${hue}, 70%, 90%, ${op})`;
      ctx.fill();
    }
    // Nebula blobs
    for (let i = 0; i < 5; i++) {
      const x = Math.random() * c.width, y = Math.random() * c.height;
      const r = 80 + Math.random() * 200;
      const hue = [200, 260, 320, 160, 40][i];
      const grad = ctx.createRadialGradient(x, y, 0, x, y, r);
      grad.addColorStop(0, `hsla(${hue}, 80%, 60%, 0.06)`);
      grad.addColorStop(1, 'transparent');
      ctx.beginPath(); ctx.arc(x, y, r, 0, Math.PI * 2);
      ctx.fillStyle = grad; ctx.fill();
    }
  }
  drawStars();
}

// ======= CANVAS: AURORA =======
function initAuroraCanvas() {
  const c = document.getElementById('auroraCanvas');
  if (!c) return;
  const ctx = c.getContext('2d');
  c.width = window.innerWidth; c.height = window.innerHeight;
  window.addEventListener('resize', () => { c.width = window.innerWidth; c.height = window.innerHeight; });

  let t = 0;
  const bands = [
    { hue: 180, phase: 0,   amp: 60, speed: 0.008, y: 0.25 },
    { hue: 270, phase: 2,   amp: 80, speed: 0.006, y: 0.35 },
    { hue: 320, phase: 4,   amp: 50, speed: 0.010, y: 0.20 },
    { hue: 150, phase: 1.5, amp: 70, speed: 0.007, y: 0.30 },
  ];

  function drawAurora() {
    ctx.clearRect(0, 0, c.width, c.height);
    bands.forEach(b => {
      const baseY = c.height * b.y;
      ctx.beginPath();
      ctx.moveTo(0, baseY);
      for (let x = 0; x <= c.width; x += 4) {
        const y = baseY + Math.sin(x * 0.005 + t * b.speed + b.phase) * b.amp
                       + Math.sin(x * 0.002 + t * b.speed * 0.5) * b.amp * 0.5;
        ctx.lineTo(x, y);
      }
      ctx.lineTo(c.width, 0); ctx.lineTo(0, 0); ctx.closePath();
      const grad = ctx.createLinearGradient(0, 0, 0, c.height * 0.5);
      grad.addColorStop(0, `hsla(${b.hue}, 80%, 60%, 0)`);
      grad.addColorStop(0.5, `hsla(${b.hue}, 80%, 60%, 0.08)`);
      grad.addColorStop(1, `hsla(${b.hue}, 80%, 60%, 0)`);
      ctx.fillStyle = grad; ctx.fill();
    });
    t += 1;
    requestAnimationFrame(drawAurora);
  }
  drawAurora();
}

// ======= CANVAS: DUST PARTICLES =======
function initDustCanvas() {
  const c = document.getElementById('dustCanvas');
  if (!c) return;
  const ctx = c.getContext('2d');
  c.width = window.innerWidth; c.height = window.innerHeight;
  window.addEventListener('resize', () => { c.width = window.innerWidth; c.height = window.innerHeight; });

  const particles = Array.from({ length: 80 }, () => ({
    x: Math.random() * c.width,
    y: Math.random() * c.height,
    r: Math.random() * 1.8 + 0.3,
    vx: (Math.random() - 0.5) * 0.3,
    vy: -Math.random() * 0.4 - 0.05,
    op: Math.random() * 0.5 + 0.1,
    hue: Math.random() > 0.5 ? 180 : 270,
  }));
  // Mouse repulsion
  let mx = -999, my = -999;
  document.addEventListener('mousemove', e => { mx = e.clientX; my = e.clientY; });

  function drawDust() {
    ctx.clearRect(0, 0, c.width, c.height);
    particles.forEach(p => {
      // Mouse repulsion
      const dx = p.x - mx, dy = p.y - my;
      const dist = Math.sqrt(dx * dx + dy * dy);
      if (dist < 100) {
        p.vx += dx / dist * 0.3;
        p.vy += dy / dist * 0.3;
      }
      p.x += p.vx; p.y += p.vy;
      p.vx *= 0.98; p.vy *= 0.98;
      if (p.y < -10) { p.y = c.height + 10; p.x = Math.random() * c.width; }
      if (p.x < 0 || p.x > c.width) p.vx *= -1;

      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fillStyle = `hsla(${p.hue}, 80%, 80%, ${p.op})`;
      ctx.fill();
      // Glow
      ctx.beginPath(); ctx.arc(p.x, p.y, p.r * 2.5, 0, Math.PI * 2);
      ctx.fillStyle = `hsla(${p.hue}, 80%, 80%, ${p.op * 0.15})`;
      ctx.fill();
    });
    requestAnimationFrame(drawDust);
  }
  drawDust();
}

// ======= 3D SOLAR SYSTEM =======
function initSolarSystem() {
  const wrap = document.getElementById('planetsWrap');
  if (!wrap) return;

  planets.forEach((p, i) => {
    // Orbit ring
    const orb = document.createElement('div');
    orb.className = 'planet-orbit';
    orb.style.cssText = `
      width:${p.orbitR * 2}px;height:${p.orbitR * 2}px;
      margin-left:-${p.orbitR}px;margin-top:-${p.orbitR}px;
      animation-duration:${p.speed}s;
    `;

    // Planet node
    const node = document.createElement('div');
    node.className = 'planet-node';
    node.dataset.name = p.codename;
    node.dataset.id = p.id;
    node.style.cssText = `
      width:${p.size}px;height:${p.size}px;
      margin-left:-${p.size / 2}px;
      animation:counterSpin ${p.speed}s linear infinite;
    `;
    node.onclick = () => openPlanet(p);

    // Glow
    const glow = document.createElement('div');
    glow.className = 'planet-glow';
    glow.style.background = `radial-gradient(circle,${p.glow},transparent 70%)`;

    // Body
    const body = document.createElement('div');
    body.className = 'planet-body';
    body.style.background = `radial-gradient(circle at 30% 30%,${p.color1},${p.color2},${p.color3})`;
    body.style.boxShadow = `0 0 ${p.size / 2}px ${p.glow}`;

    const init = document.createElement('div');
    init.className = 'planet-initials';
    init.textContent = p.name.split(' ').map(w => w[0]).join('').slice(0, 2);

    body.appendChild(init);
    node.appendChild(glow); node.appendChild(body);
    orb.appendChild(node);
    wrap.appendChild(orb);
  });

  // Drag to rotate scene
  let isDragging = false, startX = 0, startY = 0, rotX = 25, rotY = 0;
  const vp = document.getElementById('solarViewport');
  const sc = document.getElementById('solarScene');
  vp.addEventListener('mousedown', e => { isDragging = true; startX = e.clientX; startY = e.clientY; });
  window.addEventListener('mousemove', e => {
    if (!isDragging) return;
    const dx = e.clientX - startX, dy = e.clientY - startY;
    rotY += dx * 0.4; rotX = Math.max(5, Math.min(60, rotX - dy * 0.3));
    if (sc) sc.style.transform = `rotateX(${rotX}deg) rotateY(${rotY}deg)`;
    startX = e.clientX; startY = e.clientY;
  });
  window.addEventListener('mouseup', () => isDragging = false);
  vp.addEventListener('touchstart', e => { startX = e.touches[0].clientX; startY = e.touches[0].clientY; });
  vp.addEventListener('touchmove', e => {
    const dx = e.touches[0].clientX - startX, dy = e.touches[0].clientY - startY;
    rotY += dx * 0.4; rotX = Math.max(5, Math.min(60, rotX - dy * 0.3));
    if (sc) sc.style.transform = `rotateX(${rotX}deg) rotateY(${rotY}deg)`;
    startX = e.touches[0].clientX; startY = e.touches[0].clientY;
  });
}

function openPlanet(p) {
  activePlanet = p;
  const pd = document.getElementById('planetDetail');
  if (!pd) return;
  const orb = document.getElementById('pdOrb');
  if (orb) orb.style.background = `radial-gradient(circle at 30% 30%,${p.color1},${p.color2},${p.color3})`;
  if (orb) orb.style.boxShadow = `0 0 30px ${p.glow}`;
  setT('pdCodename', 'PLANETA ' + p.codename);
  setT('pdName', p.name);
  setT('pdRole', p.role);
  setT('pdsOrbits', p.orbits.toLocaleString('es-CO'));
  setT('pdsSpec', p.spec);
  setT('pdsRating', p.rating);
  setT('pdBio', p.bio);
  pd.style.display = 'block';
  playClick();
}

function closePlanet() {
  const pd = document.getElementById('planetDetail');
  if (pd) pd.style.display = 'none';
  activePlanet = null;
}

function bookPlanet() {
  if (!activePlanet) return;
  closePlanet();
  bookingState.planet = activePlanet;
  document.getElementById('transmision')?.scrollIntoView({ behavior: 'smooth' });
  // Pre-select in form
  setTimeout(() => {
    const card = document.getElementById('pp_' + activePlanet.id);
    if (card) { card.classList.add('sel'); updateSummary(); }
    goStep(2);
  }, 700);
}

// ======= CONSTELACIONES =======
function renderConstFilters() {
  const cats = ['Todos', ...new Set(constelaciones.map(c => c.cat))];
  const cont = document.getElementById('constFilters');
  if (!cont) return;
  cont.innerHTML = cats.map((c, i) =>
    `<button class="cf-btn ${c === 'Todos' ? 'active' : ''}" onclick="filterConst('${c}',this)">
      ${i === 0 ? '◎ ' : ''}${c}
    </button>`).join('');
}

function renderConstelaciones(filter = 'Todos') {
  const grid = document.getElementById('constGrid');
  if (!grid) return;
  const list = filter === 'Todos' ? constelaciones : constelaciones.filter(c => c.cat === filter);
  grid.innerHTML = list.map((c, i) => `
    <div class="const-card obs-reveal" style="transition-delay:${i * 0.05}s">
      ${c.isNew ? '<div class="cc-new">NUEVO</div>' : ''}
      <div class="cc-num">★ ${String(c.id).padStart(2, '0')}</div>
      <span class="cc-icon">${c.icon}</span>
      <div class="cc-cat">${c.cat}</div>
      <h3>${c.name}</h3>
      <p>${c.desc}</p>
      <div class="cc-foot">
        <div>
          <div class="cc-price">${c.price}</div>
          <div class="cc-dur">${c.dur}</div>
        </div>
        <div class="cc-tags">${c.tags.map(t => `<span class="cc-tag">${t}</span>`).join('')}</div>
      </div>
    </div>`).join('');
  setTimeout(() => initReveal(), 80);
}

function filterConst(cat, btn) {
  document.querySelectorAll('.cf-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  renderConstelaciones(cat);
  playClick();
}

// ======= TELESCOPIO INTERACTIVO =======
function initTelescope() {
  const canvas = document.getElementById('telescopeSky');
  const wrap = document.getElementById('telescopeWrap');
  const ocular = document.getElementById('teleOcular');
  const popup = document.getElementById('telePopup');
  if (!canvas || !wrap || !ocular) return;

  canvas.width = wrap.offsetWidth;
  canvas.height = wrap.offsetHeight;
  window.addEventListener('resize', () => {
    canvas.width = wrap.offsetWidth;
    canvas.height = wrap.offsetHeight;
    drawTeleSky();
  });

  function drawTeleSky() {
    const ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    // Dark sky
    ctx.fillStyle = '#03020a';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    // Stars
    for (let i = 0; i < 400; i++) {
      const x = Math.random() * canvas.width, y = Math.random() * canvas.height;
      const r = Math.random() * 1.2;
      ctx.beginPath(); ctx.arc(x, y, r, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(232,224,248,${Math.random() * 0.7 + 0.2})`; ctx.fill();
    }
    // Nebulae
    const nebulae = [
      { x: 0.2, y: 0.3, r: 120, hue: 200 }, { x: 0.6, y: 0.2, r: 100, hue: 270 },
      { x: 0.85, y: 0.55, r: 90, hue: 320 }, { x: 0.4, y: 0.75, r: 110, hue: 150 },
      { x: 0.7, y: 0.7, r: 80, hue: 40 }, { x: 0.5, y: 0.5, r: 150, hue: 180 },
    ];
    nebulae.forEach(n => {
      const gx = n.x * canvas.width, gy = n.y * canvas.height;
      const grad = ctx.createRadialGradient(gx, gy, 0, gx, gy, n.r);
      grad.addColorStop(0, `hsla(${n.hue}, 80%, 60%, 0.25)`);
      grad.addColorStop(0.4, `hsla(${n.hue}, 80%, 60%, 0.12)`);
      grad.addColorStop(1, 'transparent');
      ctx.beginPath(); ctx.arc(gx, gy, n.r, 0, Math.PI * 2);
      ctx.fillStyle = grad; ctx.fill();
    });
    // Hotspot circles (info zones)
    telescopeZones.forEach(z => {
      const gx = z.x * canvas.width, gy = z.y * canvas.height;
      ctx.beginPath(); ctx.arc(gx, gy, 24, 0, Math.PI * 2);
      ctx.strokeStyle = 'rgba(0,212,170,0.25)'; ctx.lineWidth = 1;
      ctx.stroke();
      ctx.beginPath(); ctx.arc(gx, gy, 5, 0, Math.PI * 2);
      ctx.fillStyle = 'rgba(0,212,170,0.6)'; ctx.fill();
    });
  }
  drawTeleSky();

  // Draggable ocular
  let dragging = false, ox = wrap.offsetWidth / 2, oy = wrap.offsetHeight / 2;
  function setOcular(x, y) {
    const hw = ocular.offsetWidth / 2, hh = ocular.offsetHeight / 2;
    ox = Math.max(hw, Math.min(wrap.offsetWidth - hw, x));
    oy = Math.max(hh, Math.min(wrap.offsetHeight - hh, y));
    ocular.style.left = ox + 'px'; ocular.style.top = oy + 'px';
    checkZone(ox, oy);
  }
  setOcular(wrap.offsetWidth / 2, wrap.offsetHeight / 2);
  ocular.addEventListener('mousedown', e => { dragging = true; e.preventDefault(); });
  window.addEventListener('mousemove', e => {
    if (!dragging) return;
    const r = wrap.getBoundingClientRect();
    setOcular(e.clientX - r.left, e.clientY - r.top);
  });
  window.addEventListener('mouseup', () => dragging = false);
  ocular.addEventListener('touchstart', e => { dragging = true; e.preventDefault(); });
  wrap.addEventListener('touchmove', e => {
    if (!dragging) return;
    const r = wrap.getBoundingClientRect();
    setOcular(e.touches[0].clientX - r.left, e.touches[0].clientY - r.top);
    e.preventDefault();
  }, { passive: false });
  wrap.addEventListener('touchend', () => dragging = false);

  wrap.addEventListener('click', e => {
    if (dragging) return;
    const r = wrap.getBoundingClientRect();
    setOcular(e.clientX - r.left, e.clientY - r.top);
  });

  function checkZone(x, y) {
    const w = wrap.offsetWidth, h = wrap.offsetHeight;
    let found = null;
    telescopeZones.forEach(z => {
      const zx = z.x * w, zy = z.y * h;
      if (Math.sqrt((x - zx) ** 2 + (y - zy) ** 2) < 60) found = z;
    });
    if (found) {
      setT('tpHeader', found.title);
      setT('tpBody', found.body);
      popup.style.display = 'block';
      // Position popup next to ocular
      const pw = 220, ph = 80;
      let px = ox + 100, py = oy - 40;
      if (px + pw > wrap.offsetWidth) px = ox - pw - 10;
      if (py + ph > wrap.offsetHeight) py = oy - ph - 10;
      popup.style.left = Math.max(0, px) + 'px';
      popup.style.top = Math.max(0, py) + 'px';
    } else {
      popup.style.display = 'none';
    }
  }
}

// ======= BOOKING FORM =======
function initBookingForm() {
  // Planet pick
  const pp = document.getElementById('planetPick');
  if (pp) {
    pp.innerHTML = planets.map(p => `
      <div class="pp-card" id="pp_${p.id}" onclick="pickPlanet(${p.id})">
        <h4 style="color:${p.color1}">◎ ${p.codename} — ${p.name}</h4>
        <p>${p.role}</p>
        <p style="font-size:0.62rem;margin-top:4px;color:${p.available ? '#00d4aa' : 'rgba(232,224,248,0.3)'}">
          ${p.available ? '● Disponible' : '○ No disponible'}
        </p>
      </div>`).join('');
  }
  // Constellation pick
  const cp = document.getElementById('constPick');
  if (cp) {
    cp.innerHTML = constelaciones.map(c => `
      <div class="cp-card" id="cp_${c.id}" onclick="pickConst(${c.id})">
        <h4>${c.icon} ${c.name}</h4>
        <div class="cpc-price">${c.price}</div>
        <p>${c.dur} · ${c.cat}</p>
      </div>`).join('');
  }
}

function pickPlanet(id) {
  bookingState.planet = planets.find(p => p.id === id);
  document.querySelectorAll('.pp-card').forEach(c => c.classList.remove('sel'));
  document.getElementById('pp_' + id)?.classList.add('sel');
  setT('otd-p', bookingState.planet.codename + ' — ' + bookingState.planet.name);
  playClick(); goStep(2);
}

function pickConst(id) {
  bookingState.svc = constelaciones.find(c => c.id === id);
  document.querySelectorAll('.cp-card').forEach(c => c.classList.remove('sel'));
  document.getElementById('cp_' + id)?.classList.add('sel');
  setT('otd-c', bookingState.svc.name);
  setT('otd-e', bookingState.svc.price);
  playClick(); goStep(3);
}

function initDateInput() {
  const inp = document.getElementById('txDate');
  if (!inp) return;
  inp.min = new Date().toISOString().split('T')[0];
  inp.addEventListener('change', () => {
    bookingState.date = inp.value; bookingState.time = null;
    const d = new Date(inp.value + 'T12:00:00');
    setT('otd-d', d.toLocaleDateString('es-CO', { weekday: 'short', day: 'numeric', month: 'short' }));
    renderLaunchWindows(inp.value);
  });
}

function renderLaunchWindows(dateStr) {
  const cont = document.getElementById('launchWindows');
  if (!cont) return;
  const d = new Date(dateStr + 'T12:00:00'), day = d.getDay();
  const open = 8, close = day === 0 ? 14 : day === 6 ? 18 : 20;
  const taken = ['09:00', '10:30', '14:00', '15:30', '17:00'];
  const slots = [];
  for (let h = open; h < close; h++) {
    slots.push(pad(h) + ':00');
    if (h + 0.5 < close) slots.push(pad(h) + ':30');
  }
  cont.innerHTML = slots.map(s =>
    `<button class="lw-btn ${taken.includes(s) ? 'taken' : ''}" onclick="pickTime('${s}',this)">${s}</button>`
  ).join('');
}

function pickTime(t, el) {
  document.querySelectorAll('.lw-btn').forEach(b => b.classList.remove('sel'));
  el.classList.add('sel');
  bookingState.time = t;
  setT('otd-h', t);
  playClick(); goStep(4);
}

function goStep(n) {
  for (let i = 1; i <= 4; i++) {
    const el = document.getElementById('mcs' + i);
    if (el) el.classList.toggle('active', i === n);
  }
  // Animate mission freq
  const freq = document.getElementById('mcFreq');
  if (freq) {
    const freqs = ['░░░░', '▒░░░', '▒▒░░', '▒▒▒░', '████'];
    freq.textContent = 'FREQ: ' + (freqs[n - 1] || '████');
  }
}

function updateSummary() {
  if (bookingState.planet) setT('otd-p', bookingState.planet.codename + ' — ' + bookingState.planet.name);
  if (bookingState.svc) { setT('otd-c', bookingState.svc.name); setT('otd-e', bookingState.svc.price); }
}

// ======= PAYMENT =======
function selPay(method, el) {
  bookingState.pay = method;
  document.querySelectorAll('.ep-opt').forEach(b => b.classList.remove('active-pay'));
  el.classList.add('active-pay');
  document.querySelectorAll('[id^="epp-"]').forEach(p => { p.style.background = 'rgba(100,200,255,0.15)'; p.style.boxShadow = 'none'; });
  const pulse = document.getElementById('epp-' + method);
  if (pulse) { pulse.style.background = 'var(--aurora1)'; pulse.style.boxShadow = '0 0 8px var(--aurora1)'; }
  const strip = document.getElementById('epCopyStrip');
  const lbl = document.getElementById('epcsLbl');
  if (method === 'nequi' || method === 'daviplata') {
    if (strip) strip.style.display = 'flex';
    if (lbl) lbl.textContent = method === 'nequi' ? 'NEQUI:' : 'DAVIPLATA:';
  } else {
    if (strip) strip.style.display = 'none';
  }
  const msgs = {
    cash: '◎ Efectivo al llegar al observatorio.',
    nequi: '◎ Transfiere antes de tu visita. Trae comprobante.',
    daviplata: '◎ Transfiere antes de tu visita. Trae comprobante.',
    transfer: '◎ Te enviamos los datos bancarios por WhatsApp.',
  };
  const msgEl = document.getElementById('epMsg');
  if (msgEl) msgEl.textContent = msgs[method] || '';
  setT('otd-pay', PAY_LABELS[method]);
  playClick();
}

function copyNum() {
  const btn = document.querySelector('.epcs-btn');
  navigator.clipboard.writeText('3178901234').then(() => {
    if (btn) { btn.textContent = '✓ COPIADO'; btn.classList.add('copied'); setTimeout(() => { btn.textContent = '◎ COPIAR'; btn.classList.remove('copied'); }, 2000); }
    showToast('◎ Número copiado al portapapeles');
  }).catch(() => showToast('Número: 317 890 1234'));
}

function launchMission() {
  const name = document.getElementById('txName')?.value.trim();
  const phone = document.getElementById('txPhone')?.value.trim();
  if (!bookingState.planet) { showToast('◎ Selecciona tu planeta'); return; }
  if (!bookingState.svc) { showToast('◎ Elige una constelación'); return; }
  if (!bookingState.date || !bookingState.time) { showToast('◎ Selecciona ventana de lanzamiento'); return; }
  if (!name || !phone) { showToast('◎ Completa nombre y teléfono'); return; }
  if (!bookingState.pay) { showToast('◎ Selecciona método de transferencia'); return; }

  const d = new Date(bookingState.date + 'T12:00:00');
  const dateStr = d.toLocaleDateString('es-CO', { weekday: 'long', day: 'numeric', month: 'long' });
  const motivo = document.getElementById('txMotivo')?.value;

  document.getElementById('cmText').innerHTML =
    `Tu transmisión ha llegado al cosmos, <strong>${name}</strong>.<br/><br/>
    ◎ <strong>Planeta:</strong> ${bookingState.planet.codename} — ${bookingState.planet.name}<br/>
    ◎ <strong>Constelación:</strong> ${bookingState.svc.name}<br/>
    ◎ <strong>Energía:</strong> ${bookingState.svc.price}<br/>
    ◎ <strong>Ventana:</strong> ${dateStr} a las ${bookingState.time}<br/>
    ◎ <strong>Transferencia:</strong> ${PAY_LABELS[bookingState.pay]}<br/>
    ${motivo ? `◎ <strong>Misión:</strong> ${motivo}<br/>` : ''}
    <br/><em>Te confirmaremos al ${phone}. El cosmos te espera.</em>`;

  document.getElementById('launchModal').classList.add('open');
  initModalParticles();
  playLaunch();
}

function initModalParticles() {
  const c = document.getElementById('cmParticles');
  if (!c) return;
  const box = document.querySelector('.cm-box');
  c.width = box?.offsetWidth || 440;
  c.height = box?.offsetHeight || 400;
  const ctx = c.getContext('2d');
  const pts = Array.from({ length: 40 }, () => ({
    x: Math.random() * c.width, y: Math.random() * c.height,
    vx: (Math.random() - 0.5) * 2, vy: (Math.random() - 0.5) * 2,
    r: Math.random() * 3 + 1, hue: Math.random() > 0.5 ? 180 : 270,
  }));
  function anim() {
    ctx.clearRect(0, 0, c.width, c.height);
    pts.forEach(p => {
      p.x += p.vx; p.y += p.vy;
      if (p.x < 0 || p.x > c.width) p.vx *= -1;
      if (p.y < 0 || p.y > c.height) p.vy *= -1;
      ctx.beginPath(); ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fillStyle = `hsla(${p.hue},80%,70%,0.4)`; ctx.fill();
    });
    requestAnimationFrame(anim);
  }
  anim();
}

function closeModal() {
  document.getElementById('launchModal').classList.remove('open');
  bookingState = { planet: null, svc: null, date: null, time: null, pay: null };
  document.querySelectorAll('.pp-card,.cp-card,.lw-btn,.ep-opt').forEach(c => c.classList.remove('sel', 'active-pay'));
  document.querySelectorAll('[id^="epp-"]').forEach(p => { p.style.background = ''; p.style.boxShadow = ''; });
  ['txName', 'txPhone', 'txEmail', 'txDate'].forEach(id => { const el = document.getElementById(id); if (el) el.value = ''; });
  document.getElementById('txMotivo').value = '';
  document.getElementById('txNota').value = '';
  document.getElementById('launchWindows').innerHTML = '<p class="cosmos-hint">Selecciona una fecha para ver ventanas disponibles</p>';
  const strip = document.getElementById('epCopyStrip'); if (strip) strip.style.display = 'none';
  const msg = document.getElementById('epMsg'); if (msg) msg.textContent = '';
  ['otd-p', 'otd-c', 'otd-e', 'otd-d', 'otd-h', 'otd-pay'].forEach(id => setT(id, '—'));
  goStep(1);
}

// ======= REVEAL =======
function initReveal() {
  const obs = new IntersectionObserver(entries => {
    entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('vis'); });
  }, { threshold: 0.1 });
  document.querySelectorAll('.obs-reveal').forEach(el => obs.observe(el));
}

// ======= NAVBAR =======
function initNavbar() {
  window.addEventListener('scroll', () => {
    document.getElementById('obsNav')?.classList.toggle('scrolled', window.scrollY > 60);
  });
  document.getElementById('onHam')?.addEventListener('click', () => {
    document.getElementById('onMob').classList.toggle('open');
  });
  // Live coords
  setInterval(() => {
    const el = document.getElementById('onCoords');
    if (el) {
      const t = Date.now() / 1000;
      el.textContent = `α ${(7 + Math.sin(t * 0.1) * 0.01).toFixed(2)}h · δ +${(3 + Math.cos(t * 0.08) * 0.01).toFixed(2)}°`;
    }
  }, 2000);
}
function closeMob() { document.getElementById('onMob').classList.remove('open'); }

// ======= COUNTERS =======
function animCounters() {
  const obs = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (!e.isIntersecting) return;
      const el = e.target, target = parseInt(el.dataset.target);
      let cur = 0; const step = Math.ceil(target / 60);
      const iv = setInterval(() => { cur = Math.min(cur + step, target); el.textContent = cur.toLocaleString('es-CO'); if (cur >= target) clearInterval(iv); }, 25);
      obs.unobserve(el);
    });
  }, { threshold: 0.3 });
  document.querySelectorAll('[data-target]').forEach(el => obs.observe(el));
}

// ======= AUDIO (Web Audio API) =======
function getCtx() { if (!audioCtx) { try { audioCtx = new (window.AudioContext || window.webkitAudioContext)(); } catch (e) { return null; } } return audioCtx; }

function playSpaceChime() {
  const ctx = getCtx(); if (!ctx) return;
  [261.6, 329.6, 392, 523.2].forEach((f, i) => {
    const o = ctx.createOscillator(), g = ctx.createGain();
    o.connect(g); g.connect(ctx.destination);
    o.type = 'sine'; o.frequency.value = f;
    g.gain.setValueAtTime(0, ctx.currentTime + i * 0.2);
    g.gain.linearRampToValueAtTime(0.07, ctx.currentTime + i * 0.2 + 0.05);
    g.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + i * 0.2 + 1.2);
    o.start(ctx.currentTime + i * 0.2);
    o.stop(ctx.currentTime + i * 0.2 + 1.5);
  });
}

function playClick() {
  const ctx = getCtx(); if (!ctx) return;
  const o = ctx.createOscillator(), g = ctx.createGain();
  o.connect(g); g.connect(ctx.destination);
  o.type = 'sine'; o.frequency.value = 800;
  g.gain.setValueAtTime(0.05, ctx.currentTime);
  g.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.08);
  o.start(); o.stop(ctx.currentTime + 0.1);
}

function playLaunch() {
  const ctx = getCtx(); if (!ctx) return;
  // Ascending sweep
  const o = ctx.createOscillator(), g = ctx.createGain();
  o.connect(g); g.connect(ctx.destination);
  o.type = 'sine';
  o.frequency.setValueAtTime(200, ctx.currentTime);
  o.frequency.exponentialRampToValueAtTime(1200, ctx.currentTime + 0.8);
  g.gain.setValueAtTime(0.1, ctx.currentTime);
  g.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 1);
  o.start(); o.stop(ctx.currentTime + 1.2);
  // Chime on top
  [523, 659, 784, 1047].forEach((f, i) => {
    const o2 = ctx.createOscillator(), g2 = ctx.createGain();
    o2.connect(g2); g2.connect(ctx.destination);
    o2.type = 'sine'; o2.frequency.value = f;
    g2.gain.setValueAtTime(0.06, ctx.currentTime + 0.5 + i * 0.12);
    g2.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.5 + i * 0.12 + 0.5);
    o2.start(ctx.currentTime + 0.5 + i * 0.12);
    o2.stop(ctx.currentTime + 0.5 + i * 0.12 + 0.7);
  });
}

// ======= TOAST =======
function showToast(msg) {
  const t = document.createElement('div');
  t.style.cssText = `position:fixed;bottom:24px;right:24px;background:rgba(7,5,26,0.97);border:1px solid var(--aurora1);color:var(--aurora1);font-family:'Space Mono',monospace;font-size:0.72rem;letter-spacing:0.08em;padding:12px 18px;z-index:9999;box-shadow:0 0 20px rgba(0,212,170,0.2);max-width:280px;line-height:1.5`;
  t.textContent = msg; document.body.appendChild(t);
  setTimeout(() => { t.style.opacity = '0'; t.style.transition = 'opacity 0.4s'; }, 2300);
  setTimeout(() => t.remove(), 2800);
}

// ======= UTILS =======
function setT(id, v) { const el = document.getElementById(id); if (el) el.textContent = v; }
function pad(n) { return String(Math.floor(n)).padStart(2, '0'); }
