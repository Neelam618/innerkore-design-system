import React, { FC } from 'react';

export type FooterBig1Types = {
  /** Add icon path for social icons */
  icon1: string;
  icon2: string;
  icon3: string;
  icon4: string;

  /** Add social icon links */
  link1: string;
  link2: string;
  link3: string;
  link4: string;

  /** Enter copyright text */
  copyRightTxt: string;

  logo: string;

  logoAlt: string;

  company: string;
  companyLink1: string;
  companyLink2: string;
  companyLink3: string;
  companyLink4: string;
  companyTxt1: string;
  companyTxt2: string;
  companyTxt3: string;
  companyTxt4: string;

  support: string;
  supportLink1: string;
  supportLink2: string;
  supportLink3: string;
  supportTxt1: string;
  supportTxt2: string;
  supportTxt3: string;

  legal: string;
  legalLink1: string;
  legalLink2: string;
  legalLink3: string;
  legalLink4: string;
  legalTxt1: string;
  legalTxt2: string;
  legalTxt3: string;
  legalTxt4: string;

  badgeTitle: string;
  badge1: string;
  badge2: string;
  badgeAlt1: string;
  badgeAlt2: string;
};

export const FooterBig1: FC<FooterBig1Types> = ({
  copyRightTxt,
  icon1,
  icon2,
  icon3,
  icon4,
  link1,
  link2,
  link3,
  link4,
  logo,
  logoAlt,

  company,
  companyLink1,
  companyLink2,
  companyLink3,
  companyLink4,
  companyTxt1,
  companyTxt2,
  companyTxt3,
  companyTxt4,
  support,
  supportLink1,
  supportLink2,
  supportLink3,
  supportTxt1,
  supportTxt2,
  supportTxt3,
  legal,
  legalLink1,
  legalLink2,
  legalLink3,
  legalLink4,
  legalTxt1,
  legalTxt2,
  legalTxt3,
  legalTxt4,
  badgeTitle,
  badge1,
  badge2,
  badgeAlt1,
  badgeAlt2,
}) => {
  return (
    <div className="bg-black">
      <div>
        <div>
          <h3 className="text-gray-400">{company}</h3>
          <ul>
            <li>
              <a href={companyLink1} className="text-gray-400 block">
                {companyTxt1}
              </a>
              <a href={companyLink2} className="text-gray-400 block">
                {companyTxt2}
              </a>
              <a href={companyLink3} className="text-gray-400 block">
                {companyTxt3}
              </a>
              <a href={companyLink4} className="text-gray-400 block">
                {companyTxt4}
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-gray-400">{support}</h3>
          <ul>
            <li>
              <a href={supportLink1} className="text-gray-400">
                {supportTxt1}
              </a>
              <a href={supportLink2} className="text-gray-400">
                {supportTxt2}
              </a>
              <a href={supportLink3} className="text-gray-400">
                {supportTxt3}
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-gray-400">{legal}</h3>
          <ul>
            <li>
              <a href={legalLink1} className="text-gray-400">
                {legalTxt1}
              </a>
              <a href={legalLink2} className="text-gray-400">
                {legalTxt2}
              </a>
              <a href={legalLink3} className="text-gray-400">
                {legalTxt3}
              </a>
              <a href={legalLink4} className="text-gray-400">
                {legalTxt4}
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-gray-400">{badgeTitle}</h3>
          <img src={badge1} alt={badgeAlt1} className="mt-4" />
          <img src={badge2} alt={badgeAlt2} className="mt-4" />
        </div>
      </div>
    </div>
  );
};

export default FooterBig1;
