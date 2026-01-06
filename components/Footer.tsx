export default function Footer(): JSX.Element {
  return (
    <footer style={{borderTop:'1px solid var(--border)',marginTop:24}}>
      <div className="container" style={{display:'flex',justifyContent:'space-between',alignItems:'center',padding:'1rem 0'}}>
        <div>
          <div id="copyright">© Copyright 2015 by <span>Garber Bros, Inc.</span>. All Rights Reserved.</div>
        </div>
        <div style={{textAlign:'right'}}>
          <div className="footer-muted" style={{marginBottom:6}}><a href="/transparency-in-coverage">Transparency in Coverage</a></div>
          <div><a href="http://www.goodhiring.com/garberbrosinc/apply/open">Apply via GoodHiring</a></div>
        </div>
      </div>
    </footer>
  );
}
