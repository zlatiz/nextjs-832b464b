import Image from 'next/image';
import Card from '../components/ui/card';
import Button from '../components/ui/button';

const IMAGES: string[] = [
  'https://garberbrosinc.com/websites/garberbrosinc/templates/GarberBrosInc/images/logo.png',
  'https://garberbrosinc.com/websites/garberbrosinc/images/home-vessels.jpg',
  'https://garberbrosinc.com/websites/garberbrosinc/images/home-employment.jpg',
  'https://garberbrosinc.com/websites/garberbrosinc/images/home-contact.jpg'
];

export default function Page(): JSX.Element {
  const images = Array.isArray(IMAGES) ? IMAGES : [];
  const heroSrc = images[1] ?? images[0];
  const gallery = images.slice(1);

  return (
    <>
      <section className="container py-8">
        <div className="grid" style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:'1rem',alignItems:'center'}}>
          <div>
            <h1 className="text-3xl font-semibold">Garber Bros, Inc.</h1>
            <p className="mt-4">For over 55 years, Garber Bros Inc., based in Morgan City, LA, has been a leading provider of marine transportation services for the offshore oil and gas industry. We pride ourselves on supplying the absolute best marine services to all types of industries. Contact Garber Bros Inc. for all your marine transportation and service needs.</p>
            <div className="mt-6">
              <a href="/vessels" className="button-primary" role="link">View Our Fleet of Vessels</a>
            </div>
            <div className="mt-4 text-sm footer-muted">Morgan City, LA</div>
          </div>
          <div>
            <div className="aspect-hero">
              {heroSrc && (
                (() => {
                  const safeSrc = encodeURI(heroSrc);
                  return <Image src={safeSrc} alt="Our vessels" unoptimized width={900} height={420} style={{objectFit:'cover',width:'100%',height:'100%'}} />;
                })()
              )}
            </div>
          </div>
        </div>
      </section>

      <section className="container py-10">
        <h2 className="text-2xl font-semibold">Featured</h2>
        <div className="mt-6 grid-3">
          <Card>
            <h3 className="text-lg font-medium">Our Vessels</h3>
            <div className="mt-3" style={{height:150}}>
              {gallery[0] && (() => { const safeSrc = encodeURI(gallery[0]); return (<Image src={safeSrc} alt="Our Vessels" unoptimized width={400} height={150} style={{objectFit:'cover',width:'100%',height:'100%'}}/>); })()}
            </div>
            <p className="mt-3">Garber Bros Inc has an elite fleet of vessels of use in all types of projects.</p>
            <div className="mt-4">
              <a href="/vessels" className="button-primary">View Our Vessels »</a>
            </div>
          </Card>

          <Card>
            <h3 className="text-lg font-medium">Employment</h3>
            <div className="mt-3" style={{height:150}}>
              {gallery[1] && (() => { const safeSrc = encodeURI(gallery[1]); return (<Image src={safeSrc} alt="Employment application" unoptimized width={400} height={150} style={{objectFit:'cover',width:'100%',height:'100%'}}/>); })()}
            </div>
            <p className="mt-3">Interested in working at Garber Bros? Download our employment application.</p>
            <div className="mt-4" style={{display:'flex',gap:'0.5rem'}}>
              <a href="/websites/garberbrosinc/images/application.pdf" className="button-primary">View Our Employment Application »</a>
              <a href="http://www.goodhiring.com/garberbrosinc/apply/open" className="button-primary" style={{background:'#f0c84a'}}>Apply Online</a>
            </div>
          </Card>

          <Card>
            <h3 className="text-lg font-medium">Contact Us</h3>
            <div className="mt-3" style={{height:150}}>
              {gallery[2] && (() => { const safeSrc = encodeURI(gallery[2]); return (<Image src={safeSrc} alt="Contact Garber Bros" unoptimized width={400} height={150} style={{objectFit:'cover',width:'100%',height:'100%'}}/>); })()}
            </div>
            <p className="mt-3">To contact Garber Bros Inc regarding vessel availability, click here.</p>
            <div className="mt-4">
              <a href="/contact" className="button-primary">Contact Garber Bros Inc »</a>
            </div>
          </Card>
        </div>
      </section>

      <section className="container py-10">
        <h2 className="text-2xl font-semibold">Image Gallery</h2>
        <p className="mt-2">Gallery of images used across the site.</p>
        <div className="mt-4 gallery-grid">
          {Array.isArray(IMAGES) ? (Array.isArray(IMAGES) ? IMAGES : []).map((src: string, idx: number) => {
            const safeSrc = encodeURI(src);
            const alt = idx === 0 ? 'Logo' : idx === 1 ? 'Vessels' : idx === 2 ? 'Employment' : 'Contact image';
            return (
              <div key={idx} className="card" style={{padding:0,minHeight:80}}>
                <div style={{width:'100%',height:120,position:'relative'}}>
                  <Image src={safeSrc} alt={alt} unoptimized width={400} height={120} style={{objectFit:'cover',width:'100%',height:'100%'}} />
                </div>
                <div style={{padding:'0.5rem'}}>
                  <div style={{fontSize:12,color:'#555'}}>{alt}</div>
                </div>
              </div>
            );
          }) : null}
        </div>
      </section>

      <section className="container py-10">
        <h2 className="text-2xl font-semibold">Navigation and Utilities</h2>
        <div className="mt-4 grid" style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:'1rem'}}>
          <Card>
            <h3 className="text-lg font-medium">Site Links</h3>
            <ul style={{marginTop:8,display:'flex',flexDirection:'column',gap:6}}>
              <li><a href="/">Home</a></li>
              <li><a href="/about">About Us</a></li>
              <li><a href="/lock-status">Lock Status</a></li>
              <li><a href="/vessels">Vessels</a></li>
              <li><a href="/barges">Barges</a></li>
              <li><a href="/websites/garberbrosinc/images/application.pdf" target="_blank">Employment</a></li>
              <li><a href="/contact">Contact Us</a></li>
              <li><a href="javascript:previousSlide6347994()">Prev</a></li>
              <li><a href="javascript:nextSlide6347994()">Next</a></li>
              <li><a href="contact.aspx">Contact</a></li>
              <li><a href="/transparency-in-coverage">Transparency in Coverage</a></li>
              <li><a href="#">Back to top</a></li>
            </ul>
          </Card>

          <Card>
            <h3 className="text-lg font-medium">Employment Links</h3>
            <p className="mt-2">Download and apply:</p>
            <div style={{display:'flex',flexDirection:'column',gap:8,marginTop:8}}>
              <a href="/websites/garberbrosinc/images/application.pdf">Download Application (PDF)</a>
              <a href="http://www.goodhiring.com/garberbrosinc/apply/open">Apply via GoodHiring</a>
            </div>
          </Card>
        </div>
      </section>
    </>
  );
}
