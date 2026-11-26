export default function TechNetworkGraphic() {
  return (
    <div className="tech-network-graphic" role="img" aria-label="Animated laptop exchanging secure data with a wireless router">
      <div className="network-graphic-header">
        <span>Connected workspace</span>
        <strong><i aria-hidden="true" /> Network online</strong>
      </div>
      <svg viewBox="0 0 760 620" aria-hidden="true">
        <defs>
          <pattern id="network-grid" width="32" height="32" patternUnits="userSpaceOnUse">
            <path d="M32 0H0V32" fill="none" stroke="currentColor" strokeOpacity=".08" />
          </pattern>
          <linearGradient id="screen-glow" x1="0" y1="0" x2="1" y2="1">
            <stop stopColor="#243148" />
            <stop offset="1" stopColor="#10151e" />
          </linearGradient>
        </defs>

        <rect width="760" height="620" rx="18" fill="#d5e5ef" />
        <rect width="760" height="620" rx="18" fill="url(#network-grid)" />

        <g className="laptop-lid">
          <rect x="62" y="112" width="430" height="286" rx="20" fill="#181411" />
          <rect x="79" y="129" width="396" height="251" rx="9" fill="url(#screen-glow)" />
          <circle cx="101" cy="151" r="5" fill="#e46842" />
          <circle cx="119" cy="151" r="5" fill="#f0c96a" />
          <circle cx="137" cy="151" r="5" fill="#87b997" />

          <text x="101" y="195" className="screen-kicker">SYSTEMS / DELIVERY</text>
          <rect className="code-line code-line-a" x="101" y="219" width="205" height="13" rx="6" fill="#f3ede4" />
          <rect className="code-line code-line-b" x="101" y="246" width="286" height="10" rx="5" fill="#77a9d0" />
          <rect className="code-line code-line-c" x="101" y="270" width="241" height="10" rx="5" fill="#e46842" />
          <rect className="code-line code-line-d" x="101" y="294" width="160" height="10" rx="5" fill="#d7e5d4" />

          <rect x="101" y="329" width="116" height="31" rx="15" fill="#d7e5d4" />
          <text x="159" y="350" textAnchor="middle" className="screen-chip">API READY</text>
          <rect x="228" y="329" width="116" height="31" rx="15" fill="#f6d8cc" />
          <text x="286" y="350" textAnchor="middle" className="screen-chip">SQL SYNC</text>
          <rect x="355" y="329" width="97" height="31" rx="15" fill="#e1d8ec" />
          <text x="404" y="350" textAnchor="middle" className="screen-chip">VPN ON</text>
        </g>

        <path d="M42 412H513L555 453H12Z" fill="#2a2521" />
        <path d="M173 427H383L407 449H149Z" fill="#655d55" opacity=".42" />
        <path d="M8 453H558" stroke="#181411" strokeWidth="10" strokeLinecap="round" />

        <path className="network-flow" d="M468 278C536 278 524 367 591 367" fill="none" stroke="#e46842" strokeWidth="5" strokeLinecap="round" strokeDasharray="4 16" />

        <g className="router-device">
          <path d="M603 319V239M691 319V239" stroke="#181411" strokeWidth="9" strokeLinecap="round" />
          <circle cx="603" cy="236" r="9" fill="#e46842" />
          <circle cx="691" cy="236" r="9" fill="#e46842" />
          <rect x="556" y="319" width="184" height="92" rx="19" fill="#f3ede4" stroke="#181411" strokeWidth="7" />
          <path d="M582 348H714" stroke="#b8aa9c" strokeWidth="5" strokeLinecap="round" />
          <circle className="router-light router-light-one" cx="590" cy="382" r="7" fill="#87b997" />
          <circle className="router-light router-light-two" cx="616" cy="382" r="7" fill="#87b997" />
          <circle className="router-light router-light-three" cx="642" cy="382" r="7" fill="#e46842" />
          <text x="710" y="387" textAnchor="end" className="router-label">SECURE LINK</text>
        </g>

        <g className="wifi-signal" fill="none" stroke="#181411" strokeWidth="6" strokeLinecap="round">
          <path d="M615 205C634 187 661 187 680 205" />
          <path d="M627 218C638 208 657 208 668 218" />
        </g>

        <g className="network-stat network-stat-left">
          <rect x="37" y="505" width="196" height="72" rx="13" fill="#f3ede4" stroke="#181411" strokeWidth="3" />
          <text x="57" y="533" className="stat-label">TRAFFIC</text>
          <text x="57" y="559" className="stat-value">ENCRYPTED</text>
          <path d="M180 553l12-15 9 9 13-20" fill="none" stroke="#e46842" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
        </g>
        <g className="network-stat network-stat-right">
          <rect x="498" y="489" width="224" height="88" rx="13" fill="#181411" />
          <text x="519" y="520" className="stat-label stat-label-light">FULL-STACK NODE</text>
          <text x="519" y="551" className="stat-value stat-value-light">BUILD · TEST · SHIP</text>
          <circle cx="690" cy="520" r="8" fill="#87b997" />
        </g>
      </svg>
    </div>
  );
}
