// Abstract pattern placeholders for case images and portraits.
// Pure SVG, deterministic per "seed", uses brand palette.

const ART_BG = ['#EDEAE3', '#F4ECEC', '#0F0F10', '#FFFFFF', '#6B1F2A'];

function CasePattern({ kind = 1, code = 'FW—000' }) {
  // 6 distinct compositions
  const W = 800, H = 600;
  const inks = { line: '#0F0F10', bordo: '#6B1F2A', cream: '#EDEAE3', paper: '#FFFFFF' };
  let body = null;
  let bg = inks.cream;

  if (kind === 1) {
    bg = inks.cream;
    body = (
      <g>
        {Array.from({length:18}).map((_,i)=>(
          <line key={i} x1={60+i*40} y1="80" x2={60+i*40} y2="520" stroke="#0F0F10" strokeWidth="0.6" opacity="0.35"/>
        ))}
        <circle cx="500" cy="300" r="180" fill={inks.bordo}/>
        <circle cx="500" cy="300" r="180" fill="none" stroke={inks.cream} strokeWidth="1" strokeDasharray="2 6"/>
      </g>
    );
  } else if (kind === 2) {
    bg = inks.paper;
    body = (
      <g>
        <rect x="60" y="80" width="680" height="440" fill="none" stroke="#0F0F10" strokeWidth="0.8" opacity="0.35"/>
        <g stroke="#0F0F10" strokeWidth="0.6" opacity="0.25">
          {Array.from({length:9}).map((_,i)=>(
            <line key={i} x1="60" y1={80+i*55} x2="740" y2={80+i*55}/>
          ))}
        </g>
        <text x="80" y="380" fontFamily="Cormorant Garamond" fontSize="320" fill="#6B1F2A" fontStyle="italic" fontWeight="400">§</text>
        <text x="380" y="500" fontFamily="JetBrains Mono" fontSize="14" fill="#52504A">Article I</text>
      </g>
    );
  } else if (kind === 3) {
    bg = '#0F0F10';
    body = (
      <g>
        {Array.from({length:24}).map((_,i)=>(
          <circle key={i} cx={400} cy={300} r={20+i*12} fill="none" stroke="#EDEAE3" strokeWidth="0.5" opacity={0.7-i*0.025}/>
        ))}
        <circle cx="400" cy="300" r="14" fill="#6B1F2A"/>
      </g>
    );
  } else if (kind === 4) {
    bg = '#F4ECEC';
    body = (
      <g>
        <path d="M40 540 Q 200 100 400 320 T 760 80" stroke="#6B1F2A" strokeWidth="1.5" fill="none"/>
        <path d="M40 480 Q 200 60 400 260 T 760 40" stroke="#0F0F10" strokeWidth="0.6" fill="none" opacity="0.4"/>
        <path d="M40 580 Q 200 160 400 380 T 760 140" stroke="#0F0F10" strokeWidth="0.6" fill="none" opacity="0.4"/>
        <circle cx="760" cy="80" r="6" fill="#6B1F2A"/>
        <circle cx="40" cy="540" r="4" fill="#0F0F10"/>
      </g>
    );
  } else if (kind === 5) {
    bg = inks.cream;
    body = (
      <g>
        <rect x="120" y="120" width="560" height="360" fill="#FFFFFF" stroke="#0F0F10" strokeWidth="0.8"/>
        <line x1="120" y1="200" x2="680" y2="200" stroke="#0F0F10" strokeWidth="0.4"/>
        <line x1="380" y1="200" x2="380" y2="480" stroke="#0F0F10" strokeWidth="0.4"/>
        <text x="140" y="180" fontFamily="JetBrains Mono" fontSize="11" fill="#52504A">Trademark cert · class 25</text>
        <text x="140" y="260" fontFamily="Cormorant Garamond" fontSize="64" fontStyle="italic" fill="#6B1F2A">approved</text>
        <text x="140" y="450" fontFamily="JetBrains Mono" fontSize="9" fill="#8A8275">Roznamberg №734·26</text>
        <text x="400" y="260" fontFamily="JetBrains Mono" fontSize="11" fill="#52504A">Status</text>
        <circle cx="420" cy="290" r="6" fill="#6B1F2A"/>
        <text x="440" y="294" fontFamily="Inter Tight" fontSize="14" fill="#0F0F10">active</text>
      </g>
    );
  } else {
    bg = inks.paper;
    body = (
      <g>
        <g opacity="0.6">
          {Array.from({length:14}).map((_,i)=>(
            <line key={i} x1={40+i*54} y1="80" x2={40+i*54+30} y2="520" stroke="#0F0F10" strokeWidth="0.5"/>
          ))}
        </g>
        <rect x="240" y="180" width="320" height="240" fill="#6B1F2A"/>
        <rect x="260" y="200" width="280" height="200" fill="none" stroke="#EDEAE3" strokeWidth="1"/>
        <text x="280" y="240" fontFamily="JetBrains Mono" fontSize="11" fill="#EDEAE3" letterSpacing="2">CONFIDENTIAL</text>
      </g>
    );
  }
  return (
    <svg viewBox={`0 0 ${W} ${H}`} preserveAspectRatio="xMidYMid slice">
      <rect x="0" y="0" width={W} height={H} fill={bg}/>
      {body}
      <text x="20" y={H-14} fontFamily="JetBrains Mono" fontSize="10" fill={bg==='#0F0F10' ? 'rgba(237,234,227,0.55)' : 'rgba(15,15,16,0.5)'}>{code}</text>
    </svg>
  );
}

function PortraitPlaceholder({ kind = 1, num = '01' }) {
  // abstract portraits — silhouette-like shapes, no real faces
  const W = 300, H = 400;
  const palettes = [
    { bg:'#EDEAE3', shape:'#6B1F2A', accent:'#0F0F10' },
    { bg:'#F4ECEC', shape:'#0F0F10', accent:'#6B1F2A' },
    { bg:'#0F0F10', shape:'#EDEAE3', accent:'#C8AC79' },
    { bg:'#FFFFFF', shape:'#6B1F2A', accent:'#0F0F10' },
  ];
  const p = palettes[kind % palettes.length];
  return (
    <svg viewBox={`0 0 ${W} ${H}`} preserveAspectRatio="xMidYMid slice">
      <rect x="0" y="0" width={W} height={H} fill={p.bg}/>
      <g opacity="0.5">
        {Array.from({length:10}).map((_,i)=>(
          <line key={i} x1="0" y1={40+i*40} x2={W} y2={40+i*40} stroke={p.accent} strokeWidth="0.3"/>
        ))}
      </g>
      {/* stylized silhouette */}
      <g>
        <ellipse cx={W/2} cy="160" rx="56" ry="64" fill={p.shape}/>
        <path d={`M ${W/2-110} ${H} Q ${W/2-110} 260 ${W/2} 240 Q ${W/2+110} 260 ${W/2+110} ${H} Z`} fill={p.shape}/>
        <circle cx={W/2-22} cy="155" r="3" fill={p.bg}/>
        <circle cx={W/2+22} cy="155" r="3" fill={p.bg}/>
      </g>
      <text x="14" y="22" fontFamily="JetBrains Mono" fontSize="10" fill={p.accent} opacity="0.7">№ {num}</text>
      <circle cx={W-24} cy="22" r="3" fill={p.accent}/>
    </svg>
  );
}

window.CasePattern = CasePattern;
window.PortraitPlaceholder = PortraitPlaceholder;
