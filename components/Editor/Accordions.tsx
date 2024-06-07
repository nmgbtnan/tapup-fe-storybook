
import FontAccordion from '@/components/Editor/FontAccordion';
import TextColorAccordion from './TextColorAccordion';
import BackgroundColorAccordion from './BackgroundColorAccordion';
import NameAccordion from '@/components/Editor/NameAccordion';
import PositionAccordion from '@/components/Editor/PositionAccordion';
import CompanyAccordion from '@/components/Editor/CompanyAccordion';
import CoverAccordion from '@/components/Editor/CoverAccordion';
import ProfileImageAccordion from './ProfileImageAccordion';
import ContactIconsAccordions from './ContactIconsAccordion';
import AddressAccordion from './AdressAccordion';
import IconBackgroundAccordion from './IconBackgroundAccordion';
import IconColorAccordion from './IconColorAccordion';

export default function Accordions() {
  

  return (
    <section
      className="w-[250px] px-4 py-12 flex flex-col gap-1 overflow-y-scroll"
      id="edit-accordion"
    >
      <p className="text-sm" id="font-style">
        Font Styles
      </p>
      <FontAccordion />
      <TextColorAccordion />
      <br />

      <p className="text-sm" id="card-infos">
        Card Infos
      </p>
      <NameAccordion />
      <PositionAccordion />
      <CompanyAccordion />
      <AddressAccordion />
      <br />

      <p className="text-sm" id="images">
        Images
      </p>
      <ProfileImageAccordion />
      <CoverAccordion />
      <br />

      <p className="text-sm" id="background">
        Background
      </p>
      <BackgroundColorAccordion />
      <br />

      <p className="text-sm" id="contacts">
        Contacts
      </p>
      <ContactIconsAccordions />
      <IconColorAccordion />
      <IconBackgroundAccordion />
      <br />
    </section>
  );
}
