import type { Schema, Attribute } from '@strapi/strapi';

export interface GlobalContacts extends Schema.Component {
  collectionName: 'components_global_contacts';
  info: {
    displayName: 'contacts';
    description: '';
  };
  attributes: {
    link: Attribute.Component<'shared.label-link', true>;
  };
}

export interface GlobalNavigationPanel extends Schema.Component {
  collectionName: 'components_global_navigation_panels';
  info: {
    displayName: 'Navigation Panel';
  };
  attributes: {
    link: Attribute.Component<'shared.link'>;
    sections: Attribute.Component<'global.navigation-section', true>;
    links: Attribute.Component<'shared.link', true>;
  };
}

export interface GlobalNavigationSection extends Schema.Component {
  collectionName: 'components_global_navigation_sections';
  info: {
    displayName: 'Navigation Section';
  };
  attributes: {
    titel: Attribute.String;
    links: Attribute.Component<'shared.link', true>;
  };
}

export interface GlobalNavigation extends Schema.Component {
  collectionName: 'components_global_navigations';
  info: {
    displayName: 'Navigation';
  };
  attributes: {
    theme: Attribute.Enumeration<['dark', 'light']> &
      Attribute.DefaultTo<'dark'>;
    panels: Attribute.Component<'global.navigation-panel', true>;
  };
}

export interface GlobalSettings extends Schema.Component {
  collectionName: 'components_global_settings';
  info: {
    displayName: 'Settings';
    description: '';
  };
  attributes: {
    items: Attribute.Component<'shared.toggle', true>;
    title: Attribute.String & Attribute.Required;
  };
}

export interface SharedFeature1 extends Schema.Component {
  collectionName: 'components_feature_feature1s';
  info: {
    displayName: 'Feature';
    icon: 'alien';
    description: '';
  };
  attributes: {
    name: Attribute.String;
  };
}

export interface SharedLabelLink extends Schema.Component {
  collectionName: 'components_shared_label_links';
  info: {
    displayName: 'LabelLink';
    description: '';
  };
  attributes: {
    text: Attribute.String;
    href: Attribute.String;
    target: Attribute.Enumeration<['_blank', '_self', '_parent', '_top']>;
    icon: Attribute.Enumeration<
      ['none', 'apple', 'xing', 'github', 'phone', 'mail']
    > &
      Attribute.Required &
      Attribute.DefaultTo<'none'>;
  };
}

export interface SharedLink extends Schema.Component {
  collectionName: 'components_shared_links';
  info: {
    displayName: 'link';
    icon: 'cursor';
    description: '';
  };
  attributes: {};
}

export interface SharedToggle extends Schema.Component {
  collectionName: 'components_shared_toggles';
  info: {
    displayName: 'toggle';
    description: '';
  };
  attributes: {
    state: Attribute.Enumeration<['off', 'on']> &
      Attribute.Required &
      Attribute.DefaultTo<'off'>;
    desc: Attribute.String & Attribute.Required;
    title: Attribute.String & Attribute.Required;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'global.contacts': GlobalContacts;
      'global.navigation-panel': GlobalNavigationPanel;
      'global.navigation-section': GlobalNavigationSection;
      'global.navigation': GlobalNavigation;
      'global.settings': GlobalSettings;
      'shared.feature1': SharedFeature1;
      'shared.label-link': SharedLabelLink;
      'shared.link': SharedLink;
      'shared.toggle': SharedToggle;
    }
  }
}
