import type { Schema, Attribute } from '@strapi/strapi';

export interface ButtonButton extends Schema.Component {
  collectionName: 'components_button_buttons';
  info: {
    displayName: 'Button';
    icon: 'search';
    description: '';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    link: Attribute.String & Attribute.Required;
  };
}

export interface FooterContact extends Schema.Component {
  collectionName: 'components_footer_contacts';
  info: {
    displayName: 'Contact';
    icon: 'user';
    description: '';
  };
  attributes: {
    name: Attribute.String & Attribute.Required;
    position: Attribute.String & Attribute.Required;
    email: Attribute.Email & Attribute.Required;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'button.button': ButtonButton;
      'footer.contact': FooterContact;
    }
  }
}
