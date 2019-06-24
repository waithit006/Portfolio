import React from 'react'

const Home = () => {
  return (
    <section class="hero is-fullheight-with-navbar video">
    <div class="hero-video">
      <video poster="img/bgimg.jpg" id="bgvid" playsInline autoPlay muted loop>
        <source src={'/Love-Coding.mp4'} type="video/mp4" />
      </video>
    </div>
    <div class="hero-body">
      <div class="container ">
        <div class="card">
          <div class="card-content">
            <div class="columns">
              <div class="column is-one-third">
                <figure class="image container is-256x256">
                  <img src="/profile.png" />
                </figure></div>
              <div class="column">
                <h1 class="title is-2">Waithid Puttasomsri</h1>
                <h2 class="subtitle is-4">Full-Stack Web Developer</h2>
                <div class="content" style={{ borderTop: "1px solid #dedede", paddingTop: '20px' }}>

                  <ul style={{ listStyle: 'none', margin: '0' }}>
                    <li style={{ marginBottom: '13px' }}><strong style={{ width: '120px', display: 'block', float: 'left' }}>Date of birth</strong> <span style={{ marginLeft: '120px' }}>4 November 1996</span></li>
                    <li style={{ marginBottom: '13px' }}><strong style={{ width: '120px', display: 'block', float: 'left' }}>Age</strong> <span style={{ marginLeft: '120px' }}>23</span></li>
                    <li style={{ marginBottom: '13px' }}><strong style={{ width: '120px', display: 'block', float: 'left' }}>Nationality</strong> <span style={{ marginLeft: '120px' }}>Thai</span></li>
                    <li style={{ marginBottom: '13px' }}><strong style={{ width: '120px', display: 'block', float: 'left' }}>Language</strong> <span style={{ marginLeft: '120px' }}>Thai ( Native ) , English ( Intermediate )</span></li>
                    <li style={{ marginBottom: '13px' }}><strong style={{ width: '120px', display: 'block', float: 'left' }}>Phone</strong> <span style={{ marginLeft: '120px' }}>093-394-3986</span></li>
                    <li style={{ marginBottom: '13px' }}><strong style={{ width: '120px', display: 'block', float: 'left' }}>Email</strong> <span style={{ marginLeft: '120px' }}>waithid.pu.58@ubu.ac.th</span></li>
                  </ul>
                </div>
              </div>

            </div>
          </div>
          <footer class="card-footer" style={{ backgroundColor: '#e8676b' }}>
            <p class="card-footer-item">
              <ul style={{ listStyle: 'none', margin: '0', textAlign: 'center' }}>
                <li style={{ display: 'inline-block', margin: '5px 15px' }}>
                  <a href="https://github.com/waithit006" target="_blank">
                    <i class="fa fa-github" style={{
                      fontSize: '40px',
                      color: 'white',
                      lineHeight: '45px'
                    }}></i>
                  </a></li>

                <li style={{ display: 'inline-block', margin: '5px 15px' }}>
                  <a href="https://www.facebook.com/waithid" target="_blank">
                    <i class="fa fa-facebook-square" style={{
                      fontSize: '40px',
                      color: 'white',
                      lineHeight: '45px'
                    }}></i>
                  </a></li>

                <li style={{ display: 'inline-block', margin: '5px 15px' }}>
                  <a href="https://www.instagram.com/waithid07/" target="_blank">
                    <i class="fa fa-instagram" style={{
                      fontSize: '40px',
                      color: 'white',
                      lineHeight: '45px'
                    }}></i>
                  </a></li>
              </ul>
            </p>
          </footer>
        </div>
      </div>
    </div>
  </section>
  )
}

export default Home
