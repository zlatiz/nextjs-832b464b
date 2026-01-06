import Image from 'next/image';

export default function Header(): JSX.Element {
  const logo = 'https://garberbrosinc.com/websites/garberbrosinc/templates/GarberBrosInc/images/logo.png';
  const safeLogo = encodeURI(logo);
  return (
    <header style={{borderBottom:'1px solid var(--border)',background:'var(--bg)'}}>
      <div className="container" style={{display:'flex',alignItems:'center',justifyContent:'space-between',padding:'1rem 0'}}>
        <div style={{width:160}}>
          <a href="/">
            <Image src={safeLogo} alt="Garber logo" unoptimized width={160} height={56} style={{objectFit:'contain'}} />
          </a>
        </div>
        <nav>
          <ul className="nav-list header-nav">
            <li><a href="/">Home</a></li>
            <li><a href="/about">About Us</a></li>
            <li><a href="/lock-status">Lock Status</a></li>
            <li><a href="/vessels">Vessels</a></li>
            <li><a href="/barges">Barges</a></li>
            <li><a href="/websites/garberbrosinc/images/application.pdf" target="_blank">Employment</a></li>
            <li><a href="/contact">Contact Us</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
