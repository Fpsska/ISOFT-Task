import React from 'react';

import { Ifile } from '../../../types/fileDataTypes';

import { useFileValidation } from '../../../hooks/useFileValidation';

import { useAppSelector, useAppDispatch } from '../../../app/hooks';

import {
  resetFileContent,
  switchFileSelectedStatus
} from '../../../app/slices/formSlice';

import Form from '../../Form/Form';
import FileInput from '../../FileInput/FileInput';

import '../../../assets/styles/style.scss';

// /. imports

const MainPage: React.FC = () => {
  const { directoryPath, fileName, fileContent, isFileSelected } =
    useAppSelector(state => state.formSlice);

  const dispatch = useAppDispatch();

  const { fileValidation, validationError } = useFileValidation();

  const closeSelectedFile = (): void => {
    dispatch(switchFileSelectedStatus(false));
    dispatch(resetFileContent());
  };

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
            <div className="group__column group__column--1 border indent">
              <p className="section__text">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Necessitatibus blanditiis consequatur maiores quae, praesentium
                tempore? Iusto sed omnis culpa, aliquam similique cupiditate,
                ullam accusantium veritatis exercitationem aspernatur
                perspiciatis rerum illo.
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
          </div>
        </div>
        <div className="section__column section__column--5 border indent">
          <div className="file-manager">
            <div className="file-manager__wrapper">
              <>
                {isFileSelected ? (
                  <div className="file-manager__preview">
                    <span className="file-manager__path" title={directoryPath}>
                      {directoryPath}
                    </span>
                    <span className="file-manager__file-name" title={fileName}>
                      {fileName}
                    </span>
                  </div>
                ) : (
                  <FileInput fileValidation={fileValidation} />
                )}
              </>
              <>
                {isFileSelected && (
                  <div className="file-manager__information">
                    {validationError ? (
                      <h2
                        className="file-manager__message"
                        title={validationError}
                      >
                        {validationError}
                      </h2>
                    ) : (
                      <>
                        <h2 className="file-manager__caption">
                          data from this file:
                        </h2>
                        <p className="file-manager__file-data">
                          {fileContent.map((template: Ifile) => {
                            return (
                              <span key={template.id}>{template.value}</span>
                            );
                          })}
                        </p>
                      </>
                    )}
                    <button
                      className="file-manager__button"
                      aria-label="remove selected file"
                      onClick={() => closeSelectedFile()}
                    >
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <circle cx="12" cy="12" r="9" strokeWidth="2" />
                        <path
                          d="M9.0001 14.9997L15.0001 8.99966"
                          strokeWidth="2"
                        />
                        <path d="M15 15L9 9" strokeWidth="2" />
                      </svg>
                    </button>
                  </div>
                )}
              </>
            </div>
          </div>
        </div>
        {/* section row 3 */}
        <div className="section__column section__column--6 border indent"></div>
        <div className="section__column section__column--7 border indent">
          <Form validationError={validationError} />
        </div>
      </div>
    </section>
  );
};

export default MainPage;
