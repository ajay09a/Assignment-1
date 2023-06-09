import React from 'react'
import { NavLink } from 'react-router-dom'

const Home = () => {
  return (
    <div id='home'>
      <div className='hero-section'>
        <div className='home-main-container'>
          <div className='container'>
            <div className='heading'>
              <h1>
                <span className='sideLeft'>Discover</span><br />
                <span className='sideRight'>amazing startups</span>
              </h1>
              <p className='animate-fadeInDown'>Find great startups curated by our experts for investing.</p>
            </div>
            <div className='form-search'>
              <div className='align-item'>
                <div className='form-search-item'>
                  <div className='input-group'>
                    <input type="text" autoComplete="off" placeholder="Startup Name" />
                  </div>
                </div>
                <div>
                  <button>Search</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='explore-section'>
        <h1 className='heading'>
          <span className='non-bold'>Explore By &nbsp;</span>
          <span className='bold'>Business Model</span>
        </h1>
        <div className='explore-grid-section'>
        <div className='unique'>
            <NavLink>B2B - Business To Business</NavLink>
          </div>
          <div className='unique'>
            <NavLink>B2C - Business To Consumer</NavLink>
          </div>
          <div className='unique'>
            <NavLink>B2B2C - Business To Business To Consumer</NavLink>
          </div>
          <div className='unique'>
            <NavLink>C2C - Consumer To Consumer</NavLink>
          </div>
          <div className='unique'>
            <NavLink>C2B - Consumer To Business</NavLink>
          </div>
          <div className='unique'>
            <NavLink>B2A - Business To Administration</NavLink>
          </div>
          <div className='unique'>
            <NavLink>Other</NavLink>
          </div>
        </div>
      </div>

      <div className='explore-section'>
        <h1 className='heading'>
          <span className='non-bold'>Explore By &nbsp;</span>
          <span className='bold'>Intrested In</span>
        </h1>
        <div className='explore-grid-section'>
        <div className='unique'>
            <NavLink>Incubation</NavLink>
          </div>
          <div className='unique'>
            <NavLink>Acceleration</NavLink>
          </div>
          <div className='unique'>
            <NavLink>Investment</NavLink>
          </div>
          <div className='unique'>
            <NavLink>Tech Mentorship</NavLink>
          </div>
          <div className='unique'>
            <NavLink>Marketing Mentorship</NavLink>
          </div>
          <div className='unique'>
            <NavLink>Legal Mentorship</NavLink>
          </div>
          <div className='unique'>
            <NavLink>Operations Mentorship</NavLink>
          </div>
          <div className='unique'>
            <NavLink>Financials Mentorship</NavLink>
          </div>
          <div className='unique'>
            <NavLink>Business Collabs: Co-Founder</NavLink>
          </div>
        </div>
      </div>

      <div className='explore-section'>
        <h1 className='heading'>
          <span className='non-bold'>Explore By &nbsp;</span>
          <span className='bold'>Stage</span>
        </h1>
        <div className='explore-grid-section'>
        <div className='unique'>
            <NavLink>Ideation</NavLink>
          </div>
          <div className='unique'>
            <NavLink>Validation</NavLink>
          </div>
          <div className='unique'>
            <NavLink>Early Traction</NavLink>
          </div>
          <div className='unique'>
            <NavLink>Scaling</NavLink>
          </div>
        </div>
      </div>

      <div className='explore-section'>
        <h1 className='heading'>
          <span className='non-bold'>Explore By &nbsp;</span>
          <span className='bold'>Finding Type</span>
        </h1>
        <div className='explore-grid-section'>
        <div className='unique'>
            <NavLink>Crowd Funded</NavLink>
          </div>
          <div className='unique'>
            <NavLink>Pre-Seed Funded</NavLink>
          </div>
          <div className='unique'>
            <NavLink>Seed Funded</NavLink>
          </div>
          <div className='unique'>
            <NavLink>Series A</NavLink>
          </div>
          <div className='unique'>
            <NavLink>Series B</NavLink>
          </div>
          <div className='unique'>
            <NavLink>Series C</NavLink>
          </div>
          <div className='unique'>
            <NavLink>Series D</NavLink>
          </div>
          <div className='unique'>
            <NavLink>Series E</NavLink>
          </div>
          <div className='unique'>
            <NavLink>Series F</NavLink>
          </div>
          <div className='unique'>
            <NavLink>Series G</NavLink>
          </div>
          <div className='unique'>
            <NavLink>Series H</NavLink>
          </div>
        </div>
      </div>
      <div className='explore-section'>
        <h1 className='heading'>
          <span className='non-bold'>Explore By &nbsp;</span>
          <span className='bold'>Business Nature</span>
        </h1>
        <div className='explore-grid-section'>
        <div className='unique'>
            <NavLink>Service</NavLink>
          </div>
          <div className='unique'>
            <NavLink>Product</NavLink>
          </div>
          <div className='unique'>
            <NavLink>Both</NavLink>
          </div>
        </div>
      </div>

      <div className='explore-section'>
        <h1 className='heading'>
          <span className='non-bold'>Explore By &nbsp;</span>
          <span className='bold'>Investment Nature</span>
        </h1>
        <div className='explore-grid-section'>
          <div className='unique'>
            <NavLink>Equity Dilution</NavLink>
          </div>
          <div className='unique'>
            <NavLink>Dept Funding</NavLink>
          </div>
          <div className='unique'>
            <NavLink>Convertible Dept</NavLink>
          </div>
          <div className='unique'>
            <NavLink>Crowd-Funding</NavLink>
          </div>
          <div className='unique'>
            <NavLink>CSR</NavLink>
          </div>
          <div className='unique'>
            <NavLink>All</NavLink>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home