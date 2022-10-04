import React from 'react';

import Form from '../../Form/Form';

import '../../../assets/styles/style.scss';

// /. imports

const MainPage: React.FC = () => {
  return (
    <section className="section">
      <div className="section__wrapper">
        {/* section row 1 */}
        <div className="section__column section__column--1 border indent">
          <p className="section__text">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi
            corrupti tempora labore, inventore debitis beatae amet modi neque
            consequatur sint, veniam quibusdam, asperiores quae molestias
            recusandae consequuntur ipsam delectus minus.
          </p>
        </div>
        <div className="section__column section__column--2 border indent">
          <p className="section__text">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi
            corrupti tempora labore, inventore debitis beatae amet modi neque
            consequatur sint, veniam quibusdam, asperiores quae molestias
            recusandae consequuntur ipsam delectus minus.
          </p>
        </div>
        <div className="section__column section__column--3 border indent">
          <p className="section__text">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi
            corrupti tempora labore, inventore debitis beatae amet modi neque
            consequatur sint, veniam quibusdam, asperiores quae molestias
            recusandae consequuntur ipsam delectus minus.
          </p>
        </div>
        {/* section row 2 */}
        <div className="section__column section__column--4">
          <div className="group group--empty">
            {/* group row 1 */}
            <div className="group__column group__column--1 border indent">
              <p className="section__text">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi
                corrupti tempora labore, inventore debitis beatae amet modi
                neque consequatur sint, veniam quibusdam, asperiores quae
                molestias recusandae consequuntur ipsam delectus minus.
              </p>
            </div>
            <div className="group__column group__column--2 border indent">
              <p className="section__text">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi
                corrupti tempora labore, inventore debitis beatae amet modi
                neque consequatur sint, veniam quibusdam, asperiores quae
                molestias recusandae consequuntur ipsam delectus minus.
              </p>
            </div>
            <div className="group__column group__column--3 border indent"></div>
            <div className="group__column group__column--4 border indent"></div>
          </div>
        </div>
        <div className="section__column section__column--5">
          <div className="group group--file">
            {/* group row 2 */}
            <div className="group__column group__column--5 border indent">
              <div className="file-manager">
                <div className="file-manager__wrapper">
                  <div className="file-manager__preview">
                    <span className="file-manager__path">
                      //MEM/USER/PATH1/
                    </span>
                    <h3 className="file-manager__file-name">file 2022</h3>
                  </div>
                  <div className="file-manager__information">
                    <span className="file-manager__file-name">file 2022;</span>
                    <h3 className="file-manager__caption">
                      data from this file:
                    </h3>
                    <p className="file-manager__data"></p>
                  </div>
                </div>
              </div>
            </div>
            <div className="group__column group__column--6 border indent">
              <Form />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MainPage;
