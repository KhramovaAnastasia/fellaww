// Top-level app + tweaks panel + cursor follower

const TWEAK_DEFAULTS = {
  radius: 16,
  density: 'balanced',
};

function App() {
  const [scrolled, setScrolled] = React.useState(false);
  const [openIdx, setOpenIdx] = React.useState(-1);
  const [tweaks, setTweak] = window.useTweaks(TWEAK_DEFAULTS);

  const openPractice = (idx) => {
    setOpenIdx(idx);
    // smooth scroll happens via the <a href="#services"> default behaviour
  };

  // sticky nav background
  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener('scroll', onScroll, {passive:true});
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // apply tweaks via CSS variables
  React.useEffect(() => {
    document.documentElement.style.setProperty('--radius', `${tweaks.radius}px`);
    const padMap = { compact: '72px', balanced: '100px', airy: '140px' };
    document.documentElement.style.setProperty('--pad-y', padMap[tweaks.density] || '100px');
  }, [tweaks]);

  // cursor dot
  React.useEffect(() => {
    const dot = document.getElementById('cursor');
    if (!dot) return;
    const move = (e) => {
      dot.style.left = e.clientX + 'px';
      dot.style.top = e.clientY + 'px';
    };
    const enter = (e) => {
      if (e.target.closest('a, button, .tag, .practice, .case, .person')) {
        dot.classList.add('active');
      } else {
        dot.classList.remove('active');
      }
    };
    window.addEventListener('mousemove', move);
    window.addEventListener('mouseover', enter);
    return () => {
      window.removeEventListener('mousemove', move);
      window.removeEventListener('mouseover', enter);
    };
  }, []);

  const { TweaksPanel, TweakSection, TweakSlider, TweakRadio } = window;

  return (
    <>
      <Nav scrolled={scrolled} />
      <Hero openPractice={openPractice} />
      <Manifesto />
      <Services openIdx={openIdx} setOpenIdx={setOpenIdx} />
      <Cases />
      <Team />
      <Contact />
      <Footer />
      <CookieConsent />

      <TweaksPanel title="Tweaks">
        <TweakSection title="Скругления">
          <TweakSlider
            label="Радиус"
            value={tweaks.radius}
            min={0} max={24} step={1}
            onChange={(v) => setTweak('radius', v)}
            suffix="px"
          />
        </TweakSection>
        <TweakSection title="Плотность">
          <TweakRadio
            value={tweaks.density}
            options={[
              { value: 'compact', label: 'Плотная' },
              { value: 'balanced', label: 'Средняя' },
              { value: 'airy', label: 'Воздушная' },
            ]}
            onChange={(v) => setTweak('density', v)}
          />
        </TweakSection>
      </TweaksPanel>
    </>
  );
}

ReactDOM.createRoot(document.getElementById('app')).render(<App />);
