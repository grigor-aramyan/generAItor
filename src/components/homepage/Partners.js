import React from "react";
export default class Partners extends React.Component {
  render() {
    return (
      <section className='container new-partners'>
          <h1 className='text-center'>NEW PARTNERS</h1>
          <div className='row mt-5 mb-5'>
            <div className='col-4 partner-wrapper'>
              <img
                src='images/partner.png'
                alt='Partner 1'
                title='Partner 1'
                className='partner'
              />
            </div>
            <div className='col-4 partner-wrapper'>
              <img
                src='images/partner.png'
                alt='Partner 2'
                title='Partner 2'
                className='partner'
              />
            </div>
            <div className='col-4 partner-wrapper'>
              <img
                src='images/partner.png'
                alt='Partner 3'
                title='Partner 3'
                className='partner'
              />
            </div>
          </div>
          
        
        
      </section>
    );
  }
}
